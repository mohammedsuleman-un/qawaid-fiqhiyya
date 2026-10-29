// ZAD-studiemateriaal (سلسلة زاد العلمية): 4 niveaus × 7 vakken. Elk boek is een gewoon
// boek in de categorie zad met zad_level en zad_subject; elke les is een hoofdstuk met
// eenheid (وحدة) en beginpagina. Begrippen en toetsvragen horen bij een les.
// Een import komt altijd binnen als concept: publiceren gaat via de gewone workflow.
import { insert, insertMany } from './content.js'
import { sanitizeHtml } from './sanitize.js'
import { stripTags } from './db.js'
import { fail } from './http.js'

export const LEVELS = [1, 2, 3, 4]
export const SUBJECTS = [
  ['aqeedah', 'العقيدة', 'Geloofsleer'],
  ['tafsir', 'التفسير', 'Koranexegese'],
  ['hadith', 'الحديث', 'Hadith'],
  ['seerah', 'السيرة النبوية', 'Profetische biografie'],
  ['fiqh', 'الفقه', 'Islamitische jurisprudentie'],
  ['tarbiyah', 'التربية الإسلامية', 'Islamitische opvoeding'],
  ['arabic', 'اللغة العربية', 'Arabische taal']
]
export const LEVEL_NAMES = {
  ar: ['المستوى الأول', 'المستوى الثاني', 'المستوى الثالث', 'المستوى الرابع'],
  nl: ['Niveau 1', 'Niveau 2', 'Niveau 3', 'Niveau 4']
}
export const QUESTION_TYPES = ['mc', 'tf', 'open', 'match']
export const zadSlug = (level, subject) => `zad-n${level}-${subject}`
export const IMPORT_REASON = 'ZAD-import – concept, wacht op controle'

const text = (v, max) => String(v ?? '').trim().slice(0, max)
const int = (v) => { const n = parseInt(v, 10); return Number.isFinite(n) ? n : null }

// Controleert een importbestand (zie /mnt/project-files/beheer/zad-importformaat.md).
export function parseZad (data) {
  const b = data?.book
  if (!b || typeof b !== 'object' || !Array.isArray(data.lessons)) fail(400, 'Ongeldig bestand: book en lessons zijn verplicht')
  const level = int(b.level)
  const subject = String(b.subject || '')
  if (!LEVELS.includes(level)) fail(400, 'Onbekend niveau (1 t/m 4)')
  if (!SUBJECTS.some(([k]) => k === subject)) fail(400, 'Onbekend vak: ' + subject)
  if (data.lessons.length > 60) fail(400, 'Te veel lessen in één bestand')
  const lessons = data.lessons.map((l, i) => ({
    slug: text(l.slug, 20) || String(i + 1),
    position: i,
    unit: int(l.unit),
    unit_title_ar: text(l.unit_title_ar, 255),
    unit_title_nl: text(l.unit_title_nl, 255),
    page_start: int(l.page_start),
    title_ar: text(stripTags(l.title_ar || ''), 500),
    title_nl: text(stripTags(l.title_nl || ''), 500),
    body_ar: l.body_ar ? sanitizeHtml(String(l.body_ar)) : '',
    body_nl: l.body_nl ? sanitizeHtml(String(l.body_nl)) : '',
    note: text(l.opmerking, 2000),
    terms: (Array.isArray(l.terms) ? l.terms : []).filter((t) => t && t.ar).slice(0, 100),
    questions: (Array.isArray(l.questions) ? l.questions : []).filter((q) => q && QUESTION_TYPES.includes(q.type)).slice(0, 100)
  })).filter((l) => l.title_ar || l.title_nl || l.body_ar || l.body_nl) // lege lessen nog niet aanmaken
  if (lessons.some((l) => !/^[a-z0-9-]+$/.test(l.slug))) fail(400, 'Ongeldig lesnummer')
  if (new Set(lessons.map((l) => l.slug)).size !== lessons.length) fail(400, 'Dubbel lesnummer')
  return { level, subject, book: b, lessons }
}

// Maakt het boek aan als het nog niet bestaat (concept, categorie zad).
export async function ensureZadBook (conn, z, userId = null) {
  const slug = zadSlug(z.level, z.subject)
  const [have] = await conn.execute('SELECT id FROM books WHERE slug = ?', [slug])
  if (have) return Number(have.id)
  const [cat] = await conn.execute("SELECT id FROM categories WHERE slug = 'zad'")
  const title = text(z.book.title_ar, 255) || slug
  const id = await insert(conn, `INSERT INTO books (slug, title, subtitle, pdf, status, category_id, author, publisher, zad_level, zad_subject)
    VALUES (?, ?, '', '', 'draft', ?, ?, ?, ?, ?)`, [slug, title, cat?.id ?? null, text(z.book.author, 255) || 'إعداد مجموعة زاد', 'مجموعة زاد', z.level, z.subject])
  await conn.execute('INSERT INTO book_translations (book_id, lang, title, subtitle) VALUES (?, \'ar\', ?, ?), (?, \'nl\', ?, ?)',
    [id, title, text(z.book.subtitle_ar, 500), id, text(z.book.title_nl, 255), text(z.book.subtitle_nl, 500)])
  return id
}

// Importeert de lessen van één ZAD-boek. Bestaande lessen (zelfde nummer) krijgen
// een nieuwe conceptversie; begrippen en vragen van die lessen worden vervangen.
// Alles in een vast, klein aantal queries (Cloudflare: max 50 per verzoek).
export async function importZad (conn, data, userId = null) {
  const z = parseZad(data)
  const bookId = await ensureZadBook(conn, z, userId)
  if (!z.lessons.length) return { bookId, lessons: 0, versions: 0 }
  const existing = new Map((await conn.execute('SELECT id, slug FROM chapters WHERE book_id = ?', [bookId])).map((r) => [r.slug, Number(r.id)]))
  // Hoofdstukken: nieuwe toevoegen, bestaande bijwerken (eenheid, pagina, volgorde).
  const rows = z.lessons.map((l) => [existing.get(l.slug) ?? null, bookId, l.position, l.slug, l.unit, l.unit_title_ar, l.unit_title_nl, l.page_start])
  for (let i = 0; i < rows.length; i += 30) {
    const part = rows.slice(i, i + 30)
    await conn.execute(`INSERT INTO chapters (id, book_id, position, slug, unit, unit_title_ar, unit_title_nl, page_start) VALUES ${part.map(() => '(?, ?, ?, ?, ?, ?, ?, ?)').join(', ')}
      ON DUPLICATE KEY UPDATE position = VALUES(position), unit = VALUES(unit), unit_title_ar = VALUES(unit_title_ar),
        unit_title_nl = VALUES(unit_title_nl), page_start = VALUES(page_start)`, part.flat())
  }
  const ids = new Map((await conn.execute('SELECT id, slug FROM chapters WHERE book_id = ?', [bookId])).map((r) => [r.slug, Number(r.id)]))
  for (const l of z.lessons) l.id = ids.get(l.slug)
  // Vertalingen (titel per taal); een bestaande titel blijft staan tot een versie wordt gepubliceerd.
  const tr = []
  for (const l of z.lessons) for (const lang of ['ar', 'nl']) if (l['title_' + lang] || l['body_' + lang]) tr.push(['chapter', l.id, lang, l['title_' + lang] || l.title_ar || l.title_nl])
  await conn.execute(`INSERT IGNORE INTO content_translations (entity_type, entity_id, lang, title) VALUES ${tr.map(() => '(?, ?, ?, ?)').join(', ')}`, tr.flat())
  const marks = z.lessons.map(() => '?').join(', ')
  const tids = new Map((await conn.execute(`SELECT id, entity_id, lang FROM content_translations WHERE entity_type = 'chapter' AND entity_id IN (${marks})`,
    z.lessons.map((l) => l.id))).map((r) => [`${r.entity_id}:${r.lang}`, Number(r.id)]))
  const versions = []
  for (const l of z.lessons) {
    for (const lang of ['ar', 'nl']) {
      if (!l['body_' + lang]) continue
      versions.push([tids.get(`${l.id}:${lang}`), l['title_' + lang] || l.title_ar || l.title_nl, l['body_' + lang], (IMPORT_REASON + (l.note ? ': ' + l.note : '')).slice(0, 500), 'draft', userId])
    }
  }
  await insertMany(conn, 'content_versions', ['translation_id', 'title', 'body', 'reason', 'status', 'created_by'], versions, 15)
  // Begrippen en vragen van deze lessen vervangen.
  await conn.execute(`DELETE FROM glossary_terms WHERE chapter_id IN (${marks})`, z.lessons.map((l) => l.id))
  await conn.execute(`DELETE FROM questions WHERE chapter_id IN (${marks}) AND status = 'draft'`, z.lessons.map((l) => l.id))
  const terms = z.lessons.flatMap((l) => l.terms.map((t, i) => [bookId, l.id, i, text(t.ar, 255), text(t.translit, 255), text(t.nl, 255), text(t.uitleg_nl, 2000), text(t.uitleg_ar, 2000), text(t.bron, 255)]))
  await insertMany(conn, 'glossary_terms', ['book_id', 'chapter_id', 'position', 'term_ar', 'translit', 'term_nl', 'explanation_nl', 'explanation_ar', 'source'], terms, 50)
  const questions = z.lessons.flatMap((l) => l.questions.map((q, i) => [bookId, l.id, i, q.type, JSON.stringify(q).slice(0, 60000), 'draft', userId]))
  await insertMany(conn, 'questions', ['book_id', 'chapter_id', 'position', 'type', 'data', 'status', 'created_by'], questions, 50)
  return { bookId, lessons: z.lessons.length, versions: versions.length, terms: terms.length, questions: questions.length }
}

// Overzicht voor /zad: alle ZAD-boeken met het aantal gepubliceerde lessen per taal.
export async function zadBooks (conn, { staff = false } = {}) {
  return conn.execute(`SELECT b.id, b.slug, b.status, b.zad_level, b.zad_subject,
      (SELECT title FROM book_translations t WHERE t.book_id = b.id AND t.lang = 'ar') AS title_ar,
      (SELECT title FROM book_translations t WHERE t.book_id = b.id AND t.lang = 'nl') AS title_nl,
      (SELECT COUNT(DISTINCT c.id) FROM chapters c JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id
        AND t.published_version_id IS NOT NULL WHERE c.book_id = b.id AND c.archived_at IS NULL) AS lessons
    FROM books b WHERE b.zad_level IS NOT NULL AND ${staff ? "b.status <> 'archived'" : "b.status = 'published' AND b.access_level = 'public'"}
    ORDER BY b.zad_level, b.id`)
}

// Begrippen bij een les (alleen opgehaald als de les zelf zichtbaar is).
export const chapterTerms = (conn, chapterId) =>
  conn.execute('SELECT term_ar, translit, term_nl, explanation_nl, explanation_ar, source FROM glossary_terms WHERE chapter_id = ? ORDER BY position', [chapterId])
