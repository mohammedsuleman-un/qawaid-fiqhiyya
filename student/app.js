// Studentenomgeving van De Zuivere Bron (NL/AR). Praat met /api/student; inloggen gaat
// via /api/admin/login (zelfde account en sessie als de beheeromgeving). De server
// controleert elk recht zelf; knoppen voor docenten worden alleen getoond als het mag.
import { STRINGS } from './i18n.js?v=20261107g'
import { serverError } from '/assets/server-errors.js?v=20261107g'

const view = document.getElementById('view')
const navEl = document.getElementById('nav')
const whoEl = document.getElementById('who')

const store = {
  get: (k) => { try { return localStorage.getItem(k) } catch { return null } },
  set: (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v) } catch {} }
}
const urlLang = new URLSearchParams(location.search).get('lang')
// Gedeelde taalkeuze voor de hele site (openbare pagina's, Studenten en Beheer).
const cookieLang = () => { const m = document.cookie.match(/(?:^|;\s*)zb_lang=(nl|ar)(?:;|$)/); return m ? m[1] : null }
const saveLang = (l) => { try { document.cookie = 'zb_lang=' + l + ';path=/;max-age=31536000;samesite=lax' } catch {} }
let lang = ['nl', 'ar'].includes(urlLang) ? urlLang : cookieLang() || (['nl', 'ar'].includes(store.get('zb-student-lang')) ? store.get('zb-student-lang') : (navigator.language || '').startsWith('ar') ? 'ar' : 'nl')
let t = STRINGS[lang]
let me = null
let timer = null

// ---------- hulpfuncties ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
const fmt = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => esc(vars[k]))
const $ = (sel, root = view) => root.querySelector(sel)
const $$ = (sel, root = view) => [...root.querySelectorAll(sel)]
const utc = (s) => s ? new Date(String(s).replace(' ', 'T') + (String(s).length > 10 ? 'Z' : 'T00:00:00')) : null
const locale = () => (lang === 'ar' ? 'ar' : 'nl-NL')
const dateTime = (s) => s ? utc(s).toLocaleString(locale(), { dateStyle: 'medium', timeStyle: 'short' }) : ''
const day = (d) => d ? (d instanceof Date ? d : utc(d)).toLocaleDateString(locale(), { day: 'numeric', month: 'short', year: 'numeric' }) : ''
const bookTitle = (b) => b['title_' + lang] || b.title_ar || b.title_nl || b.slug
const testBook = (x) => bookTitle({ title_ar: x.book_title_ar, title_nl: x.book_title_nl, slug: x.slug })
const testTitle = (x) => x['title_' + lang] || x.title_nl || x.title_ar || ''
const pct = (score, max) => max > 0 ? Math.round(score / max * 100) : null
const siteLink = (path) => path + (path.includes('?') ? '&' : '?') + 'lang=' + lang
const unitsLabel = (u) => u ? fmt(t.unitsN, { u: String(u).split(',').join(', ') }) : t.wholeBook
const hdr = () => ({ 'content-type': 'application/json' })

async function api (path, method = 'GET', data, base = '/api/student/') {
  const res = await fetch(base + path, { method, headers: method === 'GET' ? {} : hdr(), body: method === 'GET' ? undefined : JSON.stringify(data || {}) })
  const out = await res.json().catch(() => ({}))
  if (res.status === 401 && base === '/api/student/' && path !== 'me') { me = null; route(); throw new Error(serverError(out.error, lang) || t.error) }
  if (!res.ok) throw new Error(serverError(out.error, lang) || t.error)
  return out
}

function render (markup) { clearInterval(timer); view.onchange = null; view.innerHTML = markup; view.focus({ preventScroll: true }); window.scrollTo(0, 0) }
const loading = () => { view.innerHTML = `<p class="muted">${t.loading}</p>` }
const errorBox = (err) => render(`<div class="card"><p class="msg err">${esc(err.message)}</p><p><a href="#/">${t.nav.home}</a></p></div>`)

function form (el, action) {
  el.addEventListener('submit', async (e) => {
    e.preventDefault()
    const msg = el.querySelector('.msg')
    const btn = el.querySelector('button[type=submit], button:not([type])')
    if (msg) { msg.className = 'msg'; msg.textContent = '' }
    if (btn) btn.disabled = true
    try {
      const done = await action(Object.fromEntries(new FormData(el)), e.submitter)
      if (done && msg) { msg.className = 'msg ok'; msg.textContent = done }
    } catch (err) {
      if (msg) { msg.className = 'msg err'; msg.textContent = err.message } else alert(err.message)
    } finally { if (btn) btn.disabled = false }
  })
}

const bar = (done, total) => `<span class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}"><span style="width:${total ? Math.round(done / total * 100) : 0}%"></span></span>`
const scoreBadge = (score, max) => {
  const p = pct(score, max)
  if (p == null) return `<span class="score">–</span>`
  return `<span class="score ${p >= 70 ? 'good' : p >= 50 ? 'mid' : 'low'}">${p}%</span>`
}
const stateBadge = (s) => `<span class="state st-${s}">${t.state[s]}</span>`

function applyLang () {
  t = STRINGS[lang]
  document.documentElement.lang = lang
  saveLang(lang)
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.body.dataset.lang = lang
  document.title = `${t.title} · ${t.site}`
  $('#brandName', document).textContent = t.site
  $('#brandSub', document).textContent = t.title
  $('#logo', document).href = '/bibliotheek?lang=' + lang
  for (const b of document.querySelectorAll('.langseg [data-l]')) b.setAttribute('aria-pressed', String(b.dataset.l === lang))
}

for (const b of document.querySelectorAll('.langseg [data-l]')) b.onclick = () => {
  if (b.dataset.l === lang) return
  lang = b.dataset.l
  store.set('zb-student-lang', lang)
  const u = new URL(location.href); u.searchParams.set('lang', lang); history.replaceState(null, '', u)
  if (me) api('me', 'PATCH', { lang }).catch(() => {})
  applyLang(); setNav(); route()
}

function setNav () {
  // Naam voor het inlogmenu in de kopbalk van de site (alleen een weergavehint).
  try { if (me) localStorage.setItem('zb:who', me.user.name || me.user.email); else localStorage.removeItem('zb:who') } catch (e) {}
  if (!me) { navEl.innerHTML = ''; whoEl.innerHTML = ''; document.body.classList.add('anon'); return }
  document.body.classList.remove('anon')
  const items = [['#/', t.nav.home], ['#/agenda', t.nav.agenda], ['#/boeken', t.nav.books], ['#/toetsen', t.nav.tests], ['#/resultaten', t.nav.results]]
  if (me.user.teacher) items.push(['#/docent', t.nav.teacher])
  if (me.user.staff) items.push(['#/vragen', t.nav.questions])
  if (me.user.groupsManager) items.push(['#/groepen', t.nav.groups])
  navEl.innerHTML = items.map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('')
  whoEl.innerHTML = `<span class="me">${esc(me.user.name || me.user.email)}</span> <button type="button" class="link" id="logoutBtn">${t.logout}</button>`
  $('#logoutBtn', whoEl).onclick = async () => { await api('logout', 'POST', {}, '/api/admin/'); me = null; location.hash = '#/'; start() }
  const current = '#/' + (location.hash.slice(2).split(/[/?]/)[0] || '')
  for (const a of navEl.querySelectorAll('a')) a.classList.toggle('on', a.getAttribute('href') === current || (current === '#/boek' && a.getAttribute('href') === '#/boeken') || (current === '#/poging' && a.getAttribute('href') === '#/resultaten') || (['#/aanwezigheid', '#/groep'].includes(current) && a.getAttribute('href') === '#/agenda'))
}

// Wachtwoordeisen vooraf tonen en tijdens het typen bijwerken.
const PW_MIN = 10
const pwHint = () => `<small class="pwhint muted" aria-live="polite">${t.pwRule || ''}</small>`
document.addEventListener('input', (e) => {
  const input = e.target
  if (!input.matches || !input.matches('input[type=password][autocomplete=new-password]')) return
  const hint = input.parentElement.querySelector('.pwhint')
  if (!hint) return
  const left = PW_MIN - input.value.length
  hint.textContent = (t.pwRule || '') + ' ' + (left > 0 ? (t.pwLeft || '').replace('{n}', left) : (t.pwOk || ''))
  hint.classList.toggle('ok', left <= 0)
})

// ---------- inloggen en aanmelden ----------
const genderPick = () => `<fieldset class="gender"><legend>${t.genderQ}</legend>
  <label class="inline"><input type="radio" name="gender" value="m" required> ${t.brother}</label>
  <label class="inline"><input type="radio" name="gender" value="f" required> ${t.sister}</label></fieldset>`
function loginView (mode = 'login') {
  render(`<div class="auth">
    <div class="intro"><h1>${t.welcomeTitle}</h1><p>${t.welcomeText}</p>
      <ul class="feat">${t.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul></div>
    <div class="card authcard">
      <div class="tabs"><button type="button" data-m="login" class="${mode === 'login' ? 'on' : ''}">${t.login}</button><button type="button" data-m="register" class="${mode === 'register' ? 'on' : ''}">${t.register}</button></div>
      ${mode === 'login'
        ? `<form id="f"><label>${t.email}<input name="email" type="email" autocomplete="username" required></label>
          <label>${t.password}<input name="password" type="password" autocomplete="current-password" required></label>
          <button class="primary" type="submit">${t.login}</button><p class="msg"></p></form>`
        : `<form id="f"><label>${t.name}<input name="name" autocomplete="name" required maxlength="255"></label>
          <label>${t.email}<input name="email" type="email" autocomplete="email" required></label>
          <label>${t.password}<input name="password" type="password" autocomplete="new-password" minlength="10" required>${pwHint()}</label>
          ${genderPick()}
          <p class="muted small">${t.registerHelp || ''}</p>
          <input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
          <button class="primary" type="submit">${t.createAccount}</button><p class="msg"></p></form>`}
    </div></div>`)
  for (const b of $$('.tabs button')) b.onclick = () => loginView(b.dataset.m)
  form($('#f'), async (d) => {
    if (mode === 'register') {
      await api('register', 'POST', { ...d, lang })
      return start()
    }
    const r = await api('login', 'POST', d, '/api/admin/')
    if (r.needs2fa) return twoStepView()
    await start()
  })
}

function twoStepView () {
  render(`<form class="card authcard narrow" id="f"><h1>${t.twoStep}</h1><p>${t.twoStepHelp}</p>
    <label>${t.code}<input name="code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9 ]{6,7}" required autofocus></label>
    <label class="inline"><input type="checkbox" name="remember" checked> ${t.rememberDevice || ''}</label>
    <button class="primary" type="submit">${t.next}</button><p class="msg"></p></form>`)
  form($('#f'), async (d) => { await api('login-2fa', 'POST', { code: d.code, remember: !!d.remember }, '/api/admin/'); await start() })
}

// ---------- planning ----------
// Verdeelt de lessen gelijkmatig over de weken tussen start- en einddatum.
function schedule (book, chapters) {
  if (!book.plan && !book.target_date) return null
  const start = utc((book.plan || book).start_date)
  const end = utc((book.plan || book).target_date)
  const weeks = Math.max(1, Math.ceil((end - start + 86400000) / (7 * 86400000)))
  const list = chapters || []
  const out = []
  for (let w = 0; w < weeks; w++) {
    const from = Math.floor(list.length * w / weeks)
    const to = Math.floor(list.length * (w + 1) / weeks)
    out.push({ week: w + 1, start: new Date(+start + w * 7 * 86400000), lessons: list.slice(from, to) })
  }
  return out
}

// Hoeveel lessen je volgens je planning nu gelezen zou moeten hebben.
function expected (b) {
  if (!b.target_date) return null
  const start = utc(b.start_date)
  const end = utc(b.target_date)
  const f = Math.min(1, Math.max(0, (Date.now() - start) / (end - start + 86400000)))
  return Math.round(b.lessons * f)
}

// ---------- overzicht ----------
async function homeView () {
  loading()
  me = await api('me')
  setNav()
  const { books, tests, attempts } = me
  const lessons = books.reduce((n, b) => n + b.lessons, 0)
  const done = books.reduce((n, b) => n + b.done, 0)
  const scored = attempts.filter((a) => a.max_score > 0)
  const avg = scored.length ? Math.round(scored.reduce((n, a) => n + a.score / a.max_score, 0) / scored.length * 100) : null
  const open = tests.filter((x) => x.state === 'open')
  const coming = tests.filter((x) => x.state !== 'closed').slice(0, 6)
  render(`<div class="head"><h1>${fmt(t.hello, { name: me.user.name || '' })}</h1></div>
    <div class="tiles">
      <div class="tile"><b>${books.length}</b><span>${t.tileBooks}</span></div>
      <div class="tile"><b>${done}<small>/${lessons}</small></b><span>${t.tileLessons}</span></div>
      <div class="tile"><b>${avg == null ? '–' : avg + '%'}</b><span>${t.tileScore}</span></div>
      <div class="tile"><b>${open.length}</b><span>${t.tileOpen}</span></div>
    </div>
    ${me.user.student && !me.user.gender ? `<form class="card" id="gform"><h2>${t.genderQ}</h2><p class="muted small">${t.genderWhy}</p>${genderPick()}<button class="primary" type="submit">${t.save}</button><p class="msg"></p></form>` : ''}
    ${me.user.inGroup || me.user.groupsManager ? `<a class="card bookrow" href="#/agenda"><span class="bt">📅 ${t.ag.homeTitle}</span><span class="muted small">${me.user.recorder ? t.ag.homeTeacher : t.ag.homeText}</span></a>` : ''}
    ${books.length ? '' : `<div class="card empty"><h2>${t.noBooksTitle}</h2><p>${t.noBooksText}</p><a class="btn primary" href="#/boeken">${t.addBooks}</a></div>`}
    <div class="cols">
      <section>
        <h2>${t.myBooks}</h2>
        ${books.map((b) => {
          const exp = expected(b)
          const diff = exp == null ? null : b.done - exp
          return `<a class="card bookrow" href="#/boek/${esc(b.slug)}">
            <span class="bt" dir="auto">${esc(bookTitle(b))}</span>
            <span class="muted small">${fmt(t.lessonsDone, { done: b.done, total: b.lessons })}${b.target_date ? ' · ' + fmt(t.planUntil, { d: day(b.target_date) }) : ''}</span>
            ${bar(b.done, b.lessons)}
            ${diff == null ? '' : `<span class="small ${diff >= 0 ? 'ok' : 'behind'}">${diff >= 0 ? t.onTrack : fmt(t.behind, { n: -diff })}</span>`}
          </a>`
        }).join('') || `<p class="muted">${t.none}</p>`}
        ${books.length ? `<p><a href="#/boeken">${t.addBooks}</a></p>` : ''}
      </section>
      <section>
        <h2>${t.upcoming}</h2>
        ${coming.map(testCard).join('') || `<p class="muted">${t.noTests}</p>`}
        <h2>${t.recent}</h2>
        ${attempts.length ? `<ul class="reslist">${attempts.map(attemptRow).join('')}</ul>` : `<p class="muted">${t.noResults}</p>`}
      </section>
    </div>`)
  bindTestButtons()
  const gf = $('#gform')
  if (gf) form(gf, async (x) => { await api('me', 'PATCH', { gender: x.gender }); homeView() })
}

const attemptRow = (a) => `<li><a href="#/poging/${a.id}">${scoreBadge(a.score, a.max_score)}
  <span><b dir="auto">${esc(a.test_id ? testTitle({ title_nl: a.test_title_nl, title_ar: a.test_title_ar }) : t.practice)}</b>
  <small class="muted" dir="auto">${esc(bookTitle(a))} · ${unitsLabel(a.units)} · ${dateTime(a.submitted_at)}${a.late ? ' · ' + t.late : ''}</small></span></a></li>`

function testCard (x) {
  const used = x.attempts || 0
  const canStart = x.state === 'open' && (x.running || used < x.max_attempts)
  const info = x['info_' + lang] || x.info_nl || x.info_ar
  const units = String(x.units || '').split(',').filter(Boolean)
  return `<div class="card test">
    <div class="th"><b dir="auto">${esc(testTitle(x))}</b>${stateBadge(x.state)}</div>
    <p class="muted small" dir="auto">${esc(testBook(x))} · ${unitsLabel(x.units)}</p>
    <dl class="facts">
      <dt>${t.opens}</dt><dd>${dateTime(x.opens_at)}</dd>
      <dt>${t.closes}</dt><dd>${dateTime(x.closes_at)}</dd>
      <dt>${t.questionsN}</dt><dd>${x.question_count}</dd>
      <dt>${t.timeLimit}</dt><dd>${x.time_limit_min ? fmt(t.minutes, { n: x.time_limit_min }) : t.noLimit}</dd>
      <dt>${t.attempts}</dt><dd>${used} / ${x.max_attempts}${x.best != null ? ' · ' + t.best + ' ' + Math.round(x.best * 100) + '%' : ''}</dd>
    </dl>
    ${info ? `<div class="info"><b>${t.info}</b><p dir="auto">${esc(info)}</p></div>` : ''}
    <div class="actions">
      ${units.length ? units.map((u) => `<a class="small" href="${esc(siteLink(`/boek/${x.slug}/eenheid/${u}`))}">${fmt(t.studyUnit, { n: u })}</a>`).join(' ') : `<a class="small" href="${esc(siteLink('/boek/' + x.slug))}">${t.readBook}</a>`}
      <button type="button" data-practice="${esc(x.slug)}" data-units="${esc(x.units || '')}">${t.practiceFirst}</button>
      ${canStart ? `<button type="button" class="primary" data-start="${x.id}"${x.running ? ' data-running="1"' : ''}>${x.running ? t.continue : t.startTest}</button>` : ''}
    </div>
  </div>`
}

function bindTestButtons () {
  for (const b of $$('[data-start]')) {
    b.onclick = async () => {
      const info = b.closest('.test')
      if (!b.dataset.running && !confirm(t.confirmStart + (info ? '\n\n' + info.querySelector('.facts').innerText.replace(/\n/g, ' ') : ''))) return
      try { const r = await api('attempts', 'POST', { testId: Number(b.dataset.start), lang }); location.hash = '#/poging/' + r.id } catch (err) { alert(err.message) }
    }
  }
  for (const b of $$('[data-practice]')) {
    b.onclick = async () => {
      try {
        const r = await api('attempts', 'POST', { slug: b.dataset.practice, units: b.dataset.units, count: 10, lang })
        location.hash = '#/poging/' + r.id
      } catch (err) { alert(err.message) }
    }
  }
}

// ---------- boeken kiezen ----------
async function booksView () {
  loading()
  const cat = await api('catalog?lang=' + lang)
  const zad = cat.books.filter((b) => b.zad_level)
  const other = cat.books.filter((b) => !b.zad_level)
  const levels = [1, 2, 3, 4].filter((l) => zad.some((b) => b.zad_level === l))
  const chip = (b) => `<button type="button" class="pick${b.mine ? ' on' : ''}" data-slug="${esc(b.slug)}" aria-pressed="${b.mine}">
      <span dir="auto">${esc(bookTitle(b))}</span>${lang === 'nl' && b.title_ar && b.title_ar !== bookTitle(b) ? `<span class="ar-sub" lang="ar" dir="rtl">${esc(b.title_ar)}</span>` : ''}<small>${b.mine ? '✓ ' + t.onProfile : '+ ' + t.add}</small></button>`
  const allMine = (list) => list.length && list.every((b) => b.mine)
  render(`<div class="head"><h1>${t.chooseBooks}</h1></div><p class="muted">${t.chooseHelp}</p>
    ${zad.length ? `<section class="card">
      <div class="th"><h2>${t.zadSeries}</h2>
        <button type="button" data-series="" class="${allMine(zad) ? '' : 'primary'}" data-remove="${allMine(zad) ? 1 : ''}">${allMine(zad) ? t.removeSeries : t.addSeries}</button></div>
      <p class="muted small">${t.zadHelp}</p>
      ${levels.map((l) => {
        const list = zad.filter((b) => b.zad_level === l)
        return `<div class="level"><div class="th"><h3>${esc(cat.levels[lang][l - 1])}</h3>
          <button type="button" data-series="${l}" data-remove="${allMine(list) ? 1 : ''}">${allMine(list) ? t.removeLevel : t.addLevel}</button></div>
          <div class="picks">${list.map(chip).join('')}</div></div>`
      }).join('')}
    </section>` : ''}
    ${other.length ? `<section class="card"><h2>${t.otherBooks}</h2><div class="picks">${other.map(chip).join('')}</div></section>` : ''}`)
  for (const b of $$('.pick')) {
    b.onclick = async () => {
      b.disabled = true
      try { await api('books', b.classList.contains('on') ? 'DELETE' : 'POST', { slug: b.dataset.slug }); booksView() } catch (err) { alert(err.message); b.disabled = false }
    }
  }
  for (const b of $$('[data-series]')) {
    b.onclick = async () => {
      b.disabled = true
      try { await api('books', b.dataset.remove ? 'DELETE' : 'POST', { series: 'zad', level: b.dataset.series || null }); booksView() } catch (err) { alert(err.message); b.disabled = false }
    }
  }
}

// ---------- één boek ----------
async function bookView (slug) {
  loading()
  const d = await api('book/' + encodeURIComponent(slug) + '?lang=' + lang)
  const done = new Set(d.done)
  const units = []
  for (const c of d.chapters) {
    const k = c.unit ?? 0
    let u = units.find((x) => x.n === k)
    if (!u) units.push(u = { n: k, title: c.unitTitle, chapters: [] })
    u.chapters.push(c)
  }
  const plan = schedule(d, d.chapters)
  const now = Date.now()
  const nextLessons = d.chapters.filter((c) => !done.has(c.id)).slice(0, 3)
  const unitOpts = units.filter((u) => u.n && d.questions.perUnit[u.n])
  render(`<p class="crumbs"><a href="#/boeken">${t.nav.books}</a></p>
    <div class="head"><h1 dir="auto">${esc(bookTitle(d.book))}</h1>
      ${d.mine ? `<span class="pill">✓ ${t.onProfile}</span>` : `<button type="button" class="primary" id="addBook">+ ${t.addToProfile}</button>`}
      <a class="btn" href="${esc(siteLink('/boek/' + d.book.slug))}">${t.readBook}</a></div>
    <p class="muted">${fmt(t.lessonsDone, { done: done.size, total: d.chapters.length })}</p>${bar(done.size, d.chapters.length)}
    <div class="cols">
      <section>
        <h2>${t.lessons}</h2>
        ${units.map((u) => `<div class="card unit">
          <div class="th"><h3 dir="auto">${u.n ? fmt(t.unitN, { n: u.n }) + (u.title ? ' · ' + esc(u.title) : '') : t.lessons}</h3>
            <span class="actions">${d.unitCards.includes(u.n) ? `<a class="small" href="${esc(siteLink(`/boek/${d.book.slug}/eenheid/${u.n}`))}">${t.unitCard}</a>` : ''}
            ${u.n && d.questions.perUnit[u.n] ? `<button type="button" class="small" data-practice-unit="${u.n}">${fmt(t.practiceUnit, { n: d.questions.perUnit[u.n] })}</button>` : ''}</span></div>
          <ul class="lessons">${u.chapters.map((c) => `<li><label class="inline"><input type="checkbox" data-ch="${c.id}"${done.has(c.id) ? ' checked' : ''}>
            <span dir="auto">${esc(c.title)}</span></label>
            <span class="muted small">${c.page ? t.page + ' ' + c.page + ' · ' : ''}<a href="${esc(siteLink(`/boek/${d.book.slug}/${c.slug}`))}">${t.read}</a></span></li>`).join('')}</ul>
        </div>`).join('')}
      </section>
      <section>
        <div class="card">
          <h2>${t.practiceTitle}</h2>
          ${d.questions.total ? `<form id="practice">
            ${unitOpts.length ? `<fieldset class="unitpick"><legend>${t.chooseUnits}</legend>${unitOpts.map((u) => `<label class="inline"><input type="checkbox" name="u" value="${u.n}"> ${fmt(t.unitN, { n: u.n })} <small class="muted">(${d.questions.perUnit[u.n]})</small></label>`).join('')}<small class="muted">${t.noneIsAll}</small></fieldset>` : ''}
            <label>${t.howMany}<select name="count">${[5, 10, 15, 20, 30].map((n) => `<option${n === 10 ? ' selected' : ''}>${n}</option>`).join('')}</select></label>
            ${d.questions.open ? `<label class="inline"><input type="checkbox" name="includeOpen" value="1"> ${t.includeOpen}</label>` : ''}
            <button class="primary" type="submit">${t.startPractice}</button><p class="msg"></p></form>
            <p class="muted small">${fmt(t.poolInfo, { n: d.questions.total })}</p>` : `<p class="muted">${t.noQuestions}</p>`}
        </div>
        <div class="card">
          <h2>${t.planning}</h2>
          <form id="plan" class="row2">
            <label>${t.startDate}<input type="date" name="start_date" value="${esc(d.plan?.start_date || new Date().toISOString().slice(0, 10))}" required></label>
            <label>${t.endDate}<input type="date" name="target_date" value="${esc(d.plan?.target_date || '')}"></label>
            <div class="actions"><button type="submit" class="primary">${t.savePlan}</button>${d.plan ? `<button type="button" id="clearPlan">${t.clearPlan}</button>` : ''}</div>
            <p class="msg"></p></form>
          ${plan ? `<ol class="weeks">${plan.map((w) => {
            const end = +w.start + 7 * 86400000
            const cur = now >= +w.start && now < end
            const allDone = w.lessons.length && w.lessons.every((c) => done.has(c.id))
            return `<li class="${cur ? 'cur' : ''}${allDone ? ' done' : ''}"><b>${fmt(t.weekN, { n: w.week })}</b> <small class="muted">${day(w.start)}</small>
              <span dir="auto">${w.lessons.length ? w.lessons.map((c) => `${done.has(c.id) ? '✓ ' : ''}${esc(c.slug)}`).join(', ') : t.repeat}</span></li>`
          }).join('')}</ol><p class="muted small">${t.weeksHelp}</p>` : `<p class="muted small">${t.planHelp}</p>`}
          ${nextLessons.length ? `<h3>${t.nextUp}</h3><ul class="plain">${nextLessons.map((c) => `<li><a dir="auto" href="${esc(siteLink(`/boek/${d.book.slug}/${c.slug}`))}">${esc(c.title)}</a></li>`).join('')}</ul>` : ''}
        </div>
        ${d.tests.length ? `<h2>${t.nav.tests}</h2>${d.tests.map(testCard).join('')}` : ''}
      </section>
    </div>`)
  $('#addBook')?.addEventListener('click', async () => { await api('books', 'POST', { slug }); bookView(slug) })
  for (const cb of $$('[data-ch]')) {
    cb.onchange = async () => {
      try { await api('progress', 'POST', { chapterId: Number(cb.dataset.ch), done: cb.checked }) } catch (err) { cb.checked = !cb.checked; alert(err.message) }
    }
  }
  const practice = $('#practice')
  if (practice) {
    form(practice, async () => {
      const units = $$('input[name=u]:checked', practice).map((i) => Number(i.value))
      const r = await api('attempts', 'POST', { slug, units, count: Number(practice.count.value), includeOpen: !!practice.includeOpen?.checked, lang })
      location.hash = '#/poging/' + r.id
    })
  }
  for (const b of $$('[data-practice-unit]')) {
    b.onclick = async () => {
      try { const r = await api('attempts', 'POST', { slug, units: [Number(b.dataset.practiceUnit)], count: 10, lang }); location.hash = '#/poging/' + r.id } catch (err) { alert(err.message) }
    }
  }
  form($('#plan'), async (f) => { await api('plan', 'POST', { slug, ...f }); bookView(slug) })
  $('#clearPlan')?.addEventListener('click', async () => { await api('plan', 'POST', { slug, target_date: '' }); bookView(slug) })
  bindTestButtons()
}

// ---------- toetsen ----------
async function testsView () {
  loading()
  const { tests } = await api('tests')
  const group = (s) => tests.filter((x) => x.state === s)
  const sec = (s, title, empty) => `<h2>${title}</h2>${group(s).map(testCard).join('') || `<p class="muted">${empty}</p>`}`
  render(`<div class="head"><h1>${t.nav.tests}</h1></div><p class="muted">${t.testsHelp}</p>
    ${sec('open', t.openNow, t.noOpen)}${sec('soon', t.planned, t.noPlanned)}${sec('closed', t.past, t.noPast)}
    <div class="card tips"><h2>${t.tipsTitle}</h2><ul>${t.tips.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`)
  bindTestButtons()
}

// ---------- een poging maken of bekijken ----------
async function attemptView (id) {
  loading()
  const a = await api('attempts/' + id)
  if (a.done) return reviewView(a)
  const key = 'zb-attempt-' + a.id
  let saved = {}
  try { saved = JSON.parse(store.get(key) || '{}') } catch {}
  const qLang = a.lang
  render(`<div class="head"><h1 dir="auto">${esc(a.test_id ? testTitle({ title_nl: a.test_title_nl, title_ar: a.test_title_ar }) : t.practice)}</h1>
    ${a.remaining != null ? `<span class="timer" id="timer" aria-live="polite"></span>` : ''}</div>
    <p class="muted" dir="auto">${esc(bookTitle(a))} · ${unitsLabel(a.units)} · ${fmt(t.questionsCount, { n: a.questions.length })}</p>
    <form id="quiz" class="quiz" lang="${qLang}">
      ${a.questions.map((q, i) => questionHtml(q, i, saved[i])).join('')}
      <div class="actions sticky"><span class="muted small" id="answered"></span><button class="primary" type="submit">${t.submit}</button></div>
      <p class="msg"></p>
    </form>`)
  const quiz = $('#quiz')
  const collect = () => a.questions.map((q, i) => {
    if (q.type === 'match') return q.left.map((_, j) => { const v = quiz.querySelector(`[name="q${i}-${j}"]`).value; return v === '' ? null : Number(v) })
    if (q.type === 'open') return quiz.querySelector(`[name="q${i}"]`).value
    const c = quiz.querySelector(`[name="q${i}"]:checked`)
    return c ? Number(c.value) : null
  })
  const isAnswered = (v) => Array.isArray(v) ? v.every((x) => x !== null) : v !== null && v !== ''
  const update = () => {
    const ans = collect()
    store.set(key, JSON.stringify(Object.assign({}, ans)))
    $('#answered').textContent = fmt(t.answered, { n: ans.filter(isAnswered).length, total: ans.length })
  }
  quiz.addEventListener('change', update)
  quiz.addEventListener('input', update)
  update()
  let sending = false
  const submit = async (force = false) => {
    if (sending) return
    const ans = collect()
    const open = ans.filter((v) => !isAnswered(v)).length
    if (!force && open && !confirm(fmt(t.confirmSubmit, { n: open }))) return
    sending = true
    try {
      const r = await api('attempts/' + a.id, 'POST', { answers: ans })
      store.set(key, null)
      reviewView(r)
    } catch (err) { sending = false; const m = $('.msg', quiz); m.className = 'msg err'; m.textContent = err.message }
  }
  quiz.addEventListener('submit', (e) => { e.preventDefault(); submit() })
  if (a.remaining != null) {
    const end = Date.now() + a.remaining * 1000
    const tick = () => {
      const left = Math.max(0, Math.round((end - Date.now()) / 1000))
      const el = document.getElementById('timer')
      if (!el) return clearInterval(timer)
      el.textContent = `⏱ ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`
      el.classList.toggle('low', left < 120)
      if (left <= 0) { clearInterval(timer); alert(t.timeUp); submit(true) }
    }
    tick()
    timer = setInterval(tick, 1000)
  }
}

function questionHtml (q, i, saved) {
  const head = `<div class="qh"><span class="qn">${i + 1}</span><p dir="auto">${esc(q.q)}</p></div>`
  let body = ''
  if (q.type === 'mc' || q.type === 'tf') {
    body = `<div class="opts${q.type === 'tf' ? ' tf' : ''}">${q.options.map((o, j) => `<label class="opt"><input type="radio" name="q${i}" value="${j}"${saved === j ? ' checked' : ''}><span dir="auto">${esc(o)}</span></label>`).join('')}</div>`
  } else if (q.type === 'match') {
    body = `<p class="muted small">${t.matchHelp}</p><div class="match">${q.left.map((l, j) => `<label><span dir="auto">${esc(l)}</span>
      <select name="q${i}-${j}"><option value="">—</option>${q.right.map((r, k) => `<option value="${k}"${Array.isArray(saved) && saved[j] === k ? ' selected' : ''}>${esc(r)}</option>`).join('')}</select></label>`).join('')}</div>`
  } else {
    body = `<textarea name="q${i}" rows="3" dir="auto">${esc(typeof saved === 'string' ? saved : '')}</textarea><p class="muted small">${t.openHelp}</p>`
  }
  return `<fieldset class="card q">${head}${body}</fieldset>`
}

function reviewView (a) {
  const p = pct(a.score, a.max_score)
  const right = (q) => q.type === 'match' ? q.left.map((l, j) => `${esc(l)} → ${esc(q.right[q.answer[j]])}`).join('<br>') : q.type === 'open' ? esc(q.model || '') : esc(q.options[q.answer])
  const given = (q) => {
    if (q.given == null || q.given === '') return `<i class="muted">${t.noAnswer}</i>`
    if (q.type === 'match') return q.left.map((l, j) => `${esc(l)} → ${q.given[j] == null ? '—' : esc(q.right[q.given[j]])}`).join('<br>')
    if (q.type === 'open') return esc(q.given)
    return esc(q.options[q.given])
  }
  const mark = (q) => q.points == null ? 'open' : q.points >= 1 ? 'ok' : q.points > 0 ? 'part' : 'wrong'
  const lessonLink = (q) => q.lesson ? `<a href="${esc(siteLink(`/boek/${a.slug}/${q.lesson}`))}">${t.lesson} ${esc(q.lesson)}</a>` : ''
  const source = (q) => [q.page ? `${t.page} ${q.page}` : (q.source ? esc(q.source) : ''), lessonLink(q)].filter(Boolean).join(' · ')
  render(`<div class="head"><h1 dir="auto">${esc(a.test_id ? testTitle({ title_nl: a.test_title_nl, title_ar: a.test_title_ar }) : t.practice)}</h1></div>
    ${a.student ? `<p class="warn">${fmt(t.viewingStudent, { name: a.student.name || a.student.email })}</p>` : ''}
    <div class="card result"><div class="big ${p == null ? '' : p >= 70 ? 'good' : p >= 50 ? 'mid' : 'low'}">${p == null ? '–' : p + '%'}</div>
      <div><b>${fmt(t.scoreLine, { score: a.score, max: a.max_score })}</b>${a.late ? ` · <span class="behind">${t.late}</span>` : ''}
      <p class="muted small" dir="auto">${esc(bookTitle(a))} · ${unitsLabel(a.units)} · ${dateTime(a.submitted_at)}</p>
      <p>${p == null ? '' : p >= 70 ? t.feedbackGood : p >= 50 ? t.feedbackMid : t.feedbackLow}</p>
      <div class="actions"><a class="btn" href="#/boek/${esc(a.slug)}">${t.backToBook}</a>${a.student ? '' : `<button type="button" id="again" class="primary">${t.again}</button>`}</div></div></div>
    <div class="quiz" lang="${a.lang}">${a.review.map((q, i) => `<div class="card q rv ${mark(q)}">
      <div class="qh"><span class="qn">${i + 1}</span><p dir="auto">${esc(q.q)}</p><span class="mk">${t.mark[mark(q)]}</span></div>
      <dl class="ans"><dt>${t.yourAnswer}</dt><dd dir="auto">${given(q)}</dd>
      ${mark(q) === 'ok' ? '' : `<dt>${q.type === 'open' ? t.modelAnswer : t.correct}</dt><dd dir="auto">${right(q)}</dd>`}</dl>
      ${q.explain ? `<p class="explain" dir="auto">${esc(q.explain)}</p>` : ''}
      ${source(q) ? `<p class="muted small">${t.source}: ${source(q)}</p>` : ''}
    </div>`).join('')}</div>`)
  $('#again')?.addEventListener('click', async () => {
    try {
      const r = await api('attempts', 'POST', a.test_id ? { testId: a.test_id, lang } : { slug: a.slug, units: a.units, count: a.review.length, includeOpen: a.review.some((q) => q.type === 'open'), lang })
      location.hash = '#/poging/' + r.id
    } catch (err) { alert(err.message) }
  })
}

// ---------- resultaten ----------
async function resultsView () {
  loading()
  const { attempts } = await api('attempts')
  const byBook = new Map()
  for (const a of attempts) {
    if (!(a.max_score > 0)) continue
    const b = byBook.get(a.slug) || { title: bookTitle(a), n: 0, sum: 0, slug: a.slug }
    b.n++; b.sum += a.score / a.max_score
    byBook.set(a.slug, b)
  }
  render(`<div class="head"><h1>${t.nav.results}</h1></div>
    ${byBook.size ? `<div class="tiles">${[...byBook.values()].map((b) => `<a class="tile" href="#/boek/${esc(b.slug)}"><b>${Math.round(b.sum / b.n * 100)}%</b><span dir="auto">${esc(b.title)}</span><small class="muted">${fmt(t.attemptsN, { n: b.n })}</small></a>`).join('')}</div>` : ''}
    ${attempts.length ? `<ul class="reslist">${attempts.map(attemptRow).join('')}</ul>` : `<p class="muted">${t.noResults}</p>`}`)
}

// ---------- docent: toetsen plannen ----------
const localInput = (s) => {
  if (!s) return ''
  const d = utc(s)
  const off = d.getTimezoneOffset() * 60000
  return new Date(d - off).toISOString().slice(0, 16)
}

async function teacherView (id) {
  loading()
  const d = await api('teach/tests')
  const edit = id && id !== 'nieuw' ? d.tests.find((x) => x.id === Number(id)) : null
  if (id && !edit && id !== 'nieuw') {
    return teacherResults(Number(id))
  }
  if (id) {
    const x = edit || { question_count: 10, max_attempts: 1, time_limit_min: 30, status: 'published' }
    render(`<p class="crumbs"><a href="#/docent">${t.nav.teacher}</a></p><h1>${edit ? t.editTest : t.newTest}</h1>
      <form class="card" id="tf">
        <div class="row2"><label>${t.titleNl}<input name="title_nl" value="${esc(x.title_nl || '')}"></label>
        <label>${t.titleAr}<input name="title_ar" dir="rtl" value="${esc(x.title_ar || '')}"></label></div>
        <div class="row2"><label>${t.book}<select name="slug" required><option value="">—</option>${d.books.map((b) => `<option value="${esc(b.slug)}"${b.slug === x.slug ? ' selected' : ''}>${esc(bookTitle(b))}</option>`).join('')}</select></label>
        <label>${t.unitsField}<input name="units" value="${esc(x.units || '')}" placeholder="1,2"><small class="muted">${t.unitsHelp}</small></label></div>
        <div class="row3"><label>${t.questionsN}<input type="number" name="question_count" min="1" max="50" value="${x.question_count}"></label>
        <label>${t.timeLimitMin}<input type="number" name="time_limit_min" min="0" max="600" value="${x.time_limit_min ?? ''}"></label>
        <label>${t.maxAttempts}<input type="number" name="max_attempts" min="1" max="20" value="${x.max_attempts}"></label></div>
        <div class="row2"><label>${t.opens}<input type="datetime-local" name="opens_at" value="${esc(localInput(x.opens_at))}" required></label>
        <label>${t.closes}<input type="datetime-local" name="closes_at" value="${esc(localInput(x.closes_at))}" required></label></div>
        <div class="row2"><label>${t.infoNl}<textarea name="info_nl" rows="4">${esc(x.info_nl || '')}</textarea></label>
        <label>${t.infoAr}<textarea name="info_ar" rows="4" dir="rtl">${esc(x.info_ar || '')}</textarea></label></div>
        <label class="inline"><input type="checkbox" name="draft" value="1"${x.status === 'draft' ? ' checked' : ''}> ${t.hiddenDraft}</label>
        <div class="actions"><button class="primary" type="submit">${t.save}</button>${edit ? `<button type="button" class="danger" id="arch">${t.archive}</button>` : ''}</div>
        <p class="msg"></p></form>`)
    form($('#tf'), async (f) => {
      const data = { ...f, status: f.draft ? 'draft' : 'published', opens_at: new Date(f.opens_at).toISOString(), closes_at: new Date(f.closes_at).toISOString() }
      if (edit) await api('teach/tests/' + edit.id, 'PATCH', data)
      else await api('teach/tests', 'POST', data)
      location.hash = '#/docent'
    })
    $('#arch')?.addEventListener('click', async () => { if (confirm(t.confirmArchive)) { await api('teach/tests/' + edit.id, 'DELETE'); location.hash = '#/docent' } })
    return
  }
  render(`<div class="head"><h1>${t.nav.teacher}</h1><a class="btn primary" href="#/docent/nieuw">+ ${t.newTest}</a></div>
    <p class="muted">${t.teacherHelp}</p>
    ${d.tests.length ? `<table class="tbl"><thead><tr><th>${t.test}</th><th>${t.book}</th><th>${t.opens}</th><th>${t.closes}</th><th>${t.submitted}</th><th></th></tr></thead><tbody>
      ${d.tests.map((x) => `<tr><td dir="auto"><a href="#/docent/${x.id}/resultaten">${esc(testTitle(x))}</a> ${x.status === 'draft' ? `<span class="pill">${t.draft}</span>` : stateBadge(x.state)}</td>
        <td dir="auto">${esc(testBook(x))}<br><small class="muted">${unitsLabel(x.units)}</small></td><td>${dateTime(x.opens_at)}</td><td>${dateTime(x.closes_at)}</td>
        <td>${x.attempts}</td><td><a href="#/docent/${x.id}">${t.edit}</a></td></tr>`).join('')}</tbody></table>` : `<p class="muted">${t.noTests}</p>`}`)
}

async function teacherResults (id) {
  loading()
  const { test, attempts } = await api('teach/tests/' + id)
  const done = attempts.filter((a) => a.submitted_at)
  const avg = done.length ? Math.round(done.reduce((n, a) => n + (a.max_score ? a.score / a.max_score : 0), 0) / done.length * 100) : null
  render(`<p class="crumbs"><a href="#/docent">${t.nav.teacher}</a></p>
    <div class="head"><h1 dir="auto">${esc(testTitle(test))}</h1>${stateBadge(test.state)}<a class="btn" href="#/docent/${test.id}">${t.edit}</a></div>
    <p class="muted" dir="auto">${esc(testBook(test))} · ${unitsLabel(test.units)} · ${dateTime(test.opens_at)} – ${dateTime(test.closes_at)}</p>
    <div class="tiles"><div class="tile"><b>${done.length}</b><span>${t.submitted}</span></div><div class="tile"><b>${avg == null ? '–' : avg + '%'}</b><span>${t.average}</span></div></div>
    ${attempts.length ? `<table class="tbl"><thead><tr><th>${t.student}</th><th>${t.score}</th><th>${t.submittedAt}</th><th></th></tr></thead><tbody>
      ${attempts.map((a) => `<tr><td>${esc(a.name || '')}<br><small class="muted">${esc(a.email)}</small></td><td>${a.submitted_at ? scoreBadge(a.score, a.max_score) + ` <small>${a.score}/${a.max_score}</small>` : `<span class="muted">${t.busy}</span>`}${a.late ? ` <span class="behind small">${t.late}</span>` : ''}</td>
        <td>${dateTime(a.submitted_at)}</td><td>${a.submitted_at ? `<a href="#/poging/${a.id}">${t.view}</a>` : ''}</td></tr>`).join('')}</tbody></table>` : `<p class="muted">${t.noAttempts}</p>`}`)
}

// Docentenroutes: #/docent, #/docent/nieuw, #/docent/<id> (bewerken), #/docent/<id>/resultaten
async function teacherRoute (parts) {
  if (parts[2] === 'resultaten') return teacherResults(Number(parts[1]))
  return teacherView(parts[1])
}

// ---------- vragen controleren ----------
async function questionsView (slug, status = 'draft') {
  loading()
  const d = await api('teach/questions' + (slug ? '?book=' + encodeURIComponent(slug) : ''))
  const list = d.questions.filter((q) => status === 'all' || q.status === status)
  const qText = (q) => q.data['vraag_' + lang] || q.data.vraag_nl || q.data.vraag_ar || ''
  const detail = (q) => {
    const x = q.data
    if (q.type === 'mc' || q.type === 'tf') return `<ol class="opts-rv">${(x.opties || []).map((o, i) => `<li class="${i === Number(x.antwoord) ? 'right' : ''}" dir="auto">${esc(o)}</li>`).join('')}</ol>`
    if (q.type === 'match') return `<ul class="opts-rv">${(x.links || []).map((l, i) => `<li dir="auto">${esc(l)} → ${esc((x.rechts || [])[(x.antwoord || [])[i]])}</li>`).join('')}</ul>`
    return `<p class="muted small">${t.modelAnswer}: <span dir="auto">${esc(x.antwoord_tekst || '')}</span></p>`
  }
  const other = lang === 'ar' ? 'nl' : 'ar'
  render(`<div class="head"><h1>${t.nav.questions}</h1></div>
    <p class="muted">${t.questionsHelp}</p>
    ${me.user.reviewer ? '' : `<p class="warn">${t.needReview}</p>`}
    <div class="card"><div class="row2"><label>${t.book}<select id="qbook"><option value="">—</option>${d.books.map((b) => `<option value="${esc(b.slug)}"${b.slug === slug ? ' selected' : ''}>${esc(bookTitle(b))} (${b.draft} / ${b.published})</option>`).join('')}</select></label>
      <label>${t.status}<select id="qstatus">${['draft', 'published', 'rejected', 'all'].map((s) => `<option value="${s}"${s === status ? ' selected' : ''}>${t.qstatus[s]}</option>`).join('')}</select></label></div>
      <p class="muted small">${t.qcounts}</p></div>
    ${slug ? `${list.length ? `<div class="actions sticky"><label class="inline"><input type="checkbox" id="all"> ${t.selectAll}</label>
        <span class="muted small" id="selN"></span>
        ${me.user.reviewer ? `<button type="button" class="primary" data-set="published">${t.approve}</button><button type="button" data-set="draft">${t.toDraft}</button><button type="button" class="danger" data-set="rejected">${t.reject}</button>` : ''}</div>
      ${list.map((q) => `<label class="card qrow"><input type="checkbox" class="sel" value="${q.id}">
        <span><span class="pill">${t.lesson} ${esc(q.lesson)}${q.unit ? ' · ' + fmt(t.unitN, { n: q.unit }) : ''}</span> <span class="pill">${t.qtype[q.type] || q.type}</span> <span class="badge s-${esc(q.status)}">${t.qstatus[q.status] || q.status}</span>
        <b dir="auto">${esc(qText(q))}</b>
        ${q.data['vraag_' + other] ? `<small class="muted" dir="auto">${esc(q.data['vraag_' + other])}</small>` : ''}
        ${detail(q)}
        ${q.data.uitleg_nl ? `<small class="explain" dir="auto">${esc(q.data.uitleg_nl)}</small>` : ''}
        ${q.data.bron ? `<small class="muted">${t.source}: ${esc(q.data.bron)}</small>` : ''}</span></label>`).join('')}` : `<p class="muted">${t.none}</p>`}` : ''}`)
  const go = () => { location.hash = `#/vragen/${encodeURIComponent($('#qbook').value)}/${$('#qstatus').value}` }
  $('#qbook').onchange = go
  $('#qstatus').onchange = go
  const count = () => { const n = $$('.sel:checked').length; const el = $('#selN'); if (el) el.textContent = n ? fmt(t.selected, { n }) : '' }
  view.onchange = count
  $('#all')?.addEventListener('change', (e) => { for (const c of $$('.sel')) c.checked = e.target.checked; count() })
  for (const b of $$('[data-set]')) {
    b.onclick = async () => {
      const ids = $$('.sel:checked').map((c) => Number(c.value))
      if (!ids.length) return alert(t.selectFirst)
      try { await api('teach/questions', 'POST', { ids, status: b.dataset.set }); questionsView(slug, status) } catch (err) { alert(err.message) }
    }
  }
}

// ---------- lesagenda ----------
// Gekozen instituut (agenda en groepenbeheer); de server valt terug op een toegestaan instituut.
let agInst = Number(store.get('zb-institute')) || 0
const setInst = (id) => { agInst = Number(id) || 0; store.set('zb-institute', agInst ? String(agInst) : null) }
const instName = (i) => i ? tr(i, 'name') : ''
const instPicker = (d) => d.institutes && d.institutes.length > 1
  ? `<label class="instpick">${t.ag.institute} <select id="instPick">${d.institutes.map((i) => `<option value="${i.id}"${i.id === d.institute?.id ? ' selected' : ''}>${esc(instName(i))}</option>`).join('')}</select></label>`
  : ''
const bindInstPicker = (again) => { const sel = document.getElementById('instPick'); if (sel) sel.onchange = () => { setInst(sel.value); again() } }
const agDate = (s, opts = { weekday: 'short', day: 'numeric', month: 'short' }) => new Date(s + 'T12:00:00').toLocaleDateString(locale(), opts)
const dayName = (n) => new Date(Date.UTC(2024, 0, n, 12)).toLocaleDateString(locale(), { weekday: 'long', timeZone: 'UTC' })
const tr = (x, base) => x[base + '_' + lang] || x[base + '_' + (lang === 'ar' ? 'nl' : 'ar')] || ''
const groupName = (g) => tr(g, 'name')
const cohortName = (c) => fmt(t.ag.cohort, { c: lang === 'ar' ? ({ A: 'أ', B: 'ب' })[c] || c : c })
// alt: deze les heeft het tweede vak (om en om).
const subjText = (b, alt) => tr(b, alt ? 'alt_subject' : 'subject')
const subject = (b, alt) => esc(subjText(b, alt)) || `<i class="muted">${t.ag.noSubject}</i>`
const altOn = (d, date, bid) => !!d.calendar.find((c) => c.date === date)?.alt?.includes(bid)
const addD = (s, n) => new Date(Date.parse(s + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10)
const kindBadge = (k) => `<span class="agk k-${esc(k)}">${esc(t.ag.kinds[k] || k)}</span>`
const statusBadge = (s) => s ? `<span class="ags s-${esc(s)}">${esc(t.ag.status[s])}</span>` : ''
const SUBJECT_PRESETS = [
  ['Fiqh en sīra', 'الفقه والسيرة'], ['Geloofsleer en tafsīr', 'العقيدة والتفسير'], ['Hadith en islamitische opvoeding', 'الحديث والتربية الإسلامية'],
  ['Geloofsleer', 'العقيدة'], ['Tafsīr', 'التفسير'], ['Hadith', 'الحديث'], ['Sīra', 'السيرة النبوية'], ['Fiqh', 'الفقه'],
  ['Islamitische opvoeding', 'التربية الإسلامية'], ['Arabische taal', 'اللغة العربية']
]

function itemHtml (i, d) {
  const g = i.group_id ? d.groups.find((x) => x.id === i.group_id) : null
  const mayEdit = d.manager || i.created_by === me.user.id
  const info = tr(i, 'info')
  return `<div class="agitem"><div>${kindBadge(i.kind)} <b dir="auto">${esc(tr(i, 'title'))}</b>
    <small class="muted">${esc(g ? groupName(g) : cohortName(i.cohort))}${i.author ? ' · ' + esc(i.author) : ''}</small></div>
    ${info ? `<p class="small" dir="auto">${esc(info)}</p>` : ''}
    ${mayEdit ? `<button type="button" class="link small" data-del-item="${i.id}">${t.ag.remove}</button>` : ''}</div>`
}

async function agendaView (from) {
  loading()
  const d = await api('agenda?weeks=4' + (from ? '&from=' + encodeURIComponent(from) : '') + (agInst ? '&institute=' + agInst : ''))
  const blockById = new Map(d.blocks.map((b) => [b.id, b]))
  const dayById = new Map(d.days.map((x) => [x.id, x]))
  const many = new Set(d.groups.map((g) => g.cohort)).size > 1
  const teachGroups = d.groups.filter((g) => g.canTeach)
  const weeks = []
  for (let w = 0; w < d.weeks; w++) {
    const start = addD(d.from, w * 7)
    const end = addD(start, 6)
    weeks.push({ start, days: d.calendar.filter((x) => x.date >= start && x.date <= end) })
  }
  const lessonHtml = (date, bid) => {
    const b = blockById.get(bid)
    const own = d.attendance.find((a) => a.block_id === bid && a.date === date)
    const its = d.items.filter((i) => i.item_date === date && i.block_id === bid)
    const teach = date <= d.today ? teachGroups.filter((g) => g.cohort === b.cohort) : []
    return `<li class="aglesson"><span class="agtime">${esc(b.start_time)}–${esc(b.end_time)}</span>
      <span class="agsub"><b dir="auto">${subject(b, altOn(d, date, bid))}</b>${many ? ` <small class="muted">${esc(cohortName(b.cohort))}</small>` : ''} ${statusBadge(own?.status)}${own?.note ? ` <small class="muted" dir="auto">${esc(own.note)}</small>` : ''}
        ${its.map((i) => itemHtml(i, d)).join('')}
        ${teach.length ? `<span class="agrec">${teach.map((g) => {
          const r = d.recorded.find((x) => x.group_id === g.id && x.block_id === bid && x.date === date)
          return `<a class="btn small${r ? '' : ' todo'}" href="#/aanwezigheid/${g.id}/${bid}/${date}">${r ? '✓ ' : ''}${esc(groupName(g))}${r ? ` · ${fmt(t.ag.absentN, { n: r.absent })}` : ` · ${t.ag.fillIn}`}</a>`
        }).join('')}</span>` : ''}</span></li>`
  }
  const dayHtml = (x) => {
    const evs = x.events.map((id) => dayById.get(id)).filter(Boolean)
    const loose = d.items.filter((i) => i.item_date === x.date && !i.block_id)
    return `<div class="agday${x.date === d.today ? ' now' : ''}"><div class="agdate"><b>${esc(agDate(x.date, { weekday: 'long' }))}</b><span>${esc(agDate(x.date, { day: 'numeric', month: 'long' }))}</span></div>
      <div class="agbody">${evs.map((e) => `<div class="agev ev-${esc(e.kind)}">${esc(t.ag.dayKinds[e.kind])}: <span dir="auto">${esc(tr(e, 'title'))}</span>${e.date_to && e.date_to !== e.date_from ? ` <small>(${esc(agDate(e.date_from, { day: 'numeric', month: 'short' }))} – ${esc(agDate(e.date_to, { day: 'numeric', month: 'short' }))})</small>` : ''}</div>`).join('')}
        ${loose.map((i) => itemHtml(i, d)).join('')}
        ${x.lessons.length ? `<ul class="aglessons">${x.lessons.map((bid) => lessonHtml(x.date, bid)).join('')}</ul>` : ''}</div></div>`
  }
  const groupOpts = () => [...(d.manager ? [...new Set(d.groups.map((g) => g.cohort))].map((c) => `<option value="${c}">${esc(cohortName(c))} (${t.ag.bothGroups})</option>`) : []),
    ...teachGroups.map((g) => `<option value="${g.id}">${esc(groupName(g))}</option>`)].join('')
  render(`<div class="head"><h1>${t.ag.title}</h1>
      ${d.recorder && teachGroups.length ? `<button type="button" class="primary" id="addItem">+ ${t.ag.addItem}</button>` : ''}
      ${me.user.groupsManager ? `<a class="btn" href="#/groepen">${t.nav.groups}</a>` : ''}</div>
    ${instPicker(d)}${d.institutes?.length === 1 ? `<p class="muted small">${esc(instName(d.institute))}</p>` : ''}
    ${agTabs('week', from || d.today)}
    <p class="muted">${d.groups.length ? d.groups.map((g) => `<span class="pill">${esc(groupName(g))}${g.teacher ? ' · ' + t.ag.teacherOf : ''}</span>`).join(' ') : ''}
      ${d.year.title_nl || d.year.title_ar ? ` · ${esc(tr(d.year, 'title'))}` : ''}</p>
    ${d.groups.length ? '' : `<div class="card empty"><h2>${t.ag.noGroupTitle}</h2><p>${t.ag.noGroupText}</p></div>`}
    <form class="card" id="itemForm" hidden><h2>${t.ag.addItem}</h2>
      <div class="row3"><label>${t.ag.kind}<select name="kind">${['test', 'homework', 'note'].map((k) => `<option value="${k}">${t.ag.kinds[k]}</option>`).join('')}</select></label>
        <label>${t.ag.group}<select name="group" required>${groupOpts()}</select></label>
        <label>${t.ag.date}<input type="date" name="date" required value="${esc(d.today)}"></label></div>
      <label>${t.ag.lesson}<select name="block"><option value="">${t.ag.wholeDay}</option></select></label>
      <div class="row2"><label>${t.ag.titleNl}<input name="title_nl" maxlength="255"></label><label>${t.ag.titleAr}<input name="title_ar" dir="rtl" maxlength="255"></label></div>
      <div class="row2"><label>${t.ag.infoNl}<textarea name="info_nl" rows="3"></textarea></label><label>${t.ag.infoAr}<textarea name="info_ar" rows="3" dir="rtl"></textarea></label></div>
      <div class="actions"><button class="primary" type="submit">${t.save}</button><button type="button" id="cancelItem">${t.ag.cancel}</button></div><p class="msg"></p></form>
    <div class="agnav"><a class="btn" href="#/agenda/${addD(d.from, -7 * d.weeks)}">${lang === 'ar' ? '→' : '←'} ${t.ag.earlier}</a>
      <a class="btn" href="#/agenda">${t.ag.thisWeek}</a>
      <a class="btn" href="#/agenda/${addD(d.from, 7 * d.weeks)}">${t.ag.later} ${lang === 'ar' ? '←' : '→'}</a></div>
    ${d.groups.length ? weeks.map((w) => `<section class="card agweek"><h2>${fmt(t.ag.weekOf, { d: agDate(w.start, { day: 'numeric', month: 'long', year: 'numeric' }) })}</h2>
      ${w.days.length ? w.days.map(dayHtml).join('') : `<p class="muted small">${t.ag.noLessons}</p>`}</section>`).join('') : ''}
    ${teachGroups.length ? `<p>${teachGroups.map((g) => `<a class="btn small" href="#/groep/${g.id}">${fmt(t.ag.summaryOf, { g: groupName(g) })}</a>`).join(' ')}</p>` : ''}`)
  const f = $('#itemForm')
  const fillBlocks = () => {
    const gv = f.group.value
    const cohort = /^[AB]$/.test(gv) ? gv : d.groups.find((g) => String(g.id) === gv)?.cohort
    const wd = f.date.value ? ((new Date(f.date.value + 'T12:00:00Z').getUTCDay() + 6) % 7) + 1 : 0
    f.block.innerHTML = `<option value="">${t.ag.wholeDay}</option>` + d.blocks.filter((b) => b.cohort === cohort && b.weekday === wd)
      .map((b) => `<option value="${b.id}">${esc(b.start_time)}–${esc(b.end_time)} ${esc(tr(b, 'subject'))}${subjText(b, true) ? ' / ' + esc(subjText(b, true)) : ''}</option>`).join('')
  }
  if (f) {
    f.group.onchange = fillBlocks
    f.date.onchange = fillBlocks
    fillBlocks()
    $('#addItem')?.addEventListener('click', () => { f.hidden = false; f.scrollIntoView({ behavior: 'smooth' }) })
    $('#cancelItem').onclick = () => { f.hidden = true }
    form(f, async (x) => { await api('agenda-items', 'POST', { ...x, institute: d.institute?.id }); agendaView(from) })
  }
  for (const b of $$('[data-del-item]')) {
    b.onclick = async () => { if (!confirm(t.ag.confirmRemove)) return; try { await api('agenda-items?id=' + b.dataset.delItem, 'DELETE'); agendaView(from) } catch (err) { alert(err.message) } }
  }
  bindInstPicker(() => agendaView(from))
}

// ---------- maand- en jaaroverzicht ----------
// Wisselen tussen week, maand en jaar; date is de datum waar je bent.
const agTabs = (view, date) => `<div class="agtabs" role="group" aria-label="${t.ag.viewLabel}">${[
  ['week', '#/agenda/' + (date || '')], ['month', '#/agenda/maand/' + (date || '').slice(0, 7)], ['year', '#/agenda/jaar/' + (date || '')]
].map(([v, h]) => `<a class="btn${v === view ? ' on' : ''}" href="${h}"${v === view ? ' aria-current="page"' : ''}>${t.ag.views[v]}</a>`).join('')}</div>`
const instQ = () => agInst ? '&institute=' + agInst : ''
const wdOf = (s) => ((new Date(s + 'T12:00:00Z').getUTCDay() + 6) % 7) + 1
// Wat er op een dag is: vakanties en examens (ook midden in een vakantie), lessen, toetsen en huiswerk.
function dayInfo (d, date) {
  const x = d.calendar.find((c) => c.date === date)
  const evs = d.days.filter((e) => e.kind !== 'year' && e.date_from <= date && (e.date_to || e.date_from) >= date)
  return {
    lessons: (x?.lessons || []).map((id) => d.blocks.find((b) => b.id === id)).filter(Boolean).map((b) => ({ ...b, alt: !!x.alt?.includes(b.id) })),
    evs,
    items: d.items.filter((i) => i.item_date === date),
    absent: d.attendance.some((a) => a.date === date && a.status === 'absent')
  }
}
const weekHead = (weekday = 'short') => [1, 2, 3, 4, 5, 6, 7].map((n) => `<span class="mwd">${esc(new Date(Date.UTC(2024, 0, n, 12)).toLocaleDateString(locale(), { weekday, timeZone: 'UTC' }))}</span>`).join('')
// Alle dagen van een maand, aangevuld tot hele weken (maandag t/m zondag); null = buiten de maand.
function monthCells (first) {
  const last = addD(addD(first, 32).slice(0, 8) + '01', -1)
  const cells = Array(wdOf(first) - 1).fill(null)
  for (let s = first; s <= last; s = addD(s, 1)) cells.push(s)
  while (cells.length % 7) cells.push(null)
  return cells
}
const monthTitle = (first) => agDate(first, { month: 'long', year: 'numeric' })
const agLegend = () => `<p class="aglegend small">${['lesson', 'holiday', 'exam', 'special', 'test', 'homework'].map((k) => `<span><i class="lg lg-${k}"></i>${esc(t.ag.legend[k])}</span>`).join('')}</p>`

async function agendaMonthView (month) {
  loading()
  const first = /^\d{4}-\d{2}$/.test(month || '') ? month + '-01' : ''
  const d = await api('agenda?view=month' + (first ? '&from=' + first : '') + instQ())
  const many = new Set(d.groups.map((g) => g.cohort)).size > 1
  const cell = (date) => {
    if (!date) return '<span class="mcell out"></span>'
    const x = dayInfo(d, date)
    const k = ['exam', 'special', 'holiday'].find((kind) => x.evs.some((e) => e.kind === kind))
    const dots = [...x.lessons.map(() => 'lesson'), ...x.items.map((i) => i.kind)].map((c) => `<i class="lg lg-${esc(c)}"></i>`).join('')
    return `<a class="mcell${date === d.today ? ' now' : ''}${k ? ' m-' + k : ''}" href="#/agenda/${date}" title="${esc(agDate(date, { weekday: 'long', day: 'numeric', month: 'long' }))}">
      <span class="mnum">${Number(date.slice(8))}</span>
      ${x.evs.map((e) => `<span class="mev ev-${esc(e.kind)}" dir="auto">${esc(tr(e, 'title') || t.ag.dayKinds[e.kind])}</span>`).join('')}
      ${x.lessons.map((b) => `<span class="mles"><b>${esc(b.start_time)}</b> <span dir="auto">${esc(subjText(b, b.alt))}</span>${many ? ` <small>${esc(cohortName(b.cohort))}</small>` : ''}</span>`).join('')}
      ${x.items.map((i) => `<span class="mitem k-${esc(i.kind)}" dir="auto">${esc(t.ag.kinds[i.kind])}: ${esc(tr(i, 'title'))}</span>`).join('')}
      ${x.absent ? `<span class="ags s-absent">${esc(t.ag.status.absent)}</span>` : ''}${dots ? `<span class="mdots">${dots}</span>` : ''}</a>`
  }
  render(`<div class="head"><h1>${t.ag.title}</h1>${me.user.groupsManager ? `<a class="btn" href="#/groepen">${t.nav.groups}</a>` : ''}</div>
    ${instPicker(d)}${d.institutes?.length === 1 ? `<p class="muted small">${esc(instName(d.institute))}</p>` : ''}
    ${agTabs('month', d.from)}
    <div class="agnav"><a class="btn" href="#/agenda/maand/${addD(d.from, -1).slice(0, 7)}">${lang === 'ar' ? '→' : '←'} ${t.ag.prevMonth}</a>
      <a class="btn" href="#/agenda/maand/${d.today.slice(0, 7)}">${t.ag.thisMonth}</a>
      <a class="btn" href="#/agenda/maand/${addD(d.to, 1).slice(0, 7)}">${t.ag.nextMonth} ${lang === 'ar' ? '←' : '→'}</a></div>
    ${d.groups.length ? `<section class="card"><h2>${esc(monthTitle(d.from))}</h2>
      ${agLegend()}<div class="mgrid">${weekHead()}${monthCells(d.from).map(cell).join('')}</div>
      <p class="muted small">${t.ag.clickDay}</p></section>` : `<div class="card empty"><h2>${t.ag.noGroupTitle}</h2><p>${t.ag.noGroupText}</p></div>`}`)
  bindInstPicker(() => agendaMonthView(month))
}

async function agendaYearView (date) {
  loading()
  const d = await api('agenda?view=year' + (/^\d{4}-\d{2}-\d{2}$/.test(date || '') ? '&from=' + date : '') + instQ())
  const months = []
  for (let m = d.from.slice(0, 8) + '01'; m <= d.to; m = addD(m, 32).slice(0, 8) + '01') months.push(m)
  const mini = (s) => {
    if (!s) return '<span class="ycell out"></span>'
    const x = dayInfo(d, s)
    const k = ['exam', 'special', 'holiday'].find((kind) => x.evs.some((e) => e.kind === kind))
    const cls = ['ycell', k ? 'y-' + k : x.lessons.length ? 'y-lesson' : '', s === d.today ? 'now' : '', s < d.from || s > d.to ? 'off' : ''].filter(Boolean).join(' ')
    const marks = x.items.some((i) => i.kind === 'test') ? '<i class="ydot k-test"></i>' : x.items.some((i) => i.kind === 'homework') ? '<i class="ydot k-homework"></i>' : ''
    const tip = [...x.evs.map((e) => tr(e, 'title') || t.ag.dayKinds[e.kind]), ...x.lessons.map((b) => b.start_time + ' ' + subjText(b, b.alt)), ...x.items.map((i) => t.ag.kinds[i.kind] + ': ' + tr(i, 'title'))].join('\n')
    return `<a class="${cls}" href="#/agenda/${s}" title="${esc(agDate(s, { weekday: 'long', day: 'numeric', month: 'long' }) + (tip ? '\n' + tip : ''))}">${Number(s.slice(8))}${marks}</a>`
  }
  const lessonsIn = (m) => { const end = addD(addD(m, 32).slice(0, 8) + '01', -1); return d.calendar.filter((c) => c.date >= m && c.date <= end).reduce((n, c) => n + c.lessons.length, 0) }
  const evs = d.days.filter((e) => e.kind !== 'year').sort((a, b) => a.date_from.localeCompare(b.date_from))
  const tests = d.items.filter((i) => i.kind === 'test')
  const span = (e) => esc(agDate(e.date_from, { day: 'numeric', month: 'short' })) + (e.date_to && e.date_to !== e.date_from ? ' – ' + esc(agDate(e.date_to, { day: 'numeric', month: 'short' })) : '')
  const yTitle = tr(d.year, 'title') || `${d.from.slice(0, 4)}–${d.to.slice(0, 4)}`
  render(`<div class="head"><h1>${t.ag.title}</h1>${me.user.groupsManager ? `<a class="btn" href="#/groepen">${t.nav.groups}</a>` : ''}</div>
    ${instPicker(d)}${d.institutes?.length === 1 ? `<p class="muted small">${esc(instName(d.institute))}</p>` : ''}
    ${agTabs('year', d.today >= d.from && d.today <= d.to ? d.today : d.from)}
    <div class="agnav"><a class="btn" href="#/agenda/jaar/${addD(d.from, -60)}">${lang === 'ar' ? '→' : '←'} ${t.ag.prevYear}</a>
      <a class="btn" href="#/agenda/jaar/${d.today}">${t.ag.thisYear}</a>
      <a class="btn" href="#/agenda/jaar/${addD(d.to, 30)}">${t.ag.nextYear} ${lang === 'ar' ? '←' : '→'}</a></div>
    ${d.groups.length ? `<section class="card"><h2>${tr(d.year, 'title') ? esc(yTitle) : fmt(t.ag.yearOf, { y: esc(yTitle) })} <small class="muted">${esc(agDate(d.from, { day: 'numeric', month: 'long', year: 'numeric' }))} – ${esc(agDate(d.to, { day: 'numeric', month: 'long', year: 'numeric' }))}</small></h2>
      ${agLegend()}
      <div class="ymonths">${months.map((m) => `<div class="ymonth"><h3><a href="#/agenda/maand/${m.slice(0, 7)}">${esc(monthTitle(m))}</a> ${lessonsIn(m) ? `<small class="muted">${fmt(t.ag.lessonsN, { n: lessonsIn(m) })}</small>` : ''}</h3>
        <div class="ygrid">${weekHead('narrow')}${monthCells(m).map(mini).join('')}</div></div>`).join('')}</div></section>
    <div class="ylists"><section class="card"><h2>${t.ag.yearEvents}</h2>
      ${evs.length ? `<ul class="ylist">${evs.map((e) => `<li><span class="agev ev-${esc(e.kind)}">${esc(t.ag.dayKinds[e.kind])}</span> <b dir="auto">${esc(tr(e, 'title'))}</b> <small class="muted">${span(e)}</small></li>`).join('')}</ul>` : `<p class="muted small">${t.none}</p>`}</section>
      <section class="card"><h2>${t.ag.yearTests}</h2>
      ${tests.length ? `<ul class="ylist">${tests.map((i) => `<li><a href="#/agenda/${i.item_date}">${esc(agDate(i.item_date, { day: 'numeric', month: 'short' }))}</a> <b dir="auto">${esc(tr(i, 'title'))}</b> <small class="muted">${esc(i.group_id ? groupName(d.groups.find((g) => g.id === i.group_id) || {}) : cohortName(i.cohort))}</small></li>`).join('')}</ul>` : `<p class="muted small">${t.none}</p>`}</section></div>`
    : `<div class="card empty"><h2>${t.ag.noGroupTitle}</h2><p>${t.ag.noGroupText}</p></div>`}`)
  bindInstPicker(() => agendaYearView(date))
}

// Presentielijst van één les.
async function attendanceView (groupId, blockId, date) {
  loading()
  const d = await api(`attendance?group=${groupId}&block=${blockId}&date=${encodeURIComponent(date)}`)
  const st = ['present', 'absent', 'late', 'excused']
  render(`<p class="crumbs"><a href="#/agenda/${esc(date)}">${t.ag.title}</a> · <a href="#/groep/${d.group.id}">${fmt(t.ag.summaryOf, { g: groupName(d.group) })}</a></p>
    <div class="head"><h1>${t.ag.attendance}</h1></div>
    <p class="muted"><b>${esc(groupName(d.group))}</b> · ${esc(agDate(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }))} · ${esc(d.block.start_time)}–${esc(d.block.end_time)} · <span dir="auto">${subject(d.block, d.block.alt)}</span></p>
    ${d.items.length ? `<p>${d.items.map((i) => `${kindBadge(i.kind)} <span dir="auto">${esc(tr(i, 'title'))}</span>`).join(' · ')}</p>` : ''}
    ${d.recorded ? `<p class="ok small">✓ ${t.ag.alreadySaved}</p>` : `<p class="muted small">${t.ag.defaultPresent}</p>`}
    ${d.students.length ? `<form id="att" class="card">
      <div class="actions"><button type="button" id="allPresent">${t.ag.allPresent}</button></div>
      <table class="tbl att"><thead><tr><th>${t.student}</th><th>${t.ag.statusCol}</th><th>${t.ag.note}</th></tr></thead><tbody>
      ${d.students.map((s) => `<tr data-u="${s.id}"><td>${esc(s.name || s.email)}<br><small class="muted">${esc(s.email)}</small></td>
        <td><div class="seg" role="radiogroup">${st.map((x) => `<label class="s-${x}"><input type="radio" name="s${s.id}" value="${x}"${(s.status || 'present') === x ? ' checked' : ''}> ${t.ag.status[x]}</label>`).join('')}</div></td>
        <td><input name="n${s.id}" value="${esc(s.note)}" maxlength="255" dir="auto"></td></tr>`).join('')}</tbody></table>
      <div class="actions sticky"><button class="primary" type="submit">${t.save}</button></div><p class="msg"></p></form>`
    : `<div class="card"><p class="muted">${t.ag.noStudents}</p></div>`}`)
  const f = $('#att')
  if (!f) return
  $('#allPresent').onclick = () => { for (const r of $$('input[value=present]', f)) r.checked = true }
  form(f, async () => {
    const entries = d.students.map((s) => ({ user_id: s.id, status: f.querySelector(`[name="s${s.id}"]:checked`).value, note: f.querySelector(`[name="n${s.id}"]`).value }))
    await api('attendance', 'POST', { group: d.group.id, block: d.block.id, date, entries })
    return t.ag.saved
  })
}

// Overzicht van de aanwezigheid van één groep over het schooljaar.
async function groupSummaryView (groupId) {
  loading()
  const d = await api('attendance?group=' + groupId)
  render(`<p class="crumbs"><a href="#/agenda">${t.ag.title}</a></p>
    <div class="head"><h1>${esc(groupName(d.group))}</h1></div>
    <p class="muted">${fmt(t.ag.summaryHelp, { n: d.lessons, r: d.recordedLessons })}</p>
    ${d.students.length ? `<table class="tbl"><thead><tr><th>${t.student}</th>${['present', 'absent', 'late', 'excused'].map((x) => `<th>${t.ag.status[x]}</th>`).join('')}</tr></thead><tbody>
      ${d.students.map((s) => `<tr><td>${esc(s.name || s.email)}<br><small class="muted">${esc(s.email)}</small></td>${['present', 'absent', 'late', 'excused'].map((x) => `<td>${s.counts[x] ? statusBadge(x) + ' ' + s.counts[x] : '–'}</td>`).join('')}</tr>`).join('')}</tbody></table>`
    : `<p class="muted">${t.ag.noStudents}</p>`}`)
}

// Beheer: groepen, weekrooster en jaarrooster.
async function groupsAdminView () {
  loading()
  const d = await api('groups' + (agInst ? '?institute=' + agInst : ''))
  const userLabel = (u) => `${u.name || u.email} (${u.email})${u.gender ? ' · ' + (u.gender === 'm' ? t.brother : t.sister) : ''}`
  const roleLabel = (u) => u.roles.map((r) => t.ag.roles[r] || r).join(', ')
  const weekdays = [1, 2, 3, 4, 5, 6, 7]
  const dayRow = (x) => `<tr data-day="${x.id || ''}">
    <td><select name="kind">${['year', 'holiday', 'exam', 'special'].map((k) => `<option value="${k}"${x.kind === k ? ' selected' : ''}>${t.ag.dayKinds[k]}</option>`).join('')}</select></td>
    <td><input type="date" name="date_from" value="${esc(x.date_from || '')}"></td><td><input type="date" name="date_to" value="${esc(x.date_to || '')}"></td>
    <td><select name="cohort"><option value="">${t.ag.all}</option>${['A', 'B'].map((c) => `<option value="${c}"${x.cohort === c ? ' selected' : ''}>${esc(cohortName(c))}</option>`).join('')}</select></td>
    <td><input name="title_nl" value="${esc(x.title_nl || '')}"></td><td><input name="title_ar" dir="rtl" value="${esc(x.title_ar || '')}"></td>
    <td class="nowrap"><button type="button" class="small" data-save-day>${t.save}</button>${x.id ? ` <button type="button" class="small danger" data-del-day>${t.ag.remove}</button>` : ''}</td></tr>`
  const blockRow = (b, cohort) => `<tr data-block="${b.id || ''}" data-cohort="${cohort}">
    <td><select name="weekday">${weekdays.map((n) => `<option value="${n}"${b.weekday === n ? ' selected' : ''}>${esc(dayName(n))}</option>`).join('')}</select></td>
    <td><input name="start_time" value="${esc(b.start_time || '19:00')}" size="5" inputmode="numeric"></td><td><input name="end_time" value="${esc(b.end_time || '20:30')}" size="5" inputmode="numeric"></td>
    <td><select name="preset"><option value="">${t.ag.pickSubject}</option>${SUBJECT_PRESETS.map(([nl, ar], i) => `<option value="${i}">${esc(lang === 'ar' ? ar : nl)}</option>`).join('')}<option value="none">${t.ag.noSubject}</option></select></td>
    <td><input name="subject_nl" value="${esc(b.subject_nl || '')}"></td><td><input name="subject_ar" dir="rtl" value="${esc(b.subject_ar || '')}"></td>
    <td><input name="alt_subject_nl" value="${esc(b.alt_subject_nl || '')}"></td><td><input name="alt_subject_ar" dir="rtl" value="${esc(b.alt_subject_ar || '')}"></td>
    <td><input type="date" name="alt_start" value="${esc(b.alt_start || '')}"></td>
    <td class="nowrap"><button type="button" class="small" data-save-block>${t.save}</button>${b.id ? ` <button type="button" class="small danger" data-del-block>${t.ag.remove}</button>` : ''}</td></tr>`
  render(`<p class="crumbs"><a href="#/agenda">${t.ag.title}</a></p><div class="head"><h1>${t.nav.groups}</h1></div>
    ${instPicker(d) || `<p class="muted small"><b>${esc(instName(d.institute))}</b></p>`}
    <p class="muted">${t.ag.adminHelp}${d.institutes.length > 1 ? ' ' + t.ag.adminInstHelp : ''}</p>
    <h2>${t.ag.groupsTitle}</h2>
    <div class="aggroups">${d.groups.map((g) => {
      const studs = g.members.filter((m) => m.role === 'student')
      const teach = g.members.filter((m) => m.role === 'teacher')
      return `<section class="card" data-group="${g.id}"><div class="th"><h3>${esc(groupName(g))}</h3><span class="pill">${fmt(t.ag.studentsN, { n: studs.length })}</span></div>
        <p class="small"><b>${t.ag.teachers}:</b> ${teach.map((m) => `<span class="mem">${esc(m.name || m.email)} <button type="button" class="link" title="${t.ag.remove}" data-rm="${m.id}">×</button></span>`).join(' ') || `<span class="muted">${t.ag.noneYet}</span>`}</p>
        <ul class="memlist">${studs.map((m) => `<li><span>${esc(m.name || m.email)} <small class="muted">${esc(m.email)}</small></span><button type="button" class="link" title="${t.ag.remove}" data-rm="${m.id}">×</button></li>`).join('') || `<li class="muted">${t.ag.noneYet}</li>`}</ul>
        <form class="addmem"><select name="user" required><option value="">${t.ag.chooseAccount}</option>${d.users.filter((u) => !g.members.some((m) => m.id === u.id) && (!u.gender || u.gender === g.gender || !u.roles.every((r) => r === 'student'))).map((u) => `<option value="${u.id}">${esc(userLabel(u))}${u.roles.length ? ' · ' + esc(roleLabel(u)) : ''}</option>`).join('')}</select>
          <select name="role"><option value="student">${t.ag.asStudent}</option><option value="teacher">${t.ag.asTeacher}</option></select>
          <button type="submit" class="primary">${t.ag.add}</button><p class="msg"></p></form></section>`
    }).join('')}</div>
    <h2>${t.ag.scheduleTitle}</h2><p class="muted small">${t.ag.scheduleHelp}</p>
    ${['A', 'B'].filter((c) => d.groups.some((g) => g.cohort === c) || d.blocks.some((b) => b.cohort === c)).map((c) => `<div class="card"><h3>${esc(cohortName(c))}</h3><div class="tblwrap"><table class="tbl edit"><thead><tr><th>${t.ag.day}</th><th>${t.ag.from}</th><th>${t.ag.to}</th><th>${t.ag.subject}</th><th>${t.ag.subjectNl}</th><th>${t.ag.subjectAr}</th><th>${t.ag.altNl}</th><th>${t.ag.altAr}</th><th>${t.ag.altStart}</th><th></th></tr></thead>
      <tbody>${d.blocks.filter((b) => b.cohort === c).map((b) => blockRow(b, c)).join('')}${blockRow({ weekday: 4 }, c)}</tbody></table></div></div>`).join('')}
    <h2>${t.ag.yearTitle}</h2><p class="muted small">${t.ag.yearHelp}</p>
    <div class="card"><div class="tblwrap"><table class="tbl edit"><thead><tr><th>${t.ag.kind}</th><th>${t.ag.from}</th><th>${t.ag.to}</th><th>${t.ag.group}</th><th>${t.ag.titleNl}</th><th>${t.ag.titleAr}</th><th></th></tr></thead>
      <tbody>${d.days.map(dayRow).join('')}${dayRow({ kind: 'holiday' })}</tbody></table></div></div>`)
  const again = () => groupsAdminView()
  const run = async (fn) => { try { await fn(); again() } catch (err) { alert(err.message) } }
  for (const sec of $$('[data-group]')) {
    const gid = Number(sec.dataset.group)
    form($('.addmem', sec), async (x) => { await api('groups/members', 'POST', { group: gid, users: [Number(x.user)], role: x.role }); again() })
    for (const b of $$('[data-rm]', sec)) b.onclick = () => confirm(t.ag.confirmRemoveMember) && run(() => api(`groups/members?group=${gid}&user=${b.dataset.rm}`, 'DELETE'))
  }
  const vals = (tr) => Object.fromEntries([...tr.querySelectorAll('input,select')].map((i) => [i.name, i.value]))
  for (const tr of $$('[data-block]')) {
    tr.querySelector('[name=preset]').onchange = (e) => {
      const v = e.target.value
      const [nl, ar] = v === 'none' ? ['', ''] : SUBJECT_PRESETS[Number(v)] || []
      if (nl !== undefined) { tr.querySelector('[name=subject_nl]').value = nl; tr.querySelector('[name=subject_ar]').value = ar }
    }
    tr.querySelector('[data-save-block]').onclick = () => run(() => {
      const x = vals(tr)
      return tr.dataset.block ? api('groups/blocks', 'PATCH', { ...x, id: Number(tr.dataset.block) }) : api('groups/blocks', 'POST', { ...x, cohort: tr.dataset.cohort, institute: d.institute.id })
    })
    const del = tr.querySelector('[data-del-block]')
    if (del) del.onclick = () => confirm(t.ag.confirmRemove) && run(() => api('groups/blocks?id=' + tr.dataset.block, 'DELETE'))
  }
  for (const tr of $$('[data-day]')) {
    tr.querySelector('[data-save-day]').onclick = () => run(() => tr.dataset.day ? api('groups/days', 'PATCH', { ...vals(tr), id: Number(tr.dataset.day) }) : api('groups/days', 'POST', { ...vals(tr), institute: d.institute.id }))
    const del = tr.querySelector('[data-del-day]')
    if (del) del.onclick = () => confirm(t.ag.confirmRemove) && run(() => api('groups/days?id=' + tr.dataset.day, 'DELETE'))
  }
  bindInstPicker(again)
}

// ---------- routes ----------
async function route () {
  clearInterval(timer)
  if (!me) return loginView()
  setNav()
  const [path, query] = location.hash.replace(/^#\/?/, '').split('?')
  const parts = path.split('/').map(decodeURIComponent)
  // ?instituut= in een link (bijvoorbeeld vanuit Beheer > Instituten) kiest het instituut.
  const qi = new URLSearchParams(query || '').get('instituut')
  if (qi) setInst(qi)
  try {
    switch (parts[0]) {
      case '': return await homeView()
      case 'boeken': return await booksView()
      case 'boek': return await bookView(parts[1])
      case 'toetsen': return await testsView()
      case 'poging': return await attemptView(Number(parts[1]))
      case 'resultaten': return await resultsView()
      case 'docent': return await teacherRoute(parts)
      case 'agenda': return parts[1] === 'maand' ? await agendaMonthView(parts[2]) : parts[1] === 'jaar' ? await agendaYearView(parts[2]) : await agendaView(parts[1] || '')
      case 'aanwezigheid': return await attendanceView(Number(parts[1]), Number(parts[2]), parts[3])
      case 'groep': return await groupSummaryView(Number(parts[1]))
      case 'groepen': return await groupsAdminView()
      case 'vragen': return await questionsView(parts[1] || '', parts[2] || 'draft')
      default: location.hash = '#/'
    }
  } catch (err) { errorBox(err) }
}

async function start () {
  applyLang()
  try { me = await api('me') } catch { me = null }
  if (me && !urlLang && me.user.lang && me.user.lang !== lang && !cookieLang() && !store.get('zb-student-lang')) { lang = me.user.lang; applyLang() }
  setNav()
  route()
}

window.addEventListener('hashchange', route)
start()
