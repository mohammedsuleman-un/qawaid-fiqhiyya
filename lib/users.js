// Gebruikersbeheer: uitnodigingen en de bescherming van de laatste superbeheerder.
import { randomToken, sha256 } from './auth.js'
import { ROLES } from './rbac.js'
import { fail } from './http.js'

export const ROLE_CODES = ROLES.map((r) => r.code)
export const INVITE_DAYS = 7

export async function createInvitation (conn, request, email, role, invitedBy) {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fail(400, 'Ongeldig e-mailadres')
  if (!ROLE_CODES.includes(role)) fail(400, 'Onbekende rol')
  const [existing] = await conn.execute("SELECT id FROM users WHERE email = ? AND status = 'active'", [email])
  if (existing) fail(400, 'Er bestaat al een actief account met dit e-mailadres')
  await conn.execute('UPDATE invitations SET revoked_at = NOW() WHERE email = ? AND accepted_at IS NULL AND revoked_at IS NULL', [email])
  const token = randomToken()
  await conn.execute(`INSERT INTO invitations (token_hash, email, role_code, invited_by, expires_at)
    VALUES (?, ?, ?, ?, NOW() + INTERVAL ${INVITE_DAYS} DAY)`, [await sha256(token), email, role, invitedBy])
  return new URL(`/beheer/?uitnodiging=${token}`, request.url).href
}

export async function activeSuperadmins (conn) {
  const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM users u JOIN user_roles r ON r.user_id = u.id
    WHERE r.role_code = 'superadmin' AND u.status = 'active'`)
  return Number(n)
}

// Weigert als deze wijziging de laatste actieve superbeheerder zou weghalen.
export async function guardLastSuperadmin (conn, userId, { newRoles, newStatus }) {
  const [isSuper] = await conn.execute("SELECT 1 AS x FROM user_roles WHERE user_id = ? AND role_code = 'superadmin'", [userId])
  if (!isSuper) return
  const losesRole = newRoles && !newRoles.includes('superadmin')
  const deactivates = newStatus && newStatus !== 'active'
  if ((losesRole || deactivates) && await activeSuperadmins(conn) <= 1) {
    fail(400, 'Dit is de laatste actieve superbeheerder. Wijs eerst een andere superbeheerder aan.')
  }
}
