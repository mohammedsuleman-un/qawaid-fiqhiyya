// Woordverschil tussen twee HTML-teksten, voor het vergelijken van versies.
// Opmaak telt niet mee: we vergelijken de tekst, met alinea's als regels.
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

function toText (html) {
  const div = document.createElement('div')
  div.innerHTML = String(html).replace(/<\/(p|h\d|li|div|blockquote|tr)>|<br\s*\/?>/gi, '\n')
    .replace(/<div class="pg"[^>]*><span>(\d+)<\/span><\/div>/g, '\n[$1]\n')
  return div.textContent.replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim()
}

// Langste gemeenschappelijke deelrij; bij erg lange teksten per regel in plaats van per woord.
function lcsDiff (a, b) {
  const n = a.length
  const m = b.length
  const dp = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1))
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
  const out = []
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (a[i] === b[j]) { out.push(['=', a[i]]); i++; j++ } else if (dp[i + 1][j] >= dp[i][j + 1]) out.push(['-', a[i++]])
    else out.push(['+', b[j++]])
  }
  while (i < n) out.push(['-', a[i++]])
  while (j < m) out.push(['+', b[j++]])
  return out
}

function diffTokens (a, b) {
  if (a.length * b.length <= 4e6) return lcsDiff(a, b)
  return null
}

export function diffHtml (oldHtml, newHtml) {
  const oldText = toText(oldHtml)
  const newText = toText(newHtml)
  if (oldText === newText) return '<p class="muted">=</p>'
  const split = (s) => s.split(/(\s+)/).filter((x) => x !== '')
  let parts = diffTokens(split(oldText), split(newText))
  if (!parts) {
    // Te lang voor een woordverschil: vergelijk per regel, en daarbinnen per woord.
    parts = []
    for (const [op, line] of lcsDiff(oldText.split('\n'), newText.split('\n'))) parts.push([op, line], [op, '\n'])
  }
  return '<p>' + parts.map(([op, s]) => {
    if (s.includes('\n') && !s.trim()) return op === '-' ? ' ' : '</p><p>'
    const text = esc(s).replace(/\n/g, '</p><p>')
    return op === '=' ? text : op === '+' ? `<ins>${text}</ins>` : `<del>${text}</del>`
  }).join('') + '</p>'
}
