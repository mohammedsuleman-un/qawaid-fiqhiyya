// Hoofdstukkaarten voor eenheid 1, 2, 3, 4, 5 van Opvoeding (3).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n3-tarbiyah-eenheid1.js'
import u2 from '../seed/zad/studie/n3-tarbiyah-eenheid2.js'
import u3 from '../seed/zad/studie/n3-tarbiyah-eenheid3.js'
import u4 from '../seed/zad/studie/n3-tarbiyah-eenheid4.js'
import u5 from '../seed/zad/studie/n3-tarbiyah-eenheid5.js'

export default unitCardsMigration({
  id: 124,
  name: 'hoofdstukkaarten-tarbiyah-3',
  reason: 'Hoofdstukkaart Opvoeding (3), eenheid 1–5 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zl',
  cards: [u1, u2, u3, u4, u5]
})
