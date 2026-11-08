// الرسالة التدمرية van Shaykh al-Islām Ibn Taymiyya (het oorspronkelijke boek), op verzoek van Mohammed
// (8 nov 2026: "dit boek is een echt waardevolle boek ... samenvatten en kaarten maken"). Het boek komt
// onder Geloofsleer, met de volledige tekst (paginanummers van zijn scan), indeling in tien eenheden
// en de acht genoemde personen die nog niet in het register stonden (biografie als concept ter
// beoordeling). Instituut: dat van het eerste instituut (Ibn al-Qayyim), zoals de andere boeken
// zonder vaste les. De studiekaarten volgen in migratie 175–176.
import { importChapters } from './003_inhoud.js'
import { addPersons, personBioDrafts } from '../../lib/register.js'
import { sanitizeHtml } from '../../lib/sanitize.js'
import tadmuriyya from '../seed/tadmuriyya/boek.js'
import { UNITS, PAGE_START } from '../seed/tadmuriyya/units.js'
import personen from '../seed/info/tadmuriyya-personen.js'

export const SLUG = 'at-tadmuriyya'
const AUTHOR = 'شيخ الإسلام ابن تيمية'
const DESC = 'الرسالة التدمرية لشيخ الإسلام ابن تيمية (ت 728هـ): تحقيق الإثبات للأسماء والصفات، وحقيقة الجمع بين القدر والشرع. النص كاملا مع بطاقات دراسة لكل وحدة.'
const DESC_NL = 'Ar-Risāla at-Tadmuriyya van Shaykh al-Islām Ibn Taymiyya (gest. 728 AH): het bevestigen van Allahs namen en eigenschappen, en hoe sharīʿa en voorbeschikking samengaan. De volledige tekst met een studiekaart per eenheid.'
const REASON = 'Concept uit de biografische werken (Siyar, al-Aʿlām) voor الرسالة التدمرية; graag controleren'

async function createBook (conn) {
  await conn.execute(`INSERT IGNORE INTO books (slug, title, subtitle, pdf, status, category_id, language, access_level, author, summarizer)
    SELECT ?, ?, ?, ?, 'published', (SELECT id FROM categories WHERE slug = 'aqiedah'), 'ar', 'public', ?, ''`,
  [SLUG, tadmuriyya.book.title, tadmuriyya.book.subtitle, tadmuriyya.book.pdf, AUTHOR])
  const [book] = await conn.execute('SELECT id FROM books WHERE slug = ?', [SLUG])
  const bookId = Number(book.id)
  await conn.execute(`INSERT IGNORE INTO book_translations (book_id, lang, title, subtitle, description) VALUES
    (?, 'ar', ?, ?, ?), (?, 'nl', ?, ?, ?)`,
  [bookId, tadmuriyya.book.title, tadmuriyya.book.subtitle, DESC,
    bookId, 'Ar-Risāla at-Tadmuriyya (Ibn Taymiyya)', 'Allahs namen en eigenschappen, en sharīʿa en voorbeschikking, door Shaykh al-Islām Ibn Taymiyya', DESC_NL])
  await conn.execute('INSERT IGNORE INTO book_institutes (book_id, institute_id) SELECT ?, id FROM institutes WHERE id = 1', [bookId])
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM chapters WHERE book_id = ?', [bookId])
  if (Number(n) === 0) await importChapters(conn, bookId, tadmuriyya.blocks)
}

// Eén UPDATE voor alle onderdelen: eenheid, titel van de eenheid en beginpagina per slug.
async function setUnits (conn) {
  const rows = []
  for (const u of UNITS) for (const ch of u.chapters) rows.push([String(ch), u.unit, u.title_ar, u.title_nl, PAGE_START[ch - 1]])
  const when = () => rows.map(() => 'WHEN ? THEN ?').join(' ')
  await conn.execute(`UPDATE chapters c JOIN books b ON b.id = c.book_id
    SET c.unit = CASE c.slug ${when()} END,
        c.unit_title_ar = CASE c.slug ${when()} END,
        c.unit_title_nl = CASE c.slug ${when()} END,
        c.page_start = CASE c.slug ${when()} END
    WHERE b.slug = ? AND c.slug IN (${rows.map(() => '?').join(', ')})`,
  [...rows.flatMap((r) => [r[0], r[1]]), ...rows.flatMap((r) => [r[0], r[2]]), ...rows.flatMap((r) => [r[0], r[3]]), ...rows.flatMap((r) => [r[0], r[4]]), SLUG, ...rows.map((r) => r[0])])
}

// Nieuwe personen zonder bio (addPersons zou de bio als 'draft' zetten), daarna de bio ter beoordeling.
async function persons (conn) {
  const [book] = await conn.execute('SELECT id FROM books WHERE slug = ?', [SLUG])
  await addPersons(conn, personen.map(({ bio_ar: _a, bio_nl: _n, ...p }) => p), REASON, sanitizeHtml, Number(book.id))
  const known = await conn.execute(`SELECT p.slug FROM persons p JOIN content_translations t ON t.entity_type = 'article' AND t.entity_id = p.article_id
    JOIN content_versions v ON v.translation_id = t.id WHERE p.slug IN (${personen.map(() => '?').join(', ')})`, personen.map((p) => p.slug))
  const has = new Set(known.map((r) => r.slug))
  await personBioDrafts(conn, personen.filter((p) => !has.has(p.slug)), REASON, sanitizeHtml)
}

export default {
  id: 174,
  name: 'tadmuriyya',
  up: [createBook, setUnits, persons],
  down: [async (conn) => {
    const [book] = await conn.execute('SELECT id FROM books WHERE slug = ?', [SLUG])
    if (!book) return
    const id = Number(book.id)
    await conn.execute(`DELETE s FROM search_index s JOIN chapters c ON c.id = s.entity_id WHERE s.entity_type = 'chapter' AND c.book_id = ?`, [id])
    await conn.execute(`DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id
      JOIN chapters c ON c.id = t.entity_id WHERE t.entity_type IN ('chapter', 'study') AND c.book_id = ?`, [id])
    await conn.execute(`DELETE t FROM content_translations t JOIN chapters c ON c.id = t.entity_id WHERE t.entity_type IN ('chapter', 'study') AND c.book_id = ?`, [id])
    await conn.execute('DELETE FROM hadith_index WHERE book_id = ?', [id])
    await conn.execute('DELETE FROM person_books WHERE book_id = ?', [id])
    await conn.execute('DELETE FROM chapters WHERE book_id = ?', [id])
    await conn.execute('DELETE FROM book_institutes WHERE book_id = ?', [id])
    await conn.execute('DELETE FROM book_translations WHERE book_id = ?', [id])
    await conn.execute('DELETE FROM books WHERE id = ?', [id])
  }, async (conn) => {
    // Alleen de personen die deze migratie toevoegde en die nergens anders aan gekoppeld zijn.
    const slugs = personen.map((p) => p.slug)
    const rows = await conn.execute(`SELECT p.id, p.article_id FROM persons p WHERE p.slug IN (${slugs.map(() => '?').join(', ')})
      AND NOT EXISTS (SELECT 1 FROM person_books pb WHERE pb.person_id = p.id)`, slugs)
    for (const r of rows) {
      await conn.execute(`DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'article' AND t.entity_id = ?`, [r.article_id])
      await conn.execute(`DELETE FROM content_translations WHERE entity_type = 'article' AND entity_id = ?`, [r.article_id])
      await conn.execute('DELETE FROM persons WHERE id = ?', [r.id])
      await conn.execute('DELETE FROM articles WHERE id = ?', [r.article_id])
    }
  }]
}
