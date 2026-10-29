// De hele keten via de echte routes: installatie, eerste superbeheerder, 2FA,
// uitnodigen, schrijven, beoordelen, publiceren, lezen, zoeken en feedback.
import { test, after } from 'node:test'
import assert from 'node:assert/strict'
import { freshDb, call, checkQueries } from './helpers.js'
import { codeAt } from '../lib/totp.js'
import * as setup from '../functions/api/setup.js'
import * as bootstrap from '../functions/api/admin/bootstrap.js'
import * as acceptInvite from '../functions/api/admin/accept-invite.js'
import * as login from '../functions/api/admin/login.js'
import * as login2fa from '../functions/api/admin/login-2fa.js'
import * as twofa from '../functions/api/admin/2fa.js'
import * as me from '../functions/api/admin/me.js'
import * as invitations from '../functions/api/admin/invitations/index.js'
import * as userRoute from '../functions/api/admin/users/[id]/index.js'
import * as users from '../functions/api/admin/users/index.js'
import * as books from '../functions/api/admin/books/index.js'
import * as book from '../functions/api/admin/books/[id]/index.js'
import * as content from '../functions/api/admin/content/[type]/[id].js'
import * as versions from '../functions/api/admin/versions/index.js'
import * as action from '../functions/api/admin/versions/[id]/[action].js'
import * as feedback from '../functions/api/feedback.js'
import * as adminFeedback from '../functions/api/admin/feedback/index.js'
import * as feedbackItem from '../functions/api/admin/feedback/[id]/index.js'
import * as feedbackDraft from '../functions/api/admin/feedback/[id]/draft.js'
import * as dashboard from '../functions/api/admin/dashboard.js'
import * as audit from '../functions/api/admin/audit.js'
import * as exportRoute from '../functions/api/admin/export.js'
import * as search from '../functions/api/search.js'
import * as publicBooks from '../functions/api/books/index.js'
import * as chapterPage from '../functions/boek/[slug]/[chapter].js'
import * as bookPage from '../functions/boek/[slug]/index.js'
import * as unitPage from '../functions/boek/[slug]/eenheid/[n].js'
import * as library from '../functions/bibliotheek/index.js'
import * as hadithPage from '../functions/hadith/index.js'
import * as personsPage from '../functions/personen/index.js'
import * as personPage from '../functions/persoon/[slug].js'
import * as adminHadith from '../functions/api/admin/hadith/index.js'
import * as adminPersons from '../functions/api/admin/persons/index.js'
import * as adminPerson from '../functions/api/admin/persons/[id].js'
import * as adminArticles from '../functions/api/admin/articles/index.js'
import * as zadPage from '../functions/zad/index.js'
import * as zadImport from '../functions/api/admin/import/zad.js'

const conn = await freshDb()
after(() => conn.close())
const s = {} // gedeelde toestand tussen de stappen

const totp = async (secret) => codeAt(secret, Math.floor(Date.now() / 30000))
const page = async (mod, path, params, cookie) => {
  const headers = cookie ? { cookie } : {}
  const before = conn.queries
  const res = await mod.onRequestGet({ request: new Request('https://test.local' + path, { headers }), env: { conn }, params, data: {} })
  checkQueries(conn.queries - before, path)
  return { status: res.status, html: await res.text() }
}

test('installatie: migraties en het eerste boek', async () => {
  const steps = []
  for (let i = 0; i < 15; i++) {
    const r = await call(conn, 'POST', '/api/setup', setup)
    assert.equal(r.status, 200, JSON.stringify(r.data))
    steps.push(r.data.migrations[0] || r.data.seeded)
    if (r.data.done) break
  }
  assert.deepEqual(steps, ['basis', 'accounts', 'inhoud', 'omzetting', 'registers', 'zad', 'zad-aqeedah-1', 'personen-per-boek', 'publiceer-zad-aqeedah-1', 'studiekaart-aqeedah-1-les-1', 'hoofdstukkaart-aqeedah-1-eenheid-1', 'hoofdstukkaarten-aqeedah-1-eenheid-2-4', 'talkhis-jam-al-jawami', false])
  const list = await call(conn, 'GET', '/api/books', publicBooks)
  assert.equal(list.data[0].slug, 'talkhis-jam-al-jawami')
  assert.equal(list.data[0].category, 'usul-al-fiqh')
})

test('eerste superbeheerder via bootstrap, daarna kan dat niet meer', async () => {
  const r = await call(conn, 'POST', '/api/admin/bootstrap', bootstrap, { body: { email: 'baas@example.org' } })
  const token = new URL(r.data.link).searchParams.get('uitnodiging')
  const weak = await call(conn, 'POST', '/api/admin/accept-invite', acceptInvite, { body: { token, password: 'kort' } })
  assert.equal(weak.status, 400)
  const ok = await call(conn, 'POST', '/api/admin/accept-invite', acceptInvite, { body: { token, name: 'Baas', password: 'een-lang-wachtwoord' } })
  assert.equal(ok.status, 200)
  s.superCookie = ok.cookie
  const reuse = await call(conn, 'POST', '/api/admin/accept-invite', acceptInvite, { body: { token, password: 'een-lang-wachtwoord' } })
  assert.equal(reuse.status, 404)
  const second = await call(conn, 'POST', '/api/admin/bootstrap', bootstrap, { body: { email: 'indringer@example.org' } })
  assert.equal(second.status, 403)
  // Setup doet nu niets meer: geen migraties open en de database heeft gebruikers.
  assert.equal((await call(conn, 'POST', '/api/setup', setup)).data.done, true)
})

test('zonder 2FA geen gebruikersbeheer; met 2FA wel', async () => {
  const blocked = await call(conn, 'POST', '/api/admin/invitations', invitations, { cookie: s.superCookie, body: { email: 'a@example.org', role: 'admin' } })
  assert.equal(blocked.status, 403)
  assert.match(blocked.data.error, /tweestaps/)
  const setupRes = await call(conn, 'GET', '/api/admin/2fa', twofa, { cookie: s.superCookie })
  s.superSecret = setupRes.data.secret
  assert.match(setupRes.data.uri, /^otpauth:\/\/totp\//)
  assert.equal((await call(conn, 'POST', '/api/admin/2fa', twofa, { cookie: s.superCookie, body: { code: '000000' } })).status, 400)
  assert.equal((await call(conn, 'POST', '/api/admin/2fa', twofa, { cookie: s.superCookie, body: { code: await totp(s.superSecret) } })).status, 200)
})

test('inloggen met 2FA in twee stappen', async () => {
  const bad = await call(conn, 'POST', '/api/admin/login', login, { body: { email: 'baas@example.org', password: 'fout-wachtwoord' } })
  assert.equal(bad.status, 401)
  const step1 = await call(conn, 'POST', '/api/admin/login', login, { body: { email: 'BAAS@example.org', password: 'een-lang-wachtwoord' } })
  assert.equal(step1.data.needs2fa, true)
  // Halverwege is de sessie nog niet bruikbaar.
  assert.equal((await call(conn, 'GET', '/api/admin/me', me, { cookie: step1.cookie })).status, 401)
  const step2 = await call(conn, 'POST', '/api/admin/login-2fa', login2fa, { cookie: step1.cookie, body: { code: await totp(s.superSecret) } })
  assert.equal(step2.status, 200)
  const who = await call(conn, 'GET', '/api/admin/me', me, { cookie: step1.cookie })
  assert.deepEqual(who.data.roles, ['superadmin'])
  s.superCookie = step1.cookie
})

async function invite (email, role, cookie = s.superCookie) {
  const r = await call(conn, 'POST', '/api/admin/invitations', invitations, { cookie, body: { email, role } })
  assert.equal(r.status, 200, JSON.stringify(r.data))
  const token = new URL(r.data.link).searchParams.get('uitnodiging')
  const acc = await call(conn, 'POST', '/api/admin/accept-invite', acceptInvite, { body: { token, name: email, password: 'nog-een-lang-wachtwoord' } })
  return acc.cookie
}

test('beheerder en redacteur uitnodigen', async () => {
  s.adminCookie = await invite('beheerder@example.org', 'admin')
  s.editorCookie = await invite('redacteur@example.org', 'editor')
  // Een redacteur kan niemand uitnodigen, ook niet via de API.
  const r = await call(conn, 'POST', '/api/admin/invitations', invitations, { cookie: s.editorCookie, body: { email: 'x@example.org', role: 'admin' } })
  assert.equal(r.status, 403)
  // De beheerder zet ook 2FA aan.
  const g = await call(conn, 'GET', '/api/admin/2fa', twofa, { cookie: s.adminCookie })
  await call(conn, 'POST', '/api/admin/2fa', twofa, { cookie: s.adminCookie, body: { code: await totp(g.data.secret) } })
})

test('de laatste superbeheerder is beschermd', async () => {
  const list = await call(conn, 'GET', '/api/admin/users', users, { cookie: s.superCookie })
  const baas = list.data.find((u) => u.email === 'baas@example.org')
  s.baasId = baas.id
  const r = await call(conn, 'PATCH', `/api/admin/users/${baas.id}`, userRoute, { cookie: s.superCookie, params: { id: String(baas.id) }, body: { roles: ['admin'] } })
  assert.equal(r.status, 400)
  assert.match(r.data.error, /superbeheerder/)
  // Een beheerder mag een superbeheerder niet aanpassen.
  const r2 = await call(conn, 'PATCH', `/api/admin/users/${baas.id}`, userRoute, { cookie: s.adminCookie, params: { id: String(baas.id) }, body: { status: 'deactivated' } })
  assert.equal(r2.status, 403)
})

test('redacteur schrijft een Nederlandse vertaling; die is pas zichtbaar na goedkeuring en publicatie', async () => {
  const list = await call(conn, 'GET', '/api/admin/books', books, { cookie: s.editorCookie })
  s.bookId = list.data.find((b) => b.slug === 'talkhis-jam-al-jawami').id
  const b = await call(conn, 'GET', `/api/admin/books/${s.bookId}`, book, { cookie: s.editorCookie, params: { id: String(s.bookId) } })
  s.chapter = b.data.chapters[1]
  const draft = await call(conn, 'POST', '/api/admin/versions', versions, {
    cookie: s.editorCookie,
    body: { entity_type: 'chapter', entity_id: s.chapter.id, lang: 'nl', title: 'Over de inleidingen', body: '<p>Usul al-fiqh zijn de <b>algemene</b> bewijzen.<script>alert(1)</script></p>', reason: 'Eerste vertaling' }
  })
  assert.equal(draft.status, 200)
  s.versionId = draft.data.id
  const c = await call(conn, 'GET', `/api/admin/content/chapter/${s.chapter.id}`, content, { cookie: s.editorCookie, params: { type: 'chapter', id: String(s.chapter.id) } })
  assert.ok(!JSON.stringify(c.data).includes('<script>'))

  const nl = await page(chapterPage, `/boek/talkhis-jam-al-jawami/${s.chapter.slug}?lang=nl`, { slug: 'talkhis-jam-al-jawami', chapter: s.chapter.slug })
  assert.match(nl.html, /nog niet in het Nederlands vertaald/)

  const act = (cookie, a, comment) => call(conn, 'POST', `/api/admin/versions/${s.versionId}/${a}`, action,
    { cookie, params: { id: String(s.versionId), action: a }, body: { comment } })
  assert.equal((await act(s.editorCookie, 'approve')).status, 403) // redacteur mag niet goedkeuren
  assert.equal((await act(s.editorCookie, 'publish')).status, 403)
  assert.equal((await act(s.adminCookie, 'approve')).status, 409) // nog niet ingediend
  assert.equal((await act(s.editorCookie, 'submit')).status, 200)
  assert.equal((await act(s.adminCookie, 'reject')).status, 400) // reden verplicht
  assert.equal((await act(s.adminCookie, 'reject', 'Graag de bron vermelden')).status, 200)
  assert.equal((await act(s.editorCookie, 'submit')).status, 200)
  assert.equal((await act(s.adminCookie, 'publish')).status, 409) // eerst goedkeuren
  assert.equal((await act(s.adminCookie, 'approve')).status, 200)
  assert.equal((await act(s.adminCookie, 'publish')).status, 200)

  const after = await page(chapterPage, `/boek/talkhis-jam-al-jawami/${s.chapter.slug}?lang=nl`, { slug: 'talkhis-jam-al-jawami', chapter: s.chapter.slug })
  assert.match(after.html, /algemene/)
  assert.ok(!after.html.includes('alert(1)'))
  assert.match(after.html, /<html lang="nl" dir="ltr">/)
  // De Arabische tekst is onveranderd.
  const ar = await page(chapterPage, `/boek/talkhis-jam-al-jawami/${s.chapter.slug}`, { slug: 'talkhis-jam-al-jawami', chapter: s.chapter.slug })
  assert.match(ar.html, /<html lang="ar" dir="rtl">/)
  assert.ok(!ar.html.includes('algemene'))
})

test('zoeken met en zonder tashkeel, met paginanummer', async () => {
  const a = await call(conn, 'GET', '/api/search?q=' + encodeURIComponent('الْفِقْهِ'), search)
  const b = await call(conn, 'GET', '/api/search?q=' + encodeURIComponent('الفقه'), search)
  assert.ok(a.data.length > 0)
  assert.equal(a.data.length, b.data.length)
  assert.ok(a.data.some((r) => r.page > 0))
  const nl = await call(conn, 'GET', '/api/search?lang=nl&q=algemene', search)
  assert.equal(nl.data.filter((r) => r.url.includes('talkhis')).length, 1)
  assert.match(nl.data[0].url, /lang=nl/)
  const lib = await page(library, '/bibliotheek?q=algemene&lang=nl', {})
  assert.match(lib.html, /<mark>algemene<\/mark>/)
})

test('feedback: spam wordt stil genegeerd, echte melding komt binnen, rate limit werkt', async () => {
  const base = { entity_type: 'chapter', entity_id: s.chapter.id, lang: 'ar', category: 'spelling', message: 'Hier staat een typfout', quote: 'الفقه' }
  const bot = await call(conn, 'POST', '/api/feedback', feedback, { body: { ...base, website: 'spam.example', elapsed: 9000 } })
  const fast = await call(conn, 'POST', '/api/feedback', feedback, { body: { ...base, elapsed: 200 } })
  assert.equal(bot.status, 200)
  assert.equal(fast.status, 200)
  const real = await call(conn, 'POST', '/api/feedback', feedback, { body: { ...base, elapsed: 9000, email: 'lezer@example.org' }, ip: '5.5.5.5' })
  assert.equal(real.status, 200)
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM feedback')
  assert.equal(Number(n), 1)
  const bad = await call(conn, 'POST', '/api/feedback', feedback, { body: { ...base, entity_id: 999999, elapsed: 9000 }, ip: '6.6.6.6' })
  assert.equal(bad.status, 400)
  let last
  for (let i = 0; i < 6; i++) last = await call(conn, 'POST', '/api/feedback', feedback, { body: { ...base, elapsed: 9000 }, ip: '7.7.7.7' })
  assert.equal(last.status, 429)
})

test('feedback verwerken: toewijzen, redacteur ziet alleen eigen, concept uit feedback', async () => {
  const all = await call(conn, 'GET', '/api/admin/feedback', adminFeedback, { cookie: s.adminCookie })
  const item = all.data.find((f) => f.email === 'lezer@example.org')
  assert.ok(item.info.url.startsWith('/boek/'))
  assert.equal((await call(conn, 'GET', '/api/admin/feedback', adminFeedback, { cookie: s.editorCookie })).data.length, 0)
  const editor = (await call(conn, 'GET', '/api/admin/users', users, { cookie: s.superCookie })).data.find((u) => u.email === 'redacteur@example.org')
  const fid = { id: String(item.id) }
  assert.equal((await call(conn, 'PATCH', '/api/admin/feedback/x', feedbackItem, { cookie: s.editorCookie, params: fid, body: { status: 'resolved' } })).status, 403)
  assert.equal((await call(conn, 'PATCH', '/api/admin/feedback/x', feedbackItem, { cookie: s.adminCookie, params: fid, body: { assigned_to: editor.id, status: 'in_progress', internal_note: 'Klopt' } })).status, 200)
  assert.equal((await call(conn, 'GET', '/api/admin/feedback', adminFeedback, { cookie: s.editorCookie })).data.length, 1)
  const d = await call(conn, 'POST', '/api/admin/feedback/x/draft', feedbackDraft, { cookie: s.editorCookie, params: fid, body: {} })
  assert.equal(d.status, 200)
  const [v] = await conn.execute('SELECT status, body, reason FROM content_versions WHERE id = ?', [d.data.version_id])
  assert.equal(v.status, 'draft')
  assert.match(v.reason, /feedback/)
  assert.ok(v.body.length > 100) // begint met de gepubliceerde Arabische tekst
})

test('dashboard, auditlog en back-up', async () => {
  const d = await call(conn, 'GET', '/api/admin/dashboard', dashboard, { cookie: s.superCookie })
  assert.equal(d.data.books.published, 2) // talkhis en ZAD Geloofsleer (1)
  assert.ok(d.data.users.length >= 3)
  assert.ok(d.data.activity.length > 0)
  const ed = await call(conn, 'GET', '/api/admin/dashboard', dashboard, { cookie: s.editorCookie })
  assert.equal(ed.data.users, undefined)
  const log = await call(conn, 'GET', '/api/admin/audit', audit, { cookie: s.superCookie })
  for (const a of ['version.publish', 'version.reject', 'invitation.create', '2fa.enable', 'feedback.update']) {
    assert.ok(log.data.some((l) => l.action === a), a)
  }
  assert.equal((await call(conn, 'GET', '/api/admin/audit', audit, { cookie: s.editorCookie })).status, 403)
  const backup = await call(conn, 'GET', '/api/admin/export', exportRoute, { cookie: s.superCookie })
  assert.equal(backup.status, 200)
  const dump = JSON.stringify(backup.data)
  assert.ok(!dump.includes('pbkdf2$') && !dump.includes('totp_secret'))
  assert.equal((await call(conn, 'GET', '/api/admin/export', exportRoute, { cookie: s.adminCookie })).status, 403)
})

test('conceptboeken zijn alleen voor medewerkers zichtbaar', async () => {
  const r = await call(conn, 'POST', '/api/admin/books', books, { cookie: s.editorCookie, body: { slug: 'nieuw-boek', title_nl: 'Nieuw boek', category_id: null } })
  assert.equal(r.status, 200)
  assert.equal((await page(bookPage, '/boek/nieuw-boek', { slug: 'nieuw-boek' })).status, 404)
  assert.equal((await page(bookPage, '/boek/nieuw-boek', { slug: 'nieuw-boek' }, s.editorCookie)).status, 200)
  const lib = await page(library, '/bibliotheek', {})
  assert.ok(!lib.html.includes('nieuw-boek'))
})

test('hadith per hoofdstuk en personenregister; biografie pas zichtbaar na publicatie', async () => {
  const idx = await page(hadithPage, '/hadith', {})
  assert.match(idx.html, /href="\/hadith\?boek=talkhis-jam-al-jawami&amp;lang=ar"|href="\/hadith\?boek=talkhis-jam-al-jawami&lang=ar"/)
  const hp = await page(hadithPage, '/hadith?boek=talkhis-jam-al-jawami', {})
  assert.equal(hp.status, 200)
  const titles = [...hp.html.matchAll(/<h2>(.*?)<\/h2>/g)].map((m) => m[1])
  assert.ok(titles.length > 3)
  assert.equal(new Set(titles).size, titles.length) // elk onderdeel één keer, in boekvolgorde
  assert.match(hp.html, /<nav class="parts">/)
  assert.match(hp.html, /<a href="\/boek\/talkhis-jam-al-jawami\/[^"]+\?lang=ar">صفحة \d+<\/a>/)

  // Bron en beoordeling: alleen medewerkers, en daarna openbaar zichtbaar.
  const list = await call(conn, 'GET', '/api/admin/hadith', adminHadith, { cookie: s.editorCookie })
  assert.equal(list.status, 200)
  const h = list.data.find((x) => x.book_slug === 'talkhis-jam-al-jawami')
  assert.equal((await call(conn, 'PATCH', '/api/admin/hadith', adminHadith, { body: { hkey: h.hkey, source: 'x' } })).status, 401)
  assert.equal((await call(conn, 'PATCH', '/api/admin/hadith', adminHadith, { cookie: s.editorCookie, body: { hkey: h.hkey, source: 'رواه البخاري', grade: 'صحيح' } })).status, 200)
  assert.match((await page(hadithPage, '/hadith?boek=talkhis-jam-al-jawami', {})).html, /التخريج: رواه البخاري/)

  const idx2 = await page(personsPage, '/personen', {})
  assert.match(idx2.html, /personen\?boek=talkhis-jam-al-jawami/)
  assert.match(idx2.html, /personen\?boek=zad-n1-aqeedah/) // gepubliceerd ZAD-boek
  await conn.execute("UPDATE books SET status = 'draft' WHERE slug = 'zad-n1-aqeedah'")
  assert.ok(!(await page(personsPage, '/personen', {})).html.includes('boek=zad-n1-aqeedah')) // conceptboek niet openbaar
  assert.equal((await page(personsPage, '/personen?boek=zad-n1-aqeedah', {})).status, 404)
  await conn.execute("UPDATE books SET status = 'published' WHERE slug = 'zad-n1-aqeedah'")
  const pp = await page(personsPage, '/personen?boek=talkhis-jam-al-jawami', {})
  assert.equal(pp.status, 200)
  assert.ok(!pp.html.includes('ثوبان')) // alleen uit ZAD, niet in dit boek
  assert.match(pp.html, /عبد الله بن عباس/)
  const persons = await call(conn, 'GET', '/api/admin/persons', adminPersons, { cookie: s.editorCookie })
  const p = persons.data.find((x) => x.slug === 'ibn-abbas') || persons.data[0]
  assert.equal(p.status_nl, 'draft')
  const one = await page(personPage, '/persoon/' + p.slug + '?lang=nl', { slug: p.slug })
  assert.match(one.html, /biografie wordt nog opgesteld/)
  assert.match(one.html, /Vindplaatsen/)
  assert.equal((await page(personPage, '/persoon/bestaat-niet', { slug: 'bestaat-niet' })).status, 404)

  const draft = await call(conn, 'POST', '/api/admin/versions', versions, { cookie: s.editorCookie,
    body: { entity_type: 'article', entity_id: p.article_id, lang: 'nl', title: p.name_nl, body: '<p>Gecontroleerde biografie.</p>', reason: 'Gecontroleerd' } })
  assert.equal(draft.status, 200)
  const act = (cookie, a) => call(conn, 'POST', `/api/admin/versions/${draft.data.id}/${a}`, action, { cookie, params: { id: String(draft.data.id), action: a }, body: {} })
  assert.equal((await act(s.editorCookie, 'submit')).status, 200)
  assert.equal((await act(s.adminCookie, 'approve')).status, 200)
  assert.equal((await act(s.adminCookie, 'publish')).status, 200)
  assert.match((await page(personPage, '/persoon/' + p.slug + '?lang=nl', { slug: p.slug })).html, /Gecontroleerde biografie/)
  assert.match((await page(personsPage, '/personen?alle=1&lang=nl', {})).html, /Gecontroleerde biografie/)
  assert.ok(!(await page(personsPage, '/personen?alle=1', {})).html.includes('Gecontroleerde')) // Arabisch nog niet

  // Gegevens wijzigen en een nieuwe persoon; biografieën staan niet bij de artikelen.
  assert.equal((await call(conn, 'PATCH', '/api/admin/persons/x', adminPerson, { cookie: s.adminCookie, params: { id: String(p.id) }, body: { ...p, death_hijri: 'abc' } })).status, 400)
  assert.equal((await call(conn, 'PATCH', '/api/admin/persons/x', adminPerson, { cookie: s.adminCookie, params: { id: String(p.id) }, body: { ...p, aliases: p.aliases + '\nحبر الأمة' } })).status, 200)
  const np = await call(conn, 'POST', '/api/admin/persons', adminPersons, { cookie: s.adminCookie, body: { slug: 'nieuwe-persoon', name_ar: 'فلان', kind: 'alim' } })
  assert.equal(np.status, 200)
  assert.equal((await call(conn, 'POST', '/api/admin/persons', adminPersons, { cookie: s.adminCookie, body: { slug: 'nieuwe-persoon', name_ar: 'فلان' } })).status, 400)
  const arts = await call(conn, 'GET', '/api/admin/articles', adminArticles, { cookie: s.editorCookie })
  assert.ok(!arts.data.some((a) => a.kind === 'person'))
})

test('gedeactiveerd account kan niet meer inloggen', async () => {
  const editor = (await call(conn, 'GET', '/api/admin/users', users, { cookie: s.superCookie })).data.find((u) => u.email === 'redacteur@example.org')
  await call(conn, 'PATCH', '/api/admin/users/x', userRoute, { cookie: s.superCookie, params: { id: String(editor.id) }, body: { status: 'deactivated' } })
  assert.equal((await call(conn, 'GET', '/api/admin/me', me, { cookie: s.editorCookie })).status, 401)
  const l = await call(conn, 'POST', '/api/admin/login', login, { body: { email: 'redacteur@example.org', password: 'nog-een-lang-wachtwoord' }, ip: '9.9.9.9' })
  assert.equal(l.status, 401)
})

test('ZAD: overzicht, concepten alleen voor medewerkers, import via beheer', async () => {
  const pub = await page(zadPage, '/zad', {})
  assert.equal(pub.status, 200)
  assert.equal((pub.html.match(/class="zcell off"/g) || []).length, 27) // alleen Geloofsleer (1) gepubliceerd
  assert.match(pub.html, /href="\/boek\/zad-n1-aqeedah\?lang=ar"/)
  const ov = await page(bookPage, '/boek/zad-n1-aqeedah', { slug: 'zad-n1-aqeedah' })
  assert.equal(ov.status, 200)
  assert.equal((ov.html.match(/class="lix-card/g) || []).length, 0) // overzicht per hoofdstuk in plaats van alle tekst; alle vier eenheden hebben een kaart
  for (const n of [1, 2, 3, 4]) assert.equal((ov.html.match(new RegExp(`class="unit-card" href="/boek/zad-n1-aqeedah/eenheid/${n}\\?lang=ar"`, 'g')) || []).length, 1, n)
  assert.equal((ov.html.match(/class="ulx"/g) || []).length, 4) // met de lessen als korte inhoudsopgave
  assert.ok(!ov.html.includes('class="chapter"'))
  assert.match((await page(bookPage, '/boek/zad-n1-aqeedah?tekst', { slug: 'zad-n1-aqeedah' })).html, /class="chapter"/) // hele tekst blijft bereikbaar
  await conn.execute("UPDATE books SET status = 'draft' WHERE slug = 'zad-n1-aqeedah'")
  const staff = await page(zadPage, '/zad?lang=nl', {}, s.adminCookie)
  assert.match(staff.html, /href="\/boek\/zad-n1-aqeedah\?lang=nl"/)
  assert.equal((await page(bookPage, '/boek/zad-n1-aqeedah', { slug: 'zad-n1-aqeedah' })).status, 404)

  const file = { book: { level: 1, subject: 'aqeedah', title_ar: 'العقيدة (١)' }, lessons: [
    { slug: '7', unit: 2, unit_title_nl: 'Afwijking', title_ar: 'أسباب الانحراف', title_nl: 'Oorzaken van afwijking', body_nl: '<p>Tekst<script>x()</script></p>',
      terms: [{ ar: 'الهوى', nl: 'begeerte', uitleg_nl: 'uitleg' }], questions: [{ type: 'mc', vraag_nl: 'Vraag?', opties: ['a', 'b'], antwoord: 0 }, { type: 'onbekend' }] }
  ], persons: [
    { slug: 'ibn-abbas', name_ar: 'عبد الله بن عباس', aliases: ['حبر الأمة', 'ترجمان القرآن'] },
    { slug: 'al-lalakai', name_ar: 'اللالكائي', name_nl: 'al-Lālakāʾī', kind: 'alim', death_hijri: 418, aliases: ['اللالكائي'], bio_nl: '<p>Bio<script>x</script></p>' }
  ] }
  assert.equal((await call(conn, 'POST', '/api/admin/import/zad', zadImport, { body: file })).status, 401)
  assert.equal((await call(conn, 'POST', '/api/admin/import/zad', zadImport, { cookie: s.adminCookie, body: { book: { level: 9, subject: 'x' }, lessons: [] } })).status, 400)
  const r = await call(conn, 'POST', '/api/admin/import/zad', zadImport, { cookie: s.adminCookie, body: file })
  assert.equal(r.status, 200, JSON.stringify(r.data))
  assert.deepEqual([r.data.lessons, r.data.versions, r.data.terms, r.data.questions, r.data.persons, r.data.personsMerged], [1, 1, 1, 1, 1, 1])
  const [lal] = await conn.execute("SELECT p.death_hijri, v.body, v.status FROM persons p JOIN content_translations t ON t.entity_type = 'article' AND t.entity_id = p.article_id AND t.lang = 'nl' JOIN content_versions v ON v.translation_id = t.id WHERE p.slug = 'al-lalakai'")
  assert.deepEqual([Number(lal.death_hijri), lal.status, lal.body.includes('script')], [418, 'draft', false])
  const [abbas] = await conn.execute("SELECT aliases FROM persons WHERE slug = 'ibn-abbas'")
  assert.match(abbas.aliases, /ترجمان القرآن/)
  const [{ n }] = await conn.execute("SELECT COUNT(*) AS n FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.slug = 'zad-n1-aqeedah'")
  assert.equal(Number(n), 24) // bestaande les 7 bijgewerkt, geen dubbele
  const [v] = await conn.execute("SELECT v.body, v.status FROM content_versions v ORDER BY v.id DESC LIMIT 1")
  assert.equal(v.status, 'draft')
  assert.ok(!v.body.includes('script'))

  // Na publicatie van boek en les: zichtbaar met eenheden en begrippen.
  await conn.execute("UPDATE books SET status = 'published' WHERE slug = 'zad-n1-aqeedah'")
  const [ch] = await conn.execute("SELECT c.id FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.slug = 'zad-n1-aqeedah' AND c.slug = '7'")
  const content1 = await call(conn, 'GET', '/api/admin/content/chapter/x', content, { cookie: s.adminCookie, params: { type: 'chapter', id: String(ch.id) } })
  const vid = content1.data.langs.nl.versions.find((x) => x.status === 'draft').id // de zojuist geïmporteerde versie
  const act = (a) => call(conn, 'POST', `/api/admin/versions/${vid}/${a}`, action, { cookie: s.adminCookie, params: { id: String(vid), action: a }, body: {} })
  assert.equal((await act('submit')).status, 200)
  assert.equal((await act('approve')).status, 200)
  assert.equal((await act('publish')).status, 200)
  const lesson = await page(chapterPage, '/boek/zad-n1-aqeedah/7?lang=nl', { slug: 'zad-n1-aqeedah', chapter: '7' })
  assert.equal(lesson.status, 200)
  assert.match(lesson.html, /class="unit">Eenheid 2/)
  assert.match(lesson.html, /<h3>Begrippen<\/h3>/)
  assert.match(lesson.html, /studiesamenvatting/)
  assert.ok(!lesson.html.includes('class="legend"'))
  assert.match((await page(zadPage, '/zad', {})).html, /href="\/boek\/zad-n1-aqeedah\?lang=ar"/)
})

test('bibliotheek: ZAD-boeken samen onder één kop', async () => {
  const lib = await page(library, '/bibliotheek', {}, s.adminCookie)
  assert.match(lib.html, /<h2>سلسلة زاد<\/h2>/)
  assert.ok(!lib.html.includes('/boek/zad-n'))
  const admin = await call(conn, 'GET', '/api/admin/books', books, { cookie: s.adminCookie })
  const firstZad = admin.data.findIndex((b) => b.zad_level)
  assert.ok(firstZad > 0 && admin.data.slice(firstZad).every((b) => b.zad_level))
})

test('studiekaart: concept alleen als voorbeeld voor medewerkers, eigen workflow, geen HTML', async () => {
  await conn.execute("UPDATE books SET status = 'published' WHERE slug = 'zad-n1-aqeedah'")
  const path = '/boek/zad-n1-aqeedah/1?lang=nl'
  const params = { slug: 'zad-n1-aqeedah', chapter: '1' }
  const upath = '/boek/zad-n1-aqeedah/eenheid/1?lang=nl'
  const uparams = { slug: 'zad-n1-aqeedah', n: '1' }
  // Migratie 11: eenheid 1 heeft één hoofdstukkaart; de lessen tonen hun samenvatting met een verwijzing.
  for (const les of ['1', '3', '6']) {
    const html = (await page(chapterPage, `/boek/zad-n1-aqeedah/${les}?lang=nl`, { slug: 'zad-n1-aqeedah', chapter: les })).html
    assert.ok(!html.includes('class="study'), les)
    assert.match(html, /class="unit-banner" href="\/boek\/zad-n1-aqeedah\/eenheid\/1\?lang=nl"/)
  }
  assert.match((await page(chapterPage, '/boek/zad-n1-aqeedah/7?lang=nl', { slug: 'zad-n1-aqeedah', chapter: '7' })).html, /class="unit-banner" href="\/boek\/zad-n1-aqeedah\/eenheid\/2\?lang=nl"/)
  assert.match((await page(chapterPage, '/boek/zad-n1-aqeedah/24?lang=nl', { slug: 'zad-n1-aqeedah', chapter: '24' })).html, /class="unit-banner" href="\/boek\/zad-n1-aqeedah\/eenheid\/4\?lang=nl"/)
  let before = conn.queries
  const unit = await page(unitPage, upath, uparams)
  checkQueries(conn.queries - before, 'hoofdstukpagina')
  assert.equal(unit.status, 200)
  assert.match(unit.html, /class="study unit-study"/)
  for (const tab of ['overview', 'schema', 'terms', 'explain', 'keys', 'hadith', 'persons', 'review', 'quiz', 'text']) assert.match(unit.html, new RegExp(`id="st-${tab}"`))
  assert.match(unit.html, /class="kicker">Eenheid 1 · 6 lessen/)
  assert.match(unit.html, /class="dg dg-main dg-mindmap"/) // één hoofdschema voor de hele eenheid
  assert.equal((unit.html.match(/class="card hd"/g) || []).length, 13) // alle hadith uit de zes lessen
  assert.match(unit.html, /href="\/persoon\/abu-hurayra\?lang=nl"/)
  assert.match(unit.html, /class="lref" href="\/boek\/zad-n1-aqeedah\/3\?lang=nl">Les 3</) // verwijzing naar de les
  assert.match(unit.html, /archive\.org\/details\/zad-academy-books_202309\/CourseBook_Semester1_AlAqeedah\/page\/n11\//) // bronlink naar p. 11
  assert.match(unit.html, /Originele tekst/)
  const unitAr = await page(unitPage, '/boek/zad-n1-aqeedah/eenheid/1', uparams)
  assert.match(unitAr.html, /<html lang="ar" dir="rtl">/)
  assert.match(unitAr.html, /الأحاديث/)
  // Migratie 12: eenheid 2, 3 en 4 met hun eigen kaart, hadith en lesverwijzingen.
  for (const [n, lessen, hd, les] of [[2, 5, 15, 9], [3, 5, 10, 14], [4, 8, 3, 22]]) {
    before = conn.queries
    const u = await page(unitPage, `/boek/zad-n1-aqeedah/eenheid/${n}?lang=nl`, { slug: 'zad-n1-aqeedah', n: String(n) })
    checkQueries(conn.queries - before, `hoofdstukpagina ${n}`)
    assert.equal(u.status, 200, n)
    assert.match(u.html, new RegExp(`class="kicker">Eenheid ${n} · ${lessen} lessen`))
    assert.equal((u.html.match(/class="card hd"/g) || []).length, hd, n)
    assert.match(u.html, new RegExp(`class="lref" href="/boek/zad-n1-aqeedah/${les}\\?lang=nl">Les ${les}<`))
    assert.match((await page(unitPage, `/boek/zad-n1-aqeedah/eenheid/${n}`, { slug: 'zad-n1-aqeedah', n: String(n) })).html, /<html lang="ar" dir="rtl">/)
  }
  assert.equal((await page(unitPage, '/boek/zad-n1-aqeedah/eenheid/5', { slug: 'zad-n1-aqeedah', n: '5' })).status, 404)
  assert.equal((await page(unitPage, '/boek/zad-n1-aqeedah/eenheid/x', { slug: 'zad-n1-aqeedah', n: 'x' })).status, 404)
  assert.equal((await page(unitPage, '/boek/talkhis-jam-al-jawami/eenheid/1', { slug: 'talkhis-jam-al-jawami', n: '1' })).status, 404)

  // Concept: openbaar niets, medewerkers zien met ?voorbeeld de hoofdstukkaart.
  await conn.execute("UPDATE content_translations SET published_version_id = NULL, status = 'draft' WHERE entity_type = 'study'")
  await conn.execute("UPDATE content_versions v JOIN content_translations t ON t.id = v.translation_id SET v.status = 'draft' WHERE t.entity_type = 'study'")
  assert.equal((await page(unitPage, upath, uparams)).status, 404)
  assert.equal((await page(unitPage, upath + '&voorbeeld', uparams)).status, 404) // voorbeeld alleen voor medewerkers
  assert.ok(!(await page(chapterPage, path, params)).html.includes('unit-banner'))
  before = conn.queries
  const prev = await page(unitPage, upath + '&voorbeeld', uparams, s.adminCookie)
  checkQueries(conn.queries - before, 'hoofdstukpagina als voorbeeld')
  assert.match(prev.html, /class="study unit-study"/)
  assert.match(prev.html, /nog niet gepubliceerd/)

  const [ch] = await conn.execute("SELECT c.id FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.slug = 'zad-n1-aqeedah' AND c.slug = '1'")
  const save = (body) => call(conn, 'POST', '/api/admin/versions', versions, { cookie: s.adminCookie, body: { entity_type: 'study', entity_id: ch.id, lang: 'nl', title: 'x', body } })
  assert.equal((await save('{geen json')).status, 400)
  assert.equal((await save({ title: 'x', diagrams: [{ type: 'onbekend' }] })).status, 400)
  const ok = await save({ title: 'Les<script>alert(1)</script> één', summary: '<b onclick="x()">kort</b>', quiz: [{ type: 'mc', q: 'V?', options: ['a', 'b'], answer: 1 }, { type: 'mc', q: 'zonder antwoord', options: ['a'], answer: 3 }] })
  assert.equal(ok.status, 200, JSON.stringify(ok.data))
  const [v] = await conn.execute('SELECT body FROM content_versions WHERE id = ?', [ok.data.id])
  const card = JSON.parse(v.body)
  assert.deepEqual([card.title, card.summary, card.quiz.length], ['Lesalert(1) één', 'kort', 1])
  const act = (a) => call(conn, 'POST', `/api/admin/versions/${ok.data.id}/${a}`, action, { cookie: s.adminCookie, params: { id: String(ok.data.id), action: a }, body: {} })
  for (const a of ['submit', 'approve', 'publish']) assert.equal((await act(a)).status, 200, a)
  const pub = await page(chapterPage, path, params)
  assert.match(pub.html, /class="study"/)
  assert.match(pub.html, /Lesalert\(1\) één/)
  assert.ok(!pub.html.includes('<script>alert'))
  assert.match(pub.html, /id="st-text"/) // de oorspronkelijke samenvatting blijft bereikbaar
  assert.ok(!(await page(chapterPage, '/boek/zad-n1-aqeedah/1', params)).html.includes('class="study"')) // Arabisch nog niet gepubliceerd
  const [{ n }] = await conn.execute("SELECT COUNT(*) AS n FROM search_index WHERE entity_type = 'study'")
  assert.equal(Number(n), 0)
})
