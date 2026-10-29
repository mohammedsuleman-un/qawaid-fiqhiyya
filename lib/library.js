// Leesgegevens voor de openbare site: boeken, hoofdstukken en artikelen met hun
// gepubliceerde versie per taal. Medewerkers (content.edit) zien ook boeken in concept
// en boeken die niet openbaar zijn.
import { currentUser } from './auth.js'
import { normalizeArabic } from './arabic.js'

export const LANGS = ['ar', 'nl']
export const pickLang = (url) => (new URL(url).searchParams.get('lang') === 'nl' ? 'nl' : 'ar')

export async function viewer (conn, request) {
  try { return await currentUser(conn, request) } catch { return null }
}
export const isStaff = (user) => !!user && user.permissions.has('content.edit')

const bookFilter = (staff) => staff ? "b.status <> 'archived'" : "b.status = 'published' AND b.access_level = 'public'"

const BOOK_FIELDS = `b.id, b.slug, b.status, b.zad_level, b.zad_subject, b.author, b.translator, b.publisher, b.pdf, b.cover, b.access_level,
  c.slug AS category, c.name_nl AS category_nl, c.name_ar AS category_ar,
  ar.title AS title_ar, ar.subtitle AS subtitle_ar, ar.description AS description_ar,
  nl.title AS title_nl, nl.subtitle AS subtitle_nl, nl.description AS description_nl`
const BOOK_JOINS = `FROM books b LEFT JOIN categories c ON c.id = b.category_id
  LEFT JOIN book_translations ar ON ar.book_id = b.id AND ar.lang = 'ar'
  LEFT JOIN book_translations nl ON nl.book_id = b.id AND nl.lang = 'nl'`

export async function categories (conn) {
  return conn.execute(`SELECT c.id, c.slug, c.name_nl, c.name_ar,
      (SELECT COUNT(*) FROM books b WHERE b.category_id = c.id AND ${bookFilter(false)}) AS books
    FROM categories c ORDER BY c.position, c.id`)
}

export async function listBooks (conn, { category = null, staff = false } = {}) {
  const rows = await conn.execute(`SELECT ${BOOK_FIELDS},
      (SELECT COUNT(*) FROM chapters ch JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = ch.id
        AND t.lang = 'nl' AND t.published_version_id IS NOT NULL WHERE ch.book_id = b.id AND ch.archived_at IS NULL) AS chapters_nl
    ${BOOK_JOINS} WHERE ${bookFilter(staff)} ${category ? 'AND c.slug = ?' : ''}
    ORDER BY c.position, ar.title`, category ? [category] : [])
  return rows.map((r) => ({ ...r, chapters_nl: Number(r.chapters_nl) }))
}

// Eén boek met alle hoofdstukken in de gevraagde taal. Een hoofdstuk zonder
// gepubliceerde vertaling krijgt missing: true en de Arabische titel.
export async function loadBook (conn, slug, lang, { staff = false, bodies = true } = {}) {
  const [book] = await conn.execute(`SELECT ${BOOK_FIELDS} ${BOOK_JOINS} WHERE b.slug = ? AND ${bookFilter(staff)}`, [slug])
  if (!book) return null
  const rows = await conn.execute(`SELECT ch.id, ch.slug, ch.position, ch.unit, ch.unit_title_ar, ch.unit_title_nl, ch.page_start, t.lang, t.title${bodies ? ', v.body' : ''}
    FROM chapters ch
    LEFT JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = ch.id AND t.published_version_id IS NOT NULL
    LEFT JOIN content_versions v ON v.id = t.published_version_id
    WHERE ch.book_id = ? AND ch.archived_at IS NULL ORDER BY ch.position, ch.id`, [book.id])
  const byId = new Map()
  for (const r of rows) {
    if (!byId.has(r.id)) {
      byId.set(r.id, { id: Number(r.id), slug: r.slug, position: Number(r.position), langs: {},
        unit: r.unit == null ? null : Number(r.unit), unitTitle: r['unit_title_' + lang] || r.unit_title_ar || '', pageStart: r.page_start == null ? null : Number(r.page_start) })
    }
    if (r.lang) byId.get(r.id).langs[r.lang] = { title: r.title, body: r.body }
  }
  const chapters = [...byId.values()].filter((c) => c.langs.ar || c.langs.nl).map((c) => {
    const own = c.langs[lang]
    const other = c.langs[lang === 'ar' ? 'nl' : 'ar']
    return { id: c.id, slug: c.slug, title: (own || other).title, body: own?.body ?? '', missing: !own, unit: c.unit, unitTitle: c.unitTitle, pageStart: c.pageStart }
  })
  return { book, chapters }
}

export async function loadArticle (conn, slug, lang, { staff = false } = {}) {
  const [a] = await conn.execute(`SELECT a.id, a.slug, a.kind, a.access_level, c.name_nl AS category_nl, c.name_ar AS category_ar
    FROM articles a LEFT JOIN categories c ON c.id = a.category_id
    WHERE a.slug = ? AND a.archived_at IS NULL ${staff ? '' : "AND a.access_level = 'public'"}`, [slug])
  if (!a) return null
  const rows = await conn.execute(`SELECT t.lang, t.title, v.body FROM content_translations t
    JOIN content_versions v ON v.id = t.published_version_id WHERE t.entity_type = 'article' AND t.entity_id = ?`, [a.id])
  const own = rows.find((r) => r.lang === lang)
  const other = rows.find((r) => r.lang !== lang)
  if (!own && !other) return null
  return { ...a, id: Number(a.id), title: (own || other).title, body: own?.body ?? '', missing: !own }
}

// Zoekt in gepubliceerde teksten, met en zonder tashkeel. Geeft per treffer de
// pagina (uit de paginamarkeringen ⟦n⟧) en een stukje tekst rond de treffer.
export async function search (conn, query, { lang = null, category = null, book = null, staff = false } = {}) {
  const q = normalizeArabic(query || '')
  if (q.length < 2) return []
  const like = '%' + q.replace(/[\\%_]/g, (c) => '\\' + c) + '%'
  const where = ['s.plain LIKE ?', `(s.entity_type = 'article' OR (${bookFilter(staff)} AND ch.archived_at IS NULL))`]
  const args = [like]
  if (lang) { where.push('s.lang = ?'); args.push(lang) }
  if (category) { where.push('(c.slug = ? OR ac.slug = ?)'); args.push(category, category) }
  if (book) { where.push('b.slug = ?'); args.push(book) }
  if (!staff) where.push("(s.entity_type = 'chapter' OR a.access_level = 'public')")
  // Per boek en taal hoogstens 20 treffers, eerst om de beurt per boek gekozen en daarna weer op boekvolgorde,
  // zodat de vele ZAD-boeken de andere boeken niet uit de 200 treffers drukken.
  const rows = await conn.execute(`SELECT * FROM (SELECT s.entity_type, s.entity_id, s.lang, s.plain, t.title,
      b.id AS book_id, ch.position AS ch_position,
      ROW_NUMBER() OVER (PARTITION BY b.id, s.lang ORDER BY ch.position) AS rn,
      b.slug AS book_slug, ch.slug AS chapter_slug, a.slug AS article_slug,
      (SELECT title FROM book_translations bt WHERE bt.book_id = b.id AND bt.lang = s.lang) AS book_title,
      (SELECT title FROM book_translations bt WHERE bt.book_id = b.id AND bt.lang = 'ar') AS book_title_ar
    FROM search_index s JOIN content_translations t ON t.id = s.translation_id
    LEFT JOIN chapters ch ON s.entity_type = 'chapter' AND ch.id = s.entity_id
    LEFT JOIN books b ON b.id = ch.book_id LEFT JOIN categories c ON c.id = b.category_id
    LEFT JOIN articles a ON s.entity_type = 'article' AND a.id = s.entity_id AND a.archived_at IS NULL
    LEFT JOIN categories ac ON ac.id = a.category_id
    WHERE ${where.join(' AND ')}) x WHERE x.book_id IS NULL OR x.rn <= 20 ORDER BY x.rn, x.book_id LIMIT 200`, args)
  rows.sort((a, b) => (a.book_id ?? -1) - (b.book_id ?? -1) || (a.ch_position ?? 0) - (b.ch_position ?? 0))
  return rows.filter((r) => r.entity_type === 'chapter' ? r.book_slug : r.article_slug).map((r) => {
    const at = r.plain.indexOf(q)
    const pages = [...r.plain.slice(0, at).matchAll(/⟦(\d+)⟧/g)]
    const from = Math.max(0, at - 70)
    const to = at + q.length + 70
    const clean = (s) => s.replace(/\s*⟦\d+⟧\s*/g, ' ')
    const url = r.entity_type === 'chapter'
      ? `/boek/${r.book_slug}/${r.chapter_slug}?lang=${r.lang}`
      : `/artikel/${r.article_slug}?lang=${r.lang}`
    return {
      type: r.entity_type,
      lang: r.lang,
      title: r.title,
      book: r.book_title || r.book_title_ar,
      page: pages.length ? Number(pages[pages.length - 1][1]) : null,
      url,
      before: (from > 0 ? '…' : '') + clean(r.plain.slice(from, at)),
      match: r.plain.slice(at, at + q.length),
      after: clean(r.plain.slice(at + q.length, to)) + (to < r.plain.length ? '…' : '')
    }
  })
}
