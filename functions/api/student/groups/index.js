// GET /api/student/groups (groups.manage): de groepen met studenten en docenten, het
// weekrooster, het jaarrooster (vakanties, examens, bijzondere dagen) en de accounts die
// je aan een groep kunt toevoegen.
import { json, need } from '../../../../lib/http.js'
import { allGroups, allBlocks, allDays } from '../../../../lib/agenda.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'groups.manage')
  const groups = await allGroups(conn)
  const members = await conn.execute(`SELECT m.group_id, m.user_id, m.role, u.name, u.email FROM class_group_members m JOIN users u ON u.id = m.user_id
    WHERE u.status = 'active' ORDER BY u.name, u.email`)
  const users = await conn.execute(`SELECT u.id, u.name, u.email, GROUP_CONCAT(r.role_code) AS roles FROM users u LEFT JOIN user_roles r ON r.user_id = u.id
    WHERE u.status = 'active' GROUP BY u.id, u.name, u.email ORDER BY u.name, u.email`)
  return json({
    groups: groups.map((g) => ({
      ...g,
      members: members.filter((m) => Number(m.group_id) === g.id).map((m) => ({ id: Number(m.user_id), name: m.name, email: m.email, role: m.role }))
    })),
    blocks: await allBlocks(conn),
    days: await allDays(conn),
    users: users.map((u) => ({ id: Number(u.id), name: u.name, email: u.email, roles: String(u.roles || '').split(',').filter(Boolean) }))
  })
}
