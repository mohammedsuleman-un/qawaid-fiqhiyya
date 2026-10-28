// DELETE: uitnodiging intrekken. POST: opnieuw versturen (nieuwe link, oude vervalt).
import { json, need, fail, id } from '../../../../lib/http.js'
import { createInvitation } from '../../../../lib/users.js'
import { audit } from '../../../../lib/audit.js'

async function load (conn, invId) {
  const [inv] = await conn.execute('SELECT id, email, role_code FROM invitations WHERE id = ? AND accepted_at IS NULL AND revoked_at IS NULL', [invId])
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

export async function onRequestPost ({ request, params, data: { conn, user } }) {
  need(user, 'users.manage')
  const inv = await load(conn, id(params.id))
  if (inv.role_code === 'superadmin' && !user.roles.includes('superadmin')) fail(403, 'Alleen een superbeheerder kan een superbeheerder aanwijzen')
  const link = await createInvitation(conn, request, inv.email, inv.role_code, user.id)
  await audit(conn, user, 'invitation.resend', 'invitation', inv.email)
  return json({ link })
}
