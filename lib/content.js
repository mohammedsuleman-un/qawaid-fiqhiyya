// Gedeelde functies voor het inhoudsmodel: vertalingen, versies en de zoekindex.
import { normalizeArabic } from './arabic.js'
import { stripTags } from './db.js'

export const LANGS = ['ar', 'nl']
export const ENTITY_TYPES = ['chapter', 'article']

export async function ensureTranslation (conn, entityType, entityId, lang, title = '') {
  const [t] = await conn.execute(
    'SELECT * FROM content_translations WHERE entity_type = ? AND entity_id = ? AND lang = ?', [entityType, entityId, lang])
  if (t) return t
  const id = await insert(conn, 'INSERT INTO content_translations (entity_type, entity_id, lang, title) VALUES (?, ?, ?, ?)',
    [entityType, entityId, lang, title])
  const [created] = await conn.execute('SELECT * FROM content_translations WHERE id = ?', [id])
  return created
}

// Voert een INSERT uit en geeft het nieuwe id terug.
export async function insert (conn, sql, args) {
  const res = await conn.execute(sql, args, { fullResult: true })
  return Number(res.lastInsertId)
}

// Zet een versie live: oude gepubliceerde versie wordt 'superseded', zoekindex wordt bijgewerkt.
export async function publishVersion (conn, version, translation, userId) {
  await conn.execute("UPDATE content_versions SET status = 'superseded' WHERE translation_id = ? AND status = 'published'",
    [translation.id])
  await conn.execute("UPDATE content_versions SET status = 'published', published_by = ?, published_at = NOW() WHERE id = ?",
    [userId, version.id])
  await conn.execute("UPDATE content_translations SET published_version_id = ?, title = ?, status = 'published' WHERE id = ?",
    [version.id, version.title, translation.id])
  await indexTranslation(conn, translation, version)
}

// Paginanummers blijven als ⟦n⟧ in de zoektekst staan, zodat een treffer zijn pagina kent.
export const searchText = (title, body) => normalizeArabic(stripTags(`${title} ${body}`
  .replace(/<div class="pg"[^>]*><span>(\d+)<\/span><\/div>/g, ' ⟦$1⟧ ')))

export async function indexTranslation (conn, translation, version) {
  let bookId = null
  if (translation.entity_type === 'chapter') {
    const [c] = await conn.execute('SELECT book_id FROM chapters WHERE id = ?', [translation.entity_id])
    bookId = c?.book_id ?? null
  }
  const plain = searchText(version.title, version.body)
  await conn.execute('DELETE FROM search_index WHERE translation_id = ?', [translation.id])
  await conn.execute(
    'INSERT INTO search_index (translation_id, entity_type, entity_id, lang, book_id, plain) VALUES (?, ?, ?, ?, ?, ?)',
    [translation.id, translation.entity_type, translation.entity_id, translation.lang, bookId, plain])
}

export const ACCESS_LEVELS = ['public', 'logged_in', 'level', 'group', 'users', 'staff']
export const BOOK_STATUSES = ['draft', 'published', 'archived']

// Een leesbare omschrijving van een hoofdstuk of artikel, voor lijsten en meldingen.
export async function describe (conn, entityType, entityId) {
  if (entityType === 'chapter') {
    const [r] = await conn.execute(`SELECT c.id, c.slug, c.position, b.id AS book_id, b.slug AS book_slug,
        (SELECT title FROM book_translations t WHERE t.book_id = b.id AND t.lang = 'ar') AS book_title,
        (SELECT title FROM content_translations t WHERE t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar') AS title_ar,
        (SELECT title FROM content_translations t WHERE t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'nl') AS title_nl
      FROM chapters c JOIN books b ON b.id = c.book_id WHERE c.id = ?`, [entityId])
    return r ? { ...r, url: `/boek/${r.book_slug}/${r.slug}` } : null
  }
  const [r] = await conn.execute(`SELECT a.id, a.slug, a.kind,
      (SELECT title FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.lang = 'ar') AS title_ar,
      (SELECT title FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.lang = 'nl') AS title_nl
    FROM articles a WHERE a.id = ?`, [entityId])
  return r ? { ...r, url: `/artikel/${r.slug}` } : null
}

// Zoals describe, maar voor een hele lijst in twee queries (Cloudflare staat per
// verzoek maar een beperkt aantal databaseverzoeken toe).
export async function describeMany (conn, rows) {
  const ids = (type) => [...new Set(rows.filter((r) => r.entity_type === type).map((r) => Number(r.entity_id)))]
  const chapterIds = ids('chapter')
  const articleIds = ids('article')
  const marks = (list) => list.map(() => '?').join(', ')
  const chapters = chapterIds.length ? await conn.execute(`SELECT c.id, c.slug, b.id AS book_id, b.slug AS book_slug,
      (SELECT title FROM book_translations t WHERE t.book_id = b.id AND t.lang = 'ar') AS book_title,
      (SELECT title FROM content_translations t WHERE t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar') AS title_ar,
      (SELECT title FROM content_translations t WHERE t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'nl') AS title_nl
    FROM chapters c JOIN books b ON b.id = c.book_id WHERE c.id IN (${marks(chapterIds)})`, chapterIds) : []
  const articles = articleIds.length ? await conn.execute(`SELECT a.id, a.slug, a.kind,
      (SELECT title FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.lang = 'ar') AS title_ar,
      (SELECT title FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.lang = 'nl') AS title_nl
    FROM articles a WHERE a.id IN (${marks(articleIds)})`, articleIds) : []
  const info = new Map([
    ...chapters.map((r) => ['chapter:' + r.id, { ...r, url: `/boek/${r.book_slug}/${r.slug}` }]),
    ...articles.map((r) => ['article:' + r.id, { ...r, url: `/artikel/${r.slug}` }])
  ])
  for (const r of rows) r.info = info.get(`${r.entity_type}:${Number(r.entity_id)}`) || null
  return rows
}

// Voegt veel rijen toe met INSERT ... VALUES (...), (...) in stukken van `chunk` rijen.
export async function insertMany (conn, table, columns, rows, chunk = 25) {
  for (let i = 0; i < rows.length; i += chunk) {
    const part = rows.slice(i, i + chunk)
    await conn.execute(`INSERT INTO ${table} (${columns.join(', ')}) VALUES ` +
      part.map(() => '(' + columns.map(() => '?').join(', ') + ')').join(', '), part.flat())
  }
}
