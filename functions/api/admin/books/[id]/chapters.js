// POST {title, lang, after}: nieuw hoofdstuk na hoofdstuk `after` (of aan het eind).
import { json, body, need, fail, str, id } from '../../../../../lib/http.js'
import { insert } from '../../../../../lib/content.js'
import { audit } from '../../../../../lib/audit.js'

export async function onRequestPost ({ request, params, data: { conn, user } }) {
  need(user, 'content.create')
  const bookId = id(params.id)
  const input = await body(request)
  const lang = input.lang === 'nl' ? 'nl' : 'ar'
  const [book] = await conn.execute('SELECT id FROM books WHERE id = ?', [bookId])
  if (!book) fail(404, 'Boek niet gevonden')
  let position
  if (input.after) {
    const [prev] = await conn.execute('SELECT position FROM chapters WHERE id = ? AND book_id = ?', [input.after, bookId])
    if (!prev) fail(404, 'Hoofdstuk niet gevonden')
    position = Number(prev.position) + 1
    await conn.execute('UPDATE chapters SET position = position + 1 WHERE book_id = ? AND position >= ?', [bookId, position])
  } else {
    const [{ n }] = await conn.execute('SELECT COALESCE(MAX(position), -1) + 1 AS n FROM chapters WHERE book_id = ?', [bookId])
    position = Number(n)
  }
  const [{ next }] = await conn.execute('SELECT COUNT(*) + 1 AS next FROM chapters WHERE book_id = ?', [bookId])
  let slug = String(next)
  while ((await conn.execute('SELECT 1 AS x FROM chapters WHERE book_id = ? AND slug = ?', [bookId, slug])).length) slug = String(Number(slug) + 1)
  const chapterId = await insert(conn, 'INSERT INTO chapters (book_id, position, slug) VALUES (?, ?, ?)', [bookId, position, slug])
  await conn.execute("INSERT INTO content_translations (entity_type, entity_id, lang, title) VALUES ('chapter', ?, ?, ?)",
    [chapterId, lang, str(input.title)])
  await audit(conn, user, 'chapter.create', 'chapter', chapterId, { book: bookId })
  return json({ ok: true, id: chapterId })
}
