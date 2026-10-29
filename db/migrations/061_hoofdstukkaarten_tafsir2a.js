// Hoofdstukkaarten voor eenheid 1–3 van Koranexegese (2).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n2-tafsir-eenheid1.js'
import u2 from '../seed/zad/studie/n2-tafsir-eenheid2.js'
import u3 from '../seed/zad/studie/n2-tafsir-eenheid3.js'

export default unitCardsMigration({
  id: 61,
  name: 'hoofdstukkaarten-tafsir-2a',
  reason: 'Hoofdstukkaart Koranexegese (2), eenheid 1–3 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029r',
  cards: [u1, u2, u3]
})
