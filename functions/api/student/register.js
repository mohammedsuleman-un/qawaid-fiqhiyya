// POST {name, email, password, lang}: zelf een studentenaccount aanmaken en meteen inloggen.
import { json, body, fail, str } from '../../../lib/http.js'
import { hashPassword, passwordProblem, startSession, ipHash } from '../../../lib/auth.js'
import { allow } from '../../../lib/ratelimit.js'
import { insert } from '../../../lib/content.js'
import { audit } from '../../../lib/audit.js'
import { sendMail, welcomeMail } from '../../../lib/mail.js'

export async function onRequestPost ({ request, env, waitUntil, data: { conn } }) {
  const input = await body(request)
  if (input.website) fail(400, 'Ongeldig verzoek') // honeypot
  const email = str(input.email, 255).toLowerCase()
  const name = str(input.name, 255)
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fail(400, 'Ongeldig e-mailadres')
  if (!name) fail(400, 'Vul je naam in')
  const problem = passwordProblem(input.password)
  if (problem) fail(400, problem)
  if (!(await allow(conn, 'register:' + await ipHash(request), 5, 3600))) fail(429, 'Te veel aanmeldingen. Probeer het later opnieuw.')
  const [existing] = await conn.execute('SELECT id FROM users WHERE email = ?', [email])
  if (existing) fail(400, 'Er bestaat al een account met dit e-mailadres. Log in.')
  const lang = input.lang === 'ar' ? 'ar' : 'nl'
  const id = await insert(conn, "INSERT INTO users (email, name, password_hash, status, lang) VALUES (?, ?, ?, 'active', ?)",
    [email, name, await hashPassword(String(input.password)), lang])
  await conn.execute("INSERT INTO user_roles (user_id, role_code) VALUES (?, 'student')", [id])
  await audit(conn, { id }, 'student.register', 'user', id)
  // Bevestigingsmail op de achtergrond: de aanmelding wacht er niet op en faalt er niet door.
  const mail = sendMail(env, welcomeMail({ name, email, lang, origin: new URL(request.url).origin }))
  if (waitUntil) waitUntil(mail); else await mail
  return json({ ok: true }, 200, { 'set-cookie': await startSession(conn, id, true) })
}
