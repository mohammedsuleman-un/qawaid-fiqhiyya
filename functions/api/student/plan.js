// POST {slug, start_date, target_date}: studieplanning voor een boek (lege einddatum = planning weg).
// De weekindeling rekent de pagina zelf uit op basis van de lessen en deze twee datums.
import { json, body, fail } from '../../../lib/http.js'
import { publicBook, sqlDate } from '../../../lib/student.js'

export async function onRequestPost ({ request, data: { conn, user } }) {
  const input = await body(request)
  const book = await publicBook(conn, input.slug)
  if (!input.target_date) {
    await conn.execute('DELETE FROM study_plans WHERE user_id = ? AND book_id = ?', [user.id, book.id])
    return json({ ok: true, plan: null })
  }
  const start = sqlDate(input.start_date || new Date().toISOString().slice(0, 10), { dateOnly: true })
  const target = sqlDate(input.target_date, { dateOnly: true })
  if (!start || !target) fail(400, 'Ongeldige datum')
  if (target <= start) fail(400, 'De einddatum moet na de startdatum liggen')
  await conn.execute(`INSERT INTO study_plans (user_id, book_id, start_date, target_date) VALUES (?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE start_date = VALUES(start_date), target_date = VALUES(target_date)`, [user.id, book.id, start, target])
  await conn.execute('INSERT IGNORE INTO student_books (user_id, book_id) VALUES (?, ?)', [user.id, book.id])
  return json({ ok: true, plan: { start_date: start, target_date: target } })
}
