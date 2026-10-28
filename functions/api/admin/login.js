import { json } from '../../../lib/db.js'
import { verifyPassword, startSession } from '../../../lib/auth.js'
import { body, fail } from '../../../lib/admin.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const { email, password } = await body(request)
  const [admin] = await conn.execute('SELECT email, password_hash FROM admins WHERE email = ?',
    [String(email || '').trim().toLowerCase()])
  if (!admin || !(await verifyPassword(String(password || ''), admin.password_hash))) {
    return fail('E-mailadres of wachtwoord klopt niet', 401)
  }
  const res = json({ ok: true })
  res.headers.append('set-cookie', await startSession(conn, admin.email))
  return res
}
