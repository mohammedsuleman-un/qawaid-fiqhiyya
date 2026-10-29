// Hoofdstukkaarten voor eenheid 4–6 van Opvoeding (2).
import { unitCardsMigration } from './unit-cards.js'
import u4 from '../seed/zad/studie/n2-tarbiyah-eenheid4.js'
import u5 from '../seed/zad/studie/n2-tarbiyah-eenheid5.js'
import u6 from '../seed/zad/studie/n2-tarbiyah-eenheid6.js'

export default unitCardsMigration({
  id: 78,
  name: 'hoofdstukkaarten-tarbiyah-2b',
  reason: 'Hoofdstukkaart Opvoeding (2), eenheid 4–6 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029zc',
  cards: [u4, u5, u6]
})
