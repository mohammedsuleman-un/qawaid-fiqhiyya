// POST {email, password}: inloggen. Met tweestapsverificatie volgt daarna /login-2fa.
import { json, body, fail, str } from '../../../lib/http.js'
import { verifyPassword, startSession, ipHash } from '../../../lib/auth.js'
import { allow } from '../../../lib/ratelimit.js'
import { audit } from '../../../lib/audit.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const input = await body(request)
  const email = str(input.email, 255).toLowerCase()
  if (!(await allow(conn, 'login:' + await ipHash(request), 20, 900)) || !(await allow(conn, 'login:' + email, 10, 900))) {
    fail(429, 'Te veel pogingen. Probeer het over een kwartier opnieuw.')
  }
  const [user] = await conn.execute('SELECT id, password_hash, status, totp_enabled FROM users WHERE email = ?', [email])
  if (!user || user.status !== 'active' || !(await verifyPassword(String(input.password || ''), user.password_hash))) {
    fail(401, 'E-mailadres of wachtwoord klopt niet')
  }
  const needs2fa = Number(user.totp_enabled) === 1
  const cookie = await startSession(conn, Number(user.id), !needs2fa)
  if (!needs2fa) await audit(conn, { id: Number(user.id) }, 'login')
  return json({ ok: true, needs2fa }, 200, { 'set-cookie': cookie })
}
