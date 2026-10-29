// Hoofdstukkaarten voor eenheid 4 en 5 van Profetische biografie (1).
import { unitCardsMigration } from './unit-cards.js'
import u4 from '../seed/zad/studie/n1-seerah-eenheid4.js'
import u5 from '../seed/zad/studie/n1-seerah-eenheid5.js'

export default unitCardsMigration({
  id: 33,
  name: 'hoofdstukkaarten-seerah-1b',
  reason: 'Hoofdstukkaart Profetische biografie (1), eenheid 4 en 5 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029k',
  cards: [u4, u5]
})
