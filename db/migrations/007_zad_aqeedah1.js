// Het hele boek العقيدة (١) (24 lessen, begrippen, vragen en genoemde personen),
// opnieuw geïmporteerd als concept. Bestaande lessen krijgen een nieuwe conceptversie.
import { importZad } from '../../lib/zad.js'
import { addPersons } from '../../lib/register.js'
import { sanitizeHtml } from '../../lib/sanitize.js'
import aqeedah1 from '../seed/zad/n1-aqeedah.js'

export default {
  id: 7,
  name: 'zad-aqeedah-1',
  up: [async (conn) => {
    // Een nieuwe database kreeg de lessen al in migratie 6; dan alleen de personen.
    const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM content_translations t JOIN chapters c ON t.entity_type = 'chapter' AND c.id = t.entity_id
      JOIN books b ON b.id = c.book_id WHERE b.slug = 'zad-n1-aqeedah' AND t.lang = 'nl'`)
    if (Number(n) < aqeedah1.lessons.length) await importZad(conn, aqeedah1)
    else await addPersons(conn, aqeedah1.persons, 'Uit ZAD-import zad-n1-aqeedah: concept, wacht op controle', sanitizeHtml)
  }],
  down: []
}
