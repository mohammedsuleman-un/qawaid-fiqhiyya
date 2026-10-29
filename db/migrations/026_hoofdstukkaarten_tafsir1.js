// Hoofdstukkaarten voor de vier eenheden van Koranuitleg (1).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n1-tafsir-eenheid1.js'
import u2 from '../seed/zad/studie/n1-tafsir-eenheid2.js'
import u3 from '../seed/zad/studie/n1-tafsir-eenheid3.js'
import u4 from '../seed/zad/studie/n1-tafsir-eenheid4.js'

export default unitCardsMigration({
  id: 26,
  name: 'hoofdstukkaarten-tafsir-1',
  reason: 'Hoofdstukkaart Koranuitleg (1), eenheid 1–4 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029h',
  cards: [u1, u2, u3, u4]
})
