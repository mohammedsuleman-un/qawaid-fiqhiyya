// Rich-text-editor op basis van contenteditable, met de opmaak van de boeken
// (koranvers, hadith, مثاله, مسألة, uitleg, kantnotitie, paginanummers, voetnoten).
// De server schoont alles opnieuw op; deze editor maakt alleen toegestane opmaak.
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

export function mountEditor (host, { html, dir, t }) {
  const B = (cmd, label, title = label) => `<button type="button" data-cmd="${cmd}" title="${esc(title)}">${label}</button>`
  host.innerHTML = `<div class="toolbar" role="toolbar">
    ${B('p', '¶', t.tb.p)}${B('h2', 'H2', t.tb.h2)}${B('h3', 'H3', t.tb.h3)}<span class="sep"></span>
    ${B('bold', '<b>B</b>', t.tb.bold)}${B('italic', '<i>I</i>', t.tb.italic)}${B('ul', '•', t.tb.ul)}${B('ol', '1.', t.tb.ol)}${B('quote', '❝', t.tb.quote)}<span class="sep"></span>
    ${B('ayah', `<span class="ayah">${esc(t.tb.ayah)}</span>`, t.tb.ayah)}${B('hadith', `<span class="hadith">${esc(t.tb.hadith)}</span>`, t.tb.hadith)}
    ${B('le', `<span class="le">مثاله</span>`, t.tb.le)}${B('lm', `<span class="lm">مسألة</span>`, t.tb.lm)}${B('mark', '<mark class="y">▍</mark>', t.tb.mark)}<span class="sep"></span>
    ${B('sharh', esc(t.tb.sharh))}${B('side', esc(t.tb.side))}${B('source', esc(t.tb.source))}${B('fn', '¹', t.tb.fn)}${B('link', '🔗', t.tb.link)}${B('table', '▦', t.tb.table)}${B('page', '#', t.tb.page)}${B('hr', '—', t.tb.hr)}${B('clear', '⌫', t.tb.clear)}
  </div><div class="book editable" contenteditable="true" dir="${dir}" spellcheck="true"></div>`
  const ed = host.querySelector('.editable')
  ed.innerHTML = html || '<p><br></p>'
  try { document.execCommand('defaultParagraphSeparator', false, 'p') } catch {}
  const listeners = []
  const changed = () => listeners.forEach((fn) => fn())
  ed.addEventListener('input', changed)

  const range = () => {
    const s = window.getSelection()
    if (!s.rangeCount) return null
    const r = s.getRangeAt(0)
    return ed.contains(r.commonAncestorContainer) ? r : null
  }
  // Het blok op het hoogste niveau waarin een knoop staat.
  const topBlock = (node) => { while (node && node.parentNode !== ed) node = node.parentNode; return node }
  // Met DOM-bewerkingen in plaats van insertHTML: Chrome zet klassen anders om in inline-stijlen.
  const wrapInline = (tag, cls) => {
    const r = range(); if (!r || r.collapsed) return
    const el = document.createElement(tag)
    if (cls) el.className = cls
    el.appendChild(r.extractContents())
    r.insertNode(el)
    const s = window.getSelection(); s.removeAllRanges()
    const after = document.createRange(); after.selectNodeContents(el); s.addRange(after)
    changed()
  }
  const insertNodeAtCaret = (el) => {
    const r = range(); if (!r) { ed.appendChild(el); return }
    r.deleteContents(); r.insertNode(el); r.setStartAfter(el); r.collapse(true)
    const s = window.getSelection(); s.removeAllRanges(); s.addRange(r)
  }
  const wrapBlocks = (cls) => {
    const r = range(); if (!r) return
    const first = topBlock(r.startContainer)
    const last = topBlock(r.endContainer)
    if (!first) return
    // Staat de cursor al in zo'n blok: dan weer uitpakken.
    if (first === last && first.nodeName === 'DIV' && first.classList.contains(cls)) {
      while (first.firstChild) ed.insertBefore(first.firstChild, first)
      first.remove(); changed(); return
    }
    const wrap = document.createElement('div')
    wrap.className = cls
    ed.insertBefore(wrap, first)
    let n = first
    while (n) { const next = n.nextSibling; wrap.appendChild(n); if (n === last) break; n = next }
    changed()
  }
  const insertBeforeBlock = (htmlString) => {
    const r = range()
    const block = r && topBlock(r.startContainer)
    const tpl = document.createElement('template'); tpl.innerHTML = htmlString
    if (block) ed.insertBefore(tpl.content, block); else ed.appendChild(tpl.content)
    changed()
  }

  const actions = {
    p: () => document.execCommand('formatBlock', false, 'p'),
    h2: () => document.execCommand('formatBlock', false, 'h2'),
    h3: () => document.execCommand('formatBlock', false, 'h3'),
    quote: () => document.execCommand('formatBlock', false, 'blockquote'),
    bold: () => document.execCommand('bold'),
    italic: () => document.execCommand('italic'),
    ul: () => document.execCommand('insertUnorderedList'),
    ol: () => document.execCommand('insertOrderedList'),
    ayah: () => wrapInline('span', 'ayah'),
    hadith: () => wrapInline('span', 'hadith'),
    le: () => wrapInline('span', 'le'),
    lm: () => wrapInline('span', 'lm'),
    mark: () => wrapInline('mark', 'y'),
    source: () => wrapInline('cite'),
    sharh: () => wrapBlocks('sharh'),
    side: () => wrapBlocks('side'),
    hr: () => document.execCommand('insertHorizontalRule'),
    clear: () => document.execCommand('removeFormat'),
    link: () => { const url = prompt(t.linkUrl, 'https://'); if (url && /^(https?:\/\/|\/|#|mailto:)/.test(url)) document.execCommand('createLink', false, url) },
    table: () => document.execCommand('insertHTML', false, '<table><tbody><tr><td>…</td><td>…</td></tr><tr><td>…</td><td>…</td></tr></tbody></table><p><br></p>'),
    page: () => { const n = parseInt(prompt(t.pageNumber), 10); if (n > 0) insertBeforeBlock(`<div class="pg" id="p${n}"><span>${n}</span></div>`) },
    fn: () => {
      const text = prompt(t.footnoteText); if (!text) return
      const n = ed.querySelectorAll('sup.fn').length + 1
      const sup = document.createElement('sup'); sup.className = 'fn'
      sup.innerHTML = `<a href="#fn-${n}" id="ref-${n}">${n}</a>`
      insertNodeAtCaret(sup)
      let list = ed.querySelector('ol.footnotes')
      if (!list) { list = document.createElement('ol'); list.className = 'footnotes'; ed.appendChild(list) }
      const li = document.createElement('li'); li.id = 'fn-' + n; li.textContent = text; list.appendChild(li)
      changed()
    }
  }
  host.querySelector('.toolbar').addEventListener('mousedown', (e) => { if (e.target.closest('button')) e.preventDefault() })
  host.querySelector('.toolbar').addEventListener('click', (e) => {
    const b = e.target.closest('[data-cmd]'); if (!b) return
    ed.focus(); actions[b.dataset.cmd](); changed()
  })
  // Plakken altijd als platte tekst: geen verborgen opmaak uit Word of websites.
  ed.addEventListener('paste', (e) => {
    e.preventDefault()
    const text = (e.clipboardData || window.clipboardData).getData('text/plain')
    const paras = text.replace(/\r/g, '').split(/\n{2,}/).map((p) => esc(p).replace(/\n/g, '<br>'))
    document.execCommand('insertHTML', false, paras.length > 1 ? paras.map((p) => `<p>${p}</p>`).join('') : paras[0])
  })
  return {
    html: () => ed.innerHTML.replace(/<p><br><\/p>$/, '').trim(),
    onChange: (fn) => listeners.push(fn)
  }
}
