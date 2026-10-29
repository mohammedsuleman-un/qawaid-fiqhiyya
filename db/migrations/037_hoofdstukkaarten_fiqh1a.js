// Hoofdstukkaarten voor eenheid 1–3 van Fiqh (1).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n1-fiqh-eenheid1.js'
import u2 from '../seed/zad/studie/n1-fiqh-eenheid2.js'
import u3 from '../seed/zad/studie/n1-fiqh-eenheid3.js'

export default unitCardsMigration({
  id: 37,
  name: 'hoofdstukkaarten-fiqh-1a',
  reason: 'Hoofdstukkaart Fiqh (1), eenheid 1–3 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029l',
  cards: [u1, u2, u3]
})
