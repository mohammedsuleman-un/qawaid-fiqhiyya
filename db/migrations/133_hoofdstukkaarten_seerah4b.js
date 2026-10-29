// Hoofdstukkaarten voor eenheid 6, 7, 8, 9, 10 van Sīra (4).
import { unitCardsMigration } from './unit-cards.js'
import u6 from '../seed/zad/studie/n4-seerah-eenheid6.js'
import u7 from '../seed/zad/studie/n4-seerah-eenheid7.js'
import u8 from '../seed/zad/studie/n4-seerah-eenheid8.js'
import u9 from '../seed/zad/studie/n4-seerah-eenheid9.js'
import u10 from '../seed/zad/studie/n4-seerah-eenheid10.js'

export default unitCardsMigration({
  id: 133,
  name: 'hoofdstukkaarten-seerah-4b',
  reason: 'Hoofdstukkaart Sīra (4), eenheid 6–10 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zu',
  cards: [u6, u7, u8, u9, u10]
})
