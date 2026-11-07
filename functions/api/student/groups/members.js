// Studenten en docenten in een groep zetten (groups.manage).
// POST {group, users: [id], role: 'student'|'teacher'}. Een student zit per instituut in één
// groep: toevoegen haalt hem uit zijn vorige groep van hetzelfde instituut. Een docent kan in meer groepen lesgeven.
// DELETE ?group=&user=: uit de groep halen (de aanwezigheid blijft bewaard).
import { json, body, need, fail, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { allGroups, marks } from '../../../../lib/agenda.js'
import { needInstitute, userScope } from '../../../../lib/institutes.js'

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const input = await body(request)
  const group = (await allGroups(conn)).find((g) => g.id === id(input.group))
  if (!group) fail(404, 'Groep niet gevonden')
  await needInstitute(conn, user, group.institute_id)
  const role = ['student', 'teacher'].includes(input.role) ? input.role : fail(400, 'Kies student of docent')
  const ids = [...new Set((Array.isArray(input.users) ? input.users : [input.users]).map(Number).filter((n) => Number.isInteger(n) && n > 0))].slice(0, 200)
  if (!ids.length) fail(400, 'Kies minstens één account')
  const scope = await userScope(conn, user)
  const found = await conn.execute(`SELECT u.* FROM users u WHERE u.status = 'active' AND u.id IN (${marks(ids)})${scope ? ' AND ' + scope.sql : ''}`, [...ids, ...(scope ? scope.args : [])])
  if (found.length !== ids.length) fail(400, 'Onbekend account')
  // Broeders alleen in een broedergroep, zusters alleen in een zustergroep.
  if (role === 'student' && found.some((u) => u.gender && u.gender !== group.gender)) fail(400, group.gender === 'm' ? 'Dit is een groep voor broeders' : 'Dit is een groep voor zusters')
  if (role === 'student') {
    await conn.execute(`DELETE FROM class_group_members WHERE role = 'student' AND user_id IN (${marks(ids)})
      AND group_id IN (SELECT id FROM class_groups WHERE institute_id = ?)`, [...ids, group.institute_id])
  }
  else await conn.execute(`DELETE FROM class_group_members WHERE group_id = ? AND user_id IN (${marks(ids)})`, [group.id, ...ids])
  await conn.execute(`INSERT INTO class_group_members (group_id, user_id, role) VALUES ${ids.map(() => '(?, ?, ?)').join(', ')}
    ON DUPLICATE KEY UPDATE role = VALUES(role)`, ids.flatMap((u) => [group.id, u, role]))
  await audit(conn, user, 'group.members.add', 'class_group', group.id, { role, users: ids })
  return json({ ok: true, added: ids.length })
}

export async function onRequestDelete ({ request, data: { conn, user } }) {
  need(user, 'groups.manage')
  const q = new URL(request.url).searchParams
  const groupId = id(q.get('group'))
  const userId = id(q.get('user'))
  const [group] = await conn.execute('SELECT institute_id FROM class_groups WHERE id = ?', [groupId])
  if (!group) fail(404, 'Groep niet gevonden')
  await needInstitute(conn, user, group.institute_id)
  await conn.execute('DELETE FROM class_group_members WHERE group_id = ? AND user_id = ?', [groupId, userId])
  await audit(conn, user, 'group.members.remove', 'class_group', groupId, { user: userId })
  return json({ ok: true })
}
