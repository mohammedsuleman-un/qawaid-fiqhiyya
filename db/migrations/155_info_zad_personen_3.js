// Biografie-concepten voor personen uit ZAD niveau 2 tot 4, uit al-Aʿlām van az-Ziriklī.
// Bekende personen krijgen een tijdlijn, belangrijkste werken en bijdrage; de overigen blijven kort.
// Alles komt als concept ('in_review') in Beheer > Te beoordelen.
import { personBioDrafts } from '../../lib/register.js'
import { sanitizeHtml } from '../../lib/sanitize.js'
import z6 from '../seed/info/zad-personen-6.js'
import z7 from '../seed/info/zad-personen-7.js'

const REASON = 'Concept uit al-Aʿlām (az-Ziriklī) voor ZAD niveau 2 tot 4, met bronvermelding. Tijdlijn en werken volgen de bron; de alinea over de bijdrage is een samenvatting, graag controleren'

export default {
  id: 155,
  name: 'info-personen-zad-3',
  up: [
    (conn) => personBioDrafts(conn, z6, REASON, sanitizeHtml),
    (conn) => personBioDrafts(conn, z7, REASON, sanitizeHtml)
  ],
  down: [
    (conn) => conn.execute("DELETE FROM content_versions WHERE status = 'in_review' AND reason = ?", [REASON])
  ]
}
