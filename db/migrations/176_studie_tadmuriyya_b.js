// Studiekaarten voor الرسالة التدمرية (Ibn Taymiyya), op verzoek van Mohammed (8 nov 2026), in dezelfde
// opzet als de andere boeken: per eenheid overzicht, schema's, begrippen, fijne punten en toetsvragen.
// Deel b: eenheid 6–10, en de genoemde personen worden aan het boek gekoppeld. Eerst een back-up van
// alle studiekaarten; down zet alles terug.
import { unitCardsMigration } from './unit-cards.js'
import { linkPersons } from './172_studie_ahkam_a.js'
import u6 from '../seed/tadmuriyya/studie/eenheid6.js'
import u7 from '../seed/tadmuriyya/studie/eenheid7.js'
import u8 from '../seed/tadmuriyya/studie/eenheid8.js'
import u9 from '../seed/tadmuriyya/studie/eenheid9.js'
import u10 from '../seed/tadmuriyya/studie/eenheid10.js'

const BOOK = 'at-tadmuriyya'
const cards = [u6, u7, u8, u9, u10]
const m = unitCardsMigration({
  id: 176,
  name: 'studie-tadmuriyya-b',
  reason: 'Hoofdstukkaart الرسالة التدمرية, eenheid 6–10 – op verzoek van Mohammed (8 nov 2026)',
  backup: '20261108b',
  cards
})
m.up.push(linkPersons(cards, BOOK))
export default m
