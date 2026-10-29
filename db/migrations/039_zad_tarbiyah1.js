// Het boek التربية الإسلامية (١) الحقوق als concept, in twee delen (24 lessen en 90 personen passen
// niet in één verzoek): deel 1 = les 1–12 met de genoemde personen, deel 2 = les 13–24. Lege lessen
// vooraan houden de volgorde (positie) van deel 2 gelijk aan die in het boek; parseZad slaat ze over.
import { importZad } from '../../lib/zad.js'
import tarbiyah1 from '../seed/zad/n1-tarbiyah.js'

const HALF = 12
const part = (n) => n === 1
  ? { ...tarbiyah1, lessons: tarbiyah1.lessons.slice(0, HALF) }
  : { ...tarbiyah1, persons: [], lessons: [...tarbiyah1.lessons.slice(0, HALF).map(() => ({})), ...tarbiyah1.lessons.slice(HALF)] }

const step = (n, min) => ({
  id: 38 + n,
  name: 'zad-tarbiyah-1' + (n === 1 ? 'a' : 'b'),
  up: [async (conn) => {
    const [{ c }] = await conn.execute(`SELECT COUNT(*) AS c FROM chapters ch JOIN books b ON b.id = ch.book_id
      WHERE b.slug = 'zad-n1-tarbiyah' AND ch.archived_at IS NULL`)
    if (Number(c) < min) await importZad(conn, part(n))
  }],
  down: []
})

export const zadTarbiyah1a = step(1, HALF)
export const zadTarbiyah1b = step(2, tarbiyah1.lessons.length)
