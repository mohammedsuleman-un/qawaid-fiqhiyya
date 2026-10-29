// Hoofdstukkaarten voor eenheid 4–6 van Islamitische opvoeding (1).
import { unitCardsMigration } from './unit-cards.js'
import u4 from '../seed/zad/studie/n1-tarbiyah-eenheid4.js'
import u5 from '../seed/zad/studie/n1-tarbiyah-eenheid5.js'
import u6 from '../seed/zad/studie/n1-tarbiyah-eenheid6.js'

export default unitCardsMigration({
  id: 43,
  name: 'hoofdstukkaarten-tarbiyah-1b',
  reason: 'Hoofdstukkaart Islamitische opvoeding (1), eenheid 4–6 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029o',
  cards: [u4, u5, u6]
})
