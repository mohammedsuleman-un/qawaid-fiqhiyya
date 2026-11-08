// Beheerders (en andere medewerkers) aan een organisatie koppelen (alleen de superbeheerder).
// POST {users: [id]}: koppelen. DELETE ?user=: loskoppelen, ook van de instituten en groepen
// van deze organisatie (aanwezigheid blijft bewaard).
import { json, body, need, fail, id } from '../../../../../lib/http.js'
import { audit } from '../../../../../lib/audit.js'
import { needSuper } from '../../../../../lib/institutes.js'

const qs = (a) => a.map(() => '?').join(', ')

async function org (conn, params) {
  const orgId = id(params.id)
  const [o] = await conn.execute('SELECT id FROM organizations WHERE id = ?', [orgId])
  if (!o) fail(404, 'Organisatie niet gevonden')
  return orgId
}

export async function onRequestPost ({ request, params, data: { conn, user } }) {
  need(user, 'institutes.manage')
  needSuper(user)
  const orgId = await org(conn, params)
  const input = await body(request)
  const ids = [...new Set((Array.isArray(input.users) ? input.users : [input.users]).map(Number).filter((n) => Number.isInteger(n) && n > 0))].slice(0, 200)
  if (!ids.length) fail(400, 'Kies minstens één account')
  const found = await conn.execute(`SELECT id FROM users WHERE id IN (${qs(ids)})`, ids)
  if (found.length !== ids.length) fail(404, 'Gebruiker niet gevonden')
  await conn.execute(`INSERT IGNORE INTO user_organizations (user_id, organization_id) VALUES ${ids.map(() => '(?, ?)').join(', ')}`, ids.flatMap((u) => [u, orgId]))
  await audit(conn, user, 'organization.members.add', 'organization', orgId, { users: ids })
  return json({ ok: true })
}

export async function onRequestDelete ({ request, params, data: { conn, user } }) {
  need(user, 'institutes.manage')
  needSuper(user)
  const orgId = await org(conn, params)
  const userId = id(new URL(request.url).searchParams.get('user'))
  await conn.execute('DELETE FROM user_organizations WHERE user_id = ? AND organization_id = ?', [userId, orgId])
  await conn.execute('DELETE FROM user_institutes WHERE user_id = ? AND institute_id IN (SELECT id FROM institutes WHERE organization_id = ?)', [userId, orgId])
  await conn.execute(`DELETE FROM class_group_members WHERE user_id = ? AND group_id IN
    (SELECT g.id FROM class_groups g JOIN institutes i ON i.id = g.institute_id WHERE i.organization_id = ?)`, [userId, orgId])
  await audit(conn, user, 'organization.members.remove', 'organization', orgId, { user: userId })
  return json({ ok: true })
}
