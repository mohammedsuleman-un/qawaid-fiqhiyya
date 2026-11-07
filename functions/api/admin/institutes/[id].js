// GET (users.manage, eigen instituut): het instituut met zijn groepen, de leden (gekoppelde
// medewerkers en studenten, en wie in een groep van dit instituut zit) en de accounts die je
// nog kunt toevoegen.
// PATCH {name_nl, name_ar} (institutes.manage): naam van een instituut wijzigen.
import { json, body, need, fail, str, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { allInstitutes, needInstitute, userScope } from '../../../../lib/institutes.js'

export async function onRequestGet ({ params, data: { conn, user } }) {
  need(user, 'users.manage')
  const instituteId = id(params.id)
  await needInstitute(conn, user, instituteId)
  const institute = (await allInstitutes(conn)).find((i) => i.id === instituteId)
  if (!institute) fail(404, 'Instituut niet gevonden')
  const groups = await conn.execute(`SELECT g.id, g.code, g.name_nl, g.name_ar,
      (SELECT COUNT(*) FROM class_group_members m WHERE m.group_id = g.id AND m.role = 'student') AS students
    FROM class_groups g WHERE g.institute_id = ? ORDER BY g.position, g.id`, [instituteId])
  const rows = await conn.execute(`SELECT u.id, u.name, u.email, u.status,
      (SELECT GROUP_CONCAT(r.role_code) FROM user_roles r WHERE r.user_id = u.id) AS roles,
      EXISTS (SELECT 1 FROM user_institutes x WHERE x.user_id = u.id AND x.institute_id = ?) AS linked,
      (SELECT GROUP_CONCAT(CONCAT(m.group_id, ':', m.role)) FROM class_group_members m JOIN class_groups g ON g.id = m.group_id
        WHERE m.user_id = u.id AND g.institute_id = ?) AS ingroups
    FROM users u WHERE EXISTS (SELECT 1 FROM user_institutes x WHERE x.user_id = u.id AND x.institute_id = ?)
      OR EXISTS (SELECT 1 FROM class_group_members m JOIN class_groups g ON g.id = m.group_id WHERE m.user_id = u.id AND g.institute_id = ?)
    ORDER BY u.name, u.email`, [instituteId, instituteId, instituteId, instituteId])
  const scope = await userScope(conn, user)
  const candidates = await conn.execute(`SELECT u.id, u.name, u.email, (SELECT GROUP_CONCAT(r.role_code) FROM user_roles r WHERE r.user_id = u.id) AS roles
    FROM users u WHERE u.status = 'active' AND NOT EXISTS (SELECT 1 FROM user_institutes x WHERE x.user_id = u.id AND x.institute_id = ?)
    ${scope ? ' AND ' + scope.sql : ''} ORDER BY u.name, u.email LIMIT 1000`, [instituteId, ...(scope ? scope.args : [])])
  const roles = (r) => String(r || '').split(',').filter(Boolean)
  return json({
    institute,
    groups: groups.map((g) => ({ ...g, id: Number(g.id), students: Number(g.students) })),
    members: rows.map((u) => ({ id: Number(u.id), name: u.name, email: u.email, status: u.status, roles: roles(u.roles), linked: Number(u.linked) === 1,
      groups: String(u.ingroups || '').split(',').filter(Boolean).map((x) => { const [g, role] = x.split(':'); return { id: Number(g), role } }) })),
    candidates: candidates.filter((u) => !rows.some((m) => Number(m.id) === Number(u.id))).map((u) => ({ id: Number(u.id), name: u.name, email: u.email, roles: roles(u.roles) }))
  })
}

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
