// Het hele boek التفسير (١) (24 lessen, begrippen, vragen en genoemde personen) als concept.
import { importZad } from '../../lib/zad.js'
import tafsir1 from '../seed/zad/n1-tafsir.js'

export default {
  id: 24,
  name: 'zad-tafsir-1',
  up: [async (conn) => {
    const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM chapters c JOIN books b ON b.id = c.book_id
      WHERE b.slug = 'zad-n1-tafsir' AND c.archived_at IS NULL`)
    if (Number(n) < tafsir1.lessons.length) await importZad(conn, tafsir1)
  }],
  down: []
}
