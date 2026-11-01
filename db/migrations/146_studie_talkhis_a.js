// Studieomgeving voor تلخيص جمع الجوامع, op verzoek van Mohammed (1 nov 2026: "voor تلخيص جمع الجوامع
// wil ik ook begrippenlijst, kerpunten, schema's en kaarten, hadithlijst, personen, herhaling, test
// jezelf, een tab met de naam خبايا الزوايا"). Deel a: de onderdelen krijgen een eenheid en beginpagina,
// en de hoofdstukkaarten van eenheid 1–5 worden gepubliceerd. Eerst een back-up van alle studiekaarten;
// down zet de kaarten terug en haalt de eenheden weer weg.
import { unitCardsMigration } from './unit-cards.js'
import { UNITS, PAGE_START } from '../seed/talkhis/units.js'
import u1 from '../seed/talkhis/studie/eenheid1.js'
import u2 from '../seed/talkhis/studie/eenheid2.js'
import u3 from '../seed/talkhis/studie/eenheid3.js'
import u4 from '../seed/talkhis/studie/eenheid4.js'
import u5 from '../seed/talkhis/studie/eenheid5.js'

const BOOK = 'talkhis-jam-al-jawami'

// Eén UPDATE voor alle onderdelen: eenheid, titel van de eenheid en beginpagina per slug.
export async function setUnits (conn) {
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

const m = unitCardsMigration({
  id: 146,
  name: 'studie-talkhis-a',
  reason: 'Hoofdstukkaart تلخيص جمع الجوامع, eenheid 1–5 – op verzoek van Mohammed (1 nov 2026)',
  backup: '20261101a',
  cards: [u1, u2, u3, u4, u5]
})
m.up.splice(1, 0, setUnits)
m.down.unshift(async (conn) => {
  await conn.execute(`UPDATE chapters c JOIN books b ON b.id = c.book_id SET c.unit = NULL, c.unit_title_ar = '', c.unit_title_nl = '', c.page_start = NULL WHERE b.slug = ?`, [BOOK])
})
export default m
