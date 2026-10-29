// ZAD per hoofdstuk: één studiekaart voor heel eenheid 1 van العقيدة (١) (lessen 1–6),
// op verzoek van Mohammed (29 okt 2026: "Je mag deze wijzigingen direct implementeren op
// zuiverebron.nl. Maak vooraf een back-up en zorg dat wijzigingen herstelbaar zijn.").
// De kaart is een nieuwe versie van de studiekaart van les 1 (scope 'unit'); de kaart per les
// blijft als vorige versie bewaard. Eerst gaan alle studiekaarten naar back-uptabellen;
// down zet alles terug uit die back-up.
import { parseStudy } from '../../lib/study.js'
import card from '../seed/zad/studie/n1-aqeedah-eenheid1.js'

export const UNIT_REASON = 'Hoofdstukkaart eenheid 1 – gepubliceerd op verzoek van Mohammed (29 okt 2026)'
const BT = 'zb_backup_20261029_study_translations'
const BV = 'zb_backup_20261029_study_versions'

export default {
  id: 11,
  name: 'hoofdstukkaart-aqeedah-1-eenheid-1',
  up: [
    // Back-up van alle studiekaarten zoals ze nu zijn.
    async (conn) => {
      await conn.execute(`CREATE TABLE IF NOT EXISTS ${BT} LIKE content_translations`)
      await conn.execute(`CREATE TABLE IF NOT EXISTS ${BV} LIKE content_versions`)
      await conn.execute(`INSERT IGNORE INTO ${BT} SELECT * FROM content_translations WHERE entity_type = 'study'`)
      await conn.execute(`INSERT IGNORE INTO ${BV} SELECT v.* FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'study'`)
    },
    async (conn) => {
      const [c] = await conn.execute('SELECT c.id FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.slug = ? AND c.slug = ?', [card.book, card.chapter])
      if (!c) return
      const langs = { ar: parseStudy(card.ar), nl: parseStudy(card.nl) }
      await conn.execute("INSERT IGNORE INTO content_translations (entity_type, entity_id, lang, title) VALUES ('study', ?, 'ar', ?), ('study', ?, 'nl', ?)",
        [c.id, langs.ar.title, c.id, langs.nl.title])
      const tids = await conn.execute(`SELECT t.id, t.lang FROM content_translations t WHERE t.entity_type = 'study' AND t.entity_id = ?
        AND NOT EXISTS (SELECT 1 FROM content_versions v WHERE v.translation_id = t.id AND v.reason = ?)`, [c.id, UNIT_REASON])
      if (!tids.length) return
      const ids = tids.map((t) => t.id)
      const m = ids.map(() => '?').join(', ')
      await conn.execute(`UPDATE content_versions SET status = 'superseded' WHERE translation_id IN (${m}) AND status = 'published'`, ids)
      await conn.execute(`INSERT INTO content_versions (translation_id, title, body, reason, status, published_at) VALUES ${tids.map(() => "(?, ?, ?, ?, 'published', NOW())").join(', ')}`,
        tids.flatMap((t) => [t.id, langs[t.lang].title, JSON.stringify(langs[t.lang]), UNIT_REASON]))
      await conn.execute(`UPDATE content_translations t JOIN content_versions v ON v.translation_id = t.id AND v.reason = ?
        SET t.published_version_id = v.id, t.status = 'published', t.title = v.title WHERE t.id IN (${m})`, [UNIT_REASON, ...ids])
    }
  ],
  down: [async (conn) => {
    await conn.execute("DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'study' AND v.reason = ?", [UNIT_REASON])
    await conn.execute(`UPDATE content_versions v JOIN ${BV} b ON b.id = v.id SET v.status = b.status`)
    await conn.execute(`UPDATE content_translations t JOIN ${BT} b ON b.id = t.id SET t.published_version_id = b.published_version_id, t.status = b.status, t.title = b.title`)
    await conn.execute(`DROP TABLE IF EXISTS ${BV}`)
    await conn.execute(`DROP TABLE IF EXISTS ${BT}`)
  }]
}
