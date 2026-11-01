// GET ?token=: laat zien voor welk e-mailadres en welke rol een uitnodiging is.
import { json } from '../../../lib/http.js'
import { openInvitation } from '../../../lib/users.js'

export async function onRequestGet ({ request, data: { conn } }) {
  const token = new URL(request.url).searchParams.get('token') || ''
  const inv = await openInvitation(conn, token)
  return json({ email: inv.email, role_code: inv.role_code })
}
