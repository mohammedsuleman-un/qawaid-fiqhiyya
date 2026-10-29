// Het hele boek السيرة النبوية (١) (24 lessen, begrippen, vragen en genoemde personen) als concept.
import { importZad } from '../../lib/zad.js'
import sira1 from '../seed/zad/n1-sira.js'

export default {
  id: 30,
  name: 'zad-sira-1',
  up: [async (conn) => {
    const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM chapters c JOIN books b ON b.id = c.book_id
      WHERE b.slug = 'zad-n1-seerah' AND c.archived_at IS NULL`)
    if (Number(n) < sira1.lessons.length) await importZad(conn, sira1)
  }],
  down: []
}
