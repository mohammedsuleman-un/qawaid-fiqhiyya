// Hoofdstukkaarten voor de vier eenheden van Hadith (1).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n1-hadith-eenheid1.js'
import u2 from '../seed/zad/studie/n1-hadith-eenheid2.js'
import u3 from '../seed/zad/studie/n1-hadith-eenheid3.js'
import u4 from '../seed/zad/studie/n1-hadith-eenheid4.js'

export default unitCardsMigration({
  id: 29,
  name: 'hoofdstukkaarten-hadith-1',
  reason: 'Hoofdstukkaart Hadith (1), eenheid 1–4 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029i',
  cards: [u1, u2, u3, u4]
})
