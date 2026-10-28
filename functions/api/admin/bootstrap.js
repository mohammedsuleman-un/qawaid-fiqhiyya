// POST /api/admin/bootstrap {email}: alleen zolang er nog geen enkele beheerder
// of uitnodiging is. Maakt een uitnodiging voor de eigenaar en geeft de link terug.
import { json } from '../../../lib/db.js'
import { randomToken, sha256 } from '../../../lib/auth.js'
import { body, fail } from '../../../lib/admin.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const { email } = await body(request)
  const [{ n }] = await conn.execute('SELECT (SELECT COUNT(*) FROM admins) + (SELECT COUNT(*) FROM invites) AS n')
  if (Number(n) > 0) return fail('Er is al een beheerder', 403)
  const token = randomToken()
  await conn.execute(`INSERT INTO invites (token_hash, email, role, expires_at)
    VALUES (?, ?, 'owner', NOW() + INTERVAL 7 DAY)`, [await sha256(token), String(email).trim().toLowerCase()])
  return json({ link: new URL(`/beheer/?uitnodiging=${token}`, request.url).href })
}
