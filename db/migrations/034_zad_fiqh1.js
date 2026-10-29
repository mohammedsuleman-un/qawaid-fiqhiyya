// Het boek الفقه (١) als concept, in twee delen (36 lessen passen niet in één verzoek):
// deel 1 = les 1–18 met de genoemde personen, deel 2 = les 19–36. Lege lessen vooraan houden
// de volgorde (positie) van deel 2 gelijk aan die in het boek; parseZad slaat ze over.
import { importZad } from '../../lib/zad.js'
import fiqh1 from '../seed/zad/n1-fiqh.js'

const HALF = 18
const part = (n) => n === 1
  ? { ...fiqh1, lessons: fiqh1.lessons.slice(0, HALF) }
  : { ...fiqh1, persons: [], lessons: [...fiqh1.lessons.slice(0, HALF).map(() => ({})), ...fiqh1.lessons.slice(HALF)] }

const step = (n, min) => ({
  id: 33 + n,
  name: 'zad-fiqh-1' + (n === 1 ? 'a' : 'b'),
  up: [async (conn) => {
    const [{ c }] = await conn.execute(`SELECT COUNT(*) AS c FROM chapters ch JOIN books b ON b.id = ch.book_id
      WHERE b.slug = 'zad-n1-fiqh' AND ch.archived_at IS NULL`)
    if (Number(c) < min) await importZad(conn, part(n))
  }],
  down: []
})

export const zadFiqh1a = step(1, HALF)
export const zadFiqh1b = step(2, fiqh1.lessons.length)
