// Studiekaarten voor تلخيص أحكام القرآن, op verzoek van Mohammed (7 nov 2026: "kan je kaarten maken voor"
// dit boek), in dezelfde opzet als تلخيص جمع الجوامع (migratie 149/150). Deel a: de onderdelen krijgen een
// eenheid en beginpagina, de hoofdstukkaarten van eenheid 1–5 worden gepubliceerd en de genoemde personen
// worden aan het boek gekoppeld. Eerst een back-up van alle studiekaarten; down zet alles terug.
import { unitCardsMigration } from './unit-cards.js'
import { UNITS, PAGE_START } from '../seed/ahkam/units.js'
import u1 from '../seed/ahkam/studie/eenheid1.js'
import u2 from '../seed/ahkam/studie/eenheid2.js'
import u3 from '../seed/ahkam/studie/eenheid3.js'
import u4 from '../seed/ahkam/studie/eenheid4.js'
import u5 from '../seed/ahkam/studie/eenheid5.js'

export const BOOK = 'talkhis-ahkam-al-quran'

// Eén UPDATE voor alle onderdelen: eenheid, titel van de eenheid en beginpagina per slug.
async function setUnits (conn) {
  const rows = []
  for (const u of UNITS) for (const ch of u.chapters) rows.push([String(ch), u.unit, u.title_ar, u.title_nl, PAGE_START[ch - 1]])
  const when = () => rows.map(() => 'WHEN ? THEN ?').join(' ')
  await conn.execute(`UPDATE chapters c JOIN books b ON b.id = c.book_id
    SET c.unit = CASE c.slug ${when()} END,
        c.unit_title_ar = CASE c.slug ${when()} END,
        c.unit_title_nl = CASE c.slug ${when()} END,
        c.page_start = CASE c.slug ${when()} END
    WHERE b.slug = ? AND c.slug IN (${rows.map(() => '?').join(', ')})`,
  [...rows.flatMap((r) => [r[0], r[1]]), ...rows.flatMap((r) => [r[0], r[2]]), ...rows.flatMap((r) => [r[0], r[3]]), ...rows.flatMap((r) => [r[0], r[4]]), BOOK, ...rows.map((r) => r[0])])
}

// Personen uit de kaarten koppelen aan dit boek (register per boek); alleen bestaande personen.
export function linkPersons (cards) {
  return async (conn) => {
    const slugs = [...new Set(cards.flatMap((c) => c.ar.persons.map((p) => p.slug)))]
    if (!slugs.length) return
    await conn.execute(`INSERT IGNORE INTO person_books (person_id, book_id)
      SELECT p.id, b.id FROM persons p JOIN books b ON b.slug = ? WHERE p.slug IN (${slugs.map(() => '?').join(', ')})`, [BOOK, ...slugs])
  }
}

const cards = [u1, u2, u3, u4, u5]
const m = unitCardsMigration({
  id: 172,
  name: 'studie-ahkam-a',
  reason: 'Hoofdstukkaart تلخيص أحكام القرآن, eenheid 1–5 – op verzoek van Mohammed (7 nov 2026)',
  backup: '20261107b',
  cards
})
m.up.splice(1, 0, setUnits)
m.up.push(linkPersons(cards))
m.down.unshift(async (conn) => {
  await conn.execute(`UPDATE chapters c JOIN books b ON b.id = c.book_id SET c.unit = NULL, c.unit_title_ar = '', c.unit_title_nl = '', c.page_start = NULL WHERE b.slug = ?`, [BOOK])
})
export default m
