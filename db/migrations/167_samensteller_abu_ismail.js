// Samensteller (الملخِّص) van تلخيص أحكام القرآن, opgegeven door Mohammed (7 nov 2026).
// Alleen invullen als het veld nog leeg is, zodat een latere wijziging in Beheer blijft staan.
export default {
  id: 167,
  name: 'samensteller-abu-ismail',
  up: [
    "UPDATE books SET summarizer = 'الشيخ أبو إسماعيل' WHERE slug = 'talkhis-ahkam-al-quran' AND summarizer = ''"
  ],
  down: [
    "UPDATE books SET summarizer = '' WHERE slug = 'talkhis-ahkam-al-quran' AND summarizer = 'الشيخ أبو إسماعيل'"
  ]
}
