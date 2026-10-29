// Hoofdstukkaarten voor eenheid 1–3 van Arabisch (2).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n2-arabic-eenheid1.js'
import u2 from '../seed/zad/studie/n2-arabic-eenheid2.js'
import u3 from '../seed/zad/studie/n2-arabic-eenheid3.js'

export default unitCardsMigration({
  id: 87,
  name: 'hoofdstukkaarten-arabic-2',
  reason: 'Hoofdstukkaart Arabisch (2), eenheid 1–3 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029zf',
  cards: [u1, u2, u3]
})
