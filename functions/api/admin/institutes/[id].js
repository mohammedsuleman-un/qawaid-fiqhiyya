// PATCH {name_nl, name_ar} (institutes.manage): naam van een instituut wijzigen.
import { json, body, need, fail, str, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'institutes.manage')
  const instituteId = id(params.id)
  const input = await body(request)
  const nameNl = str(input.name_nl, 255)
  const nameAr = str(input.name_ar, 255)
  if (!nameNl || !nameAr) fail(400, 'Vul de Nederlandse en Arabische naam in')
  const [cur] = await conn.execute('SELECT id FROM institutes WHERE id = ?', [instituteId])
  if (!cur) fail(404, 'Instituut niet gevonden')
  await conn.execute('UPDATE institutes SET name_nl = ?, name_ar = ? WHERE id = ?', [nameNl, nameAr, instituteId])
  await audit(conn, user, 'institute.edit', 'institute', instituteId, { name_nl: nameNl, name_ar: nameAr })
  return json({ ok: true })
}
