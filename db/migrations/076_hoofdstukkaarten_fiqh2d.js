// Hoofdstukkaarten voor eenheid 7–8 van Fiqh (2).
import { unitCardsMigration } from './unit-cards.js'
import u7 from '../seed/zad/studie/n2-fiqh-eenheid7.js'
import u8 from '../seed/zad/studie/n2-fiqh-eenheid8.js'

export default unitCardsMigration({
  id: 76,
  name: 'hoofdstukkaarten-fiqh-2d',
  reason: 'Hoofdstukkaart Fiqh (2), eenheid 7–8 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029za',
  cards: [u7, u8]
})
