// Zet een lijst blokken (paginanummer, kopje, alinea, uitleg, kantnotitie) om naar
// hoofdstukken: elk kopje begint een nieuw hoofdstuk. Paginanummers die direct voor
// een kopje staan, horen bij het begin van dat hoofdstuk.
export function blockToHtml (b) {
  switch (b.kind) {
    case 'page': return `<div class="pg" id="p${b.page}"><span>${b.page}</span></div>`
    case 'cont': return `<p class="cont">${b.html}</p>`
    case 'sharh': return `<div class="sharh">\n${b.html}\n</div>`
    case 'side': return `<div class="side">${b.html}</div>`
    case 'heading': return `<h2>${b.html}</h2>`
    default: return `<p>${b.html}</p>`
  }
}

export function blocksToChapters (blocks) {
  const chapters = []
  let current = null
  let pending = [] // paginanummers die nog geen hoofdstuk hebben
  for (const b of blocks) {
    if (b.kind === 'heading') {
      current = { title: b.html, parts: pending }
      pending = []
      chapters.push(current)
    } else if (b.kind === 'page') {
      pending.push(blockToHtml(b))
    } else {
      if (!current) { current = { title: '', parts: [] }; chapters.push(current) }
      current.parts.push(...pending, blockToHtml(b))
      pending = []
    }
  }
  if (pending.length) {
    if (!current) { current = { title: '', parts: [] }; chapters.push(current) }
    current.parts.push(...pending)
  }
  return chapters.map((c) => ({ title: c.title, body: c.parts.join('\n') }))
}
