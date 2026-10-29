// Het boek اللغة العربية (١) als concept, in twee delen (24 lessen passen
// niet in één verzoek): deel 1 = les 1–12 met de genoemde personen, deel 2 = les 13–24. Lege lessen
// vooraan houden de volgorde (positie) van deel 2 gelijk aan die in het boek; parseZad slaat ze over.
import { importZad } from '../../lib/zad.js'
import arabic1 from '../seed/zad/n1-arabic.js'

const HALF = 12
const part = (n) => n === 1
  ? { ...arabic1, lessons: arabic1.lessons.slice(0, HALF) }
  : { ...arabic1, persons: [], lessons: [...arabic1.lessons.slice(0, HALF).map(() => ({})), ...arabic1.lessons.slice(HALF)] }

const step = (n, min) => ({
  id: 43 + n,
  name: 'zad-arabic-1' + (n === 1 ? 'a' : 'b'),
  up: [async (conn) => {
    const [{ c }] = await conn.execute(`SELECT COUNT(*) AS c FROM chapters ch JOIN books b ON b.id = ch.book_id
      WHERE b.slug = 'zad-n1-arabic' AND ch.archived_at IS NULL`)
    if (Number(c) < min) await importZad(conn, part(n))
  }],
  down: []
})

export const zadArabic1a = step(1, HALF)
export const zadArabic1b = step(2, arabic1.lessons.length)
