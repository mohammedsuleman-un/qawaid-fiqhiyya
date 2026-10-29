// ZAD per hoofdstuk: hoofdstukkaarten voor eenheid 2, 3 en 4 van العقيدة (١), op verzoek van
// Mohammed (29 okt 2026: "ik wil dat je alle vier boeken van aqiedah van de vier niveaus op deze
// manier verder maakt"). Zelfde werkwijze als migratie 11: eerst een back-up van alle
// studiekaarten, dan per eenheid een nieuwe gepubliceerde versie; down zet alles terug.
import { publishUnitCard } from './011_hoofdstukkaart_aqeedah1_eenheid1.js'
import unit2 from '../seed/zad/studie/n1-aqeedah-eenheid2.js'
import unit3 from '../seed/zad/studie/n1-aqeedah-eenheid3.js'
import unit4 from '../seed/zad/studie/n1-aqeedah-eenheid4.js'

export const UNITS_REASON = 'Hoofdstukkaart eenheid 2–4 – gepubliceerd op verzoek van Mohammed (29 okt 2026)'
const BT = 'zb_backup_20261029b_study_translations'
const BV = 'zb_backup_20261029b_study_versions'

export default {
  id: 12,
  name: 'hoofdstukkaarten-aqeedah-1-eenheid-2-4',
  up: [
    // Back-up van alle studiekaarten zoals ze nu zijn.
    async (conn) => {
      await conn.execute(`CREATE TABLE IF NOT EXISTS ${BT} LIKE content_translations`)
      await conn.execute(`CREATE TABLE IF NOT EXISTS ${BV} LIKE content_versions`)
      await conn.execute(`INSERT IGNORE INTO ${BT} SELECT * FROM content_translations WHERE entity_type = 'study'`)
      await conn.execute(`INSERT IGNORE INTO ${BV} SELECT v.* FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'study'`)
    },
    (conn) => publishUnitCard(conn, unit2, UNITS_REASON),
    (conn) => publishUnitCard(conn, unit3, UNITS_REASON),
    (conn) => publishUnitCard(conn, unit4, UNITS_REASON)
  ],
  down: [async (conn) => {
    await conn.execute("DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'study' AND v.reason = ?", [UNITS_REASON])
    await conn.execute(`UPDATE content_versions v JOIN ${BV} b ON b.id = v.id SET v.status = b.status`)
    await conn.execute(`UPDATE content_translations t JOIN ${BT} b ON b.id = t.id SET t.published_version_id = b.published_version_id, t.status = b.status, t.title = b.title`)
    await conn.execute(`DELETE FROM content_translations WHERE entity_type = 'study'
      AND id NOT IN (SELECT id FROM ${BT}) AND NOT EXISTS (SELECT 1 FROM content_versions v WHERE v.translation_id = content_translations.id)`)
    await conn.execute(`DROP TABLE IF EXISTS ${BV}`)
    await conn.execute(`DROP TABLE IF EXISTS ${BT}`)
  }]
}
