// Mohammed (7 nov 2026): تلخيص الأشباه والنظائر blijft zonder samensteller. Maakt migratie 167 voor dat boek ongedaan.
export default {
  id: 169,
  name: 'ashbah-zonder-samensteller',
  up: [
    "UPDATE books SET summarizer = '' WHERE slug = 'talkhis-al-ashbah-wan-nazair' AND summarizer = 'الشيخ أبو إسماعيل'"
  ],
  down: []
}
