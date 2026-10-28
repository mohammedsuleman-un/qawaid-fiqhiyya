// Beheerpagina: inloggen, boeken beheren en tekst per blok bewerken.
// Praat alleen met /api/admin; de sessie staat in een HttpOnly-cookie.
(function () {
  const view = document.getElementById('view')
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
  const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild }
  let me = null

  async function api (path, method = 'GET', data) {
    const res = await fetch('/api/admin/' + path, {
      method,
      headers: data ? { 'content-type': 'application/json' } : {},
      body: data ? JSON.stringify(data) : undefined
    })
    const out = await res.json().catch(() => ({}))
    if (res.status === 401 && path !== 'login') { me = null; showLogin(); throw new Error(out.error) }
    if (!res.ok) throw new Error(out.error || 'Er ging iets mis')
    return out
  }

  // Koppelt een formulier aan een actie en toont fouten onder het formulier.
  function onSubmit (form, action) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const msg = form.querySelector('.msg')
      msg.className = 'msg'; msg.textContent = ''
      try {
        const done = await action(Object.fromEntries(new FormData(form)))
        if (done) { msg.className = 'msg ok'; msg.textContent = done }
      } catch (err) { msg.className = 'msg err'; msg.textContent = err.message }
    })
  }

  function setUser () {
    document.getElementById('tabs').hidden = !me
    const who = document.getElementById('who')
    who.innerHTML = me ? `${esc(me.email)} <button class="small" id="logout">Uitloggen</button>` : ''
    if (me) {
      document.getElementById('logout').onclick = async () => { await api('logout', 'POST', {}); me = null; setUser(); showLogin() }
    }
  }

  function showLogin () {
    setUser()
    view.innerHTML = ''
    const f = view.appendChild(h(`<form class="card" style="max-width:380px">
      <h1>Inloggen</h1>
      <label>E-mailadres</label><input name="email" type="email" autocomplete="username" required>
      <label>Wachtwoord</label><input name="password" type="password" autocomplete="current-password" required>
      <p><button class="primary">Inloggen</button></p><p class="msg"></p></form>`))
    onSubmit(f, async (d) => { await api('login', 'POST', d); await start() })
  }

  function showInvite (token) {
    view.innerHTML = ''
    const f = view.appendChild(h(`<form class="card" style="max-width:380px">
      <h1>Welkom als beheerder</h1>
      <p class="muted">Kies een wachtwoord van minstens 10 tekens.</p>
      <label>Wachtwoord</label><input name="password" type="password" autocomplete="new-password" minlength="10" required>
      <p><button class="primary">Wachtwoord opslaan</button></p><p class="msg"></p></form>`))
    onSubmit(f, async (d) => {
      await api('accept-invite', 'POST', { token, password: d.password })
      history.replaceState(null, '', '/beheer/')
      await start()
    })
  }

  async function showBooks () {
    const books = await api('books')
    view.innerHTML = '<h1>Boeken</h1>'
    for (const b of books) {
      view.appendChild(h(`<div class="card row">
        <div class="grow"><div class="ar">${esc(b.title)}</div><div class="muted">${esc(b.slug)} · ${Number(b.pages)} pagina's</div></div>
        <span class="badge ${b.status === 'published' ? 'pub' : ''}">${b.status === 'published' ? 'Gepubliceerd' : 'Concept'}</span>
        <a href="#/boek/${encodeURIComponent(b.slug)}"><button>Bewerken</button></a>
        <a href="/boek/${encodeURIComponent(b.slug)}" target="_blank"><button>Bekijken</button></a></div>`))
    }
    const f = view.appendChild(h(`<form class="card">
      <h2 class="sec" style="margin-top:0">Nieuw boek</h2>
      <label>Titel (Arabisch)</label><input name="title" dir="rtl" required>
      <label>Ondertitel</label><input name="subtitle" dir="rtl">
      <label>Adres (bijv. sharh-al-waraqat)</label><input name="slug" pattern="[a-z0-9]+(-[a-z0-9]+)*" required>
      <label>Link naar PDF (mag leeg)</label><input name="pdf">
      <p><button class="primary">Boek aanmaken</button></p><p class="msg"></p></form>`))
    onSubmit(f, async (d) => { await api('books', 'POST', d); location.hash = '#/boek/' + d.slug })
  }

  // Knoppen die de geselecteerde tekst in de opmaak van een spreker zetten.
  const WRAPS = [
    ['الآية', '<span class="ayah">', '</span>'],
    ['الحديث', '<span class="hadith">', '</span>'],
    ['مثاله', '<span class="le">', '</span>'],
    ['مسألة / حكمه', '<span class="lm">', '</span>'],
    ['تمييز', '<mark class="y">', '</mark>'],
    ['أخضر', '<mark class="g">', '</mark>'],
    ['أزرق', '<mark class="b">', '</mark>']
  ]
  const KINDS = { p: 'Alinea', cont: 'Alinea (loopt door van vorige pagina)', heading: 'Kopje', sharh: 'Uitleg (الشارح)', side: 'Kantnotitie', page: 'Paginanummer' }

  function blockHtml (b) {
    switch (b.kind) {
      case 'page': return `<div class="pg" id="p${b.page}"><span>${esc(b.page)}</span></div>`
      case 'heading': return `<h2>${b.html}</h2>`
      case 'cont': return `<p class="cont">${b.html}</p>`
      case 'sharh': return `<div class="sharh">${b.html}</div>`
      case 'side': return `<div class="side">${b.html}</div>`
      default: return `<p>${b.html}</p>`
    }
  }

  async function showBook (slug) {
    const { book, blocks } = await api('books/' + encodeURIComponent(slug))
    view.innerHTML = ''
    const meta = view.appendChild(h(`<form class="card">
      <div class="row"><h1 class="grow ar" style="margin:0">${esc(book.title)}</h1>
        <span class="badge ${book.status === 'published' ? 'pub' : ''}">${book.status === 'published' ? 'Gepubliceerd' : 'Concept'}</span>
        <button type="button" id="toggle">${book.status === 'published' ? 'Terug naar concept' : 'Publiceren'}</button>
        <a href="/boek/${encodeURIComponent(slug)}" target="_blank"><button type="button">Bekijken</button></a></div>
      <label>Titel</label><input name="title" dir="rtl" value="${esc(book.title)}">
      <label>Ondertitel</label><input name="subtitle" dir="rtl" value="${esc(book.subtitle)}">
      <label>Link naar PDF</label><input name="pdf" value="${esc(book.pdf)}">
      <p><button class="primary">Gegevens opslaan</button></p><p class="msg"></p></form>`))
    onSubmit(meta, async (d) => { await api('books/' + slug, 'PATCH', d); return 'Opgeslagen' })
    meta.querySelector('#toggle').onclick = async () => {
      await api('books/' + slug, 'PATCH', { status: book.status === 'published' ? 'draft' : 'published' })
      showBook(slug)
    }

    const pages = blocks.filter((b) => b.kind === 'page')
    const jump = view.appendChild(h(`<div class="jump row"><span class="muted">Ga naar pagina</span>
      <select style="width:auto">${pages.map((p) => `<option value="${p.id}">${esc(p.page)}</option>`).join('')}</select>
      <span class="muted">${blocks.length} blokken. Ga met de muis over een blok om het te bewerken.</span></div>`))
    jump.querySelector('select').onchange = (e) => document.getElementById('blk' + e.target.value)?.scrollIntoView({ block: 'start' })

    const article = view.appendChild(h('<article class="book" dir="rtl"></article>'))
    if (!blocks.length) {
      const first = article.appendChild(h('<p><button type="button">Eerste pagina toevoegen</button></p>'))
      first.querySelector('button').onclick = () => newBlock(slug, null, 'page', 1)
    }
    for (const b of blocks) article.appendChild(blockRow(slug, b))
  }

  function blockRow (slug, b) {
    const row = h(`<div class="blk" id="blk${b.id}">${blockHtml(b)}
      <span class="tools"><button class="small" data-a="edit">Bewerken</button><button class="small" data-a="add">+ Erna</button>
      <button class="small" data-a="hist">Geschiedenis</button><button class="small danger" data-a="del">Verwijderen</button></span></div>`)
    row.querySelector('.tools').onclick = async (e) => {
      const a = e.target.dataset.a
      if (a === 'edit') openEditor(slug, row, b)
      if (a === 'add') newBlock(slug, b, b.kind === 'page' ? 'p' : b.kind === 'heading' ? 'p' : b.kind, b.page)
      if (a === 'hist') showHistory(slug, row, b)
      if (a === 'del' && confirm('Dit blok verwijderen? De tekst blijft bewaard in de geschiedenis.')) {
        await api('blocks/' + b.id, 'DELETE', {}); row.remove()
      }
    }
    return row
  }

  async function newBlock (slug, after, kind, page) {
    const { id } = await api('blocks', 'POST', { book: slug, after: after?.id, kind, page, html: '' })
    await showBook(slug)
    const row = document.getElementById('blk' + id)
    row.scrollIntoView({ block: 'center' })
    openEditor(slug, row, { id, kind, page, html: '' })
  }

  function openEditor (slug, row, b) {
    if (row.querySelector('.editor')) return
    row.classList.add('editing')
    const ed = row.appendChild(h(`<div class="editor">
      <div class="row">
        <div class="grow"><label>Soort</label><select name="kind">${Object.entries(KINDS).map(([k, v]) => `<option value="${k}" ${k === b.kind ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
        <div style="width:110px"><label>Pagina</label><input name="page" type="number" value="${esc(b.page)}"></div>
      </div>
      <div class="wrapbtns">${WRAPS.map((w, i) => `<button type="button" data-w="${i}">${w[0]}</button>`).join('')}</div>
      <textarea name="html">${esc(b.html)}</textarea>
      <div class="preview book"></div>
      <div class="row" style="margin-top:10px"><button class="primary" data-a="save">Opslaan</button><button data-a="cancel">Annuleren</button><span class="msg"></span></div>
    </div>`))
    const ta = ed.querySelector('textarea')
    const kind = ed.querySelector('[name=kind]')
    const page = ed.querySelector('[name=page]')
    const preview = () => { ed.querySelector('.preview').innerHTML = blockHtml({ kind: kind.value, page: page.value, html: ta.value }) }
    ta.oninput = kind.onchange = page.oninput = preview
    preview()
    ta.focus()
    ed.querySelector('.wrapbtns').onclick = (e) => {
      const w = WRAPS[e.target.dataset.w]
      if (!w) return
      const [s, t] = [ta.selectionStart, ta.selectionEnd]
      ta.setRangeText(w[1] + ta.value.slice(s, t) + w[2], s, t, 'end')
      preview(); ta.focus()
    }
    ed.querySelector('[data-a=cancel]').onclick = () => { ed.remove(); row.classList.remove('editing') }
    ed.querySelector('[data-a=save]').onclick = async () => {
      const msg = ed.querySelector('.msg')
      try {
        const next = { kind: kind.value, page: page.value, html: ta.value }
        await api('blocks/' + b.id, 'PATCH', next)
        row.replaceWith(blockRow(slug, { ...b, ...next, page: next.page === '' ? null : Number(next.page) }))
      } catch (err) { msg.className = 'msg err'; msg.textContent = err.message }
    }
  }

  async function showHistory (slug, row, b) {
    const revs = await api(`blocks/${b.id}/revisions`)
    const box = row.appendChild(h(`<div class="editor"><strong>Eerdere versies</strong>
      ${revs.length ? '' : '<p class="muted">Nog geen eerdere versies.</p>'}
      <div class="list"></div><p><button data-a="close">Sluiten</button></p></div>`))
    for (const r of revs) {
      const item = box.querySelector('.list').appendChild(h(`<div class="rev">
        <div class="muted">${esc(r.edited_at)} · ${esc(r.edited_by)}</div>
        <div class="book" dir="rtl">${blockHtml({ kind: b.kind, page: b.page, html: r.html })}</div>
        <button class="small">Deze versie terugzetten</button></div>`))
      item.querySelector('button').onclick = async () => {
        await api('blocks/' + b.id, 'PATCH', { html: r.html })
        row.replaceWith(blockRow(slug, { ...b, html: r.html }))
      }
    }
    box.querySelector('[data-a=close]').onclick = () => box.remove()
  }

  async function showAdmins () {
    const { admins, invites } = await api('admins')
    view.innerHTML = '<h1>Beheerders</h1>'
    for (const a of admins) {
      const row = view.appendChild(h(`<div class="card row"><span class="grow">${esc(a.email)}</span>
        <span class="badge">${a.role === 'owner' ? 'Eigenaar' : 'Redacteur'}</span>
        ${me.role === 'owner' && a.email !== me.email ? '<button class="small danger">Verwijderen</button>' : ''}</div>`))
      const del = row.querySelector('button')
      if (del) del.onclick = async () => { if (confirm(`${a.email} verwijderen?`)) { await api('admins', 'DELETE', { email: a.email }); showAdmins() } }
    }
    for (const i of invites) view.appendChild(h(`<div class="card row"><span class="grow">${esc(i.email)}</span><span class="badge">Uitgenodigd</span></div>`))
    if (me.role !== 'owner') return
    const f = view.appendChild(h(`<form class="card">
      <h2 class="sec" style="margin-top:0">Beheerder uitnodigen</h2>
      <label>E-mailadres</label><input name="email" type="email" required>
      <label>Rol</label><select name="role"><option value="editor">Redacteur (boeken en tekst)</option><option value="owner">Eigenaar (ook beheerders)</option></select>
      <p><button class="primary">Uitnodigingslink maken</button></p><p class="msg"></p></form>`))
    onSubmit(f, async (d) => {
      const { link } = await api('admins', 'POST', d)
      f.querySelector('.msg').insertAdjacentHTML('afterend', `<p class="muted">Stuur deze link naar ${esc(d.email)} (7 dagen geldig):</p><input readonly value="${esc(link)}" onclick="this.select()">`)
      return 'Uitnodiging gemaakt'
    })
  }

  async function route () {
    if (!me) return
    const hash = location.hash.slice(1) || '/'
    try {
      if (hash.startsWith('/boek/')) await showBook(decodeURIComponent(hash.slice(6)))
      else if (hash === '/beheerders') await showAdmins()
      else await showBooks()
    } catch (err) {
      if (me) view.innerHTML = `<p class="err">${esc(err.message)}</p>`
    }
  }

  async function start () {
    const token = new URLSearchParams(location.search).get('uitnodiging')
    if (token) return showInvite(token)
    try { me = await api('me') } catch { return }
    setUser()
    route()
  }

  window.addEventListener('hashchange', route)
  start()
})()
