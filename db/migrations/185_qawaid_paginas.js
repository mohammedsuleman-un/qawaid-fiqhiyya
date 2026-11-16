// القواعد الفقهية: nu de lijst van regels vooraan weg is (migratie 184), begint de paginanummering bij de
// inleiding met 1 in plaats van 5 (wens Mohammed, 16 nov 2026). Zelfde nummering als de PDF.
// Werkt de tekst (paginamarkeringen), de zoekindex en de paginanummers in het hadith-register bij.
import { blocksToChapters } from '../../lib/chapters.js'
import { searchText } from '../../lib/content.js'
import qawaid from '../seed/qawaid/boek.js'

const SLUG = 'al-qawaid-al-fiqhiyya'

export default {
  id: 185,
  name: 'qawaid-paginas-vanaf-1',
  up: [async (conn) => {
    const rows = await conn.execute(`SELECT b.id AS bid, t.id AS tid, t.title, v.id AS vid, v.body FROM chapters c JOIN books b ON b.id = c.book_id
      JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar'
      JOIN content_versions v ON v.id = t.published_version_id
      WHERE b.slug = ? ORDER BY c.position`, [SLUG])
    if (!rows.length || !rows[0].body.includes('id="p5"')) return // al vanaf 1 (nieuwe database)
    const chapters = blocksToChapters(qawaid.blocks)
    if (chapters.length !== rows.length) throw new Error(`qawaid: ${rows.length} hoofdstukken, seed ${chapters.length}`)
    const when = (n) => Array(n).fill('WHEN ? THEN ?').join(' ')
    const ins = (n) => Array(n).fill('?').join(',')
    await conn.execute(`UPDATE content_versions SET body = CASE id ${when(rows.length)} END WHERE id IN (${ins(rows.length)})`,
      [...rows.flatMap((r, i) => [r.vid, chapters[i].body]), ...rows.map((r) => r.vid)])
    await conn.execute(`UPDATE search_index SET plain = CASE translation_id ${when(rows.length)} END WHERE translation_id IN (${ins(rows.length)})`,
      [...rows.flatMap((r, i) => [r.tid, searchText(r.title, chapters[i].body)]), ...rows.map((r) => r.tid)])
    await conn.execute('UPDATE hadith_index SET page = page - 4 WHERE book_id = ? AND page > 4', [rows[0].bid])
  }],
  down: []
}
