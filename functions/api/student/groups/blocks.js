// Het weekrooster (groups.manage): een vak aan een blok koppelen, tijden wijzigen,
// een blok toevoegen of weghalen. Een blok geldt voor beide groepen (broeders en zusters).
import { json, body, need, fail, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { insert } from '../../../../lib/content.js'
import { blockInput } from '../../../../lib/agenda.js'

const check = (b) => { if (b.start_time && b.end_time && b.end_time <= b.start_time) fail(400, 'De eindtijd moet na de begintijd liggen') }

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const b = blockInput(await body(request))
  check(b)
  const newId = await insert(conn, 'INSERT INTO schedule_blocks (cohort, weekday, start_time, end_time, subject_nl, subject_ar, position) VALUES (?, ?, ?, ?, ?, ?, 99)',
    [b.cohort, b.weekday, b.start_time, b.end_time, b.subject_nl, b.subject_ar])
  await audit(conn, user, 'schedule.add', 'schedule_block', newId, b)
  return json({ ok: true, id: newId })
}

export async function onRequestPatch ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const input = await body(request)
  const blockId = id(input.id)
  const [cur] = await conn.execute('SELECT start_time, end_time FROM schedule_blocks WHERE id = ?', [blockId])
  if (!cur) fail(404, 'Blok niet gevonden')
  const b = blockInput(input, true)
  check({ ...cur, ...b })
  const cols = Object.keys(b)
  if (!cols.length) return json({ ok: true })
  await conn.execute(`UPDATE schedule_blocks SET ${cols.map((c) => c + ' = ?').join(', ')} WHERE id = ?`, [...cols.map((c) => b[c]), blockId])
  await audit(conn, user, 'schedule.edit', 'schedule_block', blockId, b)
  return json({ ok: true })
}

export async function onRequestDelete ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const blockId = id(new URL(request.url).searchParams.get('id'))
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM attendance WHERE block_id = ?', [blockId])
  if (Number(n)) fail(400, 'Bij dit blok is al aanwezigheid ingevuld; pas het vak of de tijd aan in plaats van het weg te halen')
  await conn.execute('DELETE FROM schedule_blocks WHERE id = ?', [blockId])
  await conn.execute('UPDATE agenda_items SET block_id = NULL WHERE block_id = ?', [blockId])
  await audit(conn, user, 'schedule.delete', 'schedule_block', blockId)
  return json({ ok: true })
}
