// POST {token, name, password}: account aanmaken (of heractiveren) vanuit een uitnodiging.
import { json, body, fail, str } from '../../../lib/http.js'
import { hashPassword, passwordProblem, startSession } from '../../../lib/auth.js'
import { audit } from '../../../lib/audit.js'
import { insert } from '../../../lib/content.js'
import { openInvitation, parseRoles, GENDERS, setGender } from '../../../lib/users.js'
import { linkInvitedUser } from '../../../lib/institutes.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const input = await body(request)
  const problem = passwordProblem(input.password)
  if (problem) fail(400, problem)
  const inv = await openInvitation(conn, input.token)
  // Een student kiest broeder of zuster.
  if (parseRoles(inv.role_code).includes('student') && !GENDERS.includes(input.gender)) fail(400, 'Kies broeder of zuster')
  const pw = await hashPassword(input.password)
  const [existing] = await conn.execute('SELECT id FROM users WHERE email = ?', [inv.email])
  let userId
  if (existing) {
    userId = Number(existing.id)
    await conn.execute("UPDATE users SET password_hash = ?, status = 'active', name = IF(? = '', name, ?) WHERE id = ?",
      [pw, str(input.name, 255), str(input.name, 255), userId])
    await conn.execute('DELETE FROM user_roles WHERE user_id = ?', [userId])
  } else {
    userId = await insert(conn, 'INSERT INTO users (email, name, password_hash) VALUES (?, ?, ?)',
      [inv.email, str(input.name, 255), pw])
  }
  const roles = parseRoles(inv.role_code)
  await conn.execute(`INSERT INTO user_roles (user_id, role_code) VALUES ${roles.map(() => '(?, ?)').join(', ')}`, roles.flatMap((r) => [userId, r]))
  await linkInvitedUser(conn, userId, inv.institutes)
  await setGender(conn, userId, input.gender)
  await conn.execute('UPDATE invitations SET accepted_at = NOW() WHERE id = ?', [inv.id])
  await conn.execute('UPDATE invitations SET revoked_at = NOW() WHERE email = ? AND id <> ? AND accepted_at IS NULL AND revoked_at IS NULL', [inv.email, inv.id])
  await audit(conn, { id: userId }, 'invitation.accept', 'user', userId, { roles })
  return json({ ok: true, email: inv.email }, 200, { 'set-cookie': await startSession(conn, userId, true) })
}
