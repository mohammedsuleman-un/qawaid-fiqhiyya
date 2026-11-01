// GET: open uitnodigingen. POST {email, role}: nieuwe uitnodiging (users.manage).
// Alleen een superbeheerder mag iemand als superbeheerder uitnodigen.
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { createInvitation } from '../../../../lib/users.js'
import { audit } from '../../../../lib/audit.js'
import { sendMail, inviteMail } from '../../../../lib/mail.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'users.manage')
  return json(await conn.execute(`SELECT i.id, i.email, i.role_code, i.expires_at, i.created_at, u.email AS invited_by
    FROM invitations i LEFT JOIN users u ON u.id = i.invited_by
    WHERE i.accepted_at IS NULL AND i.revoked_at IS NULL AND i.expires_at > NOW() ORDER BY i.created_at DESC`))
}

export async function onRequestPost ({ request, env, data: { conn, user } }) {
  need(user, 'users.manage')
  const input = await body(request)
  if (input.role === 'superadmin' && !user.roles.includes('superadmin')) fail(403, 'Alleen een superbeheerder kan een superbeheerder aanwijzen')
  const email = str(input.email, 255).toLowerCase()
  const link = await createInvitation(conn, request, email, input.role, user.id)
  await audit(conn, user, 'invitation.create', 'invitation', email, { role: input.role })
  // Uitnodiging per mail; de link blijft ook zichtbaar zodat je hem zelf kunt doorsturen.
  const mail = await sendMail(env, inviteMail({ email: email, role: input.role, link, inviter: user.name || user.email, origin: new URL(request.url).origin }))
  return json({ link, mailed: mail.ok === true })
}
