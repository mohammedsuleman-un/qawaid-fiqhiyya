// GET: open uitnodigingen. POST {email, roles (of role), institutes}: nieuwe uitnodiging (users.manage),
// met één of meer rollen.
// Zonder institutes krijgt het nieuwe account de instituten van wie uitnodigt. De superbeheerder
// kan een organisatie kiezen (organization): dan alleen de gekozen instituten van die organisatie.
// Alleen een superbeheerder mag iemand als superbeheerder uitnodigen.
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { createInvitation, parseRoles } from '../../../../lib/users.js'
import { audit } from '../../../../lib/audit.js'
import { inviteInstitutes, isSuper, myInstituteIds, myOrganizationIds, organizationId, instituteIds, needSuper } from '../../../../lib/institutes.js'
import { sendMail, inviteMail, studentInviteMail } from '../../../../lib/mail.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'users.manage')
  const rows = await conn.execute(`SELECT i.*, u.email AS inviter_email
    FROM invitations i LEFT JOIN users u ON u.id = i.invited_by
    WHERE i.accepted_at IS NULL AND i.revoked_at IS NULL AND i.expires_at > NOW() ORDER BY i.created_at DESC`)
  const ids = (r) => String(r.institutes || '').split(',').map(Number).filter(Boolean)
  // Wie niet alle instituten ziet, ziet alleen eigen uitnodigingen en die voor zijn instituten.
  const mine = isSuper(user) ? null : await myInstituteIds(conn, user)
  const orgs = isSuper(user) ? null : await myOrganizationIds(conn, user)
  return json(rows.filter((r) => !mine || Number(r.invited_by) === user.id || ids(r).some((i) => mine.includes(i)) || orgs.includes(Number(r.organization_id)))
    .map((r) => ({ id: r.id, email: r.email, role_code: r.role_code, expires_at: r.expires_at, created_at: r.created_at, invited_by: r.inviter_email, institutes: ids(r), organization: r.organization_id == null ? null : Number(r.organization_id) })))
}

export async function onRequestPost ({ request, env, data: { conn, user } }) {
  need(user, 'users.manage')
  const input = await body(request)
  const roles = parseRoles(input.roles ?? input.role)
  if (roles.includes('superadmin') && !user.roles.includes('superadmin')) fail(403, 'Alleen een superbeheerder kan een superbeheerder aanwijzen')
  const email = str(input.email, 255).toLowerCase()
  let institutes
  let organization = null
  if (input.organization) {
    needSuper(user)
    organization = await organizationId(conn, input.organization)
    const ids = await instituteIds(conn, input.institutes)
    if (ids.length) {
      const inOrg = await conn.execute(`SELECT id FROM institutes WHERE organization_id = ? AND id IN (${ids.map(() => '?').join(', ')})`, [organization, ...ids])
      if (inOrg.length !== ids.length) fail(400, 'Dit instituut hoort niet bij deze organisatie')
    }
    institutes = ids.join(',')
  } else {
    institutes = await inviteInstitutes(conn, user, input.institutes)
  }
  const link = await createInvitation(conn, request, email, roles, user.id, institutes, organization)
  await audit(conn, user, 'invitation.create', 'invitation', email, { roles, institutes, organization })
  // Uitnodiging per mail; de link blijft ook zichtbaar zodat je hem zelf kunt doorsturen.
  const mail = await sendMail(env, (roles.join() === 'student' ? studentInviteMail : inviteMail)({ email: email, role: roles[0], roles, link, inviter: user.name || user.email, origin: new URL(request.url).origin }))
  return json({ link, mailed: mail.ok === true })
}
