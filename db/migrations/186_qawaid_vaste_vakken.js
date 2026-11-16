// القواعد الفقهية: elke regel in vaste vakken (begrippen, betekenis, bewijzen, opmerkingen, voorbeelden,
// uitspraken van geleerden), zoals het voorbeeld dat Mohammed op 16 nov 2026 goedkeurde. De woorden blijven
// gelijk; alleen de indeling en een paar eigen kopjes zijn nieuw. Werkt de tekst en de zoekindex bij.
// Het hadith-register blijft staan: de paginanummers daarin kloppen al.
import { blocksToChapters } from '../../lib/chapters.js'
import { searchText } from '../../lib/content.js'
import qawaid from '../seed/qawaid/boek.js'

const SLUG = 'al-qawaid-al-fiqhiyya'

export default {
  id: 186,
  name: 'qawaid-vaste-vakken',
  up: [async (conn) => {
    const rows = await conn.execute(`SELECT t.id AS tid, t.title, v.id AS vid, v.body FROM chapters c JOIN books b ON b.id = c.book_id
      JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar'
      JOIN content_versions v ON v.id = t.published_version_id
      WHERE b.slug = ? ORDER BY c.position`, [SLUG])
    if (!rows.length || rows.some((r) => r.body.includes('class="qs '))) return // al omgezet (nieuwe database)
    const chapters = blocksToChapters(qawaid.blocks)
    if (chapters.length !== rows.length) throw new Error(`qawaid: ${rows.length} hoofdstukken, seed ${chapters.length}`)
    const when = (n) => Array(n).fill('WHEN ? THEN ?').join(' ')
    const ins = (n) => Array(n).fill('?').join(',')
    await conn.execute(`UPDATE content_versions SET body = CASE id ${when(rows.length)} END WHERE id IN (${ins(rows.length)})`,
      [...rows.flatMap((r, i) => [r.vid, chapters[i].body]), ...rows.map((r) => r.vid)])
    await conn.execute(`UPDATE search_index SET plain = CASE translation_id ${when(rows.length)} END WHERE translation_id IN (${ins(rows.length)})`,
      [...rows.flatMap((r, i) => [r.tid, searchText(r.title, chapters[i].body)]), ...rows.map((r) => r.tid)])
  }],
  down: []
}
