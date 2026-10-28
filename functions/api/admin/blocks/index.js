// POST {book, after, kind, page, html}: nieuw blok direct na blok `after`
// (zonder `after` aan het begin van het boek).
import { json } from '../../../../lib/db.js'
import { body, fail, blockFields, bookId } from '../../../../lib/admin.js'

export async function onRequestPost ({ request, data: { conn, admin } }) {
  const input = await body(request)
  const book = await bookId(conn, input.book)
  if (!book) return fail('Boek niet gevonden', 404)
  let position = 0
  if (input.after) {
    const [prev] = await conn.execute('SELECT position FROM blocks WHERE id = ? AND book_id = ?', [input.after, book])
    if (!prev) return fail('Blok niet gevonden', 404)
    position = prev.position + 1
  }
  const b = blockFields(input)
  const tx = await conn.begin()
  try {
    await tx.execute('UPDATE blocks SET position = position + 1 WHERE book_id = ? AND position >= ?', [book, position])
    await tx.execute(`INSERT INTO blocks (book_id, position, page, kind, anchor, html, plain, updated_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [book, position, b.page, b.kind, b.anchor, b.html, b.plain, admin.email])
    const [{ id }] = await tx.execute('SELECT id FROM blocks WHERE book_id = ? AND position = ?', [book, position])
    await tx.commit()
    return json({ ok: true, id })
  } catch (err) {
    await tx.rollback()
    throw err
  }
}
