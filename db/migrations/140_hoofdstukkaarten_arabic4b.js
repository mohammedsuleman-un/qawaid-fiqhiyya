// Hoofdstukkaarten voor eenheid 6, 7 van Arabisch (4).
import { unitCardsMigration } from './unit-cards.js'
import u6 from '../seed/zad/studie/n4-arabic-eenheid6.js'
import u7 from '../seed/zad/studie/n4-arabic-eenheid7.js'

export default unitCardsMigration({
  id: 140,
  name: 'hoofdstukkaarten-arabic-4b',
  reason: 'Hoofdstukkaart Arabisch (4), eenheid 6–7 – op verzoek van Mohammed (29 okt 2026: "Niveau 3 heeft geen overzichten. Alleen tekst")',
  backup: '20261029zzb',
  cards: [u6, u7]
})
