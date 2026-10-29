// Het boek اللغة العربية (٤) (zad-n4-arabic) in twee delen (24 lessen passen niet in één verzoek):
// deel 1 = les 1–12, deel 2 = les 13–24. Lege lessen vooraan houden de
// volgorde (positie) van deel 2 gelijk aan die in het boek; parseZad slaat ze over.
// Daarna publiceren (Mohammed, 29 okt 2026: "Je mag alles publiceren").
import { importZad, publishZadBook } from '../../lib/zad.js'
import data from '../seed/zad/n4-arabic.js'

const HALF = 12
const SLUG = 'zad-n4-arabic'
const part = (n) => n === 1
  ? { ...data, lessons: data.lessons.slice(0, HALF) }
  : { ...data, persons: [], lessons: [...data.lessons.slice(0, HALF).map(() => ({})), ...data.lessons.slice(HALF)] }

const step = (n, min) => ({
  id: 119 + n,
  name: 'zad-arabic-4' + (n === 1 ? 'a' : 'b'),
  up: [async (conn) => {
    const [{ c }] = await conn.execute(`SELECT COUNT(*) AS c FROM chapters ch JOIN books b ON b.id = ch.book_id
      WHERE b.slug = ? AND ch.archived_at IS NULL`, [SLUG])
    if (Number(c) < min) await importZad(conn, part(n))
  }],
  down: []
})

export const zadArabic4a = step(1, HALF)
export const zadArabic4b = step(2, data.lessons.length)
export const publiceerArabic4 = {
  id: 122,
  name: 'publiceer-zad-n4-arabic',
  up: [async (conn) => {
    await publishZadBook(conn, SLUG)
    await conn.execute("UPDATE books SET status = 'published' WHERE slug = ?", [SLUG])
  }],
  down: []
}
