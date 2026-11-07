// Samensteller (الملخِّص) van de twee nieuwe samenvattingen, opgegeven door Mohammed (7 nov 2026).
// Alleen invullen als het veld nog leeg is, zodat een latere wijziging in Beheer blijft staan.
export default {
  id: 167,
  name: 'samensteller-abu-ismail',
  up: [
    "UPDATE books SET summarizer = 'الشيخ أبو إسماعيل' WHERE slug IN ('talkhis-ahkam-al-quran', 'talkhis-al-ashbah-wan-nazair') AND summarizer = ''"
  ],
  down: [
    "UPDATE books SET summarizer = '' WHERE slug IN ('talkhis-ahkam-al-quran', 'talkhis-al-ashbah-wan-nazair') AND summarizer = 'الشيخ أبو إسماعيل'"
  ]
}
