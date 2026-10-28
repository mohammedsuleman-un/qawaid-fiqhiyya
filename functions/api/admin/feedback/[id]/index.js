// PATCH {status, assigned_to, internal_note}: feedback verwerken.
import { json, body, need, fail, id, str } from '../../../../../lib/http.js'
import { can } from '../../../../../lib/rbac.js'
import { FEEDBACK_STATUSES } from '../../../../../lib/feedback.js'
import { audit } from '../../../../../lib/audit.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'feedback.assigned')
  const fid = id(params.id)
  const [f] = await conn.execute('SELECT id, assigned_to FROM feedback WHERE id = ?', [fid])
  if (!f) fail(404, 'Feedback niet gevonden')
  const manager = can(user, 'feedback.manage')
  if (!manager && Number(f.assigned_to) !== user.id) fail(403, 'Deze feedback is niet aan jou toegewezen')
  const input = await body(request)
  const sets = []
  const args = []
  if (input.status !== undefined) {
    if (!FEEDBACK_STATUSES.includes(input.status)) fail(400, 'Onbekende status')
    sets.push('status = ?'); args.push(input.status)
  }
  if (input.assigned_to !== undefined) {
    if (!manager) fail(403, 'Alleen een beheerder kan feedback toewijzen')
    sets.push('assigned_to = ?'); args.push(input.assigned_to || null)
  }
  if (input.internal_note !== undefined) { sets.push('internal_note = ?'); args.push(str(input.internal_note, 5000)) }
  if (!sets.length) fail(400, 'Niets om te wijzigen')
  await conn.execute(`UPDATE feedback SET ${sets.join(', ')} WHERE id = ?`, [...args, fid])
  await audit(conn, user, 'feedback.update', 'feedback', fid, { status: input.status, assigned_to: input.assigned_to })
  return json({ ok: true })
}

// DELETE: persoonsgegevens (e-mail) uit een melding wissen, op verzoek of bij misbruik.
export async function onRequestDelete ({ params, data: { conn, user } }) {
  need(user, 'feedback.manage')
  const fid = id(params.id)
  await conn.execute('UPDATE feedback SET email = NULL, ip_hash = NULL WHERE id = ?', [fid])
  await audit(conn, user, 'feedback.erase_personal', 'feedback', fid)
  return json({ ok: true })
}
