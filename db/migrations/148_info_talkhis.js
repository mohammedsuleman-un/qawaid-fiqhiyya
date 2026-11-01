// Concept-informatie bij hadith en personen. Hadith: automatisch gevonden plaatsen in de hadithboeken, alleen
// zichtbaar in Beheer. Een mens neemt ze over in "bron" (of niet); de beoordeling blijft mensenwerk.
// Personen: biografie-concepten in de beoordelingswachtrij.
// Op verzoek van Mohammed (1 nov 2026): "we moeten wel info van de personen en hadith toevoegen".
import { hadithKey, personBioDrafts } from '../../lib/register.js'
import { sanitizeHtml } from '../../lib/sanitize.js'
import talkhis from '../seed/info/talkhis-jam-al-jawami-hadith.js'
import talkhisPersonen from '../seed/info/talkhis-personen.js'

// Zet concepten bij hadith (lijst [{text, source, url}]); een ingevulde bron blijft ongemoeid.
export async function hadithDrafts (conn, list) {
  if (!list.length) return
  const rows = []
  for (const h of list) rows.push([await hadithKey(h.text), String(h.source).slice(0, 1000), String(h.url || '').slice(0, 500)])
  await conn.execute(`INSERT INTO hadith_notes (hkey, draft_source, draft_url) VALUES ${rows.map(() => '(?, ?, ?)').join(', ')}
    ON DUPLICATE KEY UPDATE draft_source = VALUES(draft_source), draft_url = VALUES(draft_url)`, rows.flat())
}

const REASON = 'Concept uit al-Aʿlām (az-Ziriklī), met bronvermelding; graag controleren'

export default {
  id: 148,
  name: 'info-hadith-personen-talkhis',
  up: [
    'CREATE TABLE IF NOT EXISTS zb_backup_20261101_hadith_notes AS SELECT * FROM hadith_notes',
    "ALTER TABLE hadith_notes ADD COLUMN draft_source VARCHAR(1000) NOT NULL DEFAULT '', ADD COLUMN draft_url VARCHAR(500) NOT NULL DEFAULT ''",
    (conn) => hadithDrafts(conn, talkhis),
    // Voorbeeld van vijf biografieën uit al-Aʿlām, ter beoordeling.
    (conn) => personBioDrafts(conn, talkhisPersonen, REASON, sanitizeHtml)
  ],
  down: [
    (conn) => conn.execute("DELETE FROM content_versions WHERE status = 'in_review' AND reason = ?", [REASON]),
    'ALTER TABLE hadith_notes DROP COLUMN draft_source, DROP COLUMN draft_url',
    'DROP TABLE IF EXISTS zb_backup_20261101_hadith_notes'
  ]
}
