// Studentenomgeving van De Zuivere Bron (NL/AR). Praat met /api/student; inloggen gaat
// via /api/admin/login (zelfde account en sessie als de beheeromgeving). De server
// controleert elk recht zelf; knoppen voor docenten worden alleen getoond als het mag.
import { STRINGS } from './i18n.js?v=20261101u'
import { serverError } from '/assets/server-errors.js?v=20261101g'

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
  const items = [['#/', t.nav.home], ['#/boeken', t.nav.books], ['#/toetsen', t.nav.tests], ['#/resultaten', t.nav.results]]
  if (me.user.teacher) items.push(['#/docent', t.nav.teacher])
  if (me.user.staff) items.push(['#/vragen', t.nav.questions])
  navEl.innerHTML = items.map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('')
  whoEl.innerHTML = `<span class="me">${esc(me.user.name || me.user.email)}</span> <button type="button" class="link" id="logoutBtn">${t.logout}</button>`
  $('#logoutBtn', whoEl).onclick = async () => { await api('logout', 'POST', {}, '/api/admin/'); me = null; location.hash = '#/'; start() }
  const current = '#/' + (location.hash.slice(2).split('/')[0] || '')
  for (const a of navEl.querySelectorAll('a')) a.classList.toggle('on', a.getAttribute('href') === current || (current === '#/boek' && a.getAttribute('href') === '#/boeken') || (current === '#/poging' && a.getAttribute('href') === '#/resultaten'))
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

// ---------- routes ----------
async function route () {
  clearInterval(timer)
  if (!me) return loginView()
  setNav()
  const parts = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent)
  try {
    switch (parts[0]) {
      case '': return await homeView()
      case 'boeken': return await booksView()
      case 'boek': return await bookView(parts[1])
      case 'toetsen': return await testsView()
      case 'poging': return await attemptView(Number(parts[1]))
      case 'resultaten': return await resultsView()
      case 'docent': return await teacherRoute(parts)
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
