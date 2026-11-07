// Aanwezigheid per les (docenten van de groep en beheerders).
// GET ?group=&block=&date=: de presentielijst van één les.
// GET ?group=: overzicht per student over het schooljaar tot vandaag.
// POST {group, block, date, entries: [{user_id, status, note}]}: opslaan.
import { json, body, fail, id, str } from '../../../lib/http.js'
import { audit } from '../../../lib/audit.js'
import { allGroups, allBlocks, allDays, myGroups, canTeach, checkLesson, schoolYear, calendar, today, isoDate, STATUSES } from '../../../lib/agenda.js'

async function context (conn, user, groupId) {
  const groups = await allGroups(conn)
  const group = groups.find((g) => g.id === groupId)
  if (!group) fail(404, 'Groep niet gevonden')
  const mine = await myGroups(conn, user)
  if (!canTeach(user, mine, groupId)) fail(403, 'Je geeft geen les aan deze groep')
  return group
}

const students = (conn, groupId) => conn.execute(`SELECT u.id, u.name, u.email FROM class_group_members m JOIN users u ON u.id = m.user_id
  WHERE m.group_id = ? AND m.role = 'student' AND u.status = 'active' ORDER BY u.name, u.email`, [groupId])

export async function onRequestGet ({ request, data: { conn, user } }) {
  const q = new URL(request.url).searchParams
  const group = await context(conn, user, id(q.get('group')))
  const blocks = await allBlocks(conn)
  const days = await allDays(conn)
  const list = (await students(conn, group.id)).map((s) => ({ ...s, id: Number(s.id) }))
  if (!q.get('block')) {
    // Overzicht over het schooljaar: hoeveel lessen er waren en wat per student is ingevuld.
    const now = today()
    const year = schoolYear(days, now)
    const end = now < year.to ? now : year.to
    const cohortBlocks = blocks.filter((b) => b.cohort === group.cohort)
    const held = end < year.from ? [] : calendar({ blocks: cohortBlocks, days, from: year.from, to: end, cohorts: [group.cohort], year })
    const lessons = held.reduce((n, d) => n + d.lessons.length, 0)
    const rows = await conn.execute(`SELECT user_id, status, COUNT(*) AS n FROM attendance WHERE group_id = ? AND lesson_date BETWEEN ? AND ? GROUP BY user_id, status`, [group.id, year.from, end])
    const [{ n: done }] = await conn.execute('SELECT COUNT(*) AS n FROM (SELECT DISTINCT block_id, lesson_date FROM attendance WHERE group_id = ? AND lesson_date BETWEEN ? AND ?) x', [group.id, year.from, end])
    return json({
      group, year, lessons, recordedLessons: Number(done),
      students: list.map((s) => ({ ...s, counts: Object.fromEntries(STATUSES.map((st) => [st, Number(rows.find((r) => Number(r.user_id) === s.id && r.status === st)?.n || 0)])) }))
    })
  }
  const block = blocks.find((b) => b.id === id(q.get('block')))
  const date = isoDate(q.get('date'))
  checkLesson({ group, block, days, date })
  const rec = await conn.execute('SELECT user_id, status, note, recorded_at FROM attendance WHERE block_id = ? AND lesson_date = ? AND group_id = ?', [block.id, date, group.id])
  const items = await conn.execute(`SELECT id, kind, title_nl, title_ar FROM agenda_items WHERE item_date = ? AND cohort = ? AND (group_id IS NULL OR group_id = ?) AND (block_id IS NULL OR block_id = ?)`, [date, group.cohort, group.id, block.id])
  return json({
    group, block, date, recorded: rec.length > 0, items,
    students: list.map((s) => { const r = rec.find((x) => Number(x.user_id) === s.id); return { ...s, status: r?.status || null, note: r?.note || '' } })
  })
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  const input = await body(request)
  const group = await context(conn, user, id(input.group))
  const block = (await allBlocks(conn)).find((b) => b.id === id(input.block))
  const date = isoDate(input.date)
  checkLesson({ group, block, days: await allDays(conn), date })
  const allowed = new Set((await students(conn, group.id)).map((s) => Number(s.id)))
  const entries = (Array.isArray(input.entries) ? input.entries : []).slice(0, 500)
  const rows = []
  for (const e of entries) {
    const uid = Number(e.user_id)
    if (!allowed.has(uid)) fail(400, 'Deze student zit niet in deze groep')
    if (!STATUSES.includes(e.status)) fail(400, 'Onbekende aanwezigheidsstatus')
    rows.push([block.id, date, uid, group.id, e.status, str(e.note, 255), user.id])
  }
  if (!rows.length) fail(400, 'Geen studenten om op te slaan')
  await conn.execute(`INSERT INTO attendance (block_id, lesson_date, user_id, group_id, status, note, recorded_by) VALUES ${rows.map(() => '(?, ?, ?, ?, ?, ?, ?)').join(', ')}
    ON DUPLICATE KEY UPDATE status = VALUES(status), note = VALUES(note), group_id = VALUES(group_id), recorded_by = VALUES(recorded_by), recorded_at = NOW()`, rows.flat())
  await audit(conn, user, 'attendance.save', 'class_group', group.id, { block: block.id, date, n: rows.length, absent: rows.filter((r) => r[4] === 'absent').length })
  return json({ ok: true, saved: rows.length })
}
