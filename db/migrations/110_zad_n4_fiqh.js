// Het boek الفقه (٤) (zad-n4-fiqh) in twee delen (36 lessen passen niet in één verzoek):
// deel 1 = les 1–18 met de genoemde personen, deel 2 = les 19–36. Lege lessen vooraan houden de
// volgorde (positie) van deel 2 gelijk aan die in het boek; parseZad slaat ze over.
// Daarna publiceren (Mohammed, 29 okt 2026: "Je mag alles publiceren"); twijfelachtige biografieën blijven concept.
import { importZad, publishZadBook } from '../../lib/zad.js'
import data from '../seed/zad/n4-fiqh.js'

const HALF = 18
const SLUG = 'zad-n4-fiqh'
const part = (n) => n === 1
  ? { ...data, lessons: data.lessons.slice(0, HALF) }
  : { ...data, persons: [], lessons: [...data.lessons.slice(0, HALF).map(() => ({})), ...data.lessons.slice(HALF)] }

const step = (n, min) => ({
  id: 109 + n,
  name: 'zad-fiqh-4' + (n === 1 ? 'a' : 'b'),
  up: [async (conn) => {
    const [{ c }] = await conn.execute(`SELECT COUNT(*) AS c FROM chapters ch JOIN books b ON b.id = ch.book_id
      WHERE b.slug = ? AND ch.archived_at IS NULL`, [SLUG])
    if (Number(c) < min) await importZad(conn, part(n))
  }],
  down: []
})

export const zadFiqh4a = step(1, HALF)
export const zadFiqh4b = step(2, data.lessons.length)
export const publiceerFiqh4 = {
  id: 112,
  name: 'publiceer-zad-n4-fiqh',
  up: [async (conn) => {
    await publishZadBook(conn, SLUG)
    await conn.execute("UPDATE books SET status = 'published' WHERE slug = ?", [SLUG])
  }],
  down: []
}
