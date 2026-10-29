// Hoofdstukkaarten voor eenheid 5–6 van Fiqh (2).
import { unitCardsMigration } from './unit-cards.js'
import u5 from '../seed/zad/studie/n2-fiqh-eenheid5.js'
import u6 from '../seed/zad/studie/n2-fiqh-eenheid6.js'

export default unitCardsMigration({
  id: 75,
  name: 'hoofdstukkaarten-fiqh-2c',
  reason: 'Hoofdstukkaart Fiqh (2), eenheid 5–6 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029z',
  cards: [u5, u6]
})
