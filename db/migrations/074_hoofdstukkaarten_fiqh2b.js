// Hoofdstukkaarten voor eenheid 3–4 van Fiqh (2).
import { unitCardsMigration } from './unit-cards.js'
import u3 from '../seed/zad/studie/n2-fiqh-eenheid3.js'
import u4 from '../seed/zad/studie/n2-fiqh-eenheid4.js'

export default unitCardsMigration({
  id: 74,
  name: 'hoofdstukkaarten-fiqh-2b',
  reason: 'Hoofdstukkaart Fiqh (2), eenheid 3–4 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029y',
  cards: [u3, u4]
})
