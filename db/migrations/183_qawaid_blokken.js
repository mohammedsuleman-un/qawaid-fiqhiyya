// القواعد الفقهية in een overzichtelijker indeling (16 nov 2026, op verzoek van Mohammed): binnen elke regel
// staan de stukken nu in blokken met zijn eigen kopjes uit het schrift (معنى القاعدة، الدليل، أمثلة …),
// bewijzen als gekleurde kaarten en uitspraken van geleerden als citaat. De tekst zelf en de volgorde zijn
// niet veranderd. Werkt de gepubliceerde versie van elk hoofdstuk bij in één query (gratis plan: max 50 per verzoek).
import { blocksToChapters } from '../../lib/chapters.js'
import qawaid from '../seed/qawaid/boek.js'

const SLUG = 'al-qawaid-al-fiqhiyya'

export default {
  id: 183,
  name: 'qawaid-blokken',
  up: [async (conn) => {
    const chapters = blocksToChapters(qawaid.blocks)
    const rows = await conn.execute(`SELECT c.slug, t.published_version_id AS vid FROM chapters c JOIN books b ON b.id = c.book_id
      JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar'
      WHERE b.slug = ? AND t.published_version_id IS NOT NULL`, [SLUG])
    const updates = rows.map((r) => [Number(r.vid), chapters[Number(r.slug) - 1]?.body]).filter(([, body]) => body)
    if (!updates.length) return
    await conn.execute(`UPDATE content_versions SET body = CASE id ${updates.map(() => 'WHEN ? THEN ?').join(' ')} END
      WHERE id IN (${updates.map(() => '?').join(',')})`, [...updates.flat(), ...updates.map(([id]) => id)])
  }],
  down: []
}
