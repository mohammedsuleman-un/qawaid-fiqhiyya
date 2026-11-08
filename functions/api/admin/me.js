// GET: wie ben ik, met rollen en rechten (de interface gebruikt dit alleen om knoppen te tonen).
// PATCH {name, lang}: eigen naam en taal van de beheeromgeving.
import { json, body, str } from '../../../lib/http.js'
import { allInstitutes, myInstituteIds, myOrganizationIds, organizationsByIds } from '../../../lib/institutes.js'

// institutes: de instituten waaraan je gekoppeld bent (een superbeheerder: alle); organizations idem.
export async function onRequestGet ({ data: { conn, user } }) {
  const mine = await myInstituteIds(conn, user)
  const institutes = mine.length ? (await allInstitutes(conn)).filter((i) => mine.includes(i.id)) : []
  return json({ id: user.id, email: user.email, name: user.name, lang: user.lang, totp_enabled: user.totp_enabled,
    roles: user.roles, permissions: [...user.permissions], institutes, organizations: await organizationsByIds(conn, await myOrganizationIds(conn, user)) })
}

export async function onRequestPatch ({ request, data: { conn, user } }) {
  const input = await body(request)
  if (input.name !== undefined) await conn.execute('UPDATE users SET name = ? WHERE id = ?', [str(input.name, 255), user.id])
  if (['nl', 'ar'].includes(input.lang)) await conn.execute('UPDATE users SET lang = ? WHERE id = ?', [input.lang, user.id])
  return json({ ok: true })
}
