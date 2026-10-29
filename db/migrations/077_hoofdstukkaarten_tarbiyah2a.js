// Hoofdstukkaarten voor eenheid 1–3 van Opvoeding (2).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n2-tarbiyah-eenheid1.js'
import u2 from '../seed/zad/studie/n2-tarbiyah-eenheid2.js'
import u3 from '../seed/zad/studie/n2-tarbiyah-eenheid3.js'

export default unitCardsMigration({
  id: 77,
  name: 'hoofdstukkaarten-tarbiyah-2a',
  reason: 'Hoofdstukkaart Opvoeding (2), eenheid 1–3 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029zb',
  cards: [u1, u2, u3]
})
