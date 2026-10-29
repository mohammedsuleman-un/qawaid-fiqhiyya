// Hoofdstukkaarten voor eenheid 1–2 van Profetische biografie (2).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n2-seerah-eenheid1.js'
import u2 from '../seed/zad/studie/n2-seerah-eenheid2.js'

export default unitCardsMigration({
  id: 71,
  name: 'hoofdstukkaarten-seerah-2a',
  reason: 'Hoofdstukkaart Profetische biografie (2), eenheid 1–2 – op verzoek van Mohammed (29 okt 2026: "Ga door met samenvatten en lezen")',
  backup: '20261029v',
  cards: [u1, u2]
})
