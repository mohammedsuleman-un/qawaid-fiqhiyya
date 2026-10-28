// PATCH {move: 'up'|'down'} of {archived: true|false}: hoofdstuk verplaatsen of archiveren.
import { json, body, need, fail, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  const chapterId = id(params.id)
  const input = await body(request)
  const [ch] = await conn.execute('SELECT id, book_id, position FROM chapters WHERE id = ?', [chapterId])
  if (!ch) fail(404, 'Hoofdstuk niet gevonden')
  if (input.move) {
    need(user, 'content.create')
    const [other] = await conn.execute(`SELECT id, position FROM chapters WHERE book_id = ? AND position ${input.move === 'up' ? '<' : '>'} ?
      ORDER BY position ${input.move === 'up' ? 'DESC' : 'ASC'} LIMIT 1`, [ch.book_id, ch.position])
    if (other) {
      await conn.execute('UPDATE chapters SET position = ? WHERE id = ?', [other.position, ch.id])
      await conn.execute('UPDATE chapters SET position = ? WHERE id = ?', [ch.position, other.id])
    }
  }
  if (input.archived !== undefined) {
    need(user, 'content.publish')
    await conn.execute(`UPDATE chapters SET archived_at = ${input.archived ? 'NOW()' : 'NULL'} WHERE id = ?`, [chapterId])
  }
  await audit(conn, user, 'chapter.update', 'chapter', chapterId, input)
  return json({ ok: true })
}
