// تلخيص أحكام القرآن (op verzoek van Mohammed, 7 nov 2026): de overgetypte notities over
// أحكام القرآن van Ibn al-ʿArabī (al-Fātiḥa en al-Baqara) komen in het boek dat migratie 163
// als concept aanmaakte, en het boek wordt gepubliceerd. Eén hoofdstuk per besproken vers.
// De samensteller (الملخِّص) blijft leeg tot Mohammed die opgeeft.
import { importChapters } from './003_inhoud.js'
import ahkam from '../seed/ahkam/boek.js'

const SLUG = 'talkhis-ahkam-al-quran'
const DESC = 'مذكرات على أحكام القرآن للقاضي أبي بكر ابن العربي: سورة الفاتحة وسورة البقرة، مع ترجمات هولندية لبعض المواضع.'

export default {
  id: 165,
  name: 'ahkam-al-quran',
  up: [async (conn) => {
    const [book] = await conn.execute('SELECT id FROM books WHERE slug = ?', [SLUG])
    if (!book) return
    const bookId = Number(book.id)
    await conn.execute(`UPDATE books SET status = 'published', author = 'أبو بكر ابن العربي', subtitle = ?, pdf = ? WHERE id = ?`,
      [ahkam.book.subtitle, ahkam.book.pdf, bookId])
    await conn.execute("UPDATE book_translations SET subtitle = ?, description = ? WHERE book_id = ? AND lang = 'ar'",
      [ahkam.book.subtitle, DESC, bookId])
    await conn.execute("UPDATE book_translations SET subtitle = ? WHERE book_id = ? AND lang = 'nl'",
      ['Aantekeningen bij Aḥkām al-Qurʾān van Ibn al-ʿArabī (al-Fātiḥa en al-Baqara)', bookId])
    const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM chapters WHERE book_id = ?', [bookId])
    if (Number(n) === 0) await importChapters(conn, bookId, ahkam.blocks)
  }],
  down: [
    "UPDATE books SET status = 'draft' WHERE slug = 'talkhis-ahkam-al-quran'"
  ]
}
