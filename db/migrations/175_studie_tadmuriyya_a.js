// Studiekaarten voor الرسالة التدمرية (Ibn Taymiyya), op verzoek van Mohammed (8 nov 2026), in dezelfde
// opzet als de andere boeken: per eenheid overzicht, schema's, begrippen, fijne punten en toetsvragen.
// Deel a: eenheid 1–5, en de genoemde personen worden aan het boek gekoppeld. Eerst een back-up van
// alle studiekaarten; down zet alles terug.
import { unitCardsMigration } from './unit-cards.js'
import { linkPersons } from './172_studie_ahkam_a.js'
import u1 from '../seed/tadmuriyya/studie/eenheid1.js'
import u2 from '../seed/tadmuriyya/studie/eenheid2.js'
import u3 from '../seed/tadmuriyya/studie/eenheid3.js'
import u4 from '../seed/tadmuriyya/studie/eenheid4.js'
import u5 from '../seed/tadmuriyya/studie/eenheid5.js'

const BOOK = 'at-tadmuriyya'
const cards = [u1, u2, u3, u4, u5]
const m = unitCardsMigration({
  id: 175,
  name: 'studie-tadmuriyya-a',
  reason: 'Hoofdstukkaart الرسالة التدمرية, eenheid 1–5 – op verzoek van Mohammed (8 nov 2026)',
  backup: '20261108a',
  cards
})
m.up.push(linkPersons(cards, BOOK))
export default m
