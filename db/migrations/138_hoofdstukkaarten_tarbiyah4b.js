// Hoofdstukkaarten voor eenheid 6, 7, 8, 9, 10 van Opvoeding (4).
import { unitCardsMigration } from './unit-cards.js'
import u6 from '../seed/zad/studie/n4-tarbiyah-eenheid6.js'
import u7 from '../seed/zad/studie/n4-tarbiyah-eenheid7.js'
import u8 from '../seed/zad/studie/n4-tarbiyah-eenheid8.js'
import u9 from '../seed/zad/studie/n4-tarbiyah-eenheid9.js'
import u10 from '../seed/zad/studie/n4-tarbiyah-eenheid10.js'

export default unitCardsMigration({
  id: 138,
  name: 'hoofdstukkaarten-tarbiyah-4b',
  reason: 'Hoofdstukkaart Opvoeding (4), eenheid 6–10 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zz',
  cards: [u6, u7, u8, u9, u10]
})
