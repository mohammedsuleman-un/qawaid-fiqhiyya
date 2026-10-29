// Hoofdstukkaarten voor eenheid 4–6 van Geloofsleer (3), vervolg van migratie 18.
import { unitCardsMigration } from './unit-cards.js'
import u4 from '../seed/zad/studie/n3-aqeedah-eenheid4.js'
import u5 from '../seed/zad/studie/n3-aqeedah-eenheid5.js'
import u6 from '../seed/zad/studie/n3-aqeedah-eenheid6.js'

export default unitCardsMigration({
  id: 19,
  name: 'hoofdstukkaarten-aqeedah-3-eenheid-4-6',
  reason: 'Hoofdstukkaart Geloofsleer (3), eenheid 4–6 – gepubliceerd op verzoek van Mohammed (29 okt 2026)',
  backup: '20261029e',
  cards: [u4, u5, u6]
})
