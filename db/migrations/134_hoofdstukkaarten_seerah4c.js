// Hoofdstukkaarten voor eenheid 11, 12, 13 van Sīra (4).
import { unitCardsMigration } from './unit-cards.js'
import u11 from '../seed/zad/studie/n4-seerah-eenheid11.js'
import u12 from '../seed/zad/studie/n4-seerah-eenheid12.js'
import u13 from '../seed/zad/studie/n4-seerah-eenheid13.js'

export default unitCardsMigration({
  id: 134,
  name: 'hoofdstukkaarten-seerah-4c',
  reason: 'Hoofdstukkaart Sīra (4), eenheid 11–13 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zv',
  cards: [u11, u12, u13]
})
