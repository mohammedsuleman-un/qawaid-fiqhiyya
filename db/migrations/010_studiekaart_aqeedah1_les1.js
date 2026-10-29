// Eerste studiekaart (visuele studieomgeving) bij العقيدة (١), les 1, als CONCEPT in
// beide talen. Zichtbaar voor medewerkers via ?voorbeeld; openbaar pas na publicatie
// via de gewone workflow in het beheer. Bestaande lesteksten blijven ongewijzigd.
import { parseStudy } from '../../lib/study.js'
import card from '../seed/zad/studie/n1-aqeedah-1.js'

export const STUDY_REASON = 'Studiekaart – concept, wacht op controle'

export async function addStudy (conn, { book, chapter, ar, nl }) {
  const [c] = await conn.execute('SELECT c.id FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.slug = ? AND c.slug = ?', [book, chapter])
  if (!c) return 0
  const langs = { ar: parseStudy(ar), nl: parseStudy(nl) }
  await conn.execute("INSERT IGNORE INTO content_translations (entity_type, entity_id, lang, title) VALUES ('study', ?, 'ar', ?), ('study', ?, 'nl', ?)",
    [c.id, langs.ar.title, c.id, langs.nl.title])
  const tids = await conn.execute("SELECT t.id, t.lang, (SELECT COUNT(*) FROM content_versions v WHERE v.translation_id = t.id) AS n FROM content_translations t WHERE t.entity_type = 'study' AND t.entity_id = ?", [c.id])
  const rows = tids.filter((t) => Number(t.n) === 0).map((t) => [t.id, langs[t.lang].title, JSON.stringify(langs[t.lang]), STUDY_REASON, 'draft'])
  if (rows.length) {
    await conn.execute(`INSERT INTO content_versions (translation_id, title, body, reason, status) VALUES ${rows.map(() => '(?, ?, ?, ?, ?)').join(', ')}`, rows.flat())
  }
  return rows.length
}

export default {
  id: 10,
  name: 'studiekaart-aqeedah-1-les-1',
  up: [async (conn) => { await addStudy(conn, card) }],
  down: [async (conn) => {
    await conn.execute("DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE t.entity_type = 'study'")
    await conn.execute("DELETE FROM content_translations WHERE entity_type = 'study'")
  }]
}
