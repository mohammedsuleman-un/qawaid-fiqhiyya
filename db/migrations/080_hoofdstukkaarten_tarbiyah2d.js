// Hoofdstukkaarten voor eenheid 10–12 van Opvoeding (2).
import { unitCardsMigration } from './unit-cards.js'
import u10 from '../seed/zad/studie/n2-tarbiyah-eenheid10.js'
import u11 from '../seed/zad/studie/n2-tarbiyah-eenheid11.js'
import u12 from '../seed/zad/studie/n2-tarbiyah-eenheid12.js'

export default unitCardsMigration({
  id: 80,
  name: 'hoofdstukkaarten-tarbiyah-2d',
  reason: 'Hoofdstukkaart Opvoeding (2), eenheid 10–12 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029ze',
  cards: [u10, u11, u12]
})
