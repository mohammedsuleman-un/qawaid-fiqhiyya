// GET: overzicht voor de student: wie ben ik, mijn boeken met voortgang en planning,
// geplande toetsen en de laatste resultaten.
// PATCH {name, lang, gender}: eigen naam, taal en broeder/zuster (alleen zolang die nog
// niet is ingevuld; daarna wijzigt een beheerder het).
import { json, body, str } from '../../../lib/http.js'
import { can } from '../../../lib/rbac.js'
import { myBooks, testsForStudent, myAttempts } from '../../../lib/student.js'
import { myGroups } from '../../../lib/agenda.js'
import { GENDERS, setGender } from '../../../lib/users.js'

export async function onRequestGet ({ data: { conn, user } }) {
  const [books, tests, attempts] = [await myBooks(conn, user.id), await testsForStudent(conn, user.id), await myAttempts(conn, user.id, 10)]
  // Valt terug op 'geen groepen' zolang migratie 161 nog niet gedraaid is.
  const groups = await myGroups(conn, user).catch(() => ({ student: [], teacher: [] }))
  const [g] = await conn.execute('SELECT gender FROM users WHERE id = ?', [user.id]).catch(() => [{ gender: 'x' }])
  return json({
    user: { id: user.id, name: user.name, email: user.email, lang: user.lang, roles: user.roles,
      teacher: can(user, 'tests.manage'), reviewer: can(user, 'content.review'), staff: user.permissions.has('content.edit'),
      groupsManager: can(user, 'groups.manage'), recorder: can(user, 'attendance.record'), inGroup: groups.student.length + groups.teacher.length > 0,
      gender: g?.gender || null, student: user.roles.includes('student') },
    books, tests, attempts
  })
}

export async function onRequestPatch ({ request, data: { conn, user } }) {
  const input = await body(request)
  if (input.name !== undefined) await conn.execute('UPDATE users SET name = ? WHERE id = ?', [str(input.name, 255), user.id])
  if (['nl', 'ar'].includes(input.lang)) await conn.execute('UPDATE users SET lang = ? WHERE id = ?', [input.lang, user.id])
  if (GENDERS.includes(input.gender)) {
    const [cur] = await conn.execute('SELECT gender FROM users WHERE id = ?', [user.id])
    if (!cur?.gender) await setGender(conn, user.id, input.gender)
  }
  return json({ ok: true })
}
