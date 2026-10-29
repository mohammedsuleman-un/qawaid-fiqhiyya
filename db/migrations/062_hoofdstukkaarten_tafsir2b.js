// Hoofdstukkaarten voor eenheid 4–6 van Koranexegese (2).
import { unitCardsMigration } from './unit-cards.js'
import u4 from '../seed/zad/studie/n2-tafsir-eenheid4.js'
import u5 from '../seed/zad/studie/n2-tafsir-eenheid5.js'
import u6 from '../seed/zad/studie/n2-tafsir-eenheid6.js'

export default unitCardsMigration({
  id: 62,
  name: 'hoofdstukkaarten-tafsir-2b',
  reason: 'Hoofdstukkaart Koranexegese (2), eenheid 4–6 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029s',
  cards: [u4, u5, u6]
})
