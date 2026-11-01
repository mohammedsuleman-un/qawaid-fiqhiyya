// Studieomgeving voor تلخيص جمع الجوامع, deel b (zie migratie 146): de hoofdstukkaarten van
// eenheid 6–10 worden gepubliceerd. Eerst een back-up van alle studiekaarten; down zet ze terug.
import { unitCardsMigration } from './unit-cards.js'
import u6 from '../seed/talkhis/studie/eenheid6.js'
import u7 from '../seed/talkhis/studie/eenheid7.js'
import u8 from '../seed/talkhis/studie/eenheid8.js'
import u9 from '../seed/talkhis/studie/eenheid9.js'
import u10 from '../seed/talkhis/studie/eenheid10.js'

export default unitCardsMigration({
  id: 147,
  name: 'studie-talkhis-b',
  reason: 'Hoofdstukkaart تلخيص جمع الجوامع, eenheid 6–10 – op verzoek van Mohammed (1 nov 2026)',
  backup: '20261101b',
  cards: [u6, u7, u8, u9, u10]
})
