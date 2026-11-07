// Lesagenda: groepen, weekrooster, vakanties/examens, aanwezigheid, toetsen en huiswerk.
import { test, after } from 'node:test'
import assert from 'node:assert/strict'
import { freshDb, call } from './helpers.js'
import { migrate } from '../lib/migrate.js'
import { startSession, hashPassword } from '../lib/auth.js'
import { calendar, schoolYear, weekday, monday, today, holidayOn } from '../lib/agenda.js'
import { deleteUser } from '../lib/users.js'
import * as agenda from '../functions/api/student/agenda.js'
import * as attendance from '../functions/api/student/attendance.js'
import * as items from '../functions/api/student/agenda-items.js'
import * as groups from '../functions/api/student/groups/index.js'
import * as members from '../functions/api/student/groups/members.js'
import * as blocks from '../functions/api/student/groups/blocks.js'
import * as days from '../functions/api/student/groups/days.js'
import * as me from '../functions/api/student/me.js'

const conn = await freshDb()
after(() => conn.close())
const s = {}

async function account (email, role) {
  await conn.execute('INSERT INTO users (email, name, password_hash, totp_enabled) VALUES (?, ?, ?, ?)', [email, email.split('@')[0], await hashPassword('een-lang-wachtwoord'), role === 'superadmin' ? 1 : 0])
  const [{ id }] = await conn.execute('SELECT id FROM users WHERE email = ?', [email])
  await conn.execute('INSERT INTO user_roles (user_id, role_code) VALUES (?, ?)', [id, role])
  return { id: Number(id), cookie: (await startSession(conn, Number(id), true)).split(';')[0] }
}

test('installatie met groepen, rooster en jaarrooster', async () => {
  await migrate(conn)
  s.boss = await account('baas@example.org', 'superadmin')
  s.teacher = await account('docent@example.org', 'teacher')
  s.amina = await account('amina@example.org', 'student')
  s.yusuf = await account('yusuf@example.org', 'student')
  s.other = await account('ander@example.org', 'student')
  const g = await call(conn, 'GET', '/api/student/groups', groups, { cookie: s.boss.cookie })
  assert.equal(g.status, 200, JSON.stringify(g.data))
  assert.deepEqual(g.data.groups.map((x) => x.code), ['A-m', 'A-f', 'B-m', 'B-f'])
  const a = g.data.blocks.filter((b) => b.cohort === 'A')
  assert.deepEqual(a.map((b) => [b.weekday, b.start_time, b.end_time, b.subject_ar]), [
    [4, '19:00', '20:30', 'الفقه والسيرة'], [4, '20:30', '22:00', 'العقيدة والتفسير'], [5, '19:00', '20:30', 'الحديث'], [5, '20:30', '22:00', 'التربية الإسلامية']])
  assert.equal(g.data.blocks.filter((b) => b.cohort === 'B' && !b.subject_nl).length, 4)
  assert.equal(g.data.days.filter((d) => d.kind === 'holiday').length, 3)
  assert.equal(g.data.days.filter((d) => d.kind === 'exam').length, 6)
  s.groups = Object.fromEntries(g.data.groups.map((x) => [x.code, x.id]))
  s.blocks = g.data.blocks
  const denied = await call(conn, 'GET', '/api/student/groups', groups, { cookie: s.teacher.cookie })
  assert.equal(denied.status, 403)
})

test('kalender: vakanties, lesdagen en weekdagen', () => {
  assert.equal(weekday('2027-01-07'), 4)
  assert.equal(monday('2027-01-07'), '2027-01-04')
  assert.match(today(new Date('2026-11-07T23:30:00Z')), /^2026-11-08$/)
  const d = [{ id: 1, kind: 'year', date_from: '2026-09-01', date_to: '2027-06-25' }, { id: 2, kind: 'holiday', date_from: '2026-12-24', date_to: '2027-01-01' }]
  const year = schoolYear(d, '2026-12-01')
  const bl = [{ id: 1, cohort: 'A', weekday: 4 }, { id: 2, cohort: 'A', weekday: 5 }]
  const cal = calendar({ blocks: bl, days: d, from: '2026-12-21', to: '2027-01-10', cohorts: ['A'], year })
  // Do 24 en vr 25 dec en do 31 dec, vr 1 jan: vakantie; do 7 en vr 8 jan: les.
  assert.deepEqual(cal.filter((x) => x.lessons.length).map((x) => x.date), ['2027-01-07', '2027-01-08'])
  assert.ok(cal.find((x) => x.date === '2026-12-24').events.includes(2))
  assert.ok(holidayOn(d, '2027-01-01', 'A'))
  assert.equal(calendar({ blocks: bl, days: d, from: '2027-06-28', to: '2027-07-04', cohorts: ['A'], year: schoolYear(d, '2027-06-28') }).length, 0)
})

test('beheer zet studenten en docenten in groepen', async () => {
  const add = await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.boss.cookie, body: { group: s.groups['A-f'], users: [s.amina.id, s.yusuf.id], role: 'student' } })
  assert.equal(add.status, 200, JSON.stringify(add.data))
  // Yusuf hoort bij de broeders: verplaatsen haalt hem uit de vorige groep.
  await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.boss.cookie, body: { group: s.groups['A-m'], users: [s.yusuf.id], role: 'student' } })
  await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.boss.cookie, body: { group: s.groups['B-m'], users: [s.other.id], role: 'student' } })
  await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.boss.cookie, body: { group: s.groups['A-f'], users: [s.teacher.id], role: 'teacher' } })
  const g = await call(conn, 'GET', '/api/student/groups', groups, { cookie: s.boss.cookie })
  const by = (code) => g.data.groups.find((x) => x.code === code).members.map((m) => m.email + ':' + m.role).sort()
  assert.deepEqual(by('A-f'), ['amina@example.org:student', 'docent@example.org:teacher'])
  assert.deepEqual(by('A-m'), ['yusuf@example.org:student'])
  const nope = await call(conn, 'POST', '/api/student/groups/members', members, { cookie: s.teacher.cookie, body: { group: s.groups['A-f'], users: [s.other.id], role: 'student' } })
  assert.equal(nope.status, 403)
  const m = await call(conn, 'GET', '/api/student/me', me, { cookie: s.amina.cookie })
  assert.equal(m.data.user.inGroup, true)
  assert.equal(m.data.user.groupsManager, false)
})

test('vak koppelen aan een blok van groep B en het jaarrooster aanpassen', async () => {
  const b = s.blocks.find((x) => x.cohort === 'B' && x.weekday === 4 && x.start_time === '19:00')
  const r = await call(conn, 'PATCH', '/api/student/groups/blocks', blocks, { cookie: s.boss.cookie, body: { id: b.id, subject_nl: 'Fiqh', subject_ar: 'الفقه' } })
  assert.equal(r.status, 200, JSON.stringify(r.data))
  const bad = await call(conn, 'PATCH', '/api/student/groups/blocks', blocks, { cookie: s.boss.cookie, body: { id: b.id, end_time: '18:00' } })
  assert.equal(bad.status, 400)
  const d = await call(conn, 'POST', '/api/student/groups/days', days, { cookie: s.boss.cookie, body: { kind: 'special', date_from: '2026-11-12', title_nl: 'Ouderavond', title_ar: 'لقاء أولياء الأمور', cohort: 'B' } })
  assert.equal(d.status, 200)
  const badDay = await call(conn, 'POST', '/api/student/groups/days', days, { cookie: s.boss.cookie, body: { kind: 'holiday', date_from: '2026-11-12', date_to: '2026-11-01', title_nl: 'x' } })
  assert.equal(badDay.status, 400)
  const del = await call(conn, 'DELETE', '/api/student/groups/days?id=' + d.data.id, days, { cookie: s.boss.cookie })
  assert.equal(del.status, 200)
})

test('student ziet alleen de agenda van zijn eigen groep, met examens en vakanties', async () => {
  const r = await call(conn, 'GET', '/api/student/agenda?from=2027-01-04&weeks=4', agenda, { cookie: s.amina.cookie })
  assert.equal(r.status, 200, JSON.stringify(r.data))
  assert.deepEqual(r.data.groups.map((g) => g.code), ['A-f'])
  assert.ok(r.data.blocks.every((b) => b.cohort === 'A'))
  const jan7 = r.data.calendar.find((d) => d.date === '2027-01-07')
  assert.equal(jan7.lessons.length, 2)
  assert.ok(r.data.days.find((d) => jan7.events.includes(d.id) && d.kind === 'exam'))
  const ramadan = await call(conn, 'GET', '/api/student/agenda?from=2027-02-15&weeks=2', agenda, { cookie: s.amina.cookie })
  assert.ok(ramadan.data.calendar.every((d) => d.lessons.length === 0))
  assert.ok(ramadan.data.days.some((d) => d.kind === 'holiday'))
  const none = await call(conn, 'GET', '/api/student/agenda', agenda, { cookie: s.teacher.cookie.replace(/./, 'x') })
  assert.equal(none.status, 401)
})

test('docent vult de aanwezigheid in voor zijn eigen groep', async () => {
  const blk = s.blocks.find((x) => x.cohort === 'A' && x.weekday === 4 && x.start_time === '19:00')
  const q = `?group=${s.groups['A-f']}&block=${blk.id}&date=2026-11-05`
  const sheet = await call(conn, 'GET', '/api/student/attendance' + q, attendance, { cookie: s.teacher.cookie })
  assert.equal(sheet.status, 200, JSON.stringify(sheet.data))
  assert.deepEqual(sheet.data.students.map((x) => x.email), ['amina@example.org'])
  const save = await call(conn, 'POST', '/api/student/attendance', attendance, { cookie: s.teacher.cookie, body: { group: s.groups['A-f'], block: blk.id, date: '2026-11-05', entries: [{ user_id: s.amina.id, status: 'absent', note: 'ziek gemeld' }] } })
  assert.equal(save.status, 200, JSON.stringify(save.data))
  // Opnieuw opslaan werkt de rij bij.
  await call(conn, 'POST', '/api/student/attendance', attendance, { cookie: s.teacher.cookie, body: { group: s.groups['A-f'], block: blk.id, date: '2026-11-05', entries: [{ user_id: s.amina.id, status: 'excused', note: 'ziek gemeld' }] } })
  const again = await call(conn, 'GET', '/api/student/attendance' + q, attendance, { cookie: s.teacher.cookie })
  assert.equal(again.data.students[0].status, 'excused')
  // Andere groep, andere student, verkeerde dag, vakantie en toekomst worden geweigerd.
  const other = await call(conn, 'GET', `/api/student/attendance?group=${s.groups['A-m']}&block=${blk.id}&date=2026-11-05`, attendance, { cookie: s.teacher.cookie })
  assert.equal(other.status, 403)
  const stranger = await call(conn, 'POST', '/api/student/attendance', attendance, { cookie: s.teacher.cookie, body: { group: s.groups['A-f'], block: blk.id, date: '2026-11-05', entries: [{ user_id: s.yusuf.id, status: 'present' }] } })
  assert.equal(stranger.status, 400)
  const friday = await call(conn, 'GET', `/api/student/attendance?group=${s.groups['A-f']}&block=${blk.id}&date=2026-11-06`, attendance, { cookie: s.teacher.cookie })
  assert.equal(friday.status, 400)
  const holiday = await call(conn, 'GET', `/api/student/attendance?group=${s.groups['A-f']}&block=${blk.id}&date=2026-12-31`, attendance, { cookie: s.teacher.cookie })
  assert.equal(holiday.status, 400)
  const future = await call(conn, 'GET', `/api/student/attendance?group=${s.groups['A-f']}&block=${blk.id}&date=2027-06-24`, attendance, { cookie: s.teacher.cookie })
  assert.equal(future.status, 400)
  const student = await call(conn, 'GET', '/api/student/attendance' + q, attendance, { cookie: s.amina.cookie })
  assert.equal(student.status, 403)
  // Overzicht per student en de eigen status in de agenda van de student.
  const sum = await call(conn, 'GET', '/api/student/attendance?group=' + s.groups['A-f'], attendance, { cookie: s.teacher.cookie })
  assert.equal(sum.data.students[0].counts.excused, 1)
  assert.equal(sum.data.recordedLessons, 1)
  assert.ok(sum.data.lessons >= 1)
  const ag = await call(conn, 'GET', '/api/student/agenda?from=2026-11-02&weeks=1', agenda, { cookie: s.amina.cookie })
  assert.deepEqual(ag.data.attendance.map((x) => x.status), ['excused'])
  const tg = await call(conn, 'GET', '/api/student/agenda?from=2026-11-02&weeks=1', agenda, { cookie: s.teacher.cookie })
  assert.equal(tg.data.recorded.length, 1)
  assert.equal(tg.data.groups.find((g) => g.code === 'A-f').canTeach, true)
  // Een blok met aanwezigheid kan niet weg.
  const delBlock = await call(conn, 'DELETE', '/api/student/groups/blocks?id=' + blk.id, blocks, { cookie: s.boss.cookie })
  assert.equal(delBlock.status, 400)
})

test('docent zet toets en huiswerk in de agenda; alleen zijn groep ziet het', async () => {
  const add = await call(conn, 'POST', '/api/student/agenda-items', items, { cookie: s.teacher.cookie, body: { kind: 'homework', group: s.groups['A-f'], date: '2027-01-08', title_nl: 'Les 3 lezen', title_ar: 'قراءة الدرس الثالث' } })
  assert.equal(add.status, 200, JSON.stringify(add.data))
  const both = await call(conn, 'POST', '/api/student/agenda-items', items, { cookie: s.teacher.cookie, body: { kind: 'test', group: 'A', date: '2027-01-08', title_nl: 'Toets' } })
  assert.equal(both.status, 403)
  const boss = await call(conn, 'POST', '/api/student/agenda-items', items, { cookie: s.boss.cookie, body: { kind: 'test', group: 'A', date: '2027-01-08', title_nl: 'Toets hadith', block: s.blocks.find((x) => x.cohort === 'A' && x.weekday === 5 && x.start_time === '19:00').id } })
  assert.equal(boss.status, 200, JSON.stringify(boss.data))
  const wrongDay = await call(conn, 'POST', '/api/student/agenda-items', items, { cookie: s.boss.cookie, body: { kind: 'test', group: 'A', date: '2027-01-07', title_nl: 'x', block: s.blocks.find((x) => x.cohort === 'A' && x.weekday === 5).id } })
  assert.equal(wrongDay.status, 400)
  const amina = await call(conn, 'GET', '/api/student/agenda?from=2027-01-04&weeks=1', agenda, { cookie: s.amina.cookie })
  assert.deepEqual(amina.data.items.map((i) => i.kind).sort(), ['homework', 'test'])
  const yusuf = await call(conn, 'GET', '/api/student/agenda?from=2027-01-04&weeks=1', agenda, { cookie: s.yusuf.cookie })
  assert.deepEqual(yusuf.data.items.map((i) => i.kind), ['test'])
  const other = await call(conn, 'GET', '/api/student/agenda?from=2027-01-04&weeks=1', agenda, { cookie: s.other.cookie })
  assert.equal(other.data.items.length, 0)
  const studentAdd = await call(conn, 'POST', '/api/student/agenda-items', items, { cookie: s.amina.cookie, body: { kind: 'homework', group: s.groups['A-f'], date: '2027-01-08', title_nl: 'x' } })
  assert.equal(studentAdd.status, 403)
  const delOther = await call(conn, 'DELETE', '/api/student/agenda-items?id=' + boss.data.id, items, { cookie: s.teacher.cookie })
  assert.equal(delOther.status, 403)
  const del = await call(conn, 'DELETE', '/api/student/agenda-items?id=' + add.data.id, items, { cookie: s.teacher.cookie })
  assert.equal(del.status, 200)
})

test('definitief verwijderen haalt groepslidmaatschap en aanwezigheid weg', async () => {
  await deleteUser(conn, s.amina.id, 'amina@example.org')
  const [{ n }] = await conn.execute('SELECT (SELECT COUNT(*) FROM attendance WHERE user_id = ?) + (SELECT COUNT(*) FROM class_group_members WHERE user_id = ?) AS n', [s.amina.id, s.amina.id])
  assert.equal(Number(n), 0)
})
