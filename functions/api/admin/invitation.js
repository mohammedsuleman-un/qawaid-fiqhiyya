// GET ?token=: laat zien voor welk e-mailadres en welke rol een uitnodiging is.
import { json, fail } from '../../../lib/http.js'
import { sha256 } from '../../../lib/auth.js'

export async function onRequestGet ({ request, data: { conn } }) {
  const token = new URL(request.url).searchParams.get('token') || ''
  const [inv] = await conn.execute(`SELECT email, role_code FROM invitations WHERE token_hash = ?
    AND accepted_at IS NULL AND revoked_at IS NULL AND expires_at > NOW()`, [await sha256(token)])
  if (!inv) fail(404, 'Deze uitnodiging is ongeldig, ingetrokken of verlopen')
  return json(inv)
}
