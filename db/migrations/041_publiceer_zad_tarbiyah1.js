// Publiceert Islamitische opvoeding (1) (zad-n1-tarbiyah) op verzoek van Mohammed (29 okt 2026: "met andere vakken ook").
// Zelfde werkwijze als de andere ZAD-boeken: twijfelachtige biografieën blijven concept.
import { publishZadBook } from '../../lib/zad.js'

export default {
  id: 41,
  name: 'publiceer-zad-tarbiyah-1',
  up: [(conn) => publishZadBook(conn, 'zad-n1-tarbiyah')],
  down: []
}
