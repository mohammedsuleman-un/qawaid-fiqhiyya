// Hoofdstukkaarten voor eenheid 11, 12, 13, 14, 15 van Tafsir (4).
import { unitCardsMigration } from './unit-cards.js'
import u11 from '../seed/zad/studie/n4-tafsir-eenheid11.js'
import u12 from '../seed/zad/studie/n4-tafsir-eenheid12.js'
import u13 from '../seed/zad/studie/n4-tafsir-eenheid13.js'
import u14 from '../seed/zad/studie/n4-tafsir-eenheid14.js'
import u15 from '../seed/zad/studie/n4-tafsir-eenheid15.js'

export default unitCardsMigration({
  id: 128,
  name: 'hoofdstukkaarten-tafsir-4c',
  reason: 'Hoofdstukkaart Tafsir (4), eenheid 11–15 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zp',
  cards: [u11, u12, u13, u14, u15]
})
