// Instituten: groepen, roosters, agenda en boeken per instituut; beheerders zien alleen hun
// eigen instituten, een superbeheerder ziet alles.
import { test, after } from 'node:test'
import assert from 'node:assert/strict'
import { freshDb, call, checkQueries } from './helpers.js'
import { migrate } from '../lib/migrate.js'
import { startSession, hashPassword } from '../lib/auth.js'
import * as institutes from '../functions/api/admin/institutes/index.js'
import * as institute from '../functions/api/admin/institutes/[id].js'
import * as instMembers from '../functions/api/admin/institutes/[id]/members.js'
import * as adminMe from '../functions/api/admin/me.js'
import * as books from '../functions/api/admin/books/index.js'
import * as book from '../functions/api/admin/books/[id]/index.js'
import * as users from '../functions/api/admin/users/index.js'
import * as userRoute from '../functions/api/admin/users/[id]/index.js'
import * as invitations from '../functions/api/admin/invitations/index.js'
import * as acceptInvite from '../functions/api/admin/accept-invite.js'
import * as groups from '../functions/api/student/groups/index.js'
import * as members from '../functions/api/student/groups/members.js'
import * as blocks from '../functions/api/student/groups/blocks.js'
import * as days from '../functions/api/student/groups/days.js'
import * as agenda from '../functions/api/student/agenda.js'
import * as items from '../functions/api/student/agenda-items.js'

const conn = await freshDb()
after(() => conn.close())
const s = {}

async function account (email, role, institutesOf = []) {
  await conn.execute('INSERT INTO users (email, name, password_hash, totp_enabled) VALUES (?, ?, ?, 1)', [email, email.split('@')[0], await hashPassword('een-lang-wachtwoord')])
  const [{ id }] = await conn.execute('SELECT id FROM users WHERE email = ?', [email])
  await conn.execute('INSERT INTO user_roles (user_id, role_code) VALUES (?, ?)', [id, role])
  for (const i of institutesOf) await conn.execute('INSERT INTO user_institutes (user_id, institute_id) VALUES (?, ?)', [id, i])
  return { id: Number(id), cookie: (await startSession(conn, Number(id), true)).split(';')[0] }
}

test('bestaande boeken en roosters horen bij Instituut Ibn Al-Qayyim', async () => {
  await migrate(conn)
  const [inst] = await conn.execute('SELECT id, name_nl, name_ar FROM institutes')
  assert.deepEqual([Number(inst.id), inst.name_nl, inst.name_ar], [1, 'Instituut Ibn Al-Qayyim', 'معهد ابن القيم للعلوم الشرعية'])
  const [{ b, l }] = await conn.execute('SELECT (SELECT COUNT(*) FROM books) AS b, (SELECT COUNT(*) FROM book_institutes WHERE institute_id = 1) AS l')
  assert.ok(Number(b) > 0)
  assert.equal(Number(l), Number(b))
  const [{ g }] = await conn.execute('SELECT COUNT(*) AS g FROM class_groups WHERE institute_id = 1')
  assert.equal(Number(g), 4)
  s.boss = await account('baas@example.org', 'superadmin')
  s.admin1 = await account('beheer1@example.org', 'admin', [1])
  s.teacher1 = await account('docent1@example.org', 'teacher', [1])
  s.student1 = await account('student1@example.org', 'student')
  s.fresh = await account('nieuw@example.org', 'student')
})

test('superbeheerder maakt een tweede instituut met de standaardgroepen', async () => {
  const no = await call(conn, 'POST', '/api/admin/institutes', institutes, { cookie: s.admin1.cookie, body: { slug: 'x', name_nl: 'X', name_ar: 'س' } })
  assert.equal(no.status, 403)
  const r = await call(conn, 'POST', '/api/admin/institutes', institutes, { cookie: s.boss.cookie, body: { slug: 'tweede', name_nl: 'Tweede instituut', name_ar: 'المعهد الثاني' } })
  assert.equal(r.status, 200, JSON.stringify(r.data))
  s.inst2 = r.data.id
  const dup = await call(conn, 'POST', '/api/admin/institutes', institutes, { cookie: s.boss.cookie, body: { slug: 'tweede', name_nl: 'Y', name_ar: 'ي' } })
  assert.equal(dup.status, 400)
  const ren = await call(conn, 'PATCH', '/api/admin/institutes/x', institute, { cookie: s.boss.cookie, params: { id: String(s.inst2) }, body: { name_nl: 'Instituut Twee', name_ar: 'المعهد الثاني' } })
  assert.equal(ren.status, 200)
  const all = await call(conn, 'GET', '/api/admin/institutes', institutes, { cookie: s.boss.cookie })
  assert.deepEqual(all.data.map((i) => [i.name_nl, i.groups]), [['Instituut Ibn Al-Qayyim', 4], ['Instituut Twee', 4]])
  const own = await call(conn, 'GET', '/api/admin/institutes', institutes, { cookie: s.admin1.cookie })
  assert.deepEqual(own.data.map((i) => i.id), [1])
  const me = await call(conn, 'GET', '/api/admin/me', adminMe, { cookie: s.admin1.cookie })
  assert.deepEqual(me.data.institutes.map((i) => i.id), [1])
})

test('beheerder van instituut 2 via een uitnodiging; ziet alleen zijn eigen instituut', async () => {
  const inv = await call(conn, 'POST', '/api/admin/invitations', invitations, { cookie: s.boss.cookie, body: { email: 'beheer2@example.org', role: 'admin', institutes: [s.inst2] } })
  assert.equal(inv.status, 200, JSON.stringify(inv.data))
  const token = new URL(inv.data.link).searchParams.get('uitnodiging')
  const acc = await call(conn, 'POST', '/api/admin/accept-invite', acceptInvite, { body: { token, name: 'Beheer 2', password: 'nog-een-lang-wachtwoord' } })
  assert.equal(acc.status, 200)
  const [{ id }] = await conn.execute("SELECT id FROM users WHERE email = 'beheer2@example.org'")
  await conn.execute('UPDATE users SET totp_enabled = 1 WHERE id = ?', [id])
  s.admin2 = { id: Number(id), cookie: acc.cookie }
  const links = await conn.execute('SELECT institute_id FROM user_institutes WHERE user_id = ?', [id])
  assert.deepEqual(links.map((x) => Number(x.institute_id)), [s.inst2])
  // Een beheerder kan niet uitnodigen voor een instituut dat niet van hem is.
  const wrong = await call(conn, 'POST', '/api/admin/invitations', invitations, { cookie: s.admin2.cookie, body: { email: 'x@example.org', role: 'editor', institutes: [1] } })
  assert.equal(wrong.status, 403)
  const visible = await call(conn, 'GET', '/api/admin/invitations', invitations, { cookie: s.admin1.cookie })
  assert.equal(visible.data.length, 0)
})

test('boeken: alleen van je eigen instituten; een boek kan bij meer instituten horen', async () => {
  const b1 = await call(conn, 'GET', '/api/admin/books', books, { cookie: s.admin1.cookie })
  assert.ok(b1.data.length > 0)
  assert.ok(b1.data.every((b) => b.institutes.includes(1)))
  const b2 = await call(conn, 'GET', '/api/admin/books', books, { cookie: s.admin2.cookie })
  assert.equal(b2.data.length, 0)
  const target = b1.data[0]
  const denied = await call(conn, 'GET', '/api/admin/books/x', book, { cookie: s.admin2.cookie, params: { id: String(target.id) } })
  assert.equal(denied.status, 403)
  // De superbeheerder deelt het boek met instituut 2.
  const share = await call(conn, 'PATCH', '/api/admin/books/x', book, { cookie: s.boss.cookie, params: { id: String(target.id) }, body: { institutes: [1, s.inst2] } })
  assert.equal(share.status, 200, JSON.stringify(share.data))
  const now2 = await call(conn, 'GET', '/api/admin/books', books, { cookie: s.admin2.cookie })
  assert.deepEqual(now2.data.map((b) => b.id), [target.id])
  // Beheerder 2 haalt het weg bij zijn instituut; de koppeling met instituut 1 blijft staan.
  const drop = await call(conn, 'PATCH', '/api/admin/books/x', book, { cookie: s.admin2.cookie, params: { id: String(target.id) }, body: { institutes: [] } })
  assert.equal(drop.status, 200)
  const after = await call(conn, 'GET', '/api/admin/books/x', book, { cookie: s.boss.cookie, params: { id: String(target.id) } })
  assert.deepEqual(after.data.book.institutes, [1])
  // Een nieuw boek van beheerder 2 hoort bij zijn instituut.
  const nb = await call(conn, 'POST', '/api/admin/books', books, { cookie: s.admin2.cookie, body: { slug: 'nieuw-boek', title_ar: 'كتاب' } })
  assert.equal(nb.status, 200, JSON.stringify(nb.data))
  conn.queries = 0
  const mine = await call(conn, 'GET', '/api/admin/books', books, { cookie: s.admin2.cookie })
  checkQueries(conn.queries, 'GET /api/admin/books')
  assert.deepEqual(mine.data.map((b) => [b.slug, b.institutes]), [['nieuw-boek', [s.inst2]]])
})

test('gebruikers: beheerder ziet alleen zijn instituut en nieuwe accounts', async () => {
  const u2 = await call(conn, 'GET', '/api/admin/users', users, { cookie: s.admin2.cookie })
  const emails = u2.data.map((u) => u.email)
  assert.ok(emails.includes('beheer2@example.org'))
  assert.ok(emails.includes('nieuw@example.org'))
  assert.ok(!emails.includes('docent1@example.org'))
  assert.ok(!emails.includes('beheer1@example.org'))
  const no = await call(conn, 'PATCH', '/api/admin/users/x', userRoute, { cookie: s.admin2.cookie, params: { id: String(s.teacher1.id) }, body: { roles: ['admin'] } })
  assert.equal(no.status, 403)
  const link = await call(conn, 'PATCH', '/api/admin/users/x', userRoute, { cookie: s.admin2.cookie, params: { id: String(s.fresh.id) }, body: { institutes: [s.inst2] } })
  assert.equal(link.status, 200, JSON.stringify(link.data))
  const notMine = await call(conn, 'PATCH', '/api/admin/users/x', userRoute, { cookie: s.admin2.cookie, params: { id: String(s.fresh.id) }, body: { institutes: [1] } })
  assert.equal(notMine.status, 403)
  // De superbeheerder koppelt de docent aan beide instituten.
  const both = await call(conn, 'PATCH', '/api/admin/users/x', userRoute, { cookie: s.boss.cookie, params: { id: String(s.teacher1.id) }, body: { institutes: [1, s.inst2] } })
  assert.equal(both.status, 200)
  const all = await call(conn, 'GET', '/api/admin/users', users, { cookie: s.boss.cookie })
  assert.deepEqual(all.data.find((u) => u.email === 'docent1@example.org').institutes.sort(), [1, s.inst2].sort())
  // Nu ziet beheerder 1 het nieuwe account niet meer (het hoort bij instituut 2).
  const u1 = await call(conn, 'GET', '/api/admin/users', users, { cookie: s.admin1.cookie })
  assert.ok(!u1.data.some((u) => u.email === 'nieuw@example.org'))
})

test('groepen, rooster en agenda per instituut', async () => {
  const g2 = await call(conn, 'GET', '/api/student/groups?institute=1', groups, { cookie: s.admin2.cookie })
  assert.equal(g2.status, 200, JSON.stringify(g2.data))
  assert.equal(g2.data.institute.id, s.inst2) // instituut 1 is niet van hem
  assert.deepEqual(g2.data.institutes.map((i) => i.id), [s.inst2])
  assert.equal(g2.data.blocks.length, 0)
  assert.equal(g2.data.days.length, 0)
  s.g2 = Object.fromEntries(g2.data.groups.map((g) => [g.code, g.id]))
  const g1 = await call(conn, 'GET', '/api/student/groups', groups, { cookie: s.admin1.cookie })
  s.g1 = Object.fromEntries(g1.data.groups.map((g) => [g.code, g.id]))
  const boss = await call(conn, 'GET', '/api/student/groups?institute=' + s.inst2, groups, { cookie: s.boss.cookie })
  assert.equal(boss.data.institute.id, s.inst2)
  assert.equal(boss.data.institutes.length, 2)

  const blk = await call(conn, 'POST', '/api/student/groups/blocks', blocks, { cookie: s.admin2.cookie, body: { institute: s.inst2, cohort: 'A', weekday: 6, start_time: '10:00', end_time: '12:00', subject_nl: 'Fiqh', subject_ar: 'الفقه' } })
  assert.equal(blk.status, 200, JSON.stringify(blk.data))
  const blkOther = await call(conn, 'POST', '/api/student/groups/blocks', blocks, { cookie: s.admin2.cookie, body: { institute: 1, cohort: 'A', weekday: 6, start_time: '10:00', end_time: '12:00' } })
  assert.equal(blkOther.status, 403)
  const old = g1.data.blocks[0]
  const editOther = await call(conn, 'PATCH', '/api/student/groups/blocks', blocks, { cookie: s.admin2.cookie, body: { id: old.id, subject_nl: 'x' } })
  assert.equal(editOther.status, 403)
  const yr = await call(conn, 'POST', '/api/student/groups/days', days, { cookie: s.admin2.cookie, body: { institute: s.inst2, kind: 'year', date_from: '2026-09-01', date_to: '2027-07-15', title_nl: 'Schooljaar', title_ar: 'العام الدراسي' } })
  assert.equal(yr.status, 200)
  const dayOther = await call(conn, 'DELETE', '/api/student/groups/days?id=' + g1.data.days[0].id, days, { cookie: s.admin2.cookie })
  assert.equal(dayOther.status, 403)
  const memOther = await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.admin2.cookie, body: { group: s.g1['A-m'], users: [s.fresh.id], role: 'student' } })
  assert.equal(memOther.status, 403)

  // Een student in beide instituten: per instituut één groep.
  await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.admin1.cookie, body: { group: s.g1['A-m'], users: [s.student1.id], role: 'student' } })
  const add2 = await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.boss.cookie, body: { group: s.g2['A-m'], users: [s.student1.id], role: 'student' } })
  assert.equal(add2.status, 200, JSON.stringify(add2.data))
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM class_group_members WHERE user_id = ?', [s.student1.id])
  assert.equal(Number(n), 2)
  await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.admin2.cookie, body: { group: s.g2['A-m'], users: [s.teacher1.id], role: 'teacher' } })

  conn.queries = 0
  await call(conn, 'GET', '/api/student/groups', groups, { cookie: s.boss.cookie })
  checkQueries(conn.queries, 'GET /api/student/groups')
  // Agenda: per instituut te kiezen; standaard het eerste instituut met een eigen groep.
  const a1 = await call(conn, 'GET', '/api/student/agenda?from=2027-01-04&weeks=1', agenda, { cookie: s.student1.cookie })
  assert.equal(a1.status, 200, JSON.stringify(a1.data))
  assert.equal(a1.data.institute.id, 1)
  assert.deepEqual(a1.data.institutes.map((i) => i.id), [1, s.inst2])
  assert.ok(a1.data.blocks.every((b) => b.institute_id === 1))
  const a2 = await call(conn, 'GET', `/api/student/agenda?from=2027-01-04&weeks=1&institute=${s.inst2}`, agenda, { cookie: s.student1.cookie })
  assert.equal(a2.data.institute.id, s.inst2)
  assert.deepEqual(a2.data.groups.map((g) => g.id), [s.g2['A-m']])
  assert.deepEqual(a2.data.calendar.filter((d) => d.lessons.length).map((d) => d.date), ['2027-01-09'])
  const adm2 = await call(conn, 'GET', '/api/student/agenda?from=2027-01-04&weeks=1&institute=1', agenda, { cookie: s.admin2.cookie })
  assert.equal(adm2.data.institute.id, s.inst2)
  assert.equal(adm2.data.manager, true)
  assert.equal(adm2.data.groups.length, 4)

  // Agenda-items: beheerder 2 alleen voor zijn instituut; docent voor zijn groep in instituut 2.
  const it = await call(conn, 'POST', '/api/student/agenda-items', items, { cookie: s.admin2.cookie, body: { kind: 'test', group: 'A', institute: s.inst2, date: '2027-01-09', title_nl: 'Toets' } })
  assert.equal(it.status, 200, JSON.stringify(it.data))
  const itOther = await call(conn, 'POST', '/api/student/agenda-items', items, { cookie: s.admin2.cookie, body: { kind: 'test', group: 'A', institute: 1, date: '2027-01-08', title_nl: 'Toets' } })
  assert.equal(itOther.status, 403)
  const itTeacher = await call(conn, 'POST', '/api/student/agenda-items', items, { cookie: s.teacher1.cookie, body: { kind: 'homework', group: s.g2['A-m'], date: '2027-01-09', title_nl: 'Lezen' } })
  assert.equal(itTeacher.status, 200, JSON.stringify(itTeacher.data))
  const seen = await call(conn, 'GET', `/api/student/agenda?from=2027-01-04&weeks=1&institute=${s.inst2}`, agenda, { cookie: s.student1.cookie })
  assert.deepEqual(seen.data.items.map((i) => i.kind).sort(), ['homework', 'test'])
  const seen1 = await call(conn, 'GET', '/api/student/agenda?from=2027-01-04&weeks=1&institute=1', agenda, { cookie: s.student1.cookie })
  assert.equal(seen1.data.items.length, 0)
  const delOther = await call(conn, 'DELETE', '/api/student/agenda-items?id=' + it.data.id, items, { cookie: s.admin1.cookie })
  assert.equal(delOther.status, 403)
})

test('uitnodiging met meer rollen tegelijk', async () => {
  const inv = await call(conn, 'POST', '/api/admin/invitations', invitations, { cookie: s.boss.cookie, body: { email: 'twee-rollen@example.org', roles: ['teacher', 'admin'], institutes: [1] } })
  assert.equal(inv.status, 200, JSON.stringify(inv.data))
  const list = await call(conn, 'GET', '/api/admin/invitations', invitations, { cookie: s.boss.cookie })
  assert.equal(list.data.find((i) => i.email === 'twee-rollen@example.org').role_code, 'admin,teacher')
  const token = new URL(inv.data.link).searchParams.get('uitnodiging')
  await call(conn, 'POST', '/api/admin/accept-invite', acceptInvite, { body: { token, name: 'Twee', password: 'nog-een-lang-wachtwoord' } })
  const all = await call(conn, 'GET', '/api/admin/users', users, { cookie: s.boss.cookie })
  assert.deepEqual(all.data.find((u) => u.email === 'twee-rollen@example.org').roles.sort(), ['admin', 'teacher'])
  const bad = await call(conn, 'POST', '/api/admin/invitations', invitations, { cookie: s.admin1.cookie, body: { email: 'x2@example.org', roles: ['superadmin', 'teacher'] } })
  assert.equal(bad.status, 403)
  const none = await call(conn, 'POST', '/api/admin/invitations', invitations, { cookie: s.boss.cookie, body: { email: 'x3@example.org', roles: [] } })
  assert.equal(none.status, 400)
})

test('instituutpagina: studenten koppelen en loskoppelen', async () => {
  const page = await call(conn, 'GET', '/api/admin/institutes/x', institute, { cookie: s.admin2.cookie, params: { id: String(s.inst2) } })
  assert.equal(page.status, 200, JSON.stringify(page.data))
  assert.ok(page.data.members.some((m) => m.email === 'student1@example.org' && m.groups.length === 1 && !m.linked))
  const other = await call(conn, 'GET', '/api/admin/institutes/x', institute, { cookie: s.admin2.cookie, params: { id: '1' } })
  assert.equal(other.status, 403)
  const st = await account('student9@example.org', 'student')
  const p2 = await call(conn, 'GET', '/api/admin/institutes/x', institute, { cookie: s.admin2.cookie, params: { id: String(s.inst2) } })
  assert.ok(p2.data.candidates.some((u) => u.id === st.id))
  const add = await call(conn, 'POST', '/api/admin/institutes/x/members', instMembers, { cookie: s.admin2.cookie, params: { id: String(s.inst2) }, body: { users: [st.id] } })
  assert.equal(add.status, 200, JSON.stringify(add.data))
  const notMine = await call(conn, 'POST', '/api/admin/institutes/x/members', instMembers, { cookie: s.admin2.cookie, params: { id: String(s.inst2) }, body: { users: [s.admin1.id] } })
  assert.equal(notMine.status, 403)
  const p3 = await call(conn, 'GET', '/api/admin/institutes/x', institute, { cookie: s.admin1.cookie, params: { id: '1' } })
  assert.ok(!p3.data.candidates.some((u) => u.id === st.id)) // hoort nu bij instituut 2
  const del = await call(conn, 'DELETE', `/api/admin/institutes/x/members?user=${s.student1.id}`, instMembers, { cookie: s.admin2.cookie, params: { id: String(s.inst2) }, body: {} })
  assert.equal(del.status, 200)
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM class_group_members m JOIN class_groups g ON g.id = m.group_id WHERE m.user_id = ? AND g.institute_id = ?', [s.student1.id, s.inst2])
  assert.equal(Number(n), 0)
})
