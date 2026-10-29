// Hoofdstukkaarten voor de vijf eenheden van Geloofsleer (2), op verzoek van Mohammed (29 okt
// 2026: "ik wil dat je alle vier boeken van aqiedah van de vier niveaus op deze manier verder maakt").
import { unitCardsMigration } from './unit-cards.js'
import u1 from '../seed/zad/studie/n2-aqeedah-eenheid1.js'
import u2 from '../seed/zad/studie/n2-aqeedah-eenheid2.js'
import u3 from '../seed/zad/studie/n2-aqeedah-eenheid3.js'
import u4 from '../seed/zad/studie/n2-aqeedah-eenheid4.js'
import u5 from '../seed/zad/studie/n2-aqeedah-eenheid5.js'

export default unitCardsMigration({
  id: 15,
  name: 'hoofdstukkaarten-aqeedah-2',
  reason: 'Hoofdstukkaart Geloofsleer (2) – gepubliceerd op verzoek van Mohammed (29 okt 2026)',
  backup: '20261029c',
  cards: [u1, u2, u3, u4, u5]
})
