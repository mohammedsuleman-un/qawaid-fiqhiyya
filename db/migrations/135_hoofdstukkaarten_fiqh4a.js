// Hoofdstukkaarten voor eenheid 1, 2, 3, 4, 5 van Fiqh (4).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n4-fiqh-eenheid1.js'
import u2 from '../seed/zad/studie/n4-fiqh-eenheid2.js'
import u3 from '../seed/zad/studie/n4-fiqh-eenheid3.js'
import u4 from '../seed/zad/studie/n4-fiqh-eenheid4.js'
import u5 from '../seed/zad/studie/n4-fiqh-eenheid5.js'

export default unitCardsMigration({
  id: 135,
  name: 'hoofdstukkaarten-fiqh-4a',
  reason: 'Hoofdstukkaart Fiqh (4), eenheid 1–5 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zw',
  cards: [u1, u2, u3, u4, u5]
})
