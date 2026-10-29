// Hoofdstukkaarten voor eenheid 1–3 van Arabische taal (1).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n1-arabic-eenheid1.js'
import u2 from '../seed/zad/studie/n1-arabic-eenheid2.js'
import u3 from '../seed/zad/studie/n1-arabic-eenheid3.js'

export default unitCardsMigration({
  id: 47,
  name: 'hoofdstukkaarten-arabic-1a',
  reason: 'Hoofdstukkaart Arabische taal (1), eenheid 1–3 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029p',
  cards: [u1, u2, u3]
})
