// Hoofdstukkaarten voor eenheid 3–4 van Hadith (2).
import { unitCardsMigration } from './unit-cards.js'
import u3 from '../seed/zad/studie/n2-hadith-eenheid3.js'
import u4 from '../seed/zad/studie/n2-hadith-eenheid4.js'

export default unitCardsMigration({
  id: 67,
  name: 'hoofdstukkaarten-hadith-2b',
  reason: 'Hoofdstukkaart Hadith (2), eenheid 3–4 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029u',
  cards: [u3, u4]
})
