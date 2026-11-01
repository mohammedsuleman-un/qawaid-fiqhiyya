// Biografie-concepten voor de overige personen uit ZAD niveau 1 (Hadith, Tafsir, Sīra en Tarbiya),
// uit al-Aʿlām van az-Ziriklī. Bekende personen krijgen een tijdlijn, belangrijkste werken en bijdrage;
// de overigen blijven kort. Alles komt als concept ('in_review') in Beheer > Te beoordelen.
import { personBioDrafts } from '../../lib/register.js'
import { sanitizeHtml } from '../../lib/sanitize.js'
import z3 from '../seed/info/zad-personen-3.js'
import z4 from '../seed/info/zad-personen-4.js'
import z5 from '../seed/info/zad-personen-5.js'

const REASON = 'Concept uit al-Aʿlām (az-Ziriklī) voor ZAD niveau 1 (Hadith, Tafsir, Sīra, Tarbiya), met bronvermelding. Tijdlijn en werken volgen de bron; de alinea over de bijdrage is een samenvatting, graag controleren'

export default {
  id: 154,
  name: 'info-personen-zad-2',
  up: [
    (conn) => personBioDrafts(conn, z3, REASON, sanitizeHtml),
    (conn) => personBioDrafts(conn, z4, REASON, sanitizeHtml),
    (conn) => personBioDrafts(conn, z5, REASON, sanitizeHtml)
  ],
  down: [
    (conn) => conn.execute("DELETE FROM content_versions WHERE status = 'in_review' AND reason = ?", [REASON])
  ]
}
