// Zet een statische boekpagina (zoals talkhis-jam-al-jawami/index.html) om naar
// db/seed/<slug>.json: boekgegevens plus een lijst blokken in leesvolgorde.
// Gebruik: node scripts/build-seed.mjs <slug>
import { readFileSync, writeFileSync, existsSync } from 'node:fs'

const slug = process.argv[2]
if (!slug) throw new Error('Gebruik: node scripts/build-seed.mjs <slug>')

const html = readFileSync(`${slug}/index.html`, 'utf8')
const pick = (re) => (html.match(re) || [])[1]?.trim() ?? ''
const stripTags = (s) => s.replace(/<[^>]+>/g, '')

const book = {
  slug,
  title: pick(/<title>(.*?)<\/title>/),
  subtitle: stripTags(pick(/<div class="brand">[\s\S]*?<p>(.*?)<\/p>/)),
  pdf: pick(/<p class="dl"><a href="([^"]+)"/)
}
if (book.pdf) book.pdf = `/${slug}/${book.pdf}`
// Categorie en auteur staan niet in de HTML; vul ze hier per boek aan.
const META = { 'talkhis-jam-al-jawami': { category: 'usul-al-fiqh', author: 'تاج الدين السبكي' } }
Object.assign(book, META[slug])

const article = pick(/<article class="book">([\s\S]*?)<\/article>/)

// Loop over de elementen op het hoogste niveau van <article>. Alleen <div> kan genest zijn.
const blocks = []
let page = null
let i = 0
while (i < article.length) {
  const start = article.indexOf('<', i)
  if (start < 0) break
  const open = article.slice(start).match(/^<(\w+)([^>]*)>/)
  if (!open) { i = start + 1; continue }
  const [tag, attrs] = [open[1], open[2]]
  let end
  if (tag === 'div') {
    let depth = 0
    const re = /<\/?div\b[^>]*>/g
    re.lastIndex = start
    let m
    while ((m = re.exec(article))) {
      depth += m[0][1] === '/' ? -1 : 1
      if (depth === 0) { end = re.lastIndex; break }
    }
  } else {
    end = article.indexOf(`</${tag}>`, start) + tag.length + 3
  }
  const outer = article.slice(start, end)
  const inner = outer.slice(open[0].length, outer.length - tag.length - 3).trim()
  const cls = (attrs.match(/class="([^"]+)"/) || [])[1] || ''
  const id = (attrs.match(/id="([^"]+)"/) || [])[1] || null
  i = end

  let kind
  if (tag === 'div' && cls === 'pg') {
    page = Number(stripTags(inner))
    blocks.push({ kind: 'page', page, anchor: null, html: '' })
    continue
  } else if (tag === 'h2') kind = 'heading'
  else if (tag === 'p') kind = cls === 'cont' ? 'cont' : 'p'
  else if (tag === 'div' && (cls === 'sharh' || cls === 'side')) kind = cls
  else throw new Error(`Onbekend element: ${open[0]}`)
  blocks.push({ kind, page, anchor: kind === 'heading' ? id : null, html: inner })
}

const out = `db/seed/${slug}.json`
writeFileSync(out, JSON.stringify({ book, blocks }, null, 1) + '\n')

const indexFile = 'db/seed/index.json'
const index = existsSync(indexFile) ? JSON.parse(readFileSync(indexFile, 'utf8')) : []
if (!index.includes(slug)) index.push(slug)
writeFileSync(indexFile, JSON.stringify(index) + '\n')

console.log(`${out}: ${blocks.length} blokken, ${blocks.filter((b) => b.kind === 'page').length} pagina's`)
