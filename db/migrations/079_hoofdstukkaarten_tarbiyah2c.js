// Hoofdstukkaarten voor eenheid 7–9 van Opvoeding (2).
import { unitCardsMigration } from './unit-cards.js'
import u7 from '../seed/zad/studie/n2-tarbiyah-eenheid7.js'
import u8 from '../seed/zad/studie/n2-tarbiyah-eenheid8.js'
import u9 from '../seed/zad/studie/n2-tarbiyah-eenheid9.js'

export default unitCardsMigration({
  id: 79,
  name: 'hoofdstukkaarten-tarbiyah-2c',
  reason: 'Hoofdstukkaart Opvoeding (2), eenheid 7–9 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029zd',
  cards: [u7, u8, u9]
})
