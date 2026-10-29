// Migratie die hoofdstukkaarten publiceert, zoals migratie 11 en 12: eerst een back-up van alle
// studiekaarten in eigen tabellen, dan per eenheid een stap; down zet alles terug uit die back-up.
import { publishUnitCard } from './011_hoofdstukkaart_aqeedah1_eenheid1.js'

export function unitCardsMigration ({ id, name, reason, backup, cards }) {
  const BT = `zb_backup_${backup}_study_translations`
  const BV = `zb_backup_${backup}_study_versions`
  return {
    id,
    name,
    up: [
      async (conn) => {
        await conn.execute(`CREATE TABLE IF NOT EXISTS ${BT} LIKE content_translations`)
        await conn.execute(`CREATE TABLE IF NOT EXISTS ${BV} LIKE content_versions`)
        await conn.execute(`INSERT IGNORE INTO ${BT} SELECT * FROM content_translations WHERE entity_type = 'study'`)
        await conn.execute(`INSERT IGNORE INTO ${BV} SELECT v.* FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'study'`)
      },
      ...cards.map((card) => (conn) => publishUnitCard(conn, card, reason))
    ],
    down: [async (conn) => {
      await conn.execute("DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'study' AND v.reason = ?", [reason])
      await conn.execute(`UPDATE content_versions v JOIN ${BV} b ON b.id = v.id SET v.status = b.status`)
      await conn.execute(`UPDATE content_translations t JOIN ${BT} b ON b.id = t.id SET t.published_version_id = b.published_version_id, t.status = b.status, t.title = b.title`)
      await conn.execute(`DELETE FROM content_translations WHERE entity_type = 'study'
        AND id NOT IN (SELECT id FROM ${BT}) AND NOT EXISTS (SELECT 1 FROM content_versions v WHERE v.translation_id = content_translations.id)`)
      await conn.execute(`DROP TABLE IF EXISTS ${BV}`)
      await conn.execute(`DROP TABLE IF EXISTS ${BT}`)
    }]
  }
}
