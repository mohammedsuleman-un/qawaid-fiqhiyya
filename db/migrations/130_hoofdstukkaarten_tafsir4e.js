// Hoofdstukkaarten voor eenheid 21 van Tafsir (4).
import { unitCardsMigration } from './unit-cards.js'
import u21 from '../seed/zad/studie/n4-tafsir-eenheid21.js'

export default unitCardsMigration({
  id: 130,
  name: 'hoofdstukkaarten-tafsir-4e',
  reason: 'Hoofdstukkaart Tafsir (4), eenheid 21 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zr',
  cards: [u21]
})
