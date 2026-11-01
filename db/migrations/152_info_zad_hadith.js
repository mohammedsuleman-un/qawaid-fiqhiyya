// Concept-vindplaatsen voor de hadith uit alle ZAD-boeken (niveau 1–4), net als migratie 148 voor Talkhīṣ.
// Alleen zichtbaar in Beheer > Hadith; een mens neemt ze over in "bron" (of niet). De beoordeling
// (graad) blijft mensenwerk. Een al ingevulde bron blijft ongemoeid.
import { hadithKey } from '../../lib/register.js'
import { hadithDrafts } from './148_info_talkhis.js'
import zad from '../seed/info/zad-hadith.js'

export default {
  id: 152,
  name: 'info-hadith-zad',
  up: [
    'CREATE TABLE IF NOT EXISTS zb_backup_20261101b_hadith_notes LIKE hadith_notes',
    'INSERT INTO zb_backup_20261101b_hadith_notes SELECT * FROM hadith_notes',
    (conn) => hadithDrafts(conn, zad.slice(0, 450)),
    (conn) => hadithDrafts(conn, zad.slice(450))
  ],
  down: [
    // Zet de conceptvelden terug zoals ze vóór deze migratie waren.
    async (conn) => {
      const keys = []
      for (const h of zad) keys.push(await hadithKey(h.text))
      for (let i = 0; i < keys.length; i += 200) {
        const k = keys.slice(i, i + 200)
        await conn.execute(`UPDATE hadith_notes SET draft_source = '', draft_url = '' WHERE hkey IN (${k.map(() => '?').join(', ')})`, k)
      }
      await conn.execute(`UPDATE hadith_notes n JOIN zb_backup_20261101b_hadith_notes b ON b.hkey = n.hkey
        SET n.draft_source = b.draft_source, n.draft_url = b.draft_url`)
      await conn.execute(`DELETE n FROM hadith_notes n LEFT JOIN zb_backup_20261101b_hadith_notes b ON b.hkey = n.hkey
        WHERE b.hkey IS NULL AND n.source = '' AND n.grade = '' AND COALESCE(n.note, '') = ''`)
    },
    'DROP TABLE IF EXISTS zb_backup_20261101b_hadith_notes'
  ]
}
