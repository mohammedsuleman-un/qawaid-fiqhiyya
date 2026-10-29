// Hoofdstukkaarten voor eenheid 1–3 van Geloofsleer (3), op verzoek van Mohammed (29 okt 2026:
// "ik wil dat je alle vier boeken van aqiedah van de vier niveaus op deze manier verder maakt").
// Zes kaarten passen niet binnen de limiet van één verzoek; eenheid 4–6 staan in migratie 19.
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n3-aqeedah-eenheid1.js'
import u2 from '../seed/zad/studie/n3-aqeedah-eenheid2.js'
import u3 from '../seed/zad/studie/n3-aqeedah-eenheid3.js'

export default unitCardsMigration({
  id: 18,
  name: 'hoofdstukkaarten-aqeedah-3-eenheid-1-3',
  reason: 'Hoofdstukkaart Geloofsleer (3), eenheid 1–3 – gepubliceerd op verzoek van Mohammed (29 okt 2026)',
  backup: '20261029d',
  cards: [u1, u2, u3]
})
