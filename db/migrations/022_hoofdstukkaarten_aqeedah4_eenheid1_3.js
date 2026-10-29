// Hoofdstukkaarten voor eenheid 1–3 van Geloofsleer (4); eenheid 4–6 volgen in migratie 23.
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n4-aqeedah-eenheid1.js'
import u2 from '../seed/zad/studie/n4-aqeedah-eenheid2.js'
import u3 from '../seed/zad/studie/n4-aqeedah-eenheid3.js'

export default unitCardsMigration({
  id: 22,
  name: 'hoofdstukkaarten-aqeedah-4-eenheid-1-3',
  reason: 'Hoofdstukkaart Geloofsleer (4), eenheid 1–3 – gepubliceerd op verzoek van Mohammed (29 okt 2026)',
  backup: '20261029f',
  cards: [u1, u2, u3]
})
