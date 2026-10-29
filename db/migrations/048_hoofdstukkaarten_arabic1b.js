// Hoofdstukkaarten voor eenheid 4–5 van Arabische taal (1).
import { unitCardsMigration } from './unit-cards.js'
import u4 from '../seed/zad/studie/n1-arabic-eenheid4.js'
import u5 from '../seed/zad/studie/n1-arabic-eenheid5.js'

export default unitCardsMigration({
  id: 48,
  name: 'hoofdstukkaarten-arabic-1b',
  reason: 'Hoofdstukkaart Arabische taal (1), eenheid 4–5 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029q',
  cards: [u4, u5]
})
