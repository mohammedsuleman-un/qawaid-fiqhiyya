// Het hele boek العقيدة (٤) (24 lessen, begrippen, vragen en genoemde personen) als concept.
import { importZad } from '../../lib/zad.js'
import aqeedah4 from '../seed/zad/n4-aqeedah.js'

export default {
  id: 20,
  name: 'zad-aqeedah-4',
  up: [async (conn) => {
    const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM chapters c JOIN books b ON b.id = c.book_id
      WHERE b.slug = 'zad-n4-aqeedah' AND c.archived_at IS NULL`)
    if (Number(n) < aqeedah4.lessons.length) await importZad(conn, aqeedah4)
  }],
  down: []
}
