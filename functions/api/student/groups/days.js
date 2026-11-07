// Het jaarrooster (groups.manage): schooljaar, vakanties (geen les), examens en bijzondere
// dagen, per instituut. POST {institute, ...} nieuw, PATCH {id, ...} wijzigen, DELETE ?id= weghalen.
import { json, body, need, fail, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { insert } from '../../../../lib/content.js'
import { dayInput } from '../../../../lib/agenda.js'
import { needInstitute } from '../../../../lib/institutes.js'

async function own (conn, user, dayId) {
  const [cur] = await conn.execute('SELECT institute_id FROM calendar_days WHERE id = ?', [dayId])
  if (!cur) fail(404, 'Niet gevonden')
  await needInstitute(conn, user, cur.institute_id)
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const input = await body(request)
  const instituteId = id(input.institute)
  await needInstitute(conn, user, instituteId)
  const d = dayInput(input)
  const newId = await insert(conn, 'INSERT INTO calendar_days (institute_id, kind, date_from, date_to, cohort, title_nl, title_ar) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [instituteId, d.kind, d.date_from, d.date_to, d.cohort, d.title_nl, d.title_ar])
  await audit(conn, user, 'calendar.add', 'calendar_day', newId, d)
  return json({ ok: true, id: newId })
}

export async function onRequestPatch ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const input = await body(request)
  const dayId = id(input.id)
  await own(conn, user, dayId)
  const d = dayInput(input)
  await conn.execute('UPDATE calendar_days SET kind = ?, date_from = ?, date_to = ?, cohort = ?, title_nl = ?, title_ar = ? WHERE id = ?',
    [d.kind, d.date_from, d.date_to, d.cohort, d.title_nl, d.title_ar, dayId])
  await audit(conn, user, 'calendar.edit', 'calendar_day', dayId, d)
  return json({ ok: true })
}

export async function onRequestDelete ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const dayId = id(new URL(request.url).searchParams.get('id'))
  await own(conn, user, dayId)
  await conn.execute('DELETE FROM calendar_days WHERE id = ?', [dayId])
  await audit(conn, user, 'calendar.delete', 'calendar_day', dayId)
  return json({ ok: true })
}
