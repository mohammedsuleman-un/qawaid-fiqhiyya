// Tafsir (4), Hadith (4) en Sīra (4) publiceren. Mohammed, 29 okt 2026: "Je mag alles publiceren".
// Tafsir (4) was al gepubliceerd (migratie 102) maar stond daarna weer op concept; dit zet het opnieuw live.
// Eén boek per migratie (querylimiet); twijfelachtige biografieën blijven concept (publishZadBook).
import { publishZadBook } from '../../lib/zad.js'

const BOOKS = ['zad-n4-tafsir', 'zad-n4-hadith', 'zad-n4-seerah']

export default BOOKS.map((slug, i) => ({
  id: 107 + i,
  name: 'publiceer-' + slug + (slug === 'zad-n4-tafsir' ? '-opnieuw' : ''),
  up: [async (conn) => {
    await publishZadBook(conn, slug)
    // publishZadBook zet de status alleen als er nog conceptversies zijn; bij een al gepubliceerd boek ook.
    await conn.execute("UPDATE books SET status = 'published' WHERE slug = ?", [slug])
  }],
  down: []
}))
