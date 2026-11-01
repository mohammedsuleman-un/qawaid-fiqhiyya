// Studentenomgeving: aanmelden, boeken en reeksen op je profiel, voortgang, planning,
// oefentoetsen, vragen goedkeuren, geplande toetsen en resultaten voor docenten.
import { test, after } from 'node:test'
import assert from 'node:assert/strict'
import { freshDb, call } from './helpers.js'
import { migrate } from '../lib/migrate.js'
import { startSession, hashPassword } from '../lib/auth.js'
import * as register from '../functions/api/student/register.js'
import * as me from '../functions/api/student/me.js'
import * as catalog from '../functions/api/student/catalog.js'
import * as books from '../functions/api/student/books/index.js'
import * as book from '../functions/api/student/book/[slug].js'
import * as progress from '../functions/api/student/progress.js'
import * as plan from '../functions/api/student/plan.js'
import * as attempts from '../functions/api/student/attempts/index.js'
import * as attempt from '../functions/api/student/attempts/[id].js'
import * as tests from '../functions/api/student/tests.js'
import * as teachTests from '../functions/api/student/teach/tests/index.js'
import * as teachTest from '../functions/api/student/teach/tests/[id].js'
import * as questions from '../functions/api/student/teach/questions.js'
import { grade, pickQuestions, bankQuestion } from '../lib/student.js'

const conn = await freshDb()
after(() => conn.close())
const s = {}

test('installatie', async () => {
  await migrate(conn)
  // Een superbeheerder met tweestapsverificatie (nodig om vragen goed te keuren).
  await conn.execute("INSERT INTO users (email, name, password_hash, totp_enabled) VALUES ('baas@example.org', 'Baas', ?, 1)", [await hashPassword('een-lang-wachtwoord')])
  const [{ id }] = await conn.execute("SELECT id FROM users WHERE email = 'baas@example.org'")
  await conn.execute("INSERT INTO user_roles (user_id, role_code) VALUES (?, 'superadmin')", [id])
  s.boss = (await startSession(conn, Number(id), true)).split(';')[0]
})

test('student meldt zich aan', async () => {
  const weak = await call(conn, 'POST', '/api/student/register', register, { body: { name: 'Amina', email: 'amina@example.org', password: 'kort' } })
  assert.equal(weak.status, 400)
  const r = await call(conn, 'POST', '/api/student/register', register, { body: { name: 'Amina', email: 'Amina@example.org', password: 'een-lang-wachtwoord', lang: 'nl' } })
  assert.equal(r.status, 200, JSON.stringify(r.data))
  s.student = r.cookie
  const dup = await call(conn, 'POST', '/api/student/register', register, { body: { name: 'X', email: 'amina@example.org', password: 'een-lang-wachtwoord' } })
  assert.equal(dup.status, 400)
  const anon = await call(conn, 'GET', '/api/student/me', me)
  assert.equal(anon.status, 401)
  const m = await call(conn, 'GET', '/api/student/me', me, { cookie: s.student })
  assert.deepEqual(m.data.user.roles, ['student'])
  assert.equal(m.data.user.teacher, false)
  assert.equal(m.data.books.length, 0)
})

test('boeken en een hele reeks aan het profiel toevoegen', async () => {
  const cat = await call(conn, 'GET', '/api/student/catalog?lang=nl', catalog, { cookie: s.student })
  const zad1 = cat.data.books.filter((b) => b.zad_level === 1)
  assert.equal(zad1.length, 7)
  assert.ok(zad1.every((b) => b.cards > 0))
  const add = await call(conn, 'POST', '/api/student/books', books, { cookie: s.student, body: { series: 'zad', level: 1 } })
  assert.equal(add.data.added, 7)
  const one = await call(conn, 'POST', '/api/student/books', books, { cookie: s.student, body: { slug: 'zad-n2-fiqh' } })
  assert.equal(one.data.added, 1)
  const del = await call(conn, 'DELETE', '/api/student/books', books, { cookie: s.student, body: { slug: 'zad-n2-fiqh' } })
  assert.equal(del.data.removed, 1)
  const missing = await call(conn, 'POST', '/api/student/books', books, { cookie: s.student, body: { slug: 'bestaat-niet' } })
  assert.equal(missing.status, 404)
  const m = await call(conn, 'GET', '/api/student/me', me, { cookie: s.student })
  assert.equal(m.data.books.length, 7)
})

test('voortgang en planning', async () => {
  const b = await call(conn, 'GET', '/api/student/book/zad-n1-aqeedah?lang=nl', book, { cookie: s.student, params: { slug: 'zad-n1-aqeedah' } })
  assert.equal(b.status, 200, JSON.stringify(b.data))
  assert.ok(b.data.chapters.length > 10)
  assert.ok(b.data.questions.total > 10)
  assert.ok(b.data.unitCards.includes(1))
  s.chapter = b.data.chapters[0].id
  s.lessons = b.data.chapters.length
  const p = await call(conn, 'POST', '/api/student/progress', progress, { cookie: s.student, body: { chapterId: s.chapter, done: true } })
  assert.equal(p.status, 200)
  const bad = await call(conn, 'POST', '/api/student/plan', plan, { cookie: s.student, body: { slug: 'zad-n1-aqeedah', start_date: '2026-11-01', target_date: '2026-10-01' } })
  assert.equal(bad.status, 400)
  const ok = await call(conn, 'POST', '/api/student/plan', plan, { cookie: s.student, body: { slug: 'zad-n1-aqeedah', start_date: '2026-11-01', target_date: '2027-01-31' } })
  assert.equal(ok.status, 200)
  const m = await call(conn, 'GET', '/api/student/me', me, { cookie: s.student })
  const aq = m.data.books.find((x) => x.slug === 'zad-n1-aqeedah')
  assert.equal(aq.done, 1)
  assert.equal(aq.target_date, '2027-01-31')
})

test('oefentoets: vragen zonder antwoorden, daarna nakijken', async () => {
  const none = await call(conn, 'POST', '/api/student/attempts', attempts, { cookie: s.student, body: { slug: 'zad-n1-aqeedah', units: [99], count: 5, lang: 'nl' } })
  assert.equal(none.status, 400)
  const r = await call(conn, 'POST', '/api/student/attempts', attempts, { cookie: s.student, body: { slug: 'zad-n1-aqeedah', units: [1], count: 5, lang: 'nl' } })
  assert.equal(r.status, 200, JSON.stringify(r.data))
  const g = await call(conn, 'GET', '/api/student/attempts/' + r.data.id, attempt, { cookie: s.student, params: { id: String(r.data.id) } })
  assert.equal(g.data.done, false)
  assert.equal(g.data.questions.length, 5)
  assert.ok(g.data.questions.every((q) => q.answer === undefined && q.explain === undefined && q.unit === 1))
  const other = await call(conn, 'GET', '/api/student/attempts/' + r.data.id, attempt, { cookie: s.boss, params: { id: String(r.data.id) } })
  assert.equal(other.status, 404)
  const sub = await call(conn, 'POST', '/api/student/attempts/' + r.data.id, attempt, { cookie: s.student, params: { id: String(r.data.id) }, body: { answers: [0, 1, 0, 1, 0] } })
  assert.equal(sub.data.done, true)
  assert.equal(sub.data.max_score, 5)
  assert.ok(sub.data.review.every((q) => typeof q.answer === 'number'))
  const again = await call(conn, 'POST', '/api/student/attempts/' + r.data.id, attempt, { cookie: s.student, params: { id: String(r.data.id) }, body: { answers: [] } })
  assert.equal(again.status, 400)
  const list = await call(conn, 'GET', '/api/student/attempts', attempts, { cookie: s.student })
  assert.equal(list.data.attempts.length, 1)
})

test('vragenbank: alleen goedgekeurde vragen tellen mee', async () => {
  const before = await call(conn, 'GET', '/api/student/book/zad-n1-aqeedah?lang=nl', book, { cookie: s.student, params: { slug: 'zad-n1-aqeedah' } })
  const denied = await call(conn, 'GET', '/api/student/teach/questions?book=zad-n1-aqeedah', questions, { cookie: s.student })
  assert.equal(denied.status, 403)
  const q = await call(conn, 'GET', '/api/student/teach/questions?book=zad-n1-aqeedah', questions, { cookie: s.boss })
  assert.equal(q.status, 200)
  assert.ok(q.data.questions.length > 0, 'vragen uit de import')
  const closed = q.data.questions.filter((x) => x.type !== 'open').slice(0, 4).map((x) => x.id)
  const nope = await call(conn, 'POST', '/api/student/teach/questions', questions, { cookie: s.student, body: { ids: closed, status: 'published' } })
  assert.equal(nope.status, 403)
  const ok = await call(conn, 'POST', '/api/student/teach/questions', questions, { cookie: s.boss, body: { ids: closed, status: 'published' } })
  assert.equal(ok.data.changed, 4)
  const afterB = await call(conn, 'GET', '/api/student/book/zad-n1-aqeedah?lang=nl', book, { cookie: s.student, params: { slug: 'zad-n1-aqeedah' } })
  assert.equal(afterB.data.questions.total, before.data.questions.total + 4)
})

test('geplande toets: docent plant, student maakt hem één keer, docent ziet het resultaat', async () => {
  const iso = (min) => new Date(Date.now() + min * 60000).toISOString()
  const denied = await call(conn, 'POST', '/api/student/teach/tests', teachTests, { cookie: s.student, body: {} })
  assert.equal(denied.status, 403)
  const c = await call(conn, 'POST', '/api/student/teach/tests', teachTests, { cookie: s.boss, body: {
    slug: 'zad-n1-aqeedah', title_nl: 'Toets eenheid 1', title_ar: 'اختبار الوحدة الأولى', units: '1', question_count: 4,
    time_limit_min: 20, max_attempts: 1, opens_at: iso(-60), closes_at: iso(60), info_nl: 'Leer les 1 t/m 6.' } })
  assert.equal(c.status, 200, JSON.stringify(c.data))
  const list = await call(conn, 'GET', '/api/student/tests', tests, { cookie: s.student })
  const t = list.data.tests.find((x) => x.id === c.data.id)
  assert.equal(t.state, 'open')
  assert.equal(t.followed, true)
  const start = await call(conn, 'POST', '/api/student/attempts', attempts, { cookie: s.student, body: { testId: c.data.id, lang: 'nl' } })
  assert.equal(start.status, 200, JSON.stringify(start.data))
  const resume = await call(conn, 'POST', '/api/student/attempts', attempts, { cookie: s.student, body: { testId: c.data.id, lang: 'nl' } })
  assert.equal(resume.data.id, start.data.id)
  const g = await call(conn, 'GET', '/api/student/attempts/' + start.data.id, attempt, { cookie: s.student, params: { id: String(start.data.id) } })
  assert.ok(g.data.remaining > 1100 && g.data.remaining <= 1200)
  assert.equal(g.data.questions.length, 4)
  await call(conn, 'POST', '/api/student/attempts/' + start.data.id, attempt, { cookie: s.student, params: { id: String(start.data.id) }, body: { answers: [0, 0, 0, 0] } })
  const third = await call(conn, 'POST', '/api/student/attempts', attempts, { cookie: s.student, body: { testId: c.data.id, lang: 'nl' } })
  assert.equal(third.status, 400)
  const res = await call(conn, 'GET', '/api/student/teach/tests/' + c.data.id, teachTest, { cookie: s.boss, params: { id: String(c.data.id) } })
  assert.equal(res.data.attempts.length, 1)
  assert.equal(res.data.attempts[0].name, 'Amina')
  const view = await call(conn, 'GET', '/api/student/attempts/' + start.data.id, attempt, { cookie: s.boss, params: { id: String(start.data.id) } })
  assert.equal(view.status, 200)
  assert.equal(view.data.student.name, 'Amina')
  const soon = await call(conn, 'POST', '/api/student/teach/tests', teachTests, { cookie: s.boss, body: {
    slug: 'zad-n1-aqeedah', title_nl: 'Later', opens_at: iso(600), closes_at: iso(700) } })
  const early = await call(conn, 'POST', '/api/student/attempts', attempts, { cookie: s.student, body: { testId: soon.data.id, lang: 'nl' } })
  assert.equal(early.status, 400)
  const arch = await call(conn, 'DELETE', '/api/student/teach/tests/' + soon.data.id, teachTest, { cookie: s.boss, params: { id: String(soon.data.id) } })
  assert.equal(arch.status, 200)
  const teacherList = await call(conn, 'GET', '/api/student/teach/tests', teachTests, { cookie: s.boss })
  assert.equal(teacherList.data.tests.length, 1)
})

test('nakijken: meerkeuze, koppelen en open vragen', () => {
  const mc = bankQuestion({ id: 1, data: JSON.stringify({ type: 'mc', vraag_nl: 'V', opties: ['a', 'b', 'c'], antwoord: 2 }) }, 'nl')
  const match = bankQuestion({ id: 2, data: JSON.stringify({ type: 'match', vraag_nl: 'K', links: ['x', 'y'], rechts: ['1', '2'], antwoord: [1, 0] }) }, 'nl')
  const open = bankQuestion({ id: 3, data: JSON.stringify({ type: 'open', vraag_nl: 'O', antwoord_tekst: 'model' }) }, 'nl')
  const tf = bankQuestion({ id: 4, data: JSON.stringify({ type: 'tf', vraag_ar: 'س', vraag_nl: 'V', opties: ['juist', 'onjuist'], antwoord: 1 }) }, 'ar')
  assert.deepEqual(tf.options, ['صحيح', 'خطأ'])
  assert.equal(tf.q, 'س')
  const r = grade([mc, match, open, tf], [2, [1, 1], 'iets', 0])
  assert.equal(r.score, 1.5)
  assert.equal(r.max, 3)
  // Husselen houdt het goede antwoord bij.
  for (let i = 0; i < 20; i++) {
    const [p] = pickQuestions([mc], 1)
    assert.equal(p.options[p.answer], 'c')
    const [m] = pickQuestions([match], 1)
    assert.deepEqual(m.answer.map((a) => m.right[a]), ['2', '1'])
  }
  assert.equal(pickQuestions([open], 5).length, 0)
  assert.equal(pickQuestions([open], 5, { includeOpen: true }).length, 1)
})
