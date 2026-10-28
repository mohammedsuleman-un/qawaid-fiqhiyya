// POST {email}: alleen zolang er nog geen enkele gebruiker of open uitnodiging is.
// Maakt een uitnodiging voor de eerste superbeheerder en geeft de link terug.
import { json, body, fail, str } from '../../../lib/http.js'
import { createInvitation } from '../../../lib/users.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const [{ n }] = await conn.execute(`SELECT (SELECT COUNT(*) FROM users) +
    (SELECT COUNT(*) FROM invitations WHERE accepted_at IS NULL AND revoked_at IS NULL AND expires_at > NOW()) AS n`)
  if (Number(n) > 0) fail(403, 'Er is al een beheerder')
  const email = str((await body(request)).email, 255).toLowerCase()
  return json({ link: await createInvitation(conn, request, email, 'superadmin', null) })
}
