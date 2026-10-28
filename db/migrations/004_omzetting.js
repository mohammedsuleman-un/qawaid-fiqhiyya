// Zet de boeken uit de eerste versie (blokken) om naar hoofdstukken met een
// gepubliceerde Arabische versie. De tabel blocks blijft staan.
import { importChapters } from './003_inhoud.js'

export default {
  id: 4,
  name: 'omzetting',
  up: [
    // Boektitels worden de Arabische vertaling van het boek.
    `INSERT INTO book_translations (book_id, lang, title, subtitle)
      SELECT id, 'ar', title, subtitle FROM books`,
    // Bekende indeling van het eerste boek.
    `UPDATE books SET category_id = (SELECT id FROM categories WHERE slug = 'usul-al-fiqh'),
      author = 'تاج الدين السبكي' WHERE slug = 'talkhis-jam-al-jawami'`,
    async (conn) => {
      for (const book of await conn.execute('SELECT id FROM books')) {
        const blocks = await conn.execute('SELECT kind, page, html FROM blocks WHERE book_id = ? ORDER BY position', [book.id])
        await importChapters(conn, Number(book.id), blocks)
      }
    }
  ],
  down: [
    'DELETE FROM search_index', 'DELETE FROM content_versions', 'DELETE FROM content_translations',
    'DELETE FROM chapters', 'DELETE FROM book_translations', 'UPDATE books SET category_id = NULL, author = \'\''
  ]
}
