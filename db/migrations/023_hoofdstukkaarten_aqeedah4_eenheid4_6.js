// Hoofdstukkaarten voor eenheid 4–6 van Geloofsleer (4), vervolg van migratie 22.
import { unitCardsMigration } from './unit-cards.js'
import u4 from '../seed/zad/studie/n4-aqeedah-eenheid4.js'
import u5 from '../seed/zad/studie/n4-aqeedah-eenheid5.js'
import u6 from '../seed/zad/studie/n4-aqeedah-eenheid6.js'

export default unitCardsMigration({
  id: 23,
  name: 'hoofdstukkaarten-aqeedah-4-eenheid-4-6',
  reason: 'Hoofdstukkaart Geloofsleer (4), eenheid 4–6 – gepubliceerd op verzoek van Mohammed (29 okt 2026)',
  backup: '20261029g',
  cards: [u4, u5, u6]
})
