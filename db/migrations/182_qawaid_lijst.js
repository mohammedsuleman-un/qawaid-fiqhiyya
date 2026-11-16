// القواعد الفقهية: de lijst van regels vooraan stopte in het schrift bij ٩٢. Op verzoek van Mohammed
// (16 nov 2026) zijn ٩٣–١٠٠ aangevuld met de koppen uit de uitwerking. Dit werkt het eerste
// hoofdstuk (de lijst) bij in de gepubliceerde versie en in de zoekindex.
import { blocksToChapters } from '../../lib/chapters.js'
import { searchText } from '../../lib/content.js'
import qawaid from '../seed/qawaid/boek.js'

const SLUG = 'al-qawaid-al-fiqhiyya'

export default {
  id: 182,
  name: 'qawaid-lijst-93-100',
  up: [async (conn) => {
    const [first] = blocksToChapters(qawaid.blocks)
    const rows = await conn.execute(`SELECT t.id AS tid, t.published_version_id AS vid FROM chapters c JOIN books b ON b.id = c.book_id
      JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar'
      WHERE b.slug = ? AND c.slug = '1'`, [SLUG])
    if (!rows.length || !rows[0].vid) return
    await conn.execute('UPDATE content_versions SET body = ? WHERE id = ?', [first.body, rows[0].vid])
    await conn.execute('UPDATE search_index SET plain = ? WHERE translation_id = ?', [searchText('قائمة القواعد', first.body), rows[0].tid])
  }],
  down: []
}
