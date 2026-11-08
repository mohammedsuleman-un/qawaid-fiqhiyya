// PATCH {name_nl, name_ar}: naam van een organisatie wijzigen (alleen de superbeheerder).
import { json, body, need, fail, str, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { needSuper } from '../../../../lib/institutes.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'institutes.manage')
  needSuper(user)
  const orgId = id(params.id)
  const input = await body(request)
  const nameNl = str(input.name_nl, 255)
  const nameAr = str(input.name_ar, 255)
  if (!nameNl || !nameAr) fail(400, 'Vul de Nederlandse en Arabische naam in')
  const [cur] = await conn.execute('SELECT id FROM organizations WHERE id = ?', [orgId])
  if (!cur) fail(404, 'Organisatie niet gevonden')
  await conn.execute('UPDATE organizations SET name_nl = ?, name_ar = ? WHERE id = ?', [nameNl, nameAr, orgId])
  await audit(conn, user, 'organization.edit', 'organization', orgId, { name_nl: nameNl, name_ar: nameAr })
  return json({ ok: true })
}
