// PATCH {roles, status, permissions}: rollen, status (active/deactivated) en losse rechten
// van een gebruiker wijzigen. permissions = [{code, granted}] vervangt de losse rechten.
import { json, body, need, fail, id } from '../../../../../lib/http.js'
import { ROLE_CODES, guardLastSuperadmin } from '../../../../../lib/users.js'
import { PERMISSIONS } from '../../../../../lib/rbac.js'
import { audit } from '../../../../../lib/audit.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'users.manage')
  const targetId = id(params.id)
  const input = await body(request)
  const [target] = await conn.execute('SELECT id, email FROM users WHERE id = ?', [targetId])
  if (!target) fail(404, 'Gebruiker niet gevonden')
  const isSuper = user.roles.includes('superadmin')
  const [targetSuper] = await conn.execute("SELECT 1 AS x FROM user_roles WHERE user_id = ? AND role_code = 'superadmin'", [targetId])
  if (targetSuper && !isSuper) fail(403, 'Alleen een superbeheerder kan een superbeheerder wijzigen')

  if (input.roles) {
    if (!Array.isArray(input.roles) || !input.roles.every((r) => ROLE_CODES.includes(r))) fail(400, 'Onbekende rol')
    if (input.roles.includes('superadmin') && !isSuper) fail(403, 'Alleen een superbeheerder kan een superbeheerder aanwijzen')
  }
  if (input.status && !['active', 'deactivated'].includes(input.status)) fail(400, 'Onbekende status')
  if (input.status && targetId === user.id) fail(400, 'Je kunt je eigen account niet deactiveren')
  await guardLastSuperadmin(conn, targetId, { newRoles: input.roles, newStatus: input.status })

  if (input.roles) {
    await conn.execute('DELETE FROM user_roles WHERE user_id = ?', [targetId])
    for (const r of input.roles) await conn.execute('INSERT INTO user_roles (user_id, role_code) VALUES (?, ?)', [targetId, r])
    await audit(conn, user, 'user.roles', 'user', targetId, { email: target.email, roles: input.roles })
  }
  if (input.status) {
    await conn.execute('UPDATE users SET status = ? WHERE id = ?', [input.status, targetId])
    if (input.status !== 'active') await conn.execute('DELETE FROM sessions WHERE user_id = ?', [targetId])
    await audit(conn, user, 'user.status', 'user', targetId, { email: target.email, status: input.status })
  }
  if (input.permissions) {
    if (!isSuper) fail(403, 'Alleen een superbeheerder kan losse rechten toekennen')
    const codes = PERMISSIONS.map((p) => p.code)
    if (!input.permissions.every((p) => codes.includes(p.code))) fail(400, 'Onbekend recht')
    await conn.execute('DELETE FROM user_permissions WHERE user_id = ?', [targetId])
    for (const p of input.permissions) {
      await conn.execute('INSERT INTO user_permissions (user_id, permission_code, granted) VALUES (?, ?, ?)', [targetId, p.code, p.granted ? 1 : 0])
    }
    await audit(conn, user, 'user.permissions', 'user', targetId, { email: target.email, permissions: input.permissions })
  }
  return json({ ok: true })
}
