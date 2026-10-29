// Hoofdstukkaarten voor eenheid 1, 2, 3, 4 van Hadith (4).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n4-hadith-eenheid1.js'
import u2 from '../seed/zad/studie/n4-hadith-eenheid2.js'
import u3 from '../seed/zad/studie/n4-hadith-eenheid3.js'
import u4 from '../seed/zad/studie/n4-hadith-eenheid4.js'

export default unitCardsMigration({
  id: 131,
  name: 'hoofdstukkaarten-hadith-4',
  reason: 'Hoofdstukkaart Hadith (4), eenheid 1–4 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zs',
  cards: [u1, u2, u3, u4]
})
