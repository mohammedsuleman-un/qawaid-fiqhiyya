// Leeshulp op alle openbare pagina's: inhoudsopgave openen en sluiten (telefoon), de huidige
// plek in de inhoudsopgave tonen, lettergrootte, terug naar boven en "verder lezen".
// Alles wat onthouden wordt staat alleen in deze browser (localStorage); zonder opslag werkt
// de pagina gewoon, alleen wordt er niets onthouden.
(function () {
  var doc = document.documentElement
  var lang = document.body.getAttribute('data-lang') || 'ar'
  var ar = lang === 'ar'
  var W = ar
    ? { smaller: 'تصغير الخط', bigger: 'تكبير الخط', top: 'إلى أعلى الصفحة', close: 'إغلاق الفهرس', resume: 'تابع من حيث توقفت:', size: 'حجم الخط' }
    : { smaller: 'Kleinere letters', bigger: 'Grotere letters', top: 'Naar boven', close: 'Inhoudsopgave sluiten', resume: 'Verder waar je gebleven was:', size: 'Lettergrootte' }
  function get (k) { try { return JSON.parse(localStorage.getItem(k) || 'null') } catch (e) { return null } }
  function put (k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} }
  function el (tag, cls, html) { var x = document.createElement(tag); if (cls) x.className = cls; if (html != null) x.innerHTML = html; return x }
  function esc (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] }) }

  // Inhoudsopgave op de telefoon: knop opent en sluit het paneel; Escape of een keuze sluit het.
  var side = document.getElementById('side')
  var btn = side && side.querySelector('.toctoggle')
  var toc = document.getElementById('toc')
  function setOpen (open) {
    if (!btn) return
    side.classList.toggle('open', open)
    btn.setAttribute('aria-expanded', open)
    if (open) { var q = document.getElementById('q'); centerToc(); if (q && window.matchMedia('(min-width:861px)').matches) q.focus() }
  }
  if (btn) {
    btn.addEventListener('click', function () { setOpen(!side.classList.contains('open')) })
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && side.classList.contains('open')) { setOpen(false); btn.focus() } })
    document.addEventListener('click', function (e) { if (side.classList.contains('open') && !side.contains(e.target)) setOpen(false) })
    if (toc) toc.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false) })
  }

  // De huidige les of eenheid zichtbaar in de inhoudsopgave (zonder de pagina zelf te verschuiven).
  function centerToc () {
    if (!toc) return
    var cur = toc.querySelector('a.on') || toc.querySelector('a.in-unit')
    if (cur) toc.scrollTop = cur.offsetTop - toc.offsetTop - toc.clientHeight / 3
  }
  centerToc()

  // Hele boek op één pagina: het hoofdstuk dat je leest licht op in de inhoudsopgave.
  var app = document.querySelector('.app[data-book]')
  var sections = [].slice.call(document.querySelectorAll('.book > section.chapter[id^="c"]'))
  var current = null
  if (toc && sections.length > 1 && 'IntersectionObserver' in window) {
    var links = {}
    ;[].slice.call(toc.querySelectorAll('a[href^="#h"]')).forEach(function (a) { links[a.getAttribute('href').slice(2)] = a })
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return
        var slug = en.target.id.slice(1); var a = links[slug]; if (!a || a === current) return
        if (current) current.classList.remove('on')
        current = a; a.classList.add('on'); centerToc()
        saveLast('#h' + slug, a.textContent)
      })
    }, { rootMargin: '-15% 0px -75% 0px' })
    sections.forEach(function (s) { io.observe(s) })
  }

  // Verder lezen: per boek de laatst geopende plek.
  function saveLast (hash, label) {
    if (!app) return
    var all = get('zb:last') || {}
    all[app.getAttribute('data-book')] = { u: location.pathname + location.search + (hash || ''), l: (label || '').trim().slice(0, 90), b: app.getAttribute('data-title'), at: Date.now(), lang: lang }
    put('zb:last', all)
  }
  if (app) {
    var path = location.pathname.replace(/\/$/, '')
    var bookPath = '/boek/' + app.getAttribute('data-book')
    var heading = document.querySelector('.st-chap, .chapter > h2')
    if (path !== bookPath) saveLast('', heading ? heading.childNodes[0].textContent : document.title)
    else {
      var last = (get('zb:last') || {})[app.getAttribute('data-book')]
      var wrap = document.querySelector('main .wrap')
      if (last && wrap && last.u.split('#')[0].replace(/\?.*$/, '') !== bookPath) {
        var r = el('p', 'resume1', W.resume + ' <a href="' + esc(last.u) + '">' + esc(last.l || last.b) + ' →</a>')
        wrap.insertBefore(r, wrap.firstChild)
      }
    }
  }
  var resume = document.getElementById('resume')
  if (resume) {
    var list = get('zb:last') || {}
    var items = Object.keys(list).map(function (k) { return list[k] }).filter(function (x) { return x && x.u }).sort(function (a, b) { return b.at - a.at }).slice(0, 3)
    if (items.length) {
      resume.querySelector('ul').innerHTML = items.map(function (x) {
        return '<li><a href="' + esc(x.u) + '"><b dir="auto">' + esc(x.b || '') + '</b><span dir="auto">' + esc(x.l || '') + '</span></a></li>'
      }).join('')
      resume.hidden = false
    }
  }

  // Lettergrootte voor de leestekst (onthouden per browser).
  if (app) {
    var box = el('div', 'fsz')
    box.setAttribute('role', 'group'); box.setAttribute('aria-label', W.size)
    box.innerHTML = '<button type="button" data-d="-1" title="' + W.smaller + '" aria-label="' + W.smaller + '">A−</button><button type="button" data-d="1" title="' + W.bigger + '" aria-label="' + W.bigger + '">A+</button>'
    var links2 = document.querySelector('.sidelinks')
    if (links2) links2.appendChild(box)
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return
      var cur = parseFloat(getComputedStyle(doc).getPropertyValue('--fsr')) || 1
      var next = Math.min(1.5, Math.max(0.8, Math.round((cur + 0.1 * Number(b.getAttribute('data-d'))) * 10) / 10))
      doc.style.setProperty('--fsr', next)
      try { localStorage.setItem('zb:fsr', String(next)) } catch (err) {}
    })
  }

  // Terug naar boven, zodra je een eind gescrold hebt.
  var up = el('button', 'totop', '<span aria-hidden="true">↑</span>')
  up.type = 'button'; up.title = W.top; up.setAttribute('aria-label', W.top); up.hidden = true
  document.body.appendChild(up)
  up.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); var m = document.getElementById('main'); if (m) m.focus({ preventScroll: true }) })
  var ticking = false
  window.addEventListener('scroll', function () {
    if (ticking) return
    ticking = true
    requestAnimationFrame(function () { up.hidden = window.scrollY < 700; ticking = false })
  }, { passive: true })
})()
