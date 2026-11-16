// القواعد الفقهية (Mohammed, 16 nov 2026): zijn eigen handgeschreven notities over honderd fiqh-regels
// vervangen het oude interactieve naslagwerk op /qawaid/ (dat stond niet in de database). Het boek
// komt onder Fiqh, gepubliceerd, met één hoofdstuk per kop (lijst, inleiding en regel 1–100).
// Paginanummers zijn de volgorde van de foto's (het schrift zelf heeft geen paginanummers).
import { importChapters } from './003_inhoud.js'
import qawaid from '../seed/qawaid/boek.js'

export const SLUG = 'al-qawaid-al-fiqhiyya'
const DESC = 'مذكرات في القواعد الفقهية: مئة قاعدة مع معانيها وأدلتها وأمثلتها ومستثنياتها، مع ملف PDF.'
const DESC_NL = 'Aantekeningen over honderd fiqh-regels (al-qawāʿid al-fiqhiyya): betekenis, bewijzen, voorbeelden en uitzonderingen. Met PDF.'

export default {
  id: 181,
  name: 'qawaid-fiqhiyya',
  up: [async (conn) => {
    await conn.execute(`INSERT IGNORE INTO books (slug, title, subtitle, pdf, status, category_id, language, access_level, author, summarizer)
      SELECT ?, ?, ?, ?, 'published', (SELECT id FROM categories WHERE slug = 'fiqh'), 'ar', 'public', '', ''`,
    [SLUG, qawaid.book.title, qawaid.book.subtitle, qawaid.book.pdf])
    const [book] = await conn.execute('SELECT id FROM books WHERE slug = ?', [SLUG])
    const bookId = Number(book.id)
    await conn.execute("UPDATE books SET status = 'published' WHERE id = ?", [bookId])
    await conn.execute(`INSERT IGNORE INTO book_translations (book_id, lang, title, subtitle, description) VALUES
      (?, 'ar', ?, ?, ?), (?, 'nl', ?, ?, ?)`,
    [bookId, qawaid.book.title, qawaid.book.subtitle, DESC,
      bookId, 'De fiqh-regels (al-Qawāʿid al-Fiqhiyya)', 'Aantekeningen over honderd fiqh-regels', DESC_NL])
    await conn.execute('INSERT IGNORE INTO book_institutes (book_id, institute_id) SELECT ?, id FROM institutes WHERE id = 1', [bookId])
    const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM chapters WHERE book_id = ?', [bookId])
    if (Number(n) === 0) await importChapters(conn, bookId, qawaid.blocks)
  }],
  down: [
    `DELETE FROM book_institutes WHERE book_id IN (SELECT id FROM books WHERE slug = '${SLUG}')`,
    `UPDATE books SET status = 'draft' WHERE slug = '${SLUG}'`
  ]
}
