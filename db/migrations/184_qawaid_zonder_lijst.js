// القواعد الفقهية: de lijst van regels vooraan (hoofdstuk 'قائمة القواعد') stond dubbel, want de
// inhoudsopgave toont dezelfde lijst al. Op verzoek van Mohammed (16 nov 2026) gaat dat hoofdstuk weg.
// De andere hoofdstukken houden hun adres (/boek/al-qawaid-al-fiqhiyya/<nummer>). De PDF houdt de lijst.
const SLUG = 'al-qawaid-al-fiqhiyya'

export default {
  id: 184,
  name: 'qawaid-zonder-lijst',
  up: [async (conn) => {
    const rows = await conn.execute(`SELECT c.id FROM chapters c JOIN books b ON b.id = c.book_id
      JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar'
      WHERE b.slug = ? AND t.title = 'قائمة القواعد'`, [SLUG])
    if (!rows.length) return
    const id = Number(rows[0].id)
    await conn.execute(`DELETE FROM search_index WHERE entity_type = 'chapter' AND entity_id = ?`, [id])
    await conn.execute(`DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id
      WHERE t.entity_type = 'chapter' AND t.entity_id = ?`, [id])
    await conn.execute(`DELETE FROM content_translations WHERE entity_type = 'chapter' AND entity_id = ?`, [id])
    await conn.execute('DELETE FROM chapters WHERE id = ?', [id])
  }],
  down: []
}
