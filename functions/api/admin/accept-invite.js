// POST /api/admin/accept-invite {token, password}: zet het wachtwoord van een
// uitgenodigde beheerder en logt meteen in.
import { json } from '../../../lib/db.js'
import { hashPassword, sha256, startSession } from '../../../lib/auth.js'
import { body, fail } from '../../../lib/admin.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const { token, password } = await body(request)
  if (String(password || '').length < 10) return fail('Kies een wachtwoord van minstens 10 tekens')
  const hash = await sha256(String(token || ''))
  const [invite] = await conn.execute('SELECT email, role FROM invites WHERE token_hash = ? AND expires_at > NOW()', [hash])
  if (!invite) return fail('Deze uitnodiging is ongeldig of verlopen', 404)
  await conn.execute(`INSERT INTO admins (email, role, password_hash) VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)`, [invite.email, invite.role, await hashPassword(password)])
  await conn.execute('DELETE FROM invites WHERE token_hash = ?', [hash])
  const res = json({ ok: true, email: invite.email })
  res.headers.append('set-cookie', await startSession(conn, invite.email))
  return res
}
