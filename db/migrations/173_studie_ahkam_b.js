// Studiekaarten voor تلخيص أحكام القرآن, deel b (zie migratie 172): de hoofdstukkaarten van eenheid 6–10
// worden gepubliceerd en de genoemde personen aan het boek gekoppeld. Eerst een back-up; down zet ze terug.
import { unitCardsMigration } from './unit-cards.js'
import { linkPersons } from './172_studie_ahkam_a.js'
import u6 from '../seed/ahkam/studie/eenheid6.js'
import u7 from '../seed/ahkam/studie/eenheid7.js'
import u8 from '../seed/ahkam/studie/eenheid8.js'
import u9 from '../seed/ahkam/studie/eenheid9.js'
import u10 from '../seed/ahkam/studie/eenheid10.js'

const cards = [u6, u7, u8, u9, u10]
const m = unitCardsMigration({
  id: 173,
  name: 'studie-ahkam-b',
  reason: 'Hoofdstukkaart تلخيص أحكام القرآن, eenheid 6–10 – op verzoek van Mohammed (7 nov 2026)',
  backup: '20261107c',
  cards
})
m.up.push(linkPersons(cards))
export default m
