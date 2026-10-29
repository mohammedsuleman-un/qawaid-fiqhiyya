// Hoofdstukkaarten voor eenheid 1, 2, 3, 4 van Hadith (3).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n3-hadith-eenheid1.js'
import u2 from '../seed/zad/studie/n3-hadith-eenheid2.js'
import u3 from '../seed/zad/studie/n3-hadith-eenheid3.js'
import u4 from '../seed/zad/studie/n3-hadith-eenheid4.js'

export default unitCardsMigration({
  id: 118,
  name: 'hoofdstukkaarten-hadith-3',
  reason: 'Hoofdstukkaart Hadith (3), eenheid 1–4 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zi',
  cards: [u1, u2, u3, u4]
})
