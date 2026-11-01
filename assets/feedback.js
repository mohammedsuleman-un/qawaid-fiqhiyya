// Feedbackknop op elke pagina (bibliotheek, boeken, registers, studenten, beheer).
// Onthoudt de pagina en de alinea waar de lezer het laatst op tikte, tekst selecteerde of die midden
// in beeld staat. Werkt voor iedereen, ook zonder account; ingelogde gebruikers herkent de server.
// Een link met ?zbfb=<anker> (vanuit Beheer) laat die alinea oplichten.
(function () {
  if (window.zbFeedback) return
  window.zbFeedback = true
  var SEL = 'p,li,blockquote,h1,h2,h3,h4,h5,dd,dt,td,th,figcaption,pre,.sharh,.side,.ayah'
  var SKIP = '#zbfb-ui,dialog,header.top,.top,nav,aside#side,.totop,.selfb,script,style'
  var T = {
    nl: { btn: 'Feedback', title: 'Feedback of correctie', page: 'Pagina', para: 'Over deze alinea', sel: 'Geselecteerde tekst', none: 'Geen alinea', pick: 'Tip: tik eerst op een alinea om die mee te sturen.',
      kind: 'Soort melding', msg: 'Je opmerking', sug: 'Voorgestelde verbetering (optioneel)', mail: 'Je e-mailadres (optioneel, alleen voor een reactie)', who: 'Je stuurt dit als ',
      send: 'Versturen', cancel: 'Sluiten', ok: 'Dank je wel. Je melding is ontvangen en wordt door de redactie bekeken.', err: 'Versturen mislukt: ', selbtn: 'Meld iets over deze tekst', offline: 'geen verbinding',
      kinds: { spelling: 'Spelfout', translation: 'Vertaalfout', source: 'Onjuiste bron', content: 'Inhoudelijke fout', missing: 'Ontbrekende tekst', technical: 'Technisch probleem', suggestion: 'Verbetervoorstel', other: 'Overig' } },
    ar: { btn: 'ملاحظة', title: 'ملاحظة أو تصحيح', page: 'الصفحة', para: 'عن هذه الفقرة', sel: 'النص المحدد', none: 'بدون فقرة', pick: 'تلميح: اضغط على فقرة أولاً لإرسالها مع ملاحظتك.',
      kind: 'نوع الملاحظة', msg: 'الملاحظة', sug: 'الصيغة المقترحة (اختياري)', mail: 'بريدك الإلكتروني (اختياري، للرد فقط)', who: 'ترسل هذه الملاحظة باسم ',
      send: 'إرسال', cancel: 'إغلاق', ok: 'شكراً لك، وصلت ملاحظتك وسيراجعها فريق التحرير.', err: 'تعذّر الإرسال: ', selbtn: 'ملاحظة على هذا النص', offline: 'لا يوجد اتصال',
      kinds: { spelling: 'خطأ إملائي', translation: 'خطأ في الترجمة', source: 'مصدر غير صحيح', content: 'خطأ في المحتوى', missing: 'نص ناقص', technical: 'مشكلة تقنية', suggestion: 'اقتراح تحسين', other: 'أخرى' } }
  }
  var CSS = '#zbfb-ui{--zf-bg:#fff;--zf-bg2:#f6f3ec;--zf-ink:#1d1d1b;--zf-line:#ddd6c8;--zf-green:#04403a;--zf-gold:#b5873f;font-family:"IBM Plex Sans Arabic",system-ui,sans-serif}' +
    '@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) #zbfb-ui{--zf-bg:#1d2321;--zf-bg2:#262e2b;--zf-ink:#ece8df;--zf-line:#3a4441;--zf-green:#2f8f7f}}' +
    ':root[data-theme="dark"] #zbfb-ui{--zf-bg:#1d2321;--zf-bg2:#262e2b;--zf-ink:#ece8df;--zf-line:#3a4441;--zf-green:#2f8f7f}' +
    '#zbfb-ui .zf-btn{position:fixed;bottom:18px;inset-inline-start:18px;z-index:35;display:flex;align-items:center;gap:6px;height:44px;padding:0 16px;border-radius:22px;border:0;background:var(--zf-green);color:#fff;font:inherit;font-size:15px;font-weight:600;cursor:pointer;box-shadow:0 3px 12px rgba(0,0,0,.25)}' +
    '#zbfb-ui .zf-btn:focus-visible{outline:3px solid var(--zf-gold);outline-offset:2px}' +
    '#zbfb-ui .zf-btn span{font-size:18px;line-height:1}' +
    '@media (max-width:600px){#zbfb-ui{display:block;height:60px}#zbfb-ui .zf-btn{bottom:12px;inset-inline-start:12px;height:40px;padding:0 12px;font-size:14px}}' +
    '#zbfb-ui .zf-sel{position:absolute;z-index:36;font:inherit;font-size:13px;background:var(--zf-green);color:#fff;border:0;border-radius:99px;padding:6px 12px;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2)}' +
    '#zbfb-ui dialog{border:1px solid var(--zf-line);border-radius:14px;background:var(--zf-bg);color:var(--zf-ink);max-width:520px;width:calc(100% - 24px);max-height:calc(100% - 24px);padding:18px;box-sizing:border-box}' +
    '#zbfb-ui dialog::backdrop{background:rgba(0,0,0,.4)}' +
    '#zbfb-ui h3{margin:0 0 4px;color:var(--zf-green);font-size:19px}' +
    '#zbfb-ui .zf-page{margin:0 0 6px;font-size:13px;opacity:.75;overflow-wrap:anywhere}' +
    '#zbfb-ui label{display:block;font-size:14px;margin:10px 0 4px}' +
    '#zbfb-ui input,#zbfb-ui select,#zbfb-ui textarea{width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid var(--zf-line);border-radius:8px;background:var(--zf-bg2);color:var(--zf-ink);font:inherit;font-size:16px}' +
    '#zbfb-ui blockquote{margin:0;padding:6px 10px;border-inline-start:3px solid var(--zf-gold);background:var(--zf-bg2);font-family:Amiri,serif;font-size:16px;max-height:110px;overflow:auto;white-space:pre-wrap}' +
    '#zbfb-ui .zf-q{display:flex;justify-content:space-between;align-items:baseline;gap:8px}' +
    '#zbfb-ui .zf-q button{border:0;background:none;color:var(--zf-green);text-decoration:underline;cursor:pointer;font:inherit;font-size:13px;padding:0}' +
    '#zbfb-ui .zf-tip,#zbfb-ui .zf-who{font-size:13px;opacity:.8;margin:6px 0 0}' +
    '#zbfb-ui .zf-hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}' +
    '#zbfb-ui .zf-row{display:flex;gap:8px;justify-content:flex-end;margin-top:14px}' +
    '#zbfb-ui .zf-row button{font:inherit;border-radius:8px;padding:8px 18px;border:1px solid var(--zf-line);background:var(--zf-bg2);color:var(--zf-ink);cursor:pointer}' +
    '#zbfb-ui .zf-row .zf-send{background:var(--zf-green);border-color:var(--zf-green);color:#fff}' +
    '#zbfb-ui .zf-msg{min-height:1em;margin:10px 0 0;font-size:14px}' +
    '.zbfb-mark{outline:2px solid #b5873f!important;outline-offset:3px;background:rgba(181,135,63,.14)!important;border-radius:4px;transition:background .6s}' +
    '@media print{#zbfb-ui{display:none!important}}'

  function lang () {
    var l = (document.documentElement.getAttribute('lang') || document.body.getAttribute('data-lang') ||
      (getComputedStyle(document.body).direction === 'rtl' ? 'ar' : 'nl')).slice(0, 2)
    return l === 'ar' ? 'ar' : 'nl'
  }
  function txt (el) { return (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim() }
  function ok (el) { return el && el.nodeType === 1 && !el.closest(SKIP) && txt(el).length > 1 }
  function pick (node) {
    if (node && node.nodeType !== 1) node = node.parentElement
    var el = node && node.closest ? node.closest(SEL) : null
    return ok(el) ? el : null
  }
  function cands (scope) { return [].filter.call(scope.querySelectorAll(SEL), ok) }
  // Anker: id van het dichtstbijzijnde element met een id, plus de volgorde van de alinea daarbinnen.
  function anchorOf (el) {
    var host = el.closest('[id]')
    while (host && (host.closest('#zbfb-ui') || /^(zbfb|fb-)/.test(host.id))) host = host.parentElement && host.parentElement.closest('[id]')
    if (host === el) return el.id + '|-1'
    return (host ? host.id : '') + '|' + cands(host || document.body).indexOf(el)
  }
  function resolve (anchor) {
    var m = /^(.*)\|(-?\d+)$/.exec(anchor || ''); if (!m) return null
    var scope = m[1] ? document.getElementById(m[1]) : document.body
    if (!scope) return null
    var i = Number(m[2])
    return i < 0 ? scope : cands(scope)[i] || null
  }
  function inView (el) {
    var r = el.getBoundingClientRect()
    return r.bottom > 0 && r.top < innerHeight && r.height > 0
  }
  function centerPara () {
    var ys = [0.4, 0.3, 0.5, 0.6, 0.2]
    for (var i = 0; i < ys.length; i++) {
      var xs = [innerWidth / 2, innerWidth * 0.3, innerWidth * 0.7]
      for (var j = 0; j < xs.length; j++) {
        var el = pick(document.elementFromPoint(xs[j], innerHeight * ys[i]))
        if (el) return el
      }
    }
    return null
  }
  function mark (el) {
    [].forEach.call(document.querySelectorAll('.zbfb-mark'), function (e) { e.classList.remove('zbfb-mark') })
    if (!el) return
    el.classList.add('zbfb-mark')
    setTimeout(function () { el.classList.remove('zbfb-mark') }, 6000)
  }
  function pageUrl () {
    var u = new URL(location.href); u.searchParams.delete('zbfb')
    return (u.pathname + u.search + u.hash).slice(0, 500)
  }
  function who () { try { return localStorage.getItem('zb:who') || '' } catch (e) { return '' } }

  var ui = document.createElement('div'); ui.id = 'zbfb-ui'
  var style = document.createElement('style'); style.textContent = CSS
  var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'zf-btn'
  var selBtn = document.createElement('button'); selBtn.type = 'button'; selBtn.className = 'zf-sel'; selBtn.hidden = true
  var dlg = document.createElement('dialog')
  ui.appendChild(style); ui.appendChild(btn); ui.appendChild(selBtn); ui.appendChild(dlg)
  document.body.appendChild(ui)
  // Oude feedbackonderdelen uit book.js niet dubbel tonen.
  var oldSel = document.querySelector('.selfb'); if (oldSel) oldSel.remove()

  var builtFor = '', last = null, selText = '', selPara = null, state = {}
  function label () {
    var W = T[lang()]
    btn.innerHTML = '<span aria-hidden="true">✎</span>' + W.btn
    btn.title = W.title; btn.setAttribute('aria-label', W.title)
    selBtn.textContent = W.selbtn
  }
  function build () {
    var l = lang(); if (builtFor === l) return
    builtFor = l
    var W = T[l]
    var opts = Object.keys(W.kinds).map(function (k) { return '<option value="' + k + '">' + W.kinds[k] + '</option>' }).join('')
    dlg.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr'); dlg.setAttribute('lang', l)
    dlg.innerHTML = '<form method="dialog"><h3>' + W.title + '</h3><p class="zf-page"></p>' +
      '<div class="zf-qwrap"><div class="zf-q"><label></label><button type="button" class="zf-clear">' + W.none + '</button></div><blockquote dir="auto"></blockquote></div>' +
      '<p class="zf-tip">' + W.pick + '</p>' +
      '<label for="zbfb-k">' + W.kind + '</label><select id="zbfb-k" name="category">' + opts + '</select>' +
      '<label for="zbfb-m">' + W.msg + '</label><textarea id="zbfb-m" name="message" rows="4" required minlength="5" maxlength="5000" dir="auto"></textarea>' +
      '<label for="zbfb-s">' + W.sug + '</label><textarea id="zbfb-s" name="suggestion" rows="2" maxlength="5000" dir="auto"></textarea>' +
      '<div class="zf-mailwrap"><label for="zbfb-e">' + W.mail + '</label><input id="zbfb-e" name="email" type="email" maxlength="255" autocomplete="email" dir="ltr"></div>' +
      '<p class="zf-who"></p>' +
      '<input class="zf-hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<p class="zf-msg" role="status"></p><div class="zf-row"><button type="button" class="zf-cancel">' + W.cancel + '</button><button class="zf-send" value="send">' + W.send + '</button></div></form>'
    var f = dlg.querySelector('form')
    dlg.querySelector('.zf-cancel').addEventListener('click', function () { dlg.close() })
    dlg.querySelector('.zf-clear').addEventListener('click', function () { setPara(null, ''); mark(null) })
    f.addEventListener('submit', submit)
  }
  function setPara (el, quote) {
    var W = T[lang()]
    state.el = el; state.quote = quote || (el ? txt(el).slice(0, 600) : '')
    state.anchor = el ? anchorOf(el) : ''
    var sec = el && el.closest('.chapter[data-id]')
    state.type = sec ? sec.getAttribute('data-type') || 'chapter' : (state.forceSec ? state.forceSec.getAttribute('data-type') || 'chapter' : 'page')
    state.id = sec ? sec.getAttribute('data-id') : (state.forceSec ? state.forceSec.getAttribute('data-id') : 0)
    dlg.querySelector('.zf-qwrap').hidden = !state.quote
    dlg.querySelector('.zf-tip').hidden = !!state.quote
    dlg.querySelector('.zf-q label').textContent = quote ? W.sel : W.para
    dlg.querySelector('blockquote').textContent = state.quote.length > 400 ? state.quote.slice(0, 400) + '…' : state.quote
  }
  function open (el, quote, section) {
    build()
    var W = T[lang()], f = dlg.querySelector('form')
    f.reset(); dlg.querySelector('.zf-msg').textContent = ''
    f.querySelector('.zf-send').disabled = false
    state = { opened: Date.now(), forceSec: section || null }
    setPara(el, quote)
    var h = (document.querySelector('h1') && txt(document.querySelector('h1'))) || document.title
    dlg.querySelector('.zf-page').textContent = W.page + ': ' + (document.title || h)
    var name = who()
    dlg.querySelector('.zf-who').textContent = name ? W.who + name : ''
    dlg.querySelector('.zf-who').hidden = !name
    dlg.querySelector('.zf-mailwrap').hidden = !!name
    mark(el)
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '')
  }
  function submit (e) {
    e.preventDefault()
    var W = T[lang()], f = dlg.querySelector('form'), b = f.querySelector('.zf-send'), msg = dlg.querySelector('.zf-msg')
    b.disabled = true
    fetch('/api/feedback', {
      method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        entity_type: state.type, entity_id: Number(state.id) || 0, lang: lang(), quote: state.quote,
        page_url: pageUrl(), page_title: (document.title || '').slice(0, 300), anchor: state.anchor,
        category: f.category.value, message: f.message.value, suggestion: f.suggestion.value,
        email: f.email.value, website: f.website.value, elapsed: Date.now() - state.opened
      })
    }).then(function (r) {
      return r.json().catch(function () { return {} }).then(function (j) { if (!r.ok) throw new Error(j.error || r.status) })
    }).then(function () {
      msg.textContent = W.ok; setTimeout(function () { dlg.close(); mark(null) }, 2500)
    }).catch(function (err) {
      msg.textContent = W.err + (err && err.message === 'Failed to fetch' ? W.offline : err.message); b.disabled = false
    })
  }

  label()
  // Taal kan wisselen zonder herladen (studenten- en beheeromgeving).
  new MutationObserver(label).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] })

  document.addEventListener('pointerdown', function (e) {
    if (e.target.closest && e.target.closest('#zbfb-ui')) return
    var el = pick(e.target); if (el) last = el
  }, true)
  btn.addEventListener('click', function () {
    var el = last && document.contains(last) && inView(last) ? last : centerPara()
    open(el, '')
  })
  // Bestaande ✎-knoppen bij hoofdstukken: feedback over het hele hoofdstuk.
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.fb')
    if (!b || b.closest('#zbfb-ui') || b.closest('#app')) return
    var sec = b.closest('.chapter[data-id]'); if (!sec) return
    e.preventDefault(); open(null, '', sec)
  })
  // Tekst selecteren: zwevende knop "Meld iets over deze tekst".
  document.addEventListener('selectionchange', function () {
    var s = window.getSelection(), t = s && s.toString().trim()
    if (!t || s.rangeCount === 0 || (dlg.open)) { selBtn.hidden = true; return }
    var node = s.getRangeAt(0).commonAncestorContainer
    if (node.nodeType !== 1) node = node.parentElement
    if (!node || node.closest('#zbfb-ui') || node.closest('input,textarea,[contenteditable]')) { selBtn.hidden = true; return }
    selPara = pick(s.getRangeAt(0).startContainer); selText = t.slice(0, 2000)
    var r = s.getRangeAt(0).getBoundingClientRect()
    selBtn.style.top = (scrollY + r.bottom + 8) + 'px'
    selBtn.style.left = Math.max(8, Math.min(scrollX + r.left, scrollX + innerWidth - 220)) + 'px'
    selBtn.hidden = false
  })
  selBtn.addEventListener('mousedown', function (e) { e.preventDefault() })
  selBtn.addEventListener('click', function () { selBtn.hidden = true; open(selPara, selText) })

  // ?zbfb=<anker>: alinea oplichten (ook in de app-pagina's, die later renderen).
  var want = new URL(location.href).searchParams.get('zbfb')
  if (want) {
    var tries = 0
    var timer = setInterval(function () {
      var el = resolve(want)
      if (el || ++tries > 25) {
        clearInterval(timer)
        if (el) { el.scrollIntoView({ block: 'center' }); mark(el) }
        try { var u = new URL(location.href); u.searchParams.delete('zbfb'); history.replaceState(history.state, '', u.pathname + u.search + u.hash) } catch (e) {}
      }
    }, 300)
  }
})()
