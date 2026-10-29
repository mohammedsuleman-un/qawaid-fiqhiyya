// Het hele boek العقيدة (٣) (24 lessen, begrippen, vragen en genoemde personen) als concept.
import { importZad } from '../../lib/zad.js'
import aqeedah3 from '../seed/zad/n3-aqeedah.js'

export default {
  id: 16,
  name: 'zad-aqeedah-3',
  up: [async (conn) => {
    const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM chapters c JOIN books b ON b.id = c.book_id
      WHERE b.slug = 'zad-n3-aqeedah' AND c.archived_at IS NULL`)
    if (Number(n) < aqeedah3.lessons.length) await importZad(conn, aqeedah3)
  }],
  down: []
}
