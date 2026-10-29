// Publiceert Arabische taal (1) (zad-n1-arabic) op verzoek van Mohammed (29 okt 2026: "met andere vakken ook").
// Zelfde werkwijze als de andere ZAD-boeken: twijfelachtige biografieën blijven concept.
import { publishZadBook } from '../../lib/zad.js'

export default {
  id: 46,
  name: 'publiceer-zad-arabic-1',
  up: [(conn) => publishZadBook(conn, 'zad-n1-arabic')],
  down: []
}
