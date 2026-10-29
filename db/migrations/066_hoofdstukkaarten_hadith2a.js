// Hoofdstukkaarten voor eenheid 1–2 van Hadith (2).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n2-hadith-eenheid1.js'
import u2 from '../seed/zad/studie/n2-hadith-eenheid2.js'

export default unitCardsMigration({
  id: 66,
  name: 'hoofdstukkaarten-hadith-2a',
  reason: 'Hoofdstukkaart Hadith (2), eenheid 1–2 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029t',
  cards: [u1, u2]
})
