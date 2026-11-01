// POST {chapterId, done}: een les als gelezen markeren (of weer niet).
import { json, body, id, fail } from '../../../lib/http.js'
import { BOOK_OK } from '../../../lib/student.js'

export async function onRequestPost ({ request, data: { conn, user } }) {
  const input = await body(request)
  const chapterId = id(input.chapterId)
  if (input.done) {
    const [ok] = await conn.execute(`SELECT c.id FROM chapters c JOIN books b ON b.id = c.book_id AND ${BOOK_OK} WHERE c.id = ? AND c.archived_at IS NULL`, [chapterId])
    if (!ok) fail(404, 'Les niet gevonden')
    await conn.execute('INSERT IGNORE INTO lesson_progress (user_id, chapter_id) VALUES (?, ?)', [user.id, chapterId])
  } else {
    await conn.execute('DELETE FROM lesson_progress WHERE user_id = ? AND chapter_id = ?', [user.id, chapterId])
  }
  return json({ ok: true })
}
