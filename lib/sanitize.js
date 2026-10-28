// Schoont HTML uit de editor op met een allowlist: alleen bekende tags, klassen en
// attributen blijven over. Alles daarbuiten (scripts, event-attributen, stijlen) verdwijnt.
const TAGS = new Set(['p', 'br', 'h2', 'h3', 'h4', 'strong', 'b', 'em', 'i', 'u', 'ul', 'ol', 'li', 'blockquote',
  'table', 'thead', 'tbody', 'tr', 'th', 'td', 'a', 'span', 'mark', 'div', 'sup', 'cite', 'hr'])
const VOID = new Set(['br', 'hr'])
const CLASSES = new Set(['ayah', 'hadith', 'le', 'lm', 'lbl', 'g', 'b', 'y', 'cont', 'pg', 'sharh', 'side', 'fn', 'footnotes', 'source'])
const DROP_WITH_CONTENT = /<(script|style|iframe|object|embed|template|svg|math)\b[\s\S]*?<\/\1\s*>/gi

const escapeText = (s) => s.replace(/&(?!(#\d+|#x[0-9a-f]+|[a-z]+);)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function attrs (tag, raw) {
  const out = []
  const re = /([a-z-]+)\s*(?:=\s*("([^"]*)"|'([^']*)'|([^\s>]+)))?/gi
  let m
  while ((m = re.exec(raw))) {
    const name = m[1].toLowerCase()
    const value = (m[3] ?? m[4] ?? m[5] ?? '').trim()
    if (name === 'class') {
      const kept = value.split(/\s+/).filter((c) => CLASSES.has(c))
      if (kept.length) out.push(`class="${kept.join(' ')}"`)
    } else if (name === 'id' && /^(p\d+|fn-?\d+|ref-?\d+)$/.test(value)) {
      out.push(`id="${value}"`)
    } else if (name === 'dir' && /^(rtl|ltr)$/.test(value)) {
      out.push(`dir="${value}"`)
    } else if (name === 'href' && tag === 'a' && /^(https?:\/\/|mailto:|#|\/)/i.test(value)) {
      out.push(`href="${escapeAttr(value)}"`)
    } else if ((name === 'colspan' || name === 'rowspan') && /^\d{1,2}$/.test(value)) {
      out.push(`${name}="${value}"`)
    }
  }
  if (tag === 'a' && out.some((a) => a.startsWith('href="http'))) out.push('rel="noopener"')
  return out.length ? ' ' + out.join(' ') : ''
}

export function sanitizeHtml (html) {
  const src = String(html ?? '').replace(/<!--[\s\S]*?-->/g, '').replace(DROP_WITH_CONTENT, '')
  let out = ''
  let last = 0
  const re = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g
  let m
  while ((m = re.exec(src))) {
    out += escapeText(src.slice(last, m.index))
    last = re.lastIndex
    const tag = m[1].toLowerCase()
    if (!TAGS.has(tag)) continue
    if (m[0][1] === '/') { if (!VOID.has(tag)) out += `</${tag}>`; continue }
    out += `<${tag}${attrs(tag, m[2])}>`
  }
  return (out + escapeText(src.slice(last))).trim()
}
