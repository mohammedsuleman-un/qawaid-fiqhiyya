// Het hele boek العقيدة (٢) (24 lessen, begrippen, vragen en genoemde personen) als concept.
import { importZad } from '../../lib/zad.js'
import aqeedah2 from '../seed/zad/n2-aqeedah.js'

export default {
  id: 13,
  name: 'zad-aqeedah-2',
  up: [async (conn) => {
    const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM chapters c JOIN books b ON b.id = c.book_id
      WHERE b.slug = 'zad-n2-aqeedah' AND c.archived_at IS NULL`)
    if (Number(n) < aqeedah2.lessons.length) await importZad(conn, aqeedah2)
  }],
  down: []
}
