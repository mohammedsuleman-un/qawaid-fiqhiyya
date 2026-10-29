// Koppelt personen aan de boeken waarin ze genoemd worden, zodat /personen per boek kan.
// Het eerste register (db/seed/personen.js) komt uit تلخيص جمع الجوامع, de ZAD-personen uit hun boek.
import seed from '../seed/personen.js'
import aqeedah1 from '../seed/zad/n1-aqeedah.js'

const link = async (conn, bookSlug, list) => {
  if (!list.length) return
  const slugs = list.map((p) => p.slug)
  const names = list.map((p) => p.name_ar)
  await conn.execute(`INSERT IGNORE INTO person_books (person_id, book_id)
    SELECT p.id, b.id FROM persons p JOIN books b ON b.slug = ?
    WHERE p.slug IN (${slugs.map(() => '?').join(', ')}) OR p.name_ar IN (${names.map(() => '?').join(', ')})`, [bookSlug, ...slugs, ...names])
}

export default {
  id: 8,
  name: 'personen-per-boek',
  up: [
    `CREATE TABLE IF NOT EXISTS person_books (
      person_id INT NOT NULL,
      book_id INT NOT NULL,
      PRIMARY KEY (person_id, book_id),
      KEY book_id (book_id)
    )`,
    async (conn) => {
      await link(conn, 'talkhis-jam-al-jawami', seed)
      await link(conn, 'zad-n1-aqeedah', aqeedah1.persons || [])
    }
  ],
  down: ['DROP TABLE IF EXISTS person_books']
}
