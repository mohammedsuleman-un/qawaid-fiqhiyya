// Hoofdstukkaarten voor eenheid 4–6 van Fiqh (1).
import { unitCardsMigration } from './unit-cards.js'
import u4 from '../seed/zad/studie/n1-fiqh-eenheid4.js'
import u5 from '../seed/zad/studie/n1-fiqh-eenheid5.js'
import u6 from '../seed/zad/studie/n1-fiqh-eenheid6.js'

export default unitCardsMigration({
  id: 38,
  name: 'hoofdstukkaarten-fiqh-1b',
  reason: 'Hoofdstukkaart Fiqh (1), eenheid 4–6 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029m',
  cards: [u4, u5, u6]
})
