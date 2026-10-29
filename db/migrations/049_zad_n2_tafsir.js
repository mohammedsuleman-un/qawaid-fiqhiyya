// Het boek التفسير (٢) (zad-n2-tafsir) in twee delen (24 lessen passen niet in één verzoek):
// deel 1 = les 1–12 met de genoemde personen, deel 2 = les 13–24. Lege lessen vooraan houden de
// volgorde (positie) van deel 2 gelijk aan die in het boek; parseZad slaat ze over.
// Daarna publiceren, zoals de boeken van niveau 1 (Mohammed, 29 okt 2026: "met andere vakken ook");
// twijfelachtige biografieën blijven concept.
import { importZad, publishZadBook } from '../../lib/zad.js'
import data from '../seed/zad/n2-tafsir.js'

const HALF = 12
const SLUG = 'zad-n2-tafsir'
const part = (n) => n === 1
  ? { ...data, lessons: data.lessons.slice(0, HALF) }
  : { ...data, persons: [], lessons: [...data.lessons.slice(0, HALF).map(() => ({})), ...data.lessons.slice(HALF)] }

const step = (n, min) => ({
  id: 48 + n,
  name: 'zad-tafsir-2' + (n === 1 ? 'a' : 'b'),
  up: [async (conn) => {
    const [{ c }] = await conn.execute(`SELECT COUNT(*) AS c FROM chapters ch JOIN books b ON b.id = ch.book_id
      WHERE b.slug = ? AND ch.archived_at IS NULL`, [SLUG])
    if (Number(c) < min) await importZad(conn, part(n))
  }],
  down: []
})

export const zadTafsir2a = step(1, HALF)
export const zadTafsir2b = step(2, data.lessons.length)
export const publiceerTafsir2 = {
  id: 51,
  name: 'publiceer-zad-tafsir-2',
  up: [(conn) => publishZadBook(conn, SLUG)],
  down: []
}
