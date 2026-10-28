// Tweestapsverificatie instellen.
// GET: nieuw geheim (zolang 2FA nog uit staat) met de otpauth-link voor de QR-code.
// POST {code}: 2FA aanzetten. DELETE {password}: 2FA uitzetten.
import { json, body, fail } from '../../../lib/http.js'
import { newSecret, verifyCode, otpauthUri } from '../../../lib/totp.js'
import { verifyPassword } from '../../../lib/auth.js'
import { audit } from '../../../lib/audit.js'

export async function onRequestGet ({ data: { conn, user } }) {
  if (user.totp_enabled) return json({ enabled: true })
  const secret = newSecret()
  await conn.execute('UPDATE users SET totp_secret = ? WHERE id = ?', [secret, user.id])
  return json({ enabled: false, secret, uri: otpauthUri(secret, user.email) })
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  const [row] = await conn.execute('SELECT totp_secret FROM users WHERE id = ?', [user.id])
  if (!row.totp_secret || !(await verifyCode(row.totp_secret, (await body(request)).code))) fail(400, 'De code klopt niet')
  await conn.execute('UPDATE users SET totp_enabled = 1 WHERE id = ?', [user.id])
  await conn.execute('UPDATE sessions SET mfa_ok = 1 WHERE token_hash = ?', [user.token_hash])
  await audit(conn, user, '2fa.enable', 'user', user.id)
  return json({ ok: true })
}

export async function onRequestDelete ({ request, data: { conn, user } }) {
  const [row] = await conn.execute('SELECT password_hash FROM users WHERE id = ?', [user.id])
  if (!(await verifyPassword(String((await body(request)).password || ''), row.password_hash))) fail(400, 'Wachtwoord klopt niet')
  await conn.execute('UPDATE users SET totp_enabled = 0, totp_secret = NULL WHERE id = ?', [user.id])
  await audit(conn, user, '2fa.disable', 'user', user.id)
  return json({ ok: true })
}
