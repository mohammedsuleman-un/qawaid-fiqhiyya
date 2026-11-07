// PATCH {roles, status, permissions, institutes}: rollen, status (active/deactivated), losse
// rechten en instituten van een gebruiker wijzigen. permissions = [{code, granted}] vervangt de
// losse rechten. Wie niet alle instituten ziet, beheert alleen gebruikers van zijn instituten en
// kan alleen zijn eigen instituten aan- of uitzetten.
// GET: wat er verdwijnt bij definitief verwijderen. DELETE {confirm_email}: definitief
// verwijderen (zie deleteUser in lib/users.js).
import { json, body, need, fail, id } from '../../../../../lib/http.js'
import { ROLE_CODES, guardLastSuperadmin, deletionSummary, deleteUser } from '../../../../../lib/users.js'
import { PERMISSIONS } from '../../../../../lib/rbac.js'
import { audit } from '../../../../../lib/audit.js'
import { needUser, setUserInstitutes } from '../../../../../lib/institutes.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'users.manage')
  const targetId = id(params.id)
  const input = await body(request)
  const [target] = await conn.execute('SELECT id, email FROM users WHERE id = ?', [targetId])
  if (!target) fail(404, 'Gebruiker niet gevonden')
  await needUser(conn, user, targetId)
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
  if (input.institutes !== undefined) {
    const next = await setUserInstitutes(conn, user, targetId, input.institutes)
    await audit(conn, user, 'user.institutes', 'user', targetId, { email: target.email, institutes: next })
  }
  return json({ ok: true })
}

async function loadTarget (conn, user, targetId) {
  const [target] = await conn.execute('SELECT id, email, name, status FROM users WHERE id = ?', [targetId])
  if (!target) fail(404, 'Gebruiker niet gevonden')
  await needUser(conn, user, targetId)
  const [targetSuper] = await conn.execute("SELECT 1 AS x FROM user_roles WHERE user_id = ? AND role_code = 'superadmin'", [targetId])
  if (targetSuper && !user.roles.includes('superadmin')) fail(403, 'Alleen een superbeheerder kan een superbeheerder verwijderen')
  return target
}

export async function onRequestGet ({ params, data: { conn, user } }) {
  need(user, 'users.manage')
  const targetId = id(params.id)
  const target = await loadTarget(conn, user, targetId)
  return json({ id: Number(target.id), email: target.email, name: target.name, status: target.status, ...await deletionSummary(conn, targetId) })
}

export async function onRequestDelete ({ request, params, data: { conn, user } }) {
  need(user, 'users.manage')
  const targetId = id(params.id)
  if (targetId === user.id) fail(400, 'Je kunt je eigen account niet verwijderen')
  const target = await loadTarget(conn, user, targetId)
  const input = await body(request)
  if (String(input.confirm_email || '').trim().toLowerCase() !== target.email.toLowerCase()) {
    fail(400, 'Typ ter bevestiging precies het e-mailadres van deze gebruiker')
  }
  await guardLastSuperadmin(conn, targetId, { newStatus: 'deleted' })
  const removed = await deleteUser(conn, targetId, target.email)
  await audit(conn, user, 'user.delete', 'user', targetId, { email: target.email, name: target.name, removed })
  return json({ ok: true, removed })
}
