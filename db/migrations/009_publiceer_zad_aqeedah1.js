// Publiceert Geloofsleer (1) (zad-n1-aqeedah) op verzoek van Mohammed (29 okt 2026):
// het boek, van elke les per taal de nieuwste conceptversie, en de biografieën van de
// personen uit dit boek, behalve die met "Graag controleren" (die blijven concept).
// De opmerking "wacht op controle" verdwijnt uit de lesteksten.
import { insertMany, searchText } from '../../lib/content.js'
import { indexHadithMany } from '../../lib/register.js'

const SLUG = 'zad-n1-aqeedah'
const clean = (body) => body
  .replace(/\s*Status: concept, wacht op controle\.?/g, '')
  .replace(/،\s*بانتظار المراجعة/g, '')

export default {
  id: 9,
  name: 'publiceer-zad-aqeedah-1',
  up: [async (conn) => {
    const rows = await conn.execute(`SELECT t.id AS tid, t.lang, t.entity_id, c.book_id, c.position, v.id AS vid, v.title, v.body
      FROM content_translations t JOIN chapters c ON t.entity_type = 'chapter' AND c.id = t.entity_id AND c.archived_at IS NULL
      JOIN books b ON b.id = c.book_id JOIN content_versions v ON v.translation_id = t.id AND v.status = 'draft'
      WHERE b.slug = ? ORDER BY t.lang, c.position, v.id`, [SLUG])
    const latest = new Map()
    for (const r of rows) latest.set(Number(r.tid), r) // laatste (nieuwste) per vertaling
    const list = [...latest.values()]
    if (!list.length) return
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
    for (const r of list) r.body = clean(r.body)
    for (let i = 0; i < list.length; i += 15) {
      const part = list.slice(i, i + 15)
      await conn.execute(`INSERT INTO content_versions (id, translation_id, title, body) VALUES ${part.map(() => '(?, ?, ?, ?)').join(', ')}
        ON DUPLICATE KEY UPDATE body = VALUES(body), status = 'published', published_at = ?`,
      [...part.flatMap((r) => [r.vid, r.tid, r.title, r.body]), now])
    }
    const tids = list.map((r) => Number(r.tid))
    const vids = list.map((r) => Number(r.vid))
    const m = (a) => a.map(() => '?').join(', ')
    await conn.execute(`UPDATE content_versions SET status = 'superseded' WHERE translation_id IN (${m(tids)}) AND status IN ('draft', 'published') AND id NOT IN (${m(vids)})`, [...tids, ...vids])
    await conn.execute(`UPDATE content_translations t JOIN content_versions v ON v.translation_id = t.id AND v.status = 'published'
      SET t.published_version_id = v.id, t.status = 'published', t.title = v.title WHERE t.id IN (${m(tids)})`, tids)
    await conn.execute(`DELETE FROM search_index WHERE translation_id IN (${m(tids)})`, tids)
    await insertMany(conn, 'search_index', ['translation_id', 'entity_type', 'entity_id', 'lang', 'book_id', 'plain'],
      list.map((r) => [r.tid, 'chapter', r.entity_id, r.lang, r.book_id, searchText(r.title, r.body)]), 15)
    await conn.execute(`DELETE FROM hadith_index WHERE translation_id IN (${m(tids)})`, tids)
    await indexHadithMany(conn, list.map((r) => ({ translationId: Number(r.tid), entityId: Number(r.entity_id), lang: r.lang, bookId: Number(r.book_id), body: r.body })))
    await conn.execute("UPDATE books SET status = 'published' WHERE slug = ?", [SLUG])

    // Biografieën van de personen uit dit boek (zonder twijfelgevallen).
    const bios = await conn.execute(`SELECT v.id AS vid, t.id AS tid FROM person_books pb JOIN books b ON b.id = pb.book_id AND b.slug = ?
      JOIN persons p ON p.id = pb.person_id JOIN content_translations t ON t.entity_type = 'article' AND t.entity_id = p.article_id
      JOIN content_versions v ON v.translation_id = t.id AND v.status = 'draft' AND v.reason LIKE 'Uit ZAD-import%'
      WHERE t.published_version_id IS NULL AND v.body NOT LIKE '%controleren%'`, [SLUG])
    if (!bios.length) return
    const bv = bios.map((r) => Number(r.vid))
    const bt = bios.map((r) => Number(r.tid))
    await conn.execute(`UPDATE content_versions SET status = 'published', published_at = ? WHERE id IN (${m(bv)})`, [now, ...bv])
    await conn.execute(`UPDATE content_translations t JOIN content_versions v ON v.translation_id = t.id AND v.status = 'published'
      SET t.published_version_id = v.id, t.status = 'published' WHERE t.id IN (${m(bt)})`, bt)
  }],
  down: []
}
