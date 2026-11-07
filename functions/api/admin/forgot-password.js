// POST {email, lang, from}: zelf een herstellink aanvragen ("Wachtwoord vergeten?").
// Het antwoord is altijd hetzelfde, zodat niemand kan zien of een e-mailadres een
// account heeft. Rate limiting per IP en per adres; de link is 1 uur geldig.
import { json, body, fail, str } from '../../../lib/http.js'
import { randomToken, sha256, ipHash } from '../../../lib/auth.js'
import { allow } from '../../../lib/ratelimit.js'
import { audit } from '../../../lib/audit.js'
import { sendMail, resetMail } from '../../../lib/mail.js'

export async function onRequestPost ({ request, env, waitUntil, data: { conn } }) {
  const input = await body(request)
  if (input.website) return json({ ok: true }) // honeypot
  const email = str(input.email, 255).toLowerCase()
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fail(400, 'Ongeldig e-mailadres')
  if (!(await allow(conn, 'forgot:' + await ipHash(request), 5, 3600))) fail(429, 'Te veel pogingen. Probeer het later opnieuw.')
  // Per adres hooguit 3 mails per uur; daarboven stil niets doen (zelfde antwoord).
  if (!(await allow(conn, 'forgot:' + email, 3, 3600))) return json({ ok: true })
  const [user] = await conn.execute('SELECT id, name FROM users WHERE email = ? AND status = ?', [email, 'active'])
  if (user) {
    const token = randomToken()
    // Oudere, nog ongebruikte links vervallen: alleen de nieuwste werkt.
    await conn.execute('UPDATE password_resets SET used_at = NOW() WHERE user_id = ? AND used_at IS NULL', [user.id])
    await conn.execute('INSERT INTO password_resets (token_hash, user_id, expires_at) VALUES (?, ?, NOW() + INTERVAL 1 HOUR)',
      [await sha256(token), user.id])
    await audit(conn, { id: Number(user.id) }, 'password.forgot', 'user', user.id)
    const page = input.from === 'student' ? '/student/' : '/beheer/'
    const origin = new URL(request.url).origin
    const link = new URL(`${page}?herstel=${token}${input.lang === 'ar' ? '&lang=ar' : ''}`, origin).href
    const mail = sendMail(env, resetMail({ email, name: user.name, link, origin }))
    if (waitUntil) waitUntil(mail); else await mail
  }
  return json({ ok: true })
}
