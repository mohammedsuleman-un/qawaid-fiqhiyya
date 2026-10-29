// Publiceert Geloofsleer (2) (zad-n2-aqeedah) op verzoek van Mohammed (29 okt 2026: "ik wil dat
// je alle vier boeken van aqiedah van de vier niveaus op deze manier verder maakt"). Zelfde
// werkwijze als Geloofsleer (1): twijfelachtige biografieën blijven concept.
import { publishZadBook } from '../../lib/zad.js'

export default {
  id: 14,
  name: 'publiceer-zad-aqeedah-2',
  up: [(conn) => publishZadBook(conn, 'zad-n2-aqeedah')],
  down: []
}
