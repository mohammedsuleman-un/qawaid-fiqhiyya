// Eerste studiekaart (visuele studieomgeving) bij العقيدة (١), les 1, in beide talen.
// Gepubliceerd op verzoek van Mohammed (29 okt 2026: "zet hem online"). Volgende kaarten
// komen via addStudy als concept binnen en worden in het beheer gepubliceerd.
// Bestaande lesteksten blijven ongewijzigd.
import { parseStudy } from '../../lib/study.js'
import card from '../seed/zad/studie/n1-aqeedah-1.js'

export const STUDY_REASON = 'Studiekaart – concept, wacht op controle'
const PUBLISHED_REASON = 'Studiekaart – gepubliceerd op verzoek van Mohammed (29 okt 2026)'

export async function addStudy (conn, { book, chapter, ar, nl }, { publish = false } = {}) {
  const [c] = await conn.execute('SELECT c.id FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.slug = ? AND c.slug = ?', [book, chapter])
  if (!c) return 0
  const langs = { ar: parseStudy(ar), nl: parseStudy(nl) }
  await conn.execute("INSERT IGNORE INTO content_translations (entity_type, entity_id, lang, title) VALUES ('study', ?, 'ar', ?), ('study', ?, 'nl', ?)",
    [c.id, langs.ar.title, c.id, langs.nl.title])
  const tids = await conn.execute("SELECT t.id, t.lang, (SELECT COUNT(*) FROM content_versions v WHERE v.translation_id = t.id) AS n FROM content_translations t WHERE t.entity_type = 'study' AND t.entity_id = ?", [c.id])
  const fresh = tids.filter((t) => Number(t.n) === 0)
  const rows = fresh.map((t) => [t.id, langs[t.lang].title, JSON.stringify(langs[t.lang]), publish ? PUBLISHED_REASON : STUDY_REASON, publish ? 'published' : 'draft'])
  if (!rows.length) return 0
  await conn.execute(`INSERT INTO content_versions (translation_id, title, body, reason, status, published_at) VALUES ${rows.map(() => `(?, ?, ?, ?, ?, ${publish ? 'NOW()' : 'NULL'})`).join(', ')}`, rows.flat())
  if (publish) {
    const ids = fresh.map((t) => t.id)
    await conn.execute(`UPDATE content_translations t JOIN content_versions v ON v.translation_id = t.id AND v.status = 'published'
      SET t.published_version_id = v.id, t.status = 'published' WHERE t.id IN (${ids.map(() => '?').join(', ')})`, ids)
  }
  return rows.length
}

export default {
  id: 10,
  name: 'studiekaart-aqeedah-1-les-1',
  up: [async (conn) => { await addStudy(conn, card, { publish: true }) }],
  down: [async (conn) => {
    await conn.execute("DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'study'")
    await conn.execute("DELETE FROM content_translations WHERE entity_type = 'study'")
  }]
}
