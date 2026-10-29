// Hoofdstukkaarten voor eenheid 6, 7, 8 van Fiqh (4).
import { unitCardsMigration } from './unit-cards.js'
import u6 from '../seed/zad/studie/n4-fiqh-eenheid6.js'
import u7 from '../seed/zad/studie/n4-fiqh-eenheid7.js'
import u8 from '../seed/zad/studie/n4-fiqh-eenheid8.js'

export default unitCardsMigration({
  id: 136,
  name: 'hoofdstukkaarten-fiqh-4b',
  reason: 'Hoofdstukkaart Fiqh (4), eenheid 6–8 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zx',
  cards: [u6, u7, u8]
})
