// Vult de vindplaats (التخريج) aan voor de hadith die na migratie 156 nog geen bron hadden, op verzoek van
// Mohammed (1 nov 2026: "heb je de info van alle hadith opgezocht? je kan ze online zetten"). Gezocht in de
// negen hadithboeken (tekst van sunnah.com). Alleen de vindplaats wordt gezet, nooit een graad, en alleen
// waar nog geen bron stond. Herstelbaar: de oude rijen staan in de back-uptabel.
import { hadithDrafts } from './148_info_talkhis.js'
import aanvulling from '../seed/info/hadith-aanvulling.js'
import { hadithKey } from '../../lib/register.js'

const H = 'zb_backup_20261101d_hadith_notes'
const N = 'zb_backup_20261101d_hadith_new'

export default {
  id: 158,
  name: 'info-hadith-aanvulling',
  up: [
    `CREATE TABLE IF NOT EXISTS ${H} LIKE hadith_notes`,
    `CREATE TABLE IF NOT EXISTS ${N} (hkey CHAR(64) PRIMARY KEY)`,
    async (conn) => {
      // Alles in een paar queries: /api/setup mag per aanroep maar een beperkt aantal queries doen.
      const items = await Promise.all(aanvulling.map(async (h) => ({ ...h, k: await hadithKey(h.text) })))
      if (!items.length) return
      const keys = [...new Set(items.map((h) => h.k))]
      const marks = keys.map(() => '?').join(', ')
      await conn.execute(`INSERT INTO ${H} SELECT * FROM hadith_notes WHERE hkey IN (${marks})`, keys)
      const rows = await conn.execute(`SELECT hkey, source, draft_source FROM hadith_notes WHERE hkey IN (${marks})`, keys)
      const have = new Map(rows.map((r) => [r.hkey, r]))
      const fresh = keys.filter((k) => !have.has(k))
      if (fresh.length) await conn.execute(`INSERT IGNORE INTO ${N} (hkey) VALUES ${fresh.map(() => '(?)').join(', ')}`, fresh)
      // Alleen rijen zonder bron krijgen het concept; een bestaande bron of beoordeling blijft staan.
      const seen = new Set()
      const empty = items.filter((h) => {
        if (seen.has(h.k)) return false
        seen.add(h.k)
        const r = have.get(h.k)
        return !r || (!r.source && !r.draft_source)
      })
      await hadithDrafts(conn, empty)
    },
    `UPDATE hadith_notes SET source = LEFT(draft_source, 500)
      WHERE source = '' AND draft_source <> '' AND (hkey IN (SELECT hkey FROM ${H}) OR hkey IN (SELECT hkey FROM ${N}))`
  ],
  down: [
    `UPDATE hadith_notes n JOIN ${H} b ON b.hkey = n.hkey
      SET n.source = b.source, n.draft_source = b.draft_source, n.draft_url = b.draft_url`,
    `DELETE FROM hadith_notes WHERE hkey IN (SELECT hkey FROM ${N})`,
    `DROP TABLE IF EXISTS ${N}`,
    `DROP TABLE IF EXISTS ${H}`
  ]
}
