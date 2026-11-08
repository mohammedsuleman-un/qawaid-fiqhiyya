// Organisaties (alleen de superbeheerder). Een organisatie heeft instituten en beheerders;
// wie aan een organisatie gekoppeld is, ziet alle instituten ervan en niets daarbuiten.
// GET: alle organisaties met hun instituten en gekoppelde medewerkers, en de medewerkers
// die je nog kunt koppelen. POST {name_nl, name_ar}: nieuwe organisatie.
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { insert } from '../../../../lib/content.js'
import { allInstitutes, needSuper } from '../../../../lib/institutes.js'

const roles = (r) => String(r || '').split(',').filter(Boolean)

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'institutes.manage')
  needSuper(user)
  const orgs = await conn.execute('SELECT id, name_nl, name_ar, position FROM organizations ORDER BY position, id')
  const institutes = await allInstitutes(conn)
  const links = await conn.execute(`SELECT o.organization_id, u.id, u.name, u.email, u.status,
      (SELECT GROUP_CONCAT(r.role_code) FROM user_roles r WHERE r.user_id = u.id) AS roles
    FROM user_organizations o JOIN users u ON u.id = o.user_id ORDER BY u.name, u.email`)
  const staff = await conn.execute(`SELECT u.id, u.name, u.email, (SELECT GROUP_CONCAT(r.role_code) FROM user_roles r WHERE r.user_id = u.id) AS roles
    FROM users u WHERE u.status = 'active' AND EXISTS (SELECT 1 FROM user_roles r WHERE r.user_id = u.id AND r.role_code IN ('admin', 'editor', 'teacher'))
    ORDER BY u.name, u.email LIMIT 1000`)
  const member = (u) => ({ id: Number(u.id), name: u.name, email: u.email, status: u.status, roles: roles(u.roles) })
  return json({
    organizations: orgs.map((o) => ({
      id: Number(o.id), name_nl: o.name_nl, name_ar: o.name_ar,
      institutes: institutes.filter((i) => i.organization_id === Number(o.id)).map((i) => i.id),
      members: links.filter((l) => Number(l.organization_id) === Number(o.id)).map(member)
    })),
    institutes,
    staff: staff.map(member)
  })
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'institutes.manage')
  needSuper(user)
  const input = await body(request)
  const nameNl = str(input.name_nl, 255)
  const nameAr = str(input.name_ar, 255)
  if (!nameNl || !nameAr) fail(400, 'Vul de Nederlandse en Arabische naam in')
  const [{ n }] = await conn.execute('SELECT COALESCE(MAX(position), 0) + 1 AS n FROM organizations')
  const newId = await insert(conn, 'INSERT INTO organizations (name_nl, name_ar, position) VALUES (?, ?, ?)', [nameNl, nameAr, Number(n)])
  await audit(conn, user, 'organization.create', 'organization', newId, { name_nl: nameNl, name_ar: nameAr })
  return json({ ok: true, id: newId })
}
