// POST: maakt een herstellink (24 uur geldig) die de beheerder zelf doorstuurt,
// zolang er nog geen e-maildienst is.
import { json, need, fail, id } from '../../../../../lib/http.js'
import { randomToken, sha256 } from '../../../../../lib/auth.js'
import { audit } from '../../../../../lib/audit.js'
import { needUser } from '../../../../../lib/institutes.js'

export async function onRequestPost ({ request, params, data: { conn, user } }) {
  need(user, 'users.manage')
  const [target] = await conn.execute('SELECT id, email FROM users WHERE id = ?', [id(params.id)])
  if (!target) fail(404, 'Gebruiker niet gevonden')
  await needUser(conn, user, Number(target.id))
  const [targetSuper] = await conn.execute("SELECT 1 AS x FROM user_roles WHERE user_id = ? AND role_code = 'superadmin'", [target.id])
  if (targetSuper && !user.roles.includes('superadmin')) fail(403, 'Alleen een superbeheerder kan een herstellink voor een superbeheerder maken')
  const token = randomToken()
  await conn.execute('INSERT INTO password_resets (token_hash, user_id, expires_at) VALUES (?, ?, NOW() + INTERVAL 1 DAY)',
    [await sha256(token), target.id])
  await audit(conn, user, 'password.reset_link', 'user', target.id, { email: target.email })
  return json({ link: new URL(`/beheer/?herstel=${token}`, request.url).href })
}
