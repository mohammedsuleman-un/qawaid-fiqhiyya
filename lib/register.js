// Registers over alle gepubliceerde teksten: hadith (uit de opmaak <span class="hadith">)
// en personen (gevonden via hun schrijfwijzen in de zoektekst).
import { stripTags } from './db.js'
import { normalizeArabic } from './arabic.js'
import { sha256 } from './auth.js'
import { insertMany } from './content.js'

const PG = /<div class="pg"[^>]*><span>(\d+)<\/span><\/div>/g
// Het laatste paginanummer in een tekst: daar begint het volgende hoofdstuk.
export const lastPage = (body) => { const all = [...String(body || '').matchAll(PG)]; return all.length ? Number(all[all.length - 1][1]) : null }

// Alle hadith-fragmenten in een tekst, met het paginanummer waar ze staan. Staat een
// hadith vóór het eerste paginanummer, dan is dat de pagina waarop het vorige hoofdstuk eindigde.
export function extractHadith (body, startPage = null) {
  const out = []
  const re = /<div class="pg"[^>]*><span>(\d+)<\/span><\/div>|<span class="hadith">/g
  let page = startPage
  let m
  while ((m = re.exec(body))) {
    if (m[1]) { page = Number(m[1]); continue }
    // Zoek de bijbehorende </span>, ook als er spans binnenin staan.
    let depth = 1
    let i = re.lastIndex
    const tag = /<span\b[^>]*>|<\/span>/g
    tag.lastIndex = i
    let t
    while (depth && (t = tag.exec(body))) depth += t[0] === '</span>' ? -1 : 1
    const end = t ? t.index : body.length
    const text = stripTags(body.slice(i, end)).replace(/\s+/g, ' ').trim()
    if (text) out.push({ text, page, position: out.length })
    re.lastIndex = t ? tag.lastIndex : body.length
  }
  return out
}

// Sleutel voor aantekeningen bij een hadith: dezelfde tekst (zonder tashkeel en
// aanhalingstekens) krijgt overal dezelfde bron en beoordeling.
export const hadithKey = (text) => sha256(normalizeArabic(text).replace(/[«»"“”'().…:،.]/g, '').trim())

export async function indexHadith (conn, translation, body, bookId) {
  await conn.execute('DELETE FROM hadith_index WHERE translation_id = ?', [translation.id])
  if (!body.includes('<span class="hadith">')) return
  let start = null
  const firstPg = body.search(/<div class="pg"/)
  if (translation.entity_type === 'chapter' && (firstPg < 0 || firstPg > body.indexOf('<span class="hadith">'))) {
    // Eerste hadith staat vóór een paginanummer: zoek de pagina in de vorige hoofdstukken.
    const prev = await conn.execute(`SELECT v.body FROM chapters c JOIN chapters p ON p.book_id = c.book_id AND p.position < c.position
      JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = p.id AND t.lang = 'ar'
      JOIN content_versions v ON v.id = t.published_version_id WHERE c.id = ? ORDER BY p.position DESC LIMIT 3`, [translation.entity_id])
    for (const r of prev) if ((start = lastPage(r.body)) !== null) break
  }
  const items = extractHadith(body, start)
  if (!items.length) return
  const rows = []
  for (const h of items) {
    rows.push([translation.id, translation.entity_type, translation.entity_id, translation.lang, bookId, h.position, h.page, h.text, await hadithKey(h.text)])
  }
  await conn.execute('INSERT INTO hadith_index (translation_id, entity_type, entity_id, lang, book_id, position, page, text, hkey) VALUES ' +
    rows.map(() => '(?, ?, ?, ?, ?, ?, ?, ?, ?)').join(', '), rows.flat())
}

// Voor veel hoofdstukken tegelijk (migratie en seed), in een paar queries. De hoofdstukken
// komen per boek en taal in volgorde, zodat het paginanummer doorloopt.
export async function indexHadithMany (conn, items) {
  const rows = []
  let page = null
  let prev = null
  for (const it of items) {
    if (prev !== it.bookId + ':' + it.lang) { page = null; prev = it.bookId + ':' + it.lang }
    const start = page
    page = lastPage(it.body) ?? page
    for (const h of extractHadith(it.body, start)) {
      rows.push([it.translationId, 'chapter', it.entityId, it.lang, it.bookId, h.position, h.page, h.text, await hadithKey(h.text)])
    }
  }
  for (let i = 0; i < rows.length; i += 100) {
    const part = rows.slice(i, i + 100)
    await conn.execute('INSERT INTO hadith_index (translation_id, entity_type, entity_id, lang, book_id, position, page, text, hkey) VALUES ' +
      part.map(() => '(?, ?, ?, ?, ?, ?, ?, ?, ?)').join(', '), part.flat())
  }
}

// Alle hadith, per boek en per hoofdstuk in de volgorde van het boek.
export async function hadithList (conn, { staff = false } = {}) {
  return conn.execute(`SELECT h.id, h.text, h.page, h.lang, h.position, h.hkey, h.entity_type, h.entity_id,
      b.slug AS book_slug, b.id AS book_id, c.slug AS chapter_slug, c.position AS chapter_position, t.title AS chapter_title,
      (SELECT title FROM book_translations bt WHERE bt.book_id = b.id AND bt.lang = 'ar') AS book_title_ar,
      (SELECT title FROM book_translations bt WHERE bt.book_id = b.id AND bt.lang = 'nl') AS book_title_nl,
      n.source, n.grade, n.note
    FROM hadith_index h JOIN content_translations t ON t.id = h.translation_id
    JOIN chapters c ON h.entity_type = 'chapter' AND c.id = h.entity_id AND c.archived_at IS NULL
    JOIN books b ON b.id = c.book_id
    LEFT JOIN hadith_notes n ON n.hkey = h.hkey
    WHERE ${staff ? "b.status <> 'archived'" : "b.status = 'published' AND b.access_level = 'public'"}
    ORDER BY b.id, c.position, h.lang, h.position`)
}

const like = (s) => '%' + normalizeArabic(s).replace(/[\\%_]/g, (c) => '\\' + c) + '%'
export const aliasList = (p) => String(p.aliases || '').split('\n').map((a) => a.trim()).filter((a) => a.length >= 2)

// Vindplaatsen van een persoon: hoofdstukken waarin een van zijn schrijfwijzen voorkomt.
export async function personMentions (conn, person) {
  const aliases = aliasList(person)
  if (!aliases.length) return []
  const rows = await conn.execute(`SELECT s.plain, s.lang, t.title, c.slug AS chapter_slug, b.slug AS book_slug,
      (SELECT title FROM book_translations bt WHERE bt.book_id = b.id AND bt.lang = 'ar') AS book_title
    FROM search_index s JOIN content_translations t ON t.id = s.translation_id
    JOIN chapters c ON s.entity_type = 'chapter' AND c.id = s.entity_id AND c.archived_at IS NULL
    JOIN books b ON b.id = c.book_id
    WHERE b.status = 'published' AND b.access_level = 'public' AND (${aliases.map(() => 's.plain LIKE ?').join(' OR ')})
    ORDER BY b.id, c.position LIMIT 100`, aliases.map(like))
  const norm = aliases.map((a) => normalizeArabic(a))
  return rows.map((r) => {
    const pages = new Set()
    for (const a of norm) {
      let at = r.plain.indexOf(a)
      while (at >= 0) {
        const before = [...r.plain.slice(0, at).matchAll(/⟦(\d+)⟧/g)]
        if (before.length) pages.add(Number(before[before.length - 1][1]))
        at = r.plain.indexOf(a, at + a.length)
      }
    }
    return { title: r.title, book: r.book_title, lang: r.lang, url: `/boek/${r.book_slug}/${r.chapter_slug}?lang=${r.lang}`, pages: [...pages].sort((x, y) => x - y) }
  })
}

export const PERSON_KINDS = ['sahabi', 'alim']

export async function listPersons (conn, slug = null) {
  return conn.execute(`SELECT p.id, p.slug, p.name_ar, p.name_nl, p.kind, p.death_hijri, p.aliases, p.article_id, p.position,
      (SELECT v.body FROM content_translations t JOIN content_versions v ON v.id = t.published_version_id
        WHERE t.entity_type = 'article' AND t.entity_id = p.article_id AND t.lang = 'ar') AS bio_ar,
      (SELECT v.body FROM content_translations t JOIN content_versions v ON v.id = t.published_version_id
        WHERE t.entity_type = 'article' AND t.entity_id = p.article_id AND t.lang = 'nl') AS bio_nl
    FROM persons p ${slug ? 'WHERE p.slug = ?' : ''} ORDER BY p.position, p.id`, slug ? [slug] : [])
}

// Voegt personen toe (bijv. uit een ZAD-import) met hun biografie als concept-artikel.
// Bestaat iemand al (zelfde adres of Arabische naam), dan komen alleen de nieuwe
// schrijfwijzen erbij. list: [{slug, name_ar, name_nl, kind, death_hijri, aliases[], bio_ar, bio_nl}]
export async function addPersons (conn, list, reason, sanitize) {
  const clean = list.filter((p) => p && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(String(p.slug || '')) && p.name_ar).slice(0, 200)
  if (!clean.length) return { added: 0, merged: 0 }
  const have = await conn.execute('SELECT id, slug, name_ar, aliases FROM persons')
  const find = (p) => have.find((h) => h.slug === p.slug || h.name_ar === String(p.name_ar).trim())
  const aliasesOf = (p) => (Array.isArray(p.aliases) ? p.aliases : String(p.aliases || '').split('\n')).map((a) => String(a).trim()).filter(Boolean)
  let merged = 0
  for (const p of clean) {
    const h = find(p)
    if (!h) continue
    const old = aliasList(h)
    const extra = aliasesOf(p).filter((a) => !old.includes(a))
    if (extra.length && merged < 15) { await conn.execute('UPDATE persons SET aliases = ? WHERE id = ?', [[...old, ...extra].join('\n'), h.id]); merged++ }
  }
  const seen = new Set()
  const fresh = clean.filter((p) => !find(p) && !seen.has(p.slug) && seen.add(p.slug))
  if (!fresh.length) return { added: 0, merged }
  const [{ n }] = await conn.execute('SELECT COALESCE(MAX(position), -1) + 1 AS n FROM persons')
  const kind = (k) => PERSON_KINDS.includes(k) ? k : 'alim'
  const death = (d) => { const x = parseInt(d, 10); return Number.isInteger(x) && x >= 0 && x <= 1500 ? x : null }
  await insertMany(conn, 'persons', ['slug', 'name_ar', 'name_nl', 'kind', 'death_hijri', 'aliases', 'position'],
    fresh.map((p, i) => [p.slug, String(p.name_ar).trim().slice(0, 255), String(p.name_nl || '').trim().slice(0, 255), kind(p.kind), death(p.death_hijri ?? p.death), aliasesOf(p).join('\n').slice(0, 2000), Number(n) + i]), 100)
  await insertMany(conn, 'articles', ['slug', 'kind', 'access_level'], fresh.map((p) => ['persoon-' + p.slug, 'person', 'public']), 100)
  await conn.execute("UPDATE persons p JOIN articles a ON a.slug = CONCAT('persoon-', p.slug) SET p.article_id = a.id WHERE p.article_id IS NULL")
  const marks = fresh.map(() => '?').join(', ')
  const ids = new Map((await conn.execute(`SELECT slug, article_id FROM persons WHERE slug IN (${marks})`, fresh.map((p) => p.slug))).map((r) => [r.slug, Number(r.article_id)]))
  await insertMany(conn, 'content_translations', ['entity_type', 'entity_id', 'lang', 'title', 'status'],
    fresh.flatMap((p) => [['article', ids.get(p.slug), 'ar', p.name_ar, 'draft'], ['article', ids.get(p.slug), 'nl', p.name_nl || p.name_ar, 'draft']]), 100)
  const articleIds = [...ids.values()]
  const tids = new Map((await conn.execute(`SELECT id, entity_id, lang FROM content_translations WHERE entity_type = 'article' AND entity_id IN (${articleIds.map(() => '?').join(', ')})`, articleIds))
    .map((r) => [`${r.entity_id}:${r.lang}`, Number(r.id)]))
  const versions = fresh.flatMap((p) => ['ar', 'nl'].filter((l) => p['bio_' + l]).map((l) => [tids.get(`${ids.get(p.slug)}:${l}`),
    l === 'ar' ? p.name_ar : (p.name_nl || p.name_ar), sanitize(String(p['bio_' + l])), reason.slice(0, 500), 'draft']))
  await insertMany(conn, 'content_versions', ['translation_id', 'title', 'body', 'reason', 'status'], versions, 50)
  return { added: fresh.length, merged }
}
