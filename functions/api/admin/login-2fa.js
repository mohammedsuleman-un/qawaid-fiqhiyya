// POST {code}: tweede stap van het inloggen.
import { json, body, fail } from '../../../lib/http.js'
import { currentUser, ipHash } from '../../../lib/auth.js'
import { verifyCode } from '../../../lib/totp.js'
import { allow } from '../../../lib/ratelimit.js'
import { audit } from '../../../lib/audit.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const user = await currentUser(conn, request, { pending: true })
  if (!user) fail(401, 'Log eerst in met je wachtwoord')
  if (!(await allow(conn, '2fa:' + await ipHash(request), 10, 900))) fail(429, 'Te veel pogingen. Probeer het later opnieuw.')
  const [row] = await conn.execute('SELECT totp_secret FROM users WHERE id = ?', [user.id])
  if (!(await verifyCode(row.totp_secret, (await body(request)).code))) fail(401, 'De code klopt niet')
  await conn.execute('UPDATE sessions SET mfa_ok = 1 WHERE token_hash = ?', [user.token_hash])
  await audit(conn, user, 'login')
  return json({ ok: true })
}
