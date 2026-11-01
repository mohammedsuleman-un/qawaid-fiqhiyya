// Biografie-concepten voor de overige Talkhīṣ-personen (84 personen, uit al-Aʿlām van az-Ziriklī).
// Op verzoek van Mohammed (1 nov 2026): bekende personen krijgen een uitgebreid verhaal met tijdlijn,
// belangrijkste boeken en bijdrage; minder bekende personen blijven kort. Alles komt als concept
// ('in_review') in Beheer > Te beoordelen en wordt pas zichtbaar na goedkeuring.
// De vijf korte voorbeelden uit migratie 148 worden vervangen door de uitgebreide versie: ze gaan
// terug naar 'draft' (niet verwijderd), zodat de beoordelingswachtrij geen dubbele concepten toont.
import { personBioDrafts } from '../../lib/register.js'
import { sanitizeHtml } from '../../lib/sanitize.js'
import a from '../seed/info/talkhis-personen-a.js'
import b from '../seed/info/talkhis-personen-b.js'
import c from '../seed/info/talkhis-personen-c.js'

const OLD = 'Concept uit al-Aʿlām (az-Ziriklī), met bronvermelding; graag controleren'
const REASON = 'Concept uit al-Aʿlām (az-Ziriklī), met bronvermelding. Tijdlijn en werken volgen de bron; de alinea over de bijdrage is een samenvatting, graag controleren'

export default {
  id: 151,
  name: 'info-personen-talkhis-uitgebreid',
  up: [
    (conn) => conn.execute("UPDATE content_versions SET status = 'draft' WHERE status = 'in_review' AND reason = ?", [OLD]),
    (conn) => personBioDrafts(conn, a, REASON, sanitizeHtml),
    (conn) => personBioDrafts(conn, b, REASON, sanitizeHtml),
    (conn) => personBioDrafts(conn, c, REASON, sanitizeHtml)
  ],
  down: [
    (conn) => conn.execute("DELETE FROM content_versions WHERE status = 'in_review' AND reason = ?", [REASON]),
    (conn) => conn.execute("UPDATE content_versions SET status = 'in_review' WHERE status = 'draft' AND reason = ?", [OLD])
  ]
}
