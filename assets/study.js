// Studieomgeving per les: tabbladen, voortgang, favorieten, flitskaarten en toets.
// Voortgang en favorieten staan alleen in deze browser (localStorage), want leerlingaccounts
// komen pas later; zonder opslag werkt alles, alleen wordt niets onthouden.
(function () {
  var root = document.querySelector('.study'); if (!root) return
  root.classList.add('js-study')
  var lang = root.getAttribute('data-lang')
  var KEY = 'zb:study:' + root.getAttribute('data-chapter')
  var state = { learned: {}, fav: {}, done: false }
  try { state = Object.assign(state, JSON.parse(localStorage.getItem(KEY) || '{}')) } catch (e) {}
  function save () { try { localStorage.setItem(KEY, JSON.stringify(state)) } catch (e) {} }
  function $$ (sel, el) { return [].slice.call((el || root).querySelectorAll(sel)) }

  // Tabbladen (pijltjestoetsen, Home/End); de adresbalk onthoudt het tabblad.
  var tabs = $$('[role="tab"]'); var panels = $$('[role="tabpanel"]')
  function show (name, focus) {
    if (!document.getElementById('st-' + name)) name = tabs[0].getAttribute('data-tab')
    tabs.forEach(function (t) { var on = t.getAttribute('data-tab') === name; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus() })
    panels.forEach(function (p) { p.hidden = p.id !== 'st-' + name })
    var cur = tabs.filter(function (t) { return t.getAttribute('data-tab') === name })[0]
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }
  root.addEventListener('click', function (e) {
    var a = e.target.closest('[data-tab]'); if (!a) return
    e.preventDefault()
    var name = a.getAttribute('data-tab'); show(name)
    history.replaceState(null, '', '#st-' + name)
    var target = a.getAttribute('href') && a.getAttribute('href').indexOf('#term') === 0 ? document.querySelector(a.getAttribute('href')) : null
    if (target) { target.scrollIntoView({ block: 'center' }); target.classList.add('hit'); setTimeout(function () { target.classList.remove('hit') }, 1600) } else if (a.getAttribute('role') !== 'tab') root.scrollIntoView()
  })
  root.querySelector('[role="tablist"]').addEventListener('keydown', function (e) {
    var i = tabs.indexOf(document.activeElement); if (i < 0) return
    var rtl = document.documentElement.dir === 'rtl'
    var step = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key]
    var j = step ? (i + step + tabs.length) % tabs.length : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1
    if (j < 0) return
    e.preventDefault(); show(tabs[j].getAttribute('data-tab'), true)
  })
  show((location.hash.match(/^#st-(\w+)/) || [])[1] || 'overview')

  // Geleerd en favorieten
  function refresh () {
    $$('input[data-key]').forEach(function (c) { var k = c.getAttribute('data-key'); c.checked = !!state.learned[k]; var card = c.closest('.card'); if (card) card.classList.toggle('is-learned', c.checked) })
    $$('.star[data-key]').forEach(function (b) { b.setAttribute('aria-pressed', !!state.fav[b.getAttribute('data-key')]) })
    var boxes = $$('.p-terms input[data-key], .p-keys input[data-key]')
    var n = boxes.filter(function (c) { return c.checked }).length
    var pct = state.done ? 100 : boxes.length ? Math.round(100 * n / boxes.length) : 0
    $$('.prog .bar span').forEach(function (s) { s.style.width = pct + '%' })
    $$('.prog-n').forEach(function (s) { s.textContent = pct + '%' })
    var m = root.querySelector('.mark-lesson')
    if (m) { if (!m.dataset.label) m.dataset.label = m.textContent; m.setAttribute('aria-pressed', state.done); m.textContent = state.done ? '✓ ' + m.dataset.done : m.dataset.label }
    var list = root.querySelector('.favlist')
    if (list) {
      var favs = $$('.p-terms .card, .p-keys .card').filter(function (c) { return state.fav[c.getAttribute('data-key')] })
      if (favs.length) {
        list.innerHTML = ''
        favs.forEach(function (c) { var x = c.cloneNode(true); x.removeAttribute('id'); $$('.ctools', x).forEach(function (t) { t.remove() }); list.appendChild(x) })
      } else if (!list.querySelector('.muted')) list.innerHTML = '<p class="muted">' + list.getAttribute('data-empty') + '</p>'
    }
  }
  var fl = root.querySelector('.favlist'); if (fl) fl.setAttribute('data-empty', fl.textContent.trim())
  root.addEventListener('change', function (e) {
    var k = e.target.getAttribute && e.target.getAttribute('data-key'); if (!k) return
    if (e.target.checked) state.learned[k] = 1; else delete state.learned[k]
    save(); refresh()
  })
  root.addEventListener('click', function (e) {
    var b = e.target.closest('.star'); if (!b) return
    var k = b.getAttribute('data-key'); if (state.fav[k]) delete state.fav[k]; else state.fav[k] = 1
    save(); refresh()
  })
  var mark = root.querySelector('.mark-lesson')
  if (mark) mark.addEventListener('click', function () { state.done = !state.done; save(); refresh() })
  refresh()

  // Alle uitleg tonen of verbergen
  var ex = root.querySelector('.expand')
  if (ex) ex.addEventListener('click', function () {
    var open = ex.textContent === ex.dataset.open
    $$('.p-explain details').forEach(function (d) { d.open = open })
    ex.textContent = open ? ex.dataset.close : ex.dataset.open
  })

  // Flitskaarten: omdraaien, en een herhaalmodus met één kaart tegelijk.
  root.addEventListener('click', function (e) {
    var c = e.target.closest('.fcard'); if (!c) return
    c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') !== 'true')
  })
  var rep = root.querySelector('.repeat')
  if (rep) rep.addEventListener('click', function () {
    var ul = root.querySelector('.fcards'); var items = $$('li', ul); var queue = items.slice(); var bar = root.querySelector('.rep-bar')
    if (ul.classList.contains('solo')) { ul.classList.remove('solo'); items.forEach(function (li) { li.classList.remove('cur') }); if (bar) bar.remove(); return }
    ul.classList.add('solo')
    bar = document.createElement('div'); bar.className = 'rep-bar'
    bar.innerHTML = '<button type="button" data-r="know">' + rep.dataset.know + '</button><button type="button" data-r="again">' + rep.dataset.again + '</button><span role="status"></span>'
    ul.after(bar)
    function next () {
      items.forEach(function (li) { li.classList.remove('cur') })
      if (!queue.length) { bar.querySelector('[role="status"]').textContent = rep.dataset.done; ul.classList.remove('solo'); $$('button', bar).forEach(function (x) { x.hidden = true }); return }
      var li = queue[0]; li.classList.add('cur'); var card = li.querySelector('.fcard'); card.setAttribute('aria-pressed', 'false'); card.focus()
      bar.querySelector('[role="status"]').textContent = (items.length - queue.length + 1) + ' / ' + items.length
    }
    bar.addEventListener('click', function (e) {
      var r = e.target.getAttribute('data-r'); if (!r) return
      var li = queue.shift(); if (r === 'again') queue.push(li)
      next()
    })
    next()
  })

  // Toets met directe feedback
  var labels = lang === 'ar' ? { ok: 'إجابة صحيحة', no: 'إجابة غير صحيحة' } : { ok: 'Goed!', no: 'Niet goed' }
  function score () {
    var all = $$('.qz'); var answered = all.filter(function (q) { return q.dataset.done })
    var good = answered.filter(function (q) { return q.dataset.done === 'ok' }).length
    var el = root.querySelector('.qscore'); if (el) el.textContent = answered.length ? el.dataset.tpl.replace('{a}', good).replace('{b}', all.length) : ''
  }
  root.addEventListener('click', function (e) {
    var b = e.target.closest('.qopts button'); if (!b) return
    var q = b.closest('.qz'); if (q.dataset.done) return
    var right = Number(q.dataset.answer); var chosen = Number(b.dataset.i)
    $$('button', q).forEach(function (x) { x.disabled = true; if (Number(x.dataset.i) === right) x.classList.add('ok') })
    if (chosen !== right) b.classList.add('no')
    q.dataset.done = chosen === right ? 'ok' : 'no'
    var fb = q.querySelector('.qfb'); fb.hidden = false
    fb.querySelector('.qres').textContent = chosen === right ? labels.ok : labels.no
    score()
  })
  var reset = root.querySelector('.qreset')
  if (reset) reset.addEventListener('click', function () {
    $$('.qz').forEach(function (q) { delete q.dataset.done; q.querySelector('.qfb').hidden = true; $$('button', q).forEach(function (x) { x.disabled = false; x.classList.remove('ok', 'no') }) })
    score()
  })

  // Afdrukken: alle tabbladen en uitklappers open, daarna terug zoals het was.
  var opened = []
  window.addEventListener('beforeprint', function () { opened = $$('details:not([open])'); opened.forEach(function (d) { d.open = true }) })
  window.addEventListener('afterprint', function () { opened.forEach(function (d) { d.open = false }) })
  var pr = root.querySelector('.print'); if (pr) pr.addEventListener('click', function () { window.print() })
})();

// Inhoudsopgave: lessen die in deze browser als geleerd zijn gemarkeerd krijgen een vinkje.
(function () {
  [].slice.call(document.querySelectorAll('#toc a[data-id], .lix-card[data-id], .unit-card[data-id], .ulx a[data-id]')).forEach(function (a) {
    try { var s = JSON.parse(localStorage.getItem('zb:study:' + a.getAttribute('data-id')) || 'null'); if (s && s.done) a.classList.add('learned') } catch (e) {}
  })
})();
