// Leden van een instituut (users.manage, eigen instituut).
// POST {users: [id]}: accounts aan het instituut koppelen (medewerkers en studenten).
// DELETE ?user=: loskoppelen; haalt de gebruiker ook uit de groepen van dit instituut
// (zijn aanwezigheid blijft bewaard).
import { json, body, need, fail, id } from '../../../../../lib/http.js'
import { audit } from '../../../../../lib/audit.js'
import { needInstitute, userScope, linkOrgsOfInstitutes } from '../../../../../lib/institutes.js'

const qs = (a) => a.map(() => '?').join(', ')

export async function onRequestPost ({ request, params, data: { conn, user } }) {
  need(user, 'users.manage')
  const instituteId = id(params.id)
  await needInstitute(conn, user, instituteId)
  const input = await body(request)
  const ids = [...new Set((Array.isArray(input.users) ? input.users : [input.users]).map(Number).filter((n) => Number.isInteger(n) && n > 0))].slice(0, 200)
  if (!ids.length) fail(400, 'Kies minstens één account')
  const scope = await userScope(conn, user)
  const found = await conn.execute(`SELECT u.id FROM users u WHERE u.id IN (${qs(ids)})${scope ? ' AND ' + scope.sql : ''}`, [...ids, ...(scope ? scope.args : [])])
  if (found.length !== ids.length) fail(403, 'Deze gebruiker hoort niet bij jouw instituut')
  await conn.execute(`INSERT IGNORE INTO user_institutes (user_id, institute_id) VALUES ${ids.map(() => '(?, ?)').join(', ')}`, ids.flatMap((u) => [u, instituteId]))
  await linkOrgsOfInstitutes(conn, ids, [instituteId])
  await audit(conn, user, 'institute.members.add', 'institute', instituteId, { users: ids })
  return json({ ok: true, added: ids.length })
}

export async function onRequestDelete ({ request, params, data: { conn, user } }) {
  need(user, 'users.manage')
  const instituteId = id(params.id)
  await needInstitute(conn, user, instituteId)
  const userId = id(new URL(request.url).searchParams.get('user'))
  await conn.execute('DELETE FROM user_institutes WHERE user_id = ? AND institute_id = ?', [userId, instituteId])
  await conn.execute('DELETE FROM class_group_members WHERE user_id = ? AND group_id IN (SELECT id FROM class_groups WHERE institute_id = ?)', [userId, instituteId])
  await audit(conn, user, 'institute.members.remove', 'institute', instituteId, { user: userId })
  return json({ ok: true })
}
