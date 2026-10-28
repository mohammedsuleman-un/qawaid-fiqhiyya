// GET: beheerders en openstaande uitnodigingen. POST {email, role}: nodigt iemand uit
// (alleen de eigenaar) en geeft de link terug. DELETE {email}: verwijdert een beheerder.
import { json } from '../../../lib/db.js'
import { randomToken, sha256 } from '../../../lib/auth.js'
import { body, fail } from '../../../lib/admin.js'

export async function onRequestGet ({ data: { conn } }) {
  const admins = await conn.execute('SELECT email, role, created_at FROM admins ORDER BY created_at')
  const invites = await conn.execute('SELECT email, role, expires_at FROM invites WHERE expires_at > NOW()')
  return json({ admins, invites })
}

export async function onRequestPost ({ request, data: { conn, admin } }) {
  if (admin.role !== 'owner') return fail('Alleen de eigenaar kan beheerders uitnodigen', 403)
  const { email, role } = await body(request)
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email || ''))) return fail('Ongeldig e-mailadres')
  const token = randomToken()
  await conn.execute(`INSERT INTO invites (token_hash, email, role, created_by, expires_at)
    VALUES (?, ?, ?, ?, NOW() + INTERVAL 7 DAY)`,
  [await sha256(token), email.trim().toLowerCase(), role === 'owner' ? 'owner' : 'editor', admin.email])
  return json({ link: new URL(`/beheer/?uitnodiging=${token}`, request.url).href })
}

export async function onRequestDelete ({ request, data: { conn, admin } }) {
  if (admin.role !== 'owner') return fail('Alleen de eigenaar kan beheerders verwijderen', 403)
  const { email } = await body(request)
  if (email === admin.email) return fail('Je kunt jezelf niet verwijderen')
  await conn.execute('DELETE FROM admins WHERE email = ?', [email])
  await conn.execute('DELETE FROM sessions WHERE email = ?', [email])
  await conn.execute('DELETE FROM invites WHERE email = ?', [email])
  return json({ ok: true })
}
