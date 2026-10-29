// Het boek الحديث (٤) (zad-n4-hadith) in twee delen (24 lessen en de personen passen niet in één verzoek):
// deel 1 = les 1–12 met de genoemde personen, deel 2 = les 13–24. Lege lessen vooraan houden de
// volgorde (positie) van deel 2 gelijk aan die in het boek; parseZad slaat ze over.
// Het boek blijft concept: de onderzoeksthread vraagt dat Mohammed het zelf controleert en publiceert.
import { importZad } from '../../lib/zad.js'
import data from '../seed/zad/n4-hadith.js'

const HALF = 12
const SLUG = 'zad-n4-hadith'
const part = (n) => n === 1
  ? { ...data, lessons: data.lessons.slice(0, HALF) }
  : { ...data, persons: [], lessons: [...data.lessons.slice(0, HALF).map(() => ({})), ...data.lessons.slice(HALF)] }

const step = (n, min) => ({
  id: 102 + n,
  name: 'zad-hadith-4' + (n === 1 ? 'a' : 'b'),
  up: [async (conn) => {
    const [{ c }] = await conn.execute(`SELECT COUNT(*) AS c FROM chapters ch JOIN books b ON b.id = ch.book_id
      WHERE b.slug = ? AND ch.archived_at IS NULL`, [SLUG])
    if (Number(c) < min) await importZad(conn, part(n))
  }],
  down: []
})

export const zadHadith4a = step(1, HALF)
export const zadHadith4b = step(2, data.lessons.length)
