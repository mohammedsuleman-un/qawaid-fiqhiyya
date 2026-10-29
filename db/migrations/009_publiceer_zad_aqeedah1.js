// Publiceert Geloofsleer (1) (zad-n1-aqeedah) op verzoek van Mohammed (29 okt 2026):
// het boek, van elke les per taal de nieuwste conceptversie, en de biografieën van de
// personen uit dit boek, behalve die met "Graag controleren" (die blijven concept).
// De opmerking "wacht op controle" verdwijnt uit de lesteksten.
import { publishZadBook } from '../../lib/zad.js'

export default {
  id: 9,
  name: 'publiceer-zad-aqeedah-1',
  up: [(conn) => publishZadBook(conn, 'zad-n1-aqeedah')],
  down: []
}
