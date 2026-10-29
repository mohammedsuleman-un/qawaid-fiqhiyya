// Publiceert Profetische biografie (1) (zad-n1-seerah) op verzoek van Mohammed (29 okt 2026: "met andere
// vakken ook"). Zelfde werkwijze als Geloofsleer (1)–(4): twijfelachtige biografieën blijven concept.
import { publishZadBook } from '../../lib/zad.js'

export default {
  id: 31,
  name: 'publiceer-zad-sira-1',
  up: [(conn) => publishZadBook(conn, 'zad-n1-seerah')],
  down: []
}
