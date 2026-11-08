// DELETE: uitnodiging intrekken. POST: opnieuw versturen (nieuwe link, oude vervalt).
import { json, need, fail, id } from '../../../../lib/http.js'
import { createInvitation, parseRoles } from '../../../../lib/users.js'
import { audit } from '../../../../lib/audit.js'
import { sendMail, inviteMail, studentInviteMail } from '../../../../lib/mail.js'

async function load (conn, invId) {
  const [inv] = await conn.execute('SELECT * FROM invitations WHERE id = ? AND accepted_at IS NULL AND revoked_at IS NULL', [invId])
  if (!inv) fail(404, 'Uitnodiging niet gevonden')
  return inv
}

export async function onRequestDelete ({ params, data: { conn, user } }) {
  need(user, 'users.manage')
  const inv = await load(conn, id(params.id))
  await conn.execute('UPDATE invitations SET revoked_at = NOW() WHERE id = ?', [inv.id])
  await audit(conn, user, 'invitation.revoke', 'invitation', inv.email)
  return json({ ok: true })
}

export async function onRequestPost ({ request, params, env, data: { conn, user } }) {
  need(user, 'users.manage')
  const inv = await load(conn, id(params.id))
  const roles = parseRoles(inv.role_code)
  if (roles.includes('superadmin') && !user.roles.includes('superadmin')) fail(403, 'Alleen een superbeheerder kan een superbeheerder aanwijzen')
  const link = await createInvitation(conn, request, inv.email, roles, user.id, inv.institutes || '', inv.organization_id ? Number(inv.organization_id) : null)
  await audit(conn, user, 'invitation.resend', 'invitation', inv.email)
  // Uitnodiging per mail; de link blijft ook zichtbaar zodat je hem zelf kunt doorsturen.
  const mail = await sendMail(env, (inv.role_code === 'student' ? studentInviteMail : inviteMail)({ email: inv.email, role: roles[0], roles, link, inviter: user.name || user.email, origin: new URL(request.url).origin }))
  return json({ link, mailed: mail.ok === true })
}
