// Eén organisatie (alleen de superbeheerder).
// GET: de organisatie, haar instituten, iedereen die erbij hoort (direct, via een instituut of
// via een groep) met rollen, en de accounts die nog nergens bij horen of bij een andere organisatie.
// PATCH {name_nl, name_ar}: naam wijzigen.
import { json, body, need, fail, str, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { needSuper, allInstitutes, inOrganization } from '../../../../lib/institutes.js'

const roles = (r) => String(r || '').split(',').filter(Boolean)

export async function onRequestGet ({ params, data: { conn, user } }) {
  need(user, 'institutes.manage')
  needSuper(user)
  const orgId = id(params.id)
  const [org] = await conn.execute('SELECT id, name_nl, name_ar FROM organizations WHERE id = ?', [orgId])
  if (!org) fail(404, 'Organisatie niet gevonden')
  const institutes = (await allInstitutes(conn)).filter((i) => i.organization_id === orgId)
  const cols = `u.id, u.name, u.email, u.status, u.gender,
    (SELECT GROUP_CONCAT(r.role_code) FROM user_roles r WHERE r.user_id = u.id) AS roles,
    (SELECT GROUP_CONCAT(o.organization_id) FROM user_organizations o WHERE o.user_id = u.id) AS orgs`
  const members = await conn.execute(`SELECT ${cols},
      EXISTS (SELECT 1 FROM user_organizations uo WHERE uo.user_id = u.id AND uo.organization_id = ?) AS direct,
      (SELECT GROUP_CONCAT(DISTINCT x.institute_id) FROM user_institutes x JOIN institutes xi ON xi.id = x.institute_id WHERE x.user_id = u.id AND xi.organization_id = ?) AS insts
    FROM users u WHERE ${inOrganization('u')} ORDER BY u.name, u.email`, [orgId, orgId, orgId, orgId, orgId])
  const others = await conn.execute(`SELECT ${cols} FROM users u WHERE u.status = 'active' AND NOT ${inOrganization('u')}
    AND NOT EXISTS (SELECT 1 FROM user_roles r WHERE r.user_id = u.id AND r.role_code = 'superadmin')
    ORDER BY u.name, u.email LIMIT 2000`, [orgId, orgId, orgId])
  const row = (u) => ({ id: Number(u.id), name: u.name, email: u.email, status: u.status, gender: u.gender || null, roles: roles(u.roles),
    organizations: String(u.orgs || '').split(',').filter(Boolean).map(Number) })
  return json({
    organization: { id: Number(org.id), name_nl: org.name_nl, name_ar: org.name_ar },
    institutes,
    members: members.map((u) => ({ ...row(u), direct: Number(u.direct) === 1, institutes: String(u.insts || '').split(',').filter(Boolean).map(Number) })),
    candidates: others.map(row)
  })
}

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
