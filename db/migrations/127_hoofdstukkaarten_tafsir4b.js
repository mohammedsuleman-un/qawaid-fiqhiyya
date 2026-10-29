// Hoofdstukkaarten voor eenheid 6, 7, 8, 9, 10 van Tafsir (4).
import { unitCardsMigration } from './unit-cards.js'
import u6 from '../seed/zad/studie/n4-tafsir-eenheid6.js'
import u7 from '../seed/zad/studie/n4-tafsir-eenheid7.js'
import u8 from '../seed/zad/studie/n4-tafsir-eenheid8.js'
import u9 from '../seed/zad/studie/n4-tafsir-eenheid9.js'
import u10 from '../seed/zad/studie/n4-tafsir-eenheid10.js'

export default unitCardsMigration({
  id: 127,
  name: 'hoofdstukkaarten-tafsir-4b',
  reason: 'Hoofdstukkaart Tafsir (4), eenheid 6–10 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zo',
  cards: [u6, u7, u8, u9, u10]
})
