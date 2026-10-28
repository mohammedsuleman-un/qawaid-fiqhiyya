// POST {token, password}: nieuw wachtwoord via een herstellink (die een superbeheerder maakt).
import { json, body, fail } from '../../../lib/http.js'
import { hashPassword, passwordProblem, sha256 } from '../../../lib/auth.js'
import { audit } from '../../../lib/audit.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const input = await body(request)
  const problem = passwordProblem(input.password)
  if (problem) fail(400, problem)
  const hash = await sha256(String(input.token || ''))
  const [row] = await conn.execute('SELECT user_id FROM password_resets WHERE token_hash = ? AND used_at IS NULL AND expires_at > NOW()', [hash])
  if (!row) fail(404, 'Deze herstellink is ongeldig of verlopen')
  await conn.execute('UPDATE users SET password_hash = ? WHERE id = ?', [await hashPassword(input.password), row.user_id])
  await conn.execute('UPDATE password_resets SET used_at = NOW() WHERE token_hash = ?', [hash])
  await conn.execute('DELETE FROM sessions WHERE user_id = ?', [row.user_id])
  await audit(conn, { id: Number(row.user_id) }, 'password.reset', 'user', row.user_id)
  return json({ ok: true })
}
