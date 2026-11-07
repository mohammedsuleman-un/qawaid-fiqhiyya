// Veld "الملخِّص" (samenvatting door) per boek, op verzoek van Mohammed (7 nov 2026): bij elke
// boeksamenvatting de naam tonen van wie haar samenstelde. In te stellen in Beheer > boek.
// Voor تلخيص جمع الجوامع meteen ingevuld met الأستاذ يوسف (alleen als het veld nog leeg is).
export default {
  id: 160,
  name: 'samensteller',
  up: [
    "ALTER TABLE books ADD COLUMN IF NOT EXISTS summarizer VARCHAR(255) NOT NULL DEFAULT ''",
    "UPDATE books SET summarizer = 'الأستاذ يوسف' WHERE slug = 'talkhis-jam-al-jawami' AND summarizer = ''"
  ],
  down: [
    'ALTER TABLE books DROP COLUMN IF EXISTS summarizer'
  ]
}
