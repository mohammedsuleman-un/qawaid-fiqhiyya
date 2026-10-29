// Hoofdstukkaarten voor eenheid 1–3 van Islamitische opvoeding (1).
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n1-tarbiyah-eenheid1.js'
import u2 from '../seed/zad/studie/n1-tarbiyah-eenheid2.js'
import u3 from '../seed/zad/studie/n1-tarbiyah-eenheid3.js'

export default unitCardsMigration({
  id: 42,
  name: 'hoofdstukkaarten-tarbiyah-1a',
  reason: 'Hoofdstukkaart Islamitische opvoeding (1), eenheid 1–3 – gepubliceerd op verzoek van Mohammed (29 okt 2026: "met andere vakken ook")',
  backup: '20261029n',
  cards: [u1, u2, u3]
})
