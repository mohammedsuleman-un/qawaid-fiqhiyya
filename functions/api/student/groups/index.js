// GET /api/student/groups?institute= (groups.manage): voor één instituut de groepen met
// studenten en docenten, het weekrooster, het jaarrooster (vakanties, examens, bijzondere
// dagen) en de accounts die je aan een groep kunt toevoegen. Je ziet alleen de instituten
// waaraan je gekoppeld bent (een superbeheerder ziet alle).
import { json, need, fail } from '../../../../lib/http.js'
import { allGroups, allBlocks, allDays, marks } from '../../../../lib/agenda.js'
import { allInstitutes, myInstituteIds, userScope } from '../../../../lib/institutes.js'

export async function onRequestGet ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const mineIds = await myInstituteIds(conn, user)
  const institutes = (await allInstitutes(conn)).filter((i) => mineIds.includes(i.id))
  if (!institutes.length) fail(403, 'Je bent nog aan geen instituut gekoppeld')
  const want = Number(new URL(request.url).searchParams.get('institute'))
  const inst = institutes.find((i) => i.id === want) || institutes[0]
  const groups = (await allGroups(conn)).filter((g) => g.institute_id === inst.id)
  const ids = groups.map((g) => g.id)
  const members = ids.length ? await conn.execute(`SELECT m.group_id, m.user_id, m.role, u.name, u.email FROM class_group_members m JOIN users u ON u.id = m.user_id
    WHERE u.status = 'active' AND m.group_id IN (${marks(ids)}) ORDER BY u.name, u.email`, ids) : []
  const scope = await userScope(conn, user)
  const users = await conn.execute(`SELECT u.*, (SELECT GROUP_CONCAT(r.role_code) FROM user_roles r WHERE r.user_id = u.id) AS roles FROM users u
    WHERE u.status = 'active'${scope ? ' AND ' + scope.sql : ''} ORDER BY u.name, u.email`, scope ? scope.args : [])
  return json({
    institute: inst,
    institutes,
    groups: groups.map((g) => ({
      ...g,
      members: members.filter((m) => Number(m.group_id) === g.id).map((m) => ({ id: Number(m.user_id), name: m.name, email: m.email, role: m.role }))
    })),
    blocks: await allBlocks(conn, inst.id),
    days: await allDays(conn, inst.id),
    users: users.map((u) => ({ id: Number(u.id), name: u.name, email: u.email, gender: u.gender || null, roles: String(u.roles || '').split(',').filter(Boolean) }))
  })
}
