// GET /api/student/agenda?from=YYYY-MM-DD&weeks=4&institute=: de lesagenda van de ingelogde
// gebruiker, per instituut. Studenten zien hun eigen groep, docenten de groepen waaraan ze
// lesgeven, beheerders alle groepen van hun instituten. Zonder institute: het eerste instituut
// waar de gebruiker in een groep zit, anders het eerste dat hij beheert.
// Met lessen per dag, vakanties, examens, bijzondere dagen, toetsen en huiswerk, en de
// aanwezigheid (eigen status voor studenten; ingevuld of niet voor docenten).
import { json } from '../../../lib/http.js'
import { allInstitutes, myInstituteIds } from '../../../lib/institutes.js'
import { allGroups, allBlocks, allDays, myGroups, managedInstitutes, canRecord, canTeach, schoolYear, calendar, today, monday, addDays, isoDate, marks } from '../../../lib/agenda.js'

export async function onRequestGet ({ request, data: { conn, user } }) {
  const url = new URL(request.url)
  const now = today()
  const from = monday(url.searchParams.get('from') ? isoDate(url.searchParams.get('from')) : now)
  const weeks = Math.min(Math.max(parseInt(url.searchParams.get('weeks') || '4', 10) || 4, 1), 12)
  const to = addDays(from, weeks * 7 - 1)
  const managed = await managedInstitutes(conn, user)
  // Docenten van een instituut zien alle lessen van dat instituut; aanwezigheid invullen
  // blijft voor hun eigen groepen. Studenten zien alleen hun eigen groep.
  const teaching = canRecord(user) ? await myInstituteIds(conn, user) : []
  const mine = await myGroups(conn, user)
  const groups = await allGroups(conn)
  const ownGroups = groups.filter((g) => mine.student.includes(g.id) || mine.teacher.includes(g.id))
  const instIds = new Set([...ownGroups.map((g) => g.institute_id), ...managed, ...teaching])
  const institutes = instIds.size ? (await allInstitutes(conn)).filter((i) => instIds.has(i.id)) : []
  const want = Number(url.searchParams.get('institute'))
  const inst = institutes.find((i) => i.id === want) || institutes.find((i) => ownGroups.some((g) => g.institute_id === i.id)) || institutes[0] || null
  const manager = !!inst && managed.includes(inst.id)
  const visible = inst ? groups.filter((g) => g.institute_id === inst.id && (manager || teaching.includes(inst.id) || ownGroups.includes(g))) : []
  const cohorts = [...new Set(visible.map((g) => g.cohort))]
  const blocks = inst ? (await allBlocks(conn, inst.id)).filter((b) => cohorts.includes(b.cohort)) : []
  const days = inst ? await allDays(conn, inst.id) : []
  const year = schoolYear(days, from > now ? from : now)
  const cal = cohorts.length ? calendar({ blocks, days, from, to, cohorts, year }) : []
  const usedDays = new Set(cal.flatMap((d) => d.events))
  const ids = visible.map((g) => g.id)
  let items = []
  if (ids.length) {
    items = await conn.execute(`SELECT i.id, i.kind, i.cohort, i.group_id, i.block_id, i.item_date, i.title_nl, i.title_ar, i.info_nl, i.info_ar, i.created_by, u.name AS author
      FROM agenda_items i LEFT JOIN users u ON u.id = i.created_by
      WHERE i.institute_id = ? AND i.item_date BETWEEN ? AND ? AND i.cohort IN (${marks(cohorts)}) AND (i.group_id IS NULL OR i.group_id IN (${marks(ids)}))
      ORDER BY i.item_date, i.id`, [inst.id, from, to, ...cohorts, ...ids])
    items = items.map((i) => ({ ...i, id: Number(i.id), group_id: i.group_id == null ? null : Number(i.group_id), block_id: i.block_id == null ? null : Number(i.block_id), item_date: String(i.item_date).slice(0, 10), created_by: i.created_by == null ? null : Number(i.created_by) }))
  }
  // Aanwezigheid: eigen status als student; per les en groep het aantal ingevulde als docent.
  const own = (await conn.execute('SELECT block_id, lesson_date, status, note FROM attendance WHERE user_id = ? AND lesson_date BETWEEN ? AND ?', [user.id, from, to]))
    .map((a) => ({ block_id: Number(a.block_id), date: String(a.lesson_date).slice(0, 10), status: a.status, note: a.note }))
  const teachIds = visible.filter((g) => canTeach(user, mine, g, managed)).map((g) => g.id)
  let recorded = []
  if (teachIds.length) {
    recorded = (await conn.execute(`SELECT group_id, block_id, lesson_date, COUNT(*) AS n, SUM(status = 'absent') AS absent FROM attendance
      WHERE group_id IN (${marks(teachIds)}) AND lesson_date BETWEEN ? AND ? GROUP BY group_id, block_id, lesson_date`, [...teachIds, from, to]))
      .map((r) => ({ group_id: Number(r.group_id), block_id: Number(r.block_id), date: String(r.lesson_date).slice(0, 10), n: Number(r.n), absent: Number(r.absent) }))
  }
  return json({
    today: now, from, to, weeks, year, manager, institute: inst, institutes, recorder: canRecord(user) || manager,
    groups: visible.map((g) => ({ ...g, student: mine.student.includes(g.id), teacher: mine.teacher.includes(g.id), canTeach: teachIds.includes(g.id) })),
    blocks, days: days.filter((d) => usedDays.has(d.id)), calendar: cal, items, attendance: own, recorded
  })
}
