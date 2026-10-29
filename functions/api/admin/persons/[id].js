// PATCH {name_ar, name_nl, kind, death_hijri, aliases}: gegevens van een persoon (content.create).
import { json, body, need, fail, id } from '../../../../lib/http.js'
import { personFields } from './index.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'content.create')
  const pid = id(params.id)
  const [p] = await conn.execute('SELECT id FROM persons WHERE id = ?', [pid])
  if (!p) fail(404, 'Persoon niet gevonden')
  const f = personFields(await body(request))
  if (!f.name_ar) fail(400, 'Vul de Arabische naam in')
  await conn.execute('UPDATE persons SET name_ar = ?, name_nl = ?, kind = ?, death_hijri = ?, aliases = ? WHERE id = ?',
    [f.name_ar, f.name_nl, f.kind, f.death_hijri, f.aliases, pid])
  await audit(conn, user, 'person.update', 'person', pid, { name_ar: f.name_ar })
  return json({ ok: true })
}
