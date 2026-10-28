// POST {current, password}: eigen wachtwoord wijzigen. Andere sessies worden afgemeld.
import { json, body, fail } from '../../../lib/http.js'
import { verifyPassword, hashPassword, passwordProblem } from '../../../lib/auth.js'
import { audit } from '../../../lib/audit.js'

export async function onRequestPost ({ request, data: { conn, user } }) {
  const input = await body(request)
  const [row] = await conn.execute('SELECT password_hash FROM users WHERE id = ?', [user.id])
  if (!(await verifyPassword(String(input.current || ''), row.password_hash))) fail(400, 'Je huidige wachtwoord klopt niet')
  const problem = passwordProblem(input.password)
  if (problem) fail(400, problem)
  await conn.execute('UPDATE users SET password_hash = ? WHERE id = ?', [await hashPassword(input.password), user.id])
  await conn.execute('DELETE FROM sessions WHERE user_id = ? AND token_hash <> ?', [user.id, user.token_hash])
  await audit(conn, user, 'password.change', 'user', user.id)
  return json({ ok: true })
}
