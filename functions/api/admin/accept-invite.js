// POST {token, name, password}: account aanmaken (of heractiveren) vanuit een uitnodiging.
import { json, body, fail, str } from '../../../lib/http.js'
import { hashPassword, passwordProblem, sha256, startSession } from '../../../lib/auth.js'
import { audit } from '../../../lib/audit.js'
import { insert } from '../../../lib/content.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const input = await body(request)
  const problem = passwordProblem(input.password)
  if (problem) fail(400, problem)
  const hash = await sha256(String(input.token || ''))
  const [inv] = await conn.execute(`SELECT id, email, role_code, invited_by FROM invitations WHERE token_hash = ?
    AND accepted_at IS NULL AND revoked_at IS NULL AND expires_at > NOW()`, [hash])
  if (!inv) fail(404, 'Deze uitnodiging is ongeldig, ingetrokken of verlopen')
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
  await conn.execute('INSERT INTO user_roles (user_id, role_code) VALUES (?, ?)', [userId, inv.role_code])
  await conn.execute('UPDATE invitations SET accepted_at = NOW() WHERE id = ?', [inv.id])
  await audit(conn, { id: userId }, 'invitation.accept', 'user', userId, { role: inv.role_code })
  return json({ ok: true, email: inv.email }, 200, { 'set-cookie': await startSession(conn, userId, true) })
}
