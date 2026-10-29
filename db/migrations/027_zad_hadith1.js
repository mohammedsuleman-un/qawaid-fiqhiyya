// Het hele boek الحديث (١) (24 lessen, begrippen, vragen en genoemde personen) als concept.
import { importZad } from '../../lib/zad.js'
import hadith1 from '../seed/zad/n1-hadith.js'

export default {
  id: 27,
  name: 'zad-hadith-1',
  up: [async (conn) => {
    const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM chapters c JOIN books b ON b.id = c.book_id
      WHERE b.slug = 'zad-n1-hadith' AND c.archived_at IS NULL`)
    if (Number(n) < hadith1.lessons.length) await importZad(conn, hadith1)
  }],
  down: []
}
