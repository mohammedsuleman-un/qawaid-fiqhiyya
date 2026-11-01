// Biografie-concepten voor personen uit ZAD niveau 1 (Geloofsleer, Arabisch en Fiqh), uit al-Aʿlām
// van az-Ziriklī. Bekende personen krijgen een tijdlijn, belangrijkste werken en bijdrage; de overigen
// blijven kort. Personen die ook in de Talkhīṣ staan maar in ZAD een andere slug hebben, krijgen een
// kopie van het Talkhīṣ-concept. Alles komt als concept ('in_review') in Beheer > Te beoordelen.
import { personBioDrafts } from '../../lib/register.js'
import { sanitizeHtml } from '../../lib/sanitize.js'
import a from '../seed/info/talkhis-personen-a.js'
import b from '../seed/info/talkhis-personen-b.js'
import c from '../seed/info/talkhis-personen-c.js'
import z1 from '../seed/info/zad-personen-1.js'
import z2 from '../seed/info/zad-personen-2.js'

const REASON = 'Concept uit al-Aʿlām (az-Ziriklī) voor ZAD niveau 1, met bronvermelding. Tijdlijn en werken volgen de bron; de alinea over de bijdrage is een samenvatting, graag controleren'
// (ibn-umar en ibn-hajar-al-asqalani zijn bij het registreren al samengevoegd met de Talkhīṣ-persoon.)
const SAME = { 'malik-ibn-anas': 'malik', 'suhayb-ar-rumi': 'suhayb' }
const talkhis = [...a, ...b, ...c]
const copies = Object.entries(SAME).map(([slug, from]) => ({ ...talkhis.find((p) => p.slug === from), slug }))

export default {
  id: 153,
  name: 'info-personen-zad-1',
  up: [
    (conn) => personBioDrafts(conn, z1, REASON, sanitizeHtml),
    (conn) => personBioDrafts(conn, z2, REASON, sanitizeHtml),
    (conn) => personBioDrafts(conn, copies, REASON, sanitizeHtml)
  ],
  down: [
    (conn) => conn.execute("DELETE FROM content_versions WHERE status = 'in_review' AND reason = ?", [REASON])
  ]
}
