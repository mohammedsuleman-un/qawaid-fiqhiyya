// Niveau 3 (de zes boeken naast Geloofsleer (3), die al sinds migratie 17 live is) en Tafsir (4) publiceren. Mohammed, 29 okt 2026: "Je mag ze publiceren."
// Eén boek per migratie (querylimiet); twijfelachtige biografieën blijven concept (publishZadBook).
import { publishZadBook } from '../../lib/zad.js'

const BOOKS = ['zad-n3-tafsir', 'zad-n3-hadith', 'zad-n3-seerah', 'zad-n3-fiqh', 'zad-n3-tarbiyah', 'zad-n3-arabic', 'zad-n4-tafsir']

export default BOOKS.map((slug, i) => ({
  id: 96 + i,
  name: 'publiceer-' + slug,
  up: [(conn) => publishZadBook(conn, slug)],
  down: []
}))
