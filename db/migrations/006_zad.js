// ZAD-studiemateriaal: niveau en vak bij boeken, eenheid en beginpagina bij lessen,
// begrippenlijst en toetsvragen (voor fase 4). Maakt de 28 boeken aan als concept en
// importeert de lessen die al zijn uitgewerkt, ook als concept.
import { insertMany } from '../../lib/content.js'
import { importZad, zadSlug } from '../../lib/zad.js'
import books from '../seed/zad/boeken.js'
import aqeedah1 from '../seed/zad/n1-aqeedah.js'

const ZAD_SOURCE = (b) => `سلسلة زاد العلمية، إعداد مجموعة زاد. Scan: ${b.pdf}`

export default {
  id: 6,
  name: 'zad',
  up: [
    'ALTER TABLE books ADD COLUMN IF NOT EXISTS zad_level TINYINT NULL',
    'ALTER TABLE books ADD COLUMN IF NOT EXISTS zad_subject VARCHAR(20) NULL',
    'ALTER TABLE chapters ADD COLUMN IF NOT EXISTS unit INT NULL',
    "ALTER TABLE chapters ADD COLUMN IF NOT EXISTS unit_title_ar VARCHAR(255) NOT NULL DEFAULT ''",
    "ALTER TABLE chapters ADD COLUMN IF NOT EXISTS unit_title_nl VARCHAR(255) NOT NULL DEFAULT ''",
    'ALTER TABLE chapters ADD COLUMN IF NOT EXISTS page_start INT NULL',
    `CREATE TABLE IF NOT EXISTS glossary_terms (
      id INT AUTO_INCREMENT PRIMARY KEY,
      book_id INT NOT NULL,
      chapter_id INT NULL,
      position INT NOT NULL DEFAULT 0,
      term_ar VARCHAR(255) NOT NULL,
      translit VARCHAR(255) NOT NULL DEFAULT '',
      term_nl VARCHAR(255) NOT NULL DEFAULT '',
      explanation_nl TEXT NULL,
      explanation_ar TEXT NULL,
      source VARCHAR(255) NOT NULL DEFAULT '',
      KEY chapter_id (chapter_id),
      KEY book_id (book_id)
    )`,
    `CREATE TABLE IF NOT EXISTS questions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      book_id INT NOT NULL,
      chapter_id INT NULL,
      position INT NOT NULL DEFAULT 0,
      type VARCHAR(10) NOT NULL,
      data TEXT NOT NULL,
      status VARCHAR(16) NOT NULL DEFAULT 'draft',
      created_by INT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      KEY chapter_id (chapter_id),
      KEY book_id (book_id)
    )`,
    // De 28 boeken (alleen gegevens) als concept.
    async (conn) => {
      const [cat] = await conn.execute("SELECT id FROM categories WHERE slug = 'zad'")
      const have = new Set((await conn.execute('SELECT slug FROM books')).map((r) => r.slug))
      const todo = books.filter((b) => !have.has(zadSlug(b.level, b.subject)))
      if (!todo.length) return
      await insertMany(conn, 'books', ['slug', 'title', 'subtitle', 'pdf', 'status', 'category_id', 'author', 'publisher', 'zad_level', 'zad_subject'],
        todo.map((b) => [zadSlug(b.level, b.subject), b.title_ar, '', b.pdf, 'draft', cat?.id ?? null, 'إعداد مجموعة زاد', 'مجموعة زاد', b.level, b.subject]), 30)
      const ids = new Map((await conn.execute('SELECT id, slug FROM books WHERE zad_level IS NOT NULL')).map((r) => [r.slug, Number(r.id)]))
      await insertMany(conn, 'book_translations', ['book_id', 'lang', 'title', 'subtitle', 'description'], todo.flatMap((b) => {
        const id = ids.get(zadSlug(b.level, b.subject))
        return [
          [id, 'ar', b.title_ar, `سلسلة زاد العلمية – المستوى ${['الأول', 'الثاني', 'الثالث', 'الرابع'][b.level - 1]}`, ZAD_SOURCE(b)],
          [id, 'nl', b.title_nl, `ZAD-reeks, niveau ${b.level} · ${b.lessons} lessen`, `${b.contents_nl}.\n\n${ZAD_SOURCE(b)}`]
        ]
      }), 30)
    },
    // Personen komen er in migratie 7 bij (binnen de limiet van 50 queries per verzoek).
    async (conn) => { await importZad(conn, { ...aqeedah1, persons: [] }) }
  ],
  down: [
    'DELETE FROM questions', 'DELETE FROM glossary_terms',
    'DELETE s FROM search_index s JOIN books b ON b.id = s.book_id WHERE b.zad_level IS NOT NULL',
    'DELETE h FROM hadith_index h JOIN books b ON b.id = h.book_id WHERE b.zad_level IS NOT NULL',
    `DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id JOIN chapters c ON t.entity_type = 'chapter' AND c.id = t.entity_id
      JOIN books b ON b.id = c.book_id WHERE b.zad_level IS NOT NULL`,
    `DELETE t FROM content_translations t JOIN chapters c ON t.entity_type = 'chapter' AND c.id = t.entity_id JOIN books b ON b.id = c.book_id WHERE b.zad_level IS NOT NULL`,
    'DELETE c FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.zad_level IS NOT NULL',
    'DELETE t FROM book_translations t JOIN books b ON b.id = t.book_id WHERE b.zad_level IS NOT NULL',
    'DELETE FROM books WHERE zad_level IS NOT NULL',
    'DROP TABLE IF EXISTS questions', 'DROP TABLE IF EXISTS glossary_terms'
  ]
}
