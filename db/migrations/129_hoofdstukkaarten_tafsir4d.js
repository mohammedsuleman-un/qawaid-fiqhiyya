// Hoofdstukkaarten voor eenheid 16, 17, 18, 19, 20 van Tafsir (4).
import { unitCardsMigration } from './unit-cards.js'
import u16 from '../seed/zad/studie/n4-tafsir-eenheid16.js'
import u17 from '../seed/zad/studie/n4-tafsir-eenheid17.js'
import u18 from '../seed/zad/studie/n4-tafsir-eenheid18.js'
import u19 from '../seed/zad/studie/n4-tafsir-eenheid19.js'
import u20 from '../seed/zad/studie/n4-tafsir-eenheid20.js'

export default unitCardsMigration({
  id: 129,
  name: 'hoofdstukkaarten-tafsir-4d',
  reason: 'Hoofdstukkaart Tafsir (4), eenheid 16–20 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zq',
  cards: [u16, u17, u18, u19, u20]
})
