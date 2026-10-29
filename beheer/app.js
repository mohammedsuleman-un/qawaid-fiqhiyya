// Beheeromgeving van De Zuivere Bron. Praat alleen met /api/admin; de sessie staat in
// een HttpOnly-cookie. Knoppen worden verborgen als je een recht mist, maar de server
// controleert elk recht zelf opnieuw.
import { STRINGS, ROLE_NAMES } from './i18n.js'
import { diffHtml } from './diff.js'
import { mountEditor } from './editor.js'

const view = document.getElementById('view')
const navEl = document.getElementById('nav')
let me = null
let lang = localStorage.getItem('zb-admin-lang') === 'ar' ? 'ar' : 'nl'
let t = STRINGS[lang]

// ---------- hulpfuncties ----------
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
const fmt = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => esc(vars[k]))
const can = (p) => !!me && me.permissions.includes(p) && (!['content.review', 'content.publish', 'users.manage', 'settings.manage'].includes(p) || me.totp_enabled)
const has = (p) => !!me && me.permissions.includes(p)
const date = (s) => s ? new Date(s.replace(' ', 'T') + 'Z').toLocaleString(lang === 'ar' ? 'ar' : 'nl-NL', { dateStyle: 'medium', timeStyle: 'short' }) : ''
const badge = (status) => `<span class="badge s-${esc(status)}">${esc(t.status[status] || status)}</span>`
const roleName = (r) => ROLE_NAMES[lang][r] || r
const stripTags = (s) => String(s ?? '').replace(/<[^>]+>/g, '')

async function api (path, method = 'GET', data) {
  const res = await fetch('/api/admin/' + path, {
    method,
    headers: method === 'GET' ? {} : { 'content-type': 'application/json' },
    body: method === 'GET' ? undefined : JSON.stringify(data || {})
  })
  const out = await res.json().catch(() => ({}))
  if (res.status === 401 && !['login', 'login-2fa', 'me'].includes(path)) { me = null; route(); throw new Error(out.error || t.error) }
  if (!res.ok) throw new Error(out.error || t.error)
  return out
}

function html (strings, ...values) {
  return strings.reduce((out, s, i) => out + s + (i < values.length ? values[i] : ''), '')
}

// Koppelt een formulier aan een actie en toont het resultaat onder het formulier.
function form (el, action) {
  el.addEventListener('submit', async (e) => {
    e.preventDefault()
    const msg = el.querySelector('.msg')
    const btn = el.querySelector('button[type=submit], button:not([type])')
    if (msg) { msg.className = 'msg'; msg.textContent = '' }
    if (btn) btn.disabled = true
    try {
      const done = await action(Object.fromEntries(new FormData(el)), e.submitter)
      if (done && msg) { msg.className = 'msg ok'; msg.innerHTML = done }
    } catch (err) {
      if (msg) { msg.className = 'msg err'; msg.textContent = err.message } else alert(err.message)
    } finally { if (btn) btn.disabled = false }
  })
}

function render (markup) { view.innerHTML = markup; view.focus({ preventScroll: true }) }
const $ = (sel, root = view) => root.querySelector(sel)
const $$ = (sel, root = view) => [...root.querySelectorAll(sel)]
const options = (pairs, selected) => pairs.map(([v, label]) => `<option value="${esc(v)}"${String(v) === String(selected ?? '') ? ' selected' : ''}>${esc(label)}</option>`).join('')
const linkBox = (help, link) => `${esc(help)}<div class="linkbox"><input readonly value="${esc(link)}"><button type="button" class="copy">${t.copy}</button></div>`
view.addEventListener('click', (e) => {
  const b = e.target.closest('.copy')
  if (!b) return
  const input = b.parentElement.querySelector('input')
  input.select(); navigator.clipboard?.writeText(input.value); b.textContent = t.copied
})

function applyLang () {
  t = STRINGS[lang]
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.title = `${t.admin} · ${t.appName}`
  $('#brandName', document).textContent = t.appName
  $('#brandSub', document).textContent = t.admin
}

function setNav () {
  if (!me) { navEl.innerHTML = ''; document.body.classList.add('anon'); return }
  document.body.classList.remove('anon')
  const items = [
    ['#/', t.nav.dashboard, true],
    ['#/boeken', t.nav.books, has('content.edit')],
    ['#/artikelen', t.nav.articles, has('content.edit')],
    ['#/personen', t.nav.persons, has('content.edit')],
    ['#/hadith', t.nav.hadith, has('content.edit')],
    ['#/categorieen', t.nav.categories, has('categories.manage')],
    ['#/beoordelen', t.nav.review, has('content.edit')],
    ['#/feedback', t.nav.feedback, has('feedback.assigned')],
    ['#/gebruikers', t.nav.users, has('users.manage')],
    ['#/audit', t.nav.audit, has('audit.view')],
    ['#/instellingen', t.nav.settings, has('settings.manage')],
    ['#/profiel', t.nav.profile, true]
  ]
  navEl.innerHTML = items.filter((i) => i[2]).map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('') +
    `<div class="me"><span>${esc(me.name || me.email)}</span><small>${me.roles.map(roleName).map(esc).join(', ')}</small>
    <button type="button" id="langBtn" class="link">${t.switchLang}</button><button type="button" id="logoutBtn" class="link">${t.logout}</button></div>`
  $('#logoutBtn', navEl).onclick = async () => { await api('logout', 'POST'); me = null; location.hash = '#/'; route() }
  $('#langBtn', navEl).onclick = async () => {
    lang = lang === 'ar' ? 'nl' : 'ar'
    localStorage.setItem('zb-admin-lang', lang)
    api('me', 'PATCH', { lang }).catch(() => {})
    applyLang(); setNav(); route()
  }
  const current = '#/' + (location.hash.slice(2).split('/')[0] || '')
  for (const a of navEl.querySelectorAll('a')) a.classList.toggle('on', a.getAttribute('href') === current)
}

// ---------- inloggen, uitnodiging, herstel ----------
async function loginView () {
  const params = new URLSearchParams(location.search)
  if (params.get('uitnodiging')) return acceptView(params.get('uitnodiging'))
  if (params.get('herstel')) return resetView(params.get('herstel'))
  render(html`<form class="card narrow" id="f">
    <h1>${t.login}</h1>
    <label>${t.email}<input name="email" type="email" autocomplete="username" required></label>
    <label>${t.password}<input name="password" type="password" autocomplete="current-password" required></label>
    <button class="primary">${t.login}</button><p class="msg"></p></form>
    <form class="card narrow" id="boot" hidden><p>${t.firstAdmin}</p>
    <label>${t.email}<input name="email" type="email" required></label><button>${t.makeLink}</button><p class="msg"></p></form>`)
  form($('#f'), async (d) => {
    const r = await api('login', 'POST', d)
    if (r.needs2fa) return twoStepView()
    await start()
  })
  form($('#boot'), async (d) => linkBox(t.inviteLink, (await api('bootstrap', 'POST', d)).link))
  // De eerste-beheerderknop verschijnt alleen als de server zegt dat het nog kan.
  fetch('/api/admin/bootstrap', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{"email":""}' })
    .then((r) => { if (r.status === 400) $('#boot').hidden = false }).catch(() => {})
}

function twoStepView () {
  render(html`<form class="card narrow" id="f"><h1>${t.twoStepTitle}</h1><p>${t.twoStepHelp}</p>
    <label>${t.code}<input name="code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9 ]{6,7}" required autofocus></label>
    <button class="primary">${t.next}</button><p class="msg"></p></form>`)
  form($('#f'), async (d) => { await api('login-2fa', 'POST', d); await start() })
}

async function acceptView (token) {
  let inv
  try { inv = await api('invitation?token=' + encodeURIComponent(token)) } catch (err) {
    return render(`<div class="card narrow"><p class="msg err">${esc(err.message)}</p><a href="/beheer/">${t.login}</a></div>`)
  }
  render(html`<form class="card narrow" id="f"><h1>${t.acceptTitle}</h1>
    <p>${fmt(t.acceptHelp, { role: roleName(inv.role_code), email: inv.email })}</p>
    <label>${t.name}<input name="name" autocomplete="name" required></label>
    <label>${t.newPassword}<input name="password" type="password" minlength="10" autocomplete="new-password" required></label>
    <button class="primary">${t.createAccount}</button><p class="msg"></p></form>`)
  form($('#f'), async (d) => {
    await api('accept-invite', 'POST', { ...d, token })
    history.replaceState(null, '', '/beheer/#/profiel')
    await start()
  })
}

function resetView (token) {
  render(html`<form class="card narrow" id="f"><h1>${t.resetTitle}</h1>
    <label>${t.newPassword}<input name="password" type="password" minlength="10" autocomplete="new-password" required></label>
    <button class="primary">${t.save}</button><p class="msg"></p></form>`)
  form($('#f'), async (d) => {
    await api('reset-password', 'POST', { ...d, token })
    history.replaceState(null, '', '/beheer/')
    setTimeout(loginView, 1200)
    return t.done
  })
}

// ---------- dashboard ----------
async function dashboardView () {
  const d = await api('dashboard')
  const v = d.versions || {}
  const fb = d.feedback || {}
  const staff = (d.users || []).filter((u) => u.role_code !== 'student').reduce((n, u) => n + Number(u.n), 0)
  const card = (label, value, href, show = true) => show ? `<a class="stat" href="${href}"><b>${value}</b><span>${esc(label)}</span></a>` : ''
  const tile = (icon, label, href, enabled = true) => enabled
    ? `<a class="tile" href="${href}"><span class="ic">${icon}</span>${esc(label)}</a>`
    : `<div class="tile off" title="${esc(t.soon)}"><span class="ic">${icon}</span>${esc(label)}<small>${esc(t.soon)}</small></div>`
  render(html`<h1>${fmt(t.hello, { name: me.name || me.email })}</h1>
    ${me.totp_enabled ? '' : `<p class="warn">${t.need2fa} <a href="#/profiel">${t.enable2fa}</a></p>`}
    <div class="stats">
      ${card(t.cards.books, d.books?.published ?? 0, '#/boeken', !!d.books)}
      ${card(t.cards.admins, staff, '#/gebruikers', !!d.users)}
      ${card(t.cards.feedback, (fb.new || 0) + (fb.in_progress || 0), '#/feedback', !!d.feedback)}
      ${card(t.cards.review, (v.in_review || 0) + (v.approved || 0), '#/beoordelen', !!d.versions)}
    </div>
    <div class="tiles">
      ${tile('📚', t.tiles.books, '#/boeken', has('content.edit'))}
      ${tile('👥', t.tiles.users, '#/gebruikers', has('users.manage'))}
      ${tile('💬', t.tiles.feedback, '#/feedback', has('feedback.assigned'))}
      ${tile('🎓', t.tiles.zad, '', false)}
      ${tile('✅', t.tiles.quizzes, '', false)}
      ${tile('🌐', t.tiles.translations, '#/beoordelen', has('content.edit'))}
      ${tile('📊', t.tiles.stats, '', false)}
      ${tile('⚙️', t.tiles.settings, '#/instellingen', has('settings.manage'))}
    </div>
    <div class="cols">
      ${d.recent ? `<section class="card"><h2>${t.recent}</h2>${d.my_drafts ? `<p><a href="#/beoordelen">${t.myDrafts}: ${d.my_drafts}</a></p>` : ''}
        <ul class="list">${d.recent.map((r) => `<li><a href="#/versie/${r.id}">${esc(stripTags(r.title) || '—')}</a> ${badge(r.status)} <small>${[t.langs[r.lang], r.email, date(r.updated_at)].filter(Boolean).map(esc).join(' · ')}</small></li>`).join('') || `<li>${t.noItems}</li>`}</ul></section>` : ''}
      ${d.activity ? `<section class="card"><h2>${t.activity}</h2><ul class="list">${d.activity.map((a) => `<li><code>${esc(a.action)}</code> <small>${esc(a.email || '')} · ${date(a.created_at)}</small></li>`).join('')}</ul></section>` : ''}
    </div>`)
}

// ---------- boeken ----------
let categoriesCache = null
async function categories () { return categoriesCache || (categoriesCache = await api('categories')) }
const catName = (c) => c ? (lang === 'ar' ? c.name_ar : c.name_nl) : t.none

async function booksView () {
  const [books, cats] = await Promise.all([api('books'), categories()])
  render(html`<div class="head"><h1>${t.nav.books}</h1>${has('content.create') ? `<button id="new" class="primary">${t.newBook}</button>` : ''}</div>
    <form class="card" id="nf" hidden>
      <div class="grid2">
        <label>${t.slug}<input name="slug" pattern="[a-z0-9]+(-[a-z0-9]+)*" required dir="ltr"></label>
        <label>${t.category}<select name="category_id"><option value="">${t.none}</option>${options(cats.map((c) => [c.id, catName(c)]))}</select></label>
        <label>${t.titleAr}<input name="title_ar" dir="rtl"></label>
        <label>${t.titleNl}<input name="title_nl" dir="ltr"></label>
        <label>${t.author}<input name="author"></label>
        <label>${t.access}<select name="access_level">${options(Object.entries(t.accessLevels))}</select></label>
      </div>
      <button class="primary">${t.create}</button><p class="msg"></p></form>
    <table class="tbl"><thead><tr><th>${t.title}</th><th>${t.category}</th><th>${t.bookStatus}</th><th>${t.chapters}</th><th>${t.langs.ar}</th><th>${t.langs.nl}</th></tr></thead>
    <tbody>${books.map((b) => `<tr><td><a href="#/boek/${b.id}"><b dir="rtl">${esc(b.title_ar || '')}</b> ${b.title_nl ? `<span dir="ltr">${esc(b.title_nl)}</span>` : ''}</a><br><small dir="ltr">${esc(b.slug)}</small></td>
      <td>${esc(lang === 'ar' ? b.category_ar || '' : b.category_nl || '')}</td><td>${badge(b.status)}</td><td>${b.chapters}</td>
      <td>${b.published_ar}/${b.chapters}</td><td>${b.published_nl}/${b.chapters}</td></tr>`).join('')}</tbody></table>`)
  $('#new')?.addEventListener('click', () => { $('#nf').hidden = !$('#nf').hidden })
  form($('#nf'), async (d) => { const r = await api('books', 'POST', d); location.hash = '#/boek/' + r.id })
}

async function bookView (id) {
  const [{ book, translations, chapters }, cats] = await Promise.all([api('books/' + id), categories()])
  const tr = Object.fromEntries(translations.map((x) => [x.lang, x]))
  const cell = (c, l) => {
    const x = c.langs[l]
    const label = x ? badge(x.status) + (x.open ? ` <small>+${x.open} ${t.open}</small>` : '') : `<small>${t.notYet}</small>`
    return `<td><a href="#/bewerk/chapter/${c.id}/${l}">${label}</a></td>`
  }
  render(html`<p><a href="#/boeken">← ${t.nav.books}</a></p>
    <div class="head"><h1 dir="rtl">${esc(tr.ar?.title || tr.nl?.title || book.slug)}</h1>${badge(book.status)}
      <a class="btn" href="/boek/${esc(book.slug)}" target="_blank" rel="noopener">${t.view}</a></div>
    ${can('content.publish') ? `<p class="actions">
      ${book.status !== 'published' ? `<button data-status="published" class="primary">${t.publishBook}</button>` : `<button data-status="draft">${t.unpublishBook}</button>`}
      ${book.status !== 'archived' ? `<button data-status="archived" class="danger">${t.archiveBook}</button>` : ''}</p>` : ''}
    <form class="card" id="meta"><div class="grid2">
      <label>${t.titleAr}<input name="title_ar" dir="rtl" value="${esc(tr.ar?.title)}"></label>
      <label>${t.titleNl}<input name="title_nl" dir="ltr" value="${esc(tr.nl?.title)}"></label>
      <label>${t.subtitleAr}<input name="subtitle_ar" dir="rtl" value="${esc(tr.ar?.subtitle)}"></label>
      <label>${t.subtitleNl}<input name="subtitle_nl" dir="ltr" value="${esc(tr.nl?.subtitle)}"></label>
      <label>${t.descAr}<textarea name="description_ar" dir="rtl" rows="3">${esc(tr.ar?.description)}</textarea></label>
      <label>${t.descNl}<textarea name="description_nl" dir="ltr" rows="3">${esc(tr.nl?.description)}</textarea></label>
      <label>${t.category}<select name="category_id"><option value="">${t.none}</option>${options(cats.map((c) => [c.id, catName(c)]), book.category_id)}</select></label>
      <label>${t.access}<select name="access_level">${options(Object.entries(t.accessLevels), book.access_level)}</select></label>
      <label>${t.author}<input name="author" value="${esc(book.author)}"></label>
      <label>${t.translator}<input name="translator" value="${esc(book.translator)}"></label>
      <label>${t.publisher}<input name="publisher" value="${esc(book.publisher)}"></label>
      <label>${t.language}<select name="language">${options([['ar', t.langs.ar], ['nl', t.langs.nl]], book.language)}</select></label>
      <label>${t.pdf}<input name="pdf" dir="ltr" value="${esc(book.pdf)}"></label>
    </div><button class="primary">${t.save}</button><p class="msg"></p></form>
    <div class="head"><h2>${t.chapters}</h2>${has('content.create') ? `<button id="addCh">${t.addChapter}</button>` : ''}</div>
    <table class="tbl"><thead><tr><th>#</th><th>${t.title}</th><th>${t.langs.ar}</th><th>${t.langs.nl}</th><th></th></tr></thead><tbody>
    ${chapters.map((c, i) => `<tr class="${c.archived ? 'archived' : ''}"><td>${i + 1}</td>
      <td><span dir="rtl">${esc(stripTags(c.langs.ar?.title || ''))}</span>${c.langs.nl?.title ? `<br><small dir="ltr">${esc(c.langs.nl.title)}</small>` : ''}</td>
      ${cell(c, 'ar')}${cell(c, 'nl')}
      <td class="nowrap">${has('content.create') ? `<button class="icon" data-move="up" data-id="${c.id}" title="${t.up}">↑</button><button class="icon" data-move="down" data-id="${c.id}" title="${t.down}">↓</button>` : ''}
      ${has('content.publish') ? `<button class="icon" data-arch="${c.archived ? 0 : 1}" data-id="${c.id}" title="${c.archived ? t.restore : t.archive}">${c.archived ? '↺' : '🗄'}</button>` : ''}
      <a class="icon" href="/boek/${esc(book.slug)}/${esc(c.slug)}" target="_blank" rel="noopener" title="${t.view}">↗</a></td></tr>`).join('')}
    </tbody></table>`)
  form($('#meta'), async (d) => {
    const payload = { translations: {} }
    for (const l of ['ar', 'nl']) {
      if (d['title_' + l] || tr[l]) payload.translations[l] = { title: d['title_' + l], subtitle: d['subtitle_' + l], description: d['description_' + l] }
    }
    if (has('content.create')) Object.assign(payload, { category_id: d.category_id, access_level: d.access_level, author: d.author, translator: d.translator, publisher: d.publisher, language: d.language, pdf: d.pdf })
    await api('books/' + id, 'PATCH', payload)
    return t.saved
  })
  $$('[data-status]').forEach((b) => b.addEventListener('click', async () => {
    if (b.dataset.status === 'archived' && !confirm(t.confirmArchive)) return
    await api('books/' + id, 'PATCH', { status: b.dataset.status }).catch((e) => alert(e.message)); bookView(id)
  }))
  $$('[data-move]').forEach((b) => b.addEventListener('click', async () => { await api('chapters/' + b.dataset.id, 'PATCH', { move: b.dataset.move }).catch((e) => alert(e.message)); bookView(id) }))
  $$('[data-arch]').forEach((b) => b.addEventListener('click', async () => { await api('chapters/' + b.dataset.id, 'PATCH', { archived: b.dataset.arch === '1' }).catch((e) => alert(e.message)); bookView(id) }))
  $('#addCh')?.addEventListener('click', async () => {
    const title = prompt(t.title)
    if (!title) return
    const r = await api(`books/${id}/chapters`, 'POST', { title, lang: /[؀-ۿ]/.test(title) ? 'ar' : 'nl' }).catch((e) => alert(e.message))
    if (r) location.hash = `#/bewerk/chapter/${r.id}/${/[؀-ۿ]/.test(title) ? 'ar' : 'nl'}`
  })
}

// ---------- artikelen en categorieën ----------
async function articlesView () {
  const [rows, cats] = await Promise.all([api('articles'), categories()])
  render(html`<div class="head"><h1>${t.nav.articles}</h1>${has('content.create') ? `<button id="new" class="primary">${t.newArticle}</button>` : ''}</div>
    <form class="card" id="nf" hidden><div class="grid2">
      <label>${t.slug}<input name="slug" pattern="[a-z0-9]+(-[a-z0-9]+)*" required dir="ltr"></label>
      <label>${t.kind}<select name="kind">${options(Object.entries(t.kinds))}</select></label>
      <label>${t.title}<input name="title" dir="auto" required></label>
      <label>${t.firstLang}<select name="lang">${options([['ar', t.langs.ar], ['nl', t.langs.nl]], lang)}</select></label>
      <label>${t.category}<select name="category_id"><option value="">${t.none}</option>${options(cats.map((c) => [c.id, catName(c)]))}</select></label>
      <label>${t.access}<select name="access_level">${options(Object.entries(t.accessLevels))}</select></label>
    </div><button class="primary">${t.create}</button><p class="msg"></p></form>
    <table class="tbl"><thead><tr><th>${t.title}</th><th>${t.kind}</th><th>${t.langs.ar}</th><th>${t.langs.nl}</th><th></th></tr></thead><tbody>
    ${rows.map((a) => `<tr class="${a.archived_at ? 'archived' : ''}"><td><span dir="rtl">${esc(a.title_ar || '')}</span> <span dir="ltr">${esc(a.title_nl || '')}</span><br><small dir="ltr">${esc(a.slug)}</small></td>
      <td>${esc(t.kinds[a.kind])}</td>
      <td><a href="#/bewerk/article/${a.id}/ar">${a.status_ar ? badge(a.status_ar) : `<small>${t.notYet}</small>`}</a></td>
      <td><a href="#/bewerk/article/${a.id}/nl">${a.status_nl ? badge(a.status_nl) : `<small>${t.notYet}</small>`}</a></td>
      <td class="nowrap"><a class="icon" href="/artikel/${esc(a.slug)}" target="_blank" rel="noopener">↗</a>
      ${has('content.publish') ? `<button class="icon" data-arch="${a.archived_at ? 0 : 1}" data-id="${a.id}">${a.archived_at ? '↺' : '🗄'}</button>` : ''}</td></tr>`).join('') || `<tr><td colspan="5">${t.noItems}</td></tr>`}
    </tbody></table>`)
  $('#new')?.addEventListener('click', () => { $('#nf').hidden = !$('#nf').hidden })
  form($('#nf'), async (d) => { const r = await api('articles', 'POST', d); location.hash = `#/bewerk/article/${r.id}/${d.lang}` })
  $$('[data-arch]').forEach((b) => b.addEventListener('click', async () => { await api('articles/' + b.dataset.id, 'PATCH', { archived: b.dataset.arch === '1' }).catch((e) => alert(e.message)); articlesView() }))
}

async function categoriesView () {
  categoriesCache = null
  const cats = await categories()
  render(html`<h1>${t.nav.categories}</h1>
    <table class="tbl"><thead><tr><th>${t.nameNl}</th><th>${t.nameAr}</th><th>${t.books}</th><th></th></tr></thead><tbody>
    ${cats.map((c) => `<tr><td><input data-f="name_nl" data-id="${c.id}" value="${esc(c.name_nl)}"></td><td><input dir="rtl" data-f="name_ar" data-id="${c.id}" value="${esc(c.name_ar)}"></td>
      <td>${c.books}</td><td>${Number(c.books) ? '' : `<button class="icon" data-del="${c.id}" title="${t.del}">✕</button>`}</td></tr>`).join('')}
    </tbody></table>
    <form class="card" id="nf"><h2>${t.newCategory}</h2><div class="grid2">
      <label>${t.slug}<input name="slug" pattern="[a-z0-9]+(-[a-z0-9]+)*" required dir="ltr"></label><span></span>
      <label>${t.nameNl}<input name="name_nl" required></label><label>${t.nameAr}<input name="name_ar" dir="rtl" required></label>
    </div><button class="primary">${t.create}</button><p class="msg"></p></form>`)
  $$('input[data-f]').forEach((i) => i.addEventListener('change', () => api('categories/' + i.dataset.id, 'PATCH', { [i.dataset.f]: i.value }).catch((e) => alert(e.message))))
  $$('[data-del]').forEach((b) => b.addEventListener('click', async () => { if (confirm(t.confirmArchive)) { await api('categories/' + b.dataset.del, 'DELETE').catch((e) => alert(e.message)); categoriesView() } }))
  form($('#nf'), async (d) => { await api('categories', 'POST', d); categoriesView() })
}

// ---------- registers ----------
// Personen: gegevens hier, biografie per taal in de gewone editor (concept → beoordelen → publiceren).
async function personsView () {
  const rows = await api('persons')
  const edit = has('content.create')
  const fields = (p = {}) => `<label>${t.nameAr}<input name="name_ar" dir="rtl" value="${esc(p.name_ar || '')}" required></label>
      <label>${t.nameNl}<input name="name_nl" value="${esc(p.name_nl || '')}"></label>
      <label>${t.personKind}<select name="kind">${options(Object.entries(t.personKinds), p.kind)}</select></label>
      <label>${t.deathHijri}<input name="death_hijri" type="number" min="0" max="1500" dir="ltr" value="${esc(p.death_hijri ?? '')}"></label>
      <label class="wide">${t.aliases}<textarea name="aliases" dir="rtl" rows="3">${esc(p.aliases || '')}</textarea><small>${t.aliasesHelp}</small></label>`
  render(html`<div class="head"><h1>${t.nav.persons}</h1>${edit ? `<button id="new" class="primary">${t.newPerson}</button>` : ''}</div>
    <p class="muted">${t.personsHelp}</p>
    <form class="card" id="nf" hidden><div class="grid2">
      <label>${t.slug}<input name="slug" pattern="[a-z0-9]+(-[a-z0-9]+)*" required dir="ltr"></label><span></span>${fields()}
    </div><button class="primary">${t.create}</button><p class="msg"></p></form>
    <table class="tbl"><thead><tr><th>${t.name}</th><th>${t.personKind}</th><th>${t.langs.ar}</th><th>${t.langs.nl}</th><th></th></tr></thead><tbody>
    ${rows.map((p) => `<tr><td><span dir="rtl">${esc(p.name_ar)}</span> <span dir="ltr">${esc(p.name_nl || '')}</span><br><small dir="ltr">${esc(p.slug)}${p.death_hijri ? ' · ' + esc(p.death_hijri) + ' AH' : ''}</small></td>
      <td>${esc(t.personKinds[p.kind] || p.kind)}</td>
      <td><a href="#/bewerk/article/${p.article_id}/ar">${p.status_ar ? badge(p.status_ar) : `<small>${t.notYet}</small>`}</a></td>
      <td><a href="#/bewerk/article/${p.article_id}/nl">${p.status_nl ? badge(p.status_nl) : `<small>${t.notYet}</small>`}</a></td>
      <td class="nowrap"><a class="icon" href="/persoon/${esc(p.slug)}" target="_blank" rel="noopener">↗</a>
      ${edit ? `<button class="icon" data-edit="${p.id}" title="${t.edit}">✎</button>` : ''}</td></tr>
      <tr data-row="${p.id}" hidden><td colspan="5"><form class="card" data-pf="${p.id}"><div class="grid2">${fields(p)}</div><button class="primary">${t.save}</button><p class="msg"></p></form></td></tr>`).join('') || `<tr><td colspan="5">${t.noItems}</td></tr>`}
    </tbody></table>`)
  $('#new')?.addEventListener('click', () => { $('#nf').hidden = !$('#nf').hidden })
  form($('#nf'), async (d) => { await api('persons', 'POST', d); personsView() })
  $$('[data-edit]').forEach((b) => b.addEventListener('click', () => { const r = $(`[data-row="${b.dataset.edit}"]`); r.hidden = !r.hidden }))
  $$('[data-pf]').forEach((f) => form(f, async (d) => { await api('persons/' + f.dataset.pf, 'PATCH', d); return t.saved }))
}

// Hadith: de lijst komt uit de teksten zelf; hier vult een mens bron, beoordeling en notitie in.
async function hadithView () {
  const rows = (await api('hadith')).filter((h) => h.lang === 'ar')
  const seen = new Set()
  let lastBook = null
  let lastChapter = null
  const out = []
  for (const h of rows) {
    if (h.book_id !== lastBook) { out.push(`<h2>${esc(h.book_title_ar || h.book_slug)}</h2>`); lastBook = h.book_id; lastChapter = null }
    if (h.chapter_slug !== lastChapter) { out.push(`<h3>${esc(stripTags(h.chapter_title))}</h3>`); lastChapter = h.chapter_slug }
    const again = seen.has(h.hkey)
    seen.add(h.hkey)
    out.push(`<form class="card hadith-note" data-hk="${esc(h.hkey)}"><p class="htext" dir="rtl">${esc(h.text)}</p>
      <p><small><a href="/boek/${esc(h.book_slug)}/${esc(h.chapter_slug)}?lang=ar" target="_blank" rel="noopener">${t.page} ${esc(h.page ?? '')} ↗</a>${again ? ' · ' + t.sameHadith : ''}</small></p>
      <div class="grid2"><label>${t.hSource}<input name="source" dir="auto" value="${esc(h.source || '')}"></label>
      <label>${t.hGrade}<input name="grade" dir="auto" value="${esc(h.grade || '')}"></label>
      <label class="wide">${t.hNote}<textarea name="note" dir="auto" rows="2">${esc(h.note || '')}</textarea></label></div>
      <button class="primary">${t.save}</button><p class="msg"></p></form>`)
  }
  render(html`<h1>${t.nav.hadith}</h1><p class="muted">${fmt(t.hadithHelp, { n: rows.length })}</p>${out.join('') || `<p>${t.noItems}</p>`}`)
  $$('[data-hk]').forEach((f) => form(f, async (d) => { await api('hadith', 'PATCH', { hkey: f.dataset.hk, ...d }); return t.saved }))
}

// ---------- editor ----------
async function editView (type, id, l) {
  const data = await api(`content/${type}/${id}`)
  const mine = data.langs[l]?.versions.find((v) => ['draft', 'rejected'].includes(v.status) && Number(v.created_by) === me.id)
  const startFrom = new URLSearchParams(location.hash.split('?')[1] || '').get('van')
  let base = data.langs[l]?.published
  if (mine) base = await api('versions/' + mine.id).then((r) => r.version)
  else if (startFrom) base = await api('versions/' + startFrom).then((r) => r.version)
  const other = l === 'ar' ? 'nl' : 'ar'
  const ref = data.langs[other]?.published
  const info = data.info
  const back = type === 'chapter' ? `#/boek/${info.book_id}` : info.kind === 'person' ? '#/personen' : '#/artikelen'
  const dir = l === 'ar' ? 'rtl' : 'ltr'
  render(html`<p><a href="${back}">← ${t.back}</a></p>
    <div class="head"><h1>${t.editor}: <span dir="rtl">${esc(stripTags(info.title_ar || ''))}</span> ${info.title_nl ? `<span dir="ltr">${esc(info.title_nl)}</span>` : ''}</h1>
      <span class="pill">${esc(t.langs[l])}</span> ${mine ? badge(mine.status) : ''}
      <a class="btn" href="#/bewerk/${type}/${id}/${other}">${t.otherLang}: ${esc(t.langs[other])}</a></div>
    ${mine?.review_comment ? `<p class="warn"><b>${t.comment}:</b> ${esc(mine.review_comment)}</p>` : ''}
    <div class="split${ref ? '' : ' single'}">
      <section class="ed">
        <label>${t.title}<input id="title" dir="${dir}" value="${esc(stripTags(base?.title ?? data.langs[l]?.title ?? ''))}"></label>
        <div id="editor"></div>
        <label>${t.reason}<input id="reason" value="${esc(mine ? mine.reason : '')}" maxlength="500"></label>
        <p class="actions"><button id="save" class="primary">${t.saveDraft}</button>
          ${has('content.edit') ? `<button id="submit">${t.submit}</button>` : ''}<span id="state" class="muted"></span></p>
        <p class="msg" id="msg"></p>
      </section>
      ${ref ? `<section class="ref"><h3>${t.reference}: ${esc(t.langs[other])}</h3><div class="book" dir="${other === 'ar' ? 'rtl' : 'ltr'}"><h2>${esc(stripTags(ref.title))}</h2>${ref.body}</div></section>` : ''}
    </div>
    <section class="card"><h2>${t.versions}</h2>${versionList(data.langs[l]?.versions || [])}</section>`)
  // Let op: ref.body komt van de server en is daar al opgeschoond (sanitizeHtml).
  const editor = mountEditor($('#editor'), { html: base?.body || '', dir, t })
  let versionId = mine?.id || null
  let dirty = false
  let timer = null
  const state = $('#state')
  const save = async () => {
    clearTimeout(timer)
    state.textContent = t.saving
    const r = await api('versions', 'POST', { entity_type: type, entity_id: id, lang: l, title: $('#title').value, body: editor.html(), reason: $('#reason').value, based_on_id: data.langs[l]?.published?.id })
    versionId = r.id; dirty = false
    state.textContent = `${t.saved} · ${new Date().toLocaleTimeString()}`
    return r
  }
  const changed = () => { dirty = true; state.textContent = '…'; clearTimeout(timer); timer = setTimeout(() => save().catch((e) => { state.textContent = e.message }), 4000) }
  editor.onChange(changed)
  $('#title').addEventListener('input', changed)
  $('#reason').addEventListener('input', changed)
  $('#save').addEventListener('click', () => save().catch((e) => { $('#msg').className = 'msg err'; $('#msg').textContent = e.message }))
  $('#submit')?.addEventListener('click', async () => {
    try {
      if (dirty || !versionId) await save()
      await api(`versions/${versionId}/submit`, 'POST')
      location.hash = '#/versie/' + versionId
    } catch (e) { $('#msg').className = 'msg err'; $('#msg').textContent = e.message }
  })
  window.onbeforeunload = () => (dirty ? true : undefined)
}

const versionList = (versions) => versions.length
  ? `<ul class="list">${versions.map((v) => `<li><a href="#/versie/${v.id}">${t.version} ${v.id}</a> ${badge(v.status)} <small>${esc(v.created_by_email || '')} · ${date(v.updated_at)}${v.reason ? ' · ' + esc(v.reason) : ''}</small></li>`).join('')}</ul>`
  : `<p>${t.noItems}</p>`

// ---------- versie bekijken en beoordelen ----------
async function versionView (vid) {
  const { version: v, published, author, info } = await api('versions/' + vid)
  const own = Number(v.created_by) === me.id
  const dir = v.lang === 'ar' ? 'rtl' : 'ltr'
  const btn = (action, label, cls = '') => `<button data-act="${action}" class="${cls}">${label}</button>`
  const acts = []
  if (['draft', 'rejected'].includes(v.status) && own) acts.push(`<a class="btn" href="#/bewerk/${v.entity_type}/${v.entity_id}/${v.lang}">${t.openEditor}</a>`, btn('submit', t.submit, 'primary'))
  if (v.status === 'in_review' && (own || can('content.review'))) acts.push(btn('withdraw', t.withdraw))
  if (v.status === 'in_review' && can('content.review') && (!own || can('content.publish'))) acts.push(btn('approve', t.approve, 'primary'))
  if (['in_review', 'approved'].includes(v.status) && can('content.review')) acts.push(btn('reject', t.reject, 'danger'))
  if (v.status === 'approved' && can('content.publish')) acts.push(btn('publish', t.publish, 'primary'))
  if (['published', 'superseded'].includes(v.status) && has('content.edit')) acts.push(`<a class="btn" href="#/bewerk/${v.entity_type}/${v.entity_id}/${v.lang}?van=${v.id}">${t.fromVersion}</a>`)
  render(html`<p><a href="#/beoordelen">← ${t.nav.review}</a> · <a href="#/bewerk/${v.entity_type}/${v.entity_id}/${v.lang}">${t.editor}</a> · <a href="${esc(info.url)}?lang=${v.lang}" target="_blank" rel="noopener">${t.view} ↗</a></p>
    <div class="head"><h1>${t.version} ${v.id}: <span dir="${dir}">${esc(stripTags(v.title))}</span></h1>${badge(v.status)}<span class="pill">${esc(t.langs[v.lang])}</span></div>
    <p class="muted">${t.by} ${esc(author?.name || author?.email || '')} · ${date(v.updated_at)}${v.reason ? ` · ${t.reason}: ${esc(v.reason)}` : ''}</p>
    ${v.review_comment ? `<p class="warn"><b>${t.comment}:</b> ${esc(v.review_comment)}</p>` : ''}
    ${['draft', 'rejected', 'in_review'].includes(v.status) && !acts.length && !own ? `<p class="muted">${t.lockedVersion}</p>` : ''}
    <p class="actions">${acts.join(' ')}</p><p class="msg" id="msg"></p>
    <h2>${t.diff}</h2>
    ${published && published.id !== v.id ? `<div class="book diff" dir="${dir}">${diffHtml(published.title + '\n' + published.body, v.title + '\n' + v.body)}</div>` : `<p class="muted">${published ? '' : t.noPublished}</p><div class="book" dir="${dir}"><h2>${esc(stripTags(v.title))}</h2>${v.body}</div>`}`)
  $$('[data-act]').forEach((b) => b.addEventListener('click', async () => {
    let comment = ''
    if (b.dataset.act === 'reject') { comment = prompt(t.rejectReason); if (!comment) return }
    try { await api(`versions/${vid}/${b.dataset.act}`, 'POST', { comment }); versionView(vid) } catch (e) { $('#msg').className = 'msg err'; $('#msg').textContent = e.message }
  }))
}

async function reviewView () {
  const rows = await api('review')
  const group = (statuses) => rows.filter((r) => statuses.includes(r.status))
  const list = (items) => items.length ? `<table class="tbl"><tbody>${items.map((r) => `<tr><td><a href="#/versie/${r.id}"><span dir="auto">${esc(stripTags(r.title) || '—')}</span></a><br><small>${esc(stripTags(r.info?.book_title || ''))}</small></td>
    <td><span class="pill">${esc(t.langs[r.lang])}</span></td><td>${badge(r.status)}</td><td><small>${esc(r.author || '')}<br>${date(r.submitted_at || r.updated_at)}</small></td><td><small>${esc(r.reason || '')}</small></td></tr>`).join('')}</tbody></table>` : `<p class="muted">${t.noItems}</p>`
  render(html`<h1>${t.nav.review}</h1>
    <h2>${t.status.in_review}</h2>${list(group(['in_review']))}
    <h2>${t.status.approved}</h2>${list(group(['approved']))}
    <h2>${t.myDrafts}</h2>${list(group(['draft', 'rejected']))}`)
}

// ---------- feedback ----------
async function feedbackView () {
  const p = new URLSearchParams(location.hash.split('?')[1] || '')
  const qs = new URLSearchParams()
  for (const k of ['status', 'category', 'mine']) if (p.get(k)) qs.set(k, p.get(k))
  const [rows, staff] = await Promise.all([api('feedback?' + qs), has('feedback.manage') ? api('staff') : []])
  const filter = (name, pairs) => `<select data-filter="${name}"><option value="">${t.all}</option>${options(pairs, p.get(name))}</select>`
  render(html`<h1>${t.nav.feedback}</h1>
    <p class="filters">${filter('status', Object.keys(t.status).filter((s) => ['new', 'in_progress', 'accepted', 'rejected', 'resolved'].includes(s)).map((s) => [s, t.status[s]]))}
      ${filter('category', Object.entries(t.fbCats))}
      ${has('feedback.manage') ? `<label class="inline"><input type="checkbox" data-filter="mine" ${p.get('mine') ? 'checked' : ''}> ${t.mine}</label>` : ''}</p>
    ${rows.map((f) => `<form class="card fb" data-id="${f.id}">
      <div class="head"><b>${esc(t.fbCats[f.category] || f.category)}</b> ${badge(f.status)} <span class="pill">${esc(t.langs[f.lang])}</span>
        <a href="${esc(f.info?.url || '#')}?lang=${f.lang}" target="_blank" rel="noopener" dir="auto">${esc(stripTags(f.info?.book_title || ''))} · ${esc(stripTags(f.info?.title_ar || f.info?.title_nl || ''))} ↗</a><small class="muted">${date(f.created_at)}</small></div>
      ${f.quote ? `<blockquote dir="auto">${esc(f.quote)}</blockquote>` : ''}
      <p dir="auto"><b>${t.message}:</b> ${esc(f.message)}</p>
      ${f.suggestion ? `<p dir="auto"><b>${t.suggestion}:</b> ${esc(f.suggestion)}</p>` : ''}
      ${f.email ? `<p><small dir="ltr">${esc(f.email)}</small> ${has('feedback.manage') ? `<button type="button" class="link" data-erase>${t.erase}</button>` : ''}</p>` : ''}
      <div class="grid3">
        <label>${t.bookStatus.split(' ')[0]}<select name="status">${options(['new', 'in_progress', 'accepted', 'rejected', 'resolved'].map((s) => [s, t.status[s]]), f.status)}</select></label>
        ${has('feedback.manage') ? `<label>${t.assigned}<select name="assigned_to"><option value="">${t.nobody}</option>${options(staff.map((s) => [s.id, s.name || s.email]), f.assigned_to)}</select></label>` : `<span>${t.assigned}: ${esc(f.assigned_email || t.nobody)}</span>`}
        <label>${t.note}<input name="internal_note" value="${esc(f.internal_note)}"></label>
      </div>
      <p class="actions"><button class="primary">${t.save}</button>
        ${f.draft_version_id ? `<a class="btn" href="#/versie/${f.draft_version_id}">${t.version} ${f.draft_version_id}</a>` : has('content.edit') ? `<button type="button" data-draft>${t.makeDraft}</button>` : ''}</p>
      <p class="msg"></p></form>`).join('') || `<p class="muted">${t.noItems}</p>`}`)
  $$('[data-filter]').forEach((s) => s.addEventListener('change', () => {
    const n = new URLSearchParams(p)
    const v = s.type === 'checkbox' ? (s.checked ? '1' : '') : s.value
    v ? n.set(s.dataset.filter, v) : n.delete(s.dataset.filter)
    location.hash = '#/feedback?' + n
  }))
  $$('form.fb').forEach((f) => {
    const fid = f.dataset.id
    form(f, async (d) => {
      const payload = { status: d.status, internal_note: d.internal_note }
      if ('assigned_to' in d) payload.assigned_to = d.assigned_to ? Number(d.assigned_to) : null
      await api('feedback/' + fid, 'PATCH', payload); return t.saved
    })
    $('[data-draft]', f)?.addEventListener('click', async () => {
      try { const r = await api(`feedback/${fid}/draft`, 'POST'); location.hash = '#/versie/' + r.version_id } catch (e) { alert(e.message) }
    })
    $('[data-erase]', f)?.addEventListener('click', async () => { if (confirm(t.confirmArchive)) { await api('feedback/' + fid, 'DELETE'); feedbackView() } })
  })
}

// ---------- gebruikers ----------
async function usersView () {
  const [users, invites, roles] = await Promise.all([api('users'), api('invitations'), api('roles')])
  const isSuper = me.roles.includes('superadmin')
  const roleOpts = roles.roles.filter((r) => isSuper || r.code !== 'superadmin').map((r) => [r.code, roleName(r.code)])
  const permName = (p) => lang === 'ar' ? p.name_ar : p.name_nl
  render(html`<h1>${t.nav.users}</h1>
    <form class="card" id="inv"><h2>${t.invite}</h2><div class="grid3">
      <label>${t.email}<input name="email" type="email" required dir="ltr"></label>
      <label>${t.role}<select name="role">${options(roleOpts, 'editor')}</select></label>
      <span class="end"><button class="primary">${t.invite}</button></span></div><p class="msg"></p></form>
    ${invites.length ? `<section class="card"><h2>${t.invitations}</h2><table class="tbl"><tbody>${invites.map((i) => `<tr><td dir="ltr">${esc(i.email)}</td><td>${esc(roleName(i.role_code))}</td><td><small>${date(i.expires_at)}</small></td>
      <td class="nowrap"><button data-resend="${i.id}">${t.resend}</button> <button class="danger" data-revoke="${i.id}">${t.revoke}</button></td></tr>`).join('')}</tbody></table><div id="invlink" class="msg"></div></section>` : ''}
    <table class="tbl users"><thead><tr><th>${t.name}</th><th>${t.roles}</th><th>${t.twofa}</th><th>${t.lastLogin}</th><th></th></tr></thead><tbody>
    ${users.map((u) => `<tr class="${u.status !== 'active' ? 'archived' : ''}" data-user="${u.id}"><td><b>${esc(u.name || '')}</b><br><small dir="ltr">${esc(u.email)}</small> ${u.status !== 'active' ? badge(u.status) : ''}</td>
      <td><div class="roles">${roleOpts.map(([c, n]) => `<label class="inline"><input type="checkbox" value="${c}" ${u.roles.includes(c) ? 'checked' : ''}> ${esc(n)}</label>`).join('')}
        ${!isSuper && u.roles.includes('superadmin') ? `<span class="pill">${roleName('superadmin')}</span>` : ''}</div>
        <button data-roles>${t.saveRoles}</button>
        ${isSuper ? `<details><summary>${t.extraPerms}${u.extra.length ? ` (${u.extra.length})` : ''}</summary>${roles.permissions.map((p) => {
          const e = u.extra.find((x) => x.code === p.code)
          return `<label class="perm">${esc(permName(p))}<select data-perm="${p.code}">${options([['', '—'], ['1', t.grant], ['0', t.deny]], e ? (e.granted ? '1' : '0') : '')}</select></label>`
        }).join('')}<button data-perms>${t.save}</button></details>` : ''}</td>
      <td>${Number(u.totp_enabled) ? '✓' : '—'}</td><td><small>${date(u.last_login_at)}</small></td>
      <td class="nowrap">${u.id === me.id ? '' : `<button data-status="${u.status === 'active' ? 'deactivated' : 'active'}">${u.status === 'active' ? t.deactivate : t.activate}</button>`}
        ${isSuper ? `<button data-reset>${t.resetLink}</button>` : ''}<div class="msg"></div></td></tr>`).join('')}
    </tbody></table>
    <details class="card"><summary>${t.permMatrix}</summary><table class="tbl matrix"><thead><tr><th></th>${roles.roles.map((r) => `<th>${esc(roleName(r.code))}</th>`).join('')}</tr></thead>
      <tbody>${roles.permissions.map((p) => `<tr><td>${esc(permName(p))}</td>${roles.roles.map((r) => `<td>${r.permissions.includes(p.code) ? '✓' : ''}</td>`).join('')}</tr>`).join('')}</tbody></table></details>`)
  form($('#inv'), async (d) => linkBox(t.inviteLink, (await api('invitations', 'POST', d)).link))
  $$('[data-resend]').forEach((b) => b.addEventListener('click', async () => { const r = await api('invitations/' + b.dataset.resend, 'POST'); $('#invlink').innerHTML = linkBox(t.inviteLink, r.link) }))
  $$('[data-revoke]').forEach((b) => b.addEventListener('click', async () => { await api('invitations/' + b.dataset.revoke, 'DELETE'); usersView() }))
  $$('tr[data-user]').forEach((row) => {
    const uid = row.dataset.user
    const msg = $('.msg', row)
    const run = async (fn) => { msg.className = 'msg'; try { const out = await fn(); msg.className = 'msg ok'; msg.innerHTML = out || t.saved } catch (e) { msg.className = 'msg err'; msg.textContent = e.message } }
    $('[data-roles]', row).addEventListener('click', () => run(async () => {
      const chosen = $$('.roles input:checked', row).map((i) => i.value)
      if (!isSuper && $('.roles .pill', row)) chosen.push('superadmin')
      await api('users/' + uid, 'PATCH', { roles: chosen })
    }))
    $('[data-perms]', row)?.addEventListener('click', () => run(async () => {
      const permissions = $$('[data-perm]', row).filter((s) => s.value !== '').map((s) => ({ code: s.dataset.perm, granted: s.value === '1' }))
      await api('users/' + uid, 'PATCH', { permissions })
    }))
    $('[data-status]', row)?.addEventListener('click', (e) => run(async () => { await api('users/' + uid, 'PATCH', { status: e.target.dataset.status }); setTimeout(usersView, 800) }))
    $('[data-reset]', row)?.addEventListener('click', () => run(async () => linkBox(t.resetLinkHelp, (await api(`users/${uid}/reset-link`, 'POST')).link)))
  })
}

async function auditView () {
  const p = new URLSearchParams(location.hash.split('?')[1] || '')
  const page = Number(p.get('page')) || 0
  const rows = await api(`audit?page=${page}${p.get('action') ? '&action=' + encodeURIComponent(p.get('action')) : ''}`)
  render(html`<h1>${t.nav.audit}</h1>
    <p class="filters"><input id="af" placeholder="${t.auditFilter}" value="${esc(p.get('action') || '')}" dir="ltr"></p>
    <table class="tbl"><thead><tr><th>${t.when}</th><th>${t.who}</th><th>${t.what}</th><th></th></tr></thead><tbody>
    ${rows.map((a) => `<tr><td class="nowrap"><small>${date(a.created_at)}</small></td><td><small dir="ltr">${esc(a.email || '—')}</small></td>
      <td><code>${esc(a.action)}</code> <small>${esc(a.entity_type || '')} ${esc(a.entity_id || '')}</small></td><td><small class="mono" dir="ltr">${esc(a.details || '')}</small></td></tr>`).join('')}</tbody></table>
    <p>${page > 0 ? `<a href="#/audit?page=${page - 1}">←</a>` : ''} ${rows.length === 100 ? `<a href="#/audit?page=${page + 1}">→</a>` : ''}</p>`)
  $('#af').addEventListener('change', (e) => { location.hash = '#/audit?action=' + encodeURIComponent(e.target.value) })
}

// ---------- profiel en instellingen ----------
async function profileView () {
  me = await api('me')
  render(html`<h1>${t.profile}</h1>
    <form class="card" id="pf"><div class="grid2"><label>${t.name}<input name="name" value="${esc(me.name)}"></label>
      <label>${t.email}<input value="${esc(me.email)}" disabled dir="ltr"></label></div><button class="primary">${t.save}</button><p class="msg"></p></form>
    <section class="card" id="tfa"><h2>${t.twoStepTitle}</h2><div id="tfaBody"></div></section>
    <form class="card" id="pw"><h2>${t.changePassword}</h2><div class="grid2">
      <label>${t.currentPassword}<input name="current" type="password" autocomplete="current-password" required></label>
      <label>${t.newPassword}<input name="password" type="password" minlength="10" autocomplete="new-password" required></label></div>
      <button class="primary">${t.save}</button><p class="msg"></p></form>`)
  form($('#pf'), async (d) => { await api('me', 'PATCH', d); me.name = d.name; setNav(); return t.saved })
  form($('#pw'), async (d) => { await api('password', 'POST', d); $('#pw').reset(); return t.saved })
  const box = $('#tfaBody')
  if (me.totp_enabled) {
    box.innerHTML = `<p>✓ ${t.twofaOn}</p><form id="off"><label>${t.password}<input name="password" type="password" required></label><button class="danger">${t.turnOff}</button><p class="msg"></p></form>`
    form($('#off'), async (d) => { await api('2fa', 'DELETE', d); profileView() })
  } else {
    const s = await api('2fa')
    box.innerHTML = `<p>${t.twofaOff}</p><p>${t.twofaScan}</p><div id="qr"></div><p>${t.twofaSecret} <code class="secret">${esc(s.secret.replace(/(.{4})/g, '$1 ').trim())}</code></p>
      <form id="on"><label>${t.code}<input name="code" inputmode="numeric" autocomplete="one-time-code" required></label><button class="primary">${t.turnOn}</button><p class="msg"></p></form>`
    if (window.QRCode) new window.QRCode($('#qr'), { text: s.uri, width: 180, height: 180 })
    form($('#on'), async (d) => { await api('2fa', 'POST', d); me = await api('me'); setNav(); profileView() })
  }
}

async function settingsView () {
  render(html`<h1>${t.settings}</h1>
    <section class="card"><h2>${t.backup}</h2><p>${t.backupHelp}</p>${can('settings.manage') ? `<a class="btn primary" href="/api/admin/export" download>${t.backup}</a>` : `<p class="warn">${t.need2fa}</p>`}</section>
    <section class="card"><h2>${t.migrate}</h2><p>${t.migrateHelp}</p><button id="mig" ${can('settings.manage') ? '' : 'disabled'}>${t.migrate}</button><p class="msg" id="mmsg"></p></section>`)
  $('#mig').addEventListener('click', async () => {
    // De server doet één stap per aanroep; herhaal tot hij klaar is.
    const done = []
    for (let i = 0; i < 20; i++) {
      const r = await fetch('/api/setup', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' }).then((x) => x.json())
      if (r.error) { $('#mmsg').textContent = r.error; return }
      done.push(...(r.migrations || []))
      if (r.done) break
    }
    $('#mmsg').textContent = `${t.done}: ${done.join(', ') || '—'}`
  })
}

// ---------- router ----------
const ROUTES = [
  [/^$/, dashboardView],
  [/^boeken$/, booksView, 'content.edit'],
  [/^boek\/(\d+)$/, bookView, 'content.edit'],
  [/^artikelen$/, articlesView, 'content.edit'],
  [/^categorieen$/, categoriesView, 'categories.manage'],
  [/^personen$/, personsView, 'content.edit'],
  [/^hadith$/, hadithView, 'content.edit'],
  [/^bewerk\/(chapter|article)\/(\d+)\/(ar|nl)$/, (type, id, l) => editView(type, Number(id), l), 'content.edit'],
  [/^versie\/(\d+)$/, versionView, 'content.edit'],
  [/^beoordelen$/, reviewView, 'content.edit'],
  [/^feedback$/, feedbackView, 'feedback.assigned'],
  [/^gebruikers$/, usersView, 'users.manage'],
  [/^audit$/, auditView, 'audit.view'],
  [/^instellingen$/, settingsView, 'settings.manage'],
  [/^profiel$/, profileView]
]

async function route () {
  window.onbeforeunload = null
  if (!me) { setNav(); return loginView() }
  setNav()
  const path = location.hash.replace(/^#\/?/, '').split('?')[0]
  for (const [re, fn, perm] of ROUTES) {
    const m = path.match(re)
    if (!m) continue
    if (perm && !has(perm)) return render(`<p class="warn">${t.notAllowed}</p>`)
    view.innerHTML = '<p class="muted">…</p>'
    try { await fn(...m.slice(1)) } catch (e) { render(`<p class="msg err">${esc(e.message)}</p>`) }
    return
  }
  render(`<p class="warn">404</p>`)
}

async function start () {
  try { me = await api('me') } catch { me = null }
  if (me && me.lang && !localStorage.getItem('zb-admin-lang')) { lang = me.lang; applyLang() }
  route()
}

window.addEventListener('hashchange', route)
applyLang()
start()
