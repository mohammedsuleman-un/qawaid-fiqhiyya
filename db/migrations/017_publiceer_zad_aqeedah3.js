// Publiceert Geloofsleer (3) (zad-n3-aqeedah) op verzoek van Mohammed (29 okt 2026: "ik wil dat
// je alle vier boeken van aqiedah van de vier niveaus op deze manier verder maakt"). Zelfde
// werkwijze als Geloofsleer (1): twijfelachtige biografieën blijven concept.
import { publishZadBook } from '../../lib/zad.js'

export default {
  id: 17,
  name: 'publiceer-zad-aqeedah-3',
  up: [(conn) => publishZadBook(conn, 'zad-n3-aqeedah')],
  down: []
}
