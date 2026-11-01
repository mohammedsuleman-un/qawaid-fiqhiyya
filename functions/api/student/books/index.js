// POST {slug} of {series: 'zad', level?}: een boek, een ZAD-niveau of de hele ZAD-reeks
// aan je profiel toevoegen (alleen gepubliceerde, openbare boeken).
// DELETE {slug} of {series: 'zad', level?}: weer van je profiel halen (voortgang blijft bewaard).
import { json, body, fail } from '../../../../lib/http.js'
import { BOOK_OK, marks } from '../../../../lib/student.js'

async function selectBooks (conn, input) {
  if (input.series === 'zad') {
    const level = input.level == null || input.level === '' ? null : Number(input.level)
    if (level !== null && ![1, 2, 3, 4].includes(level)) fail(400, 'Onbekend niveau')
    return conn.execute(`SELECT b.id FROM books b WHERE b.zad_level IS NOT NULL ${level ? 'AND b.zad_level = ?' : ''} AND ${BOOK_OK}`, level ? [level] : [])
  }
  const rows = await conn.execute(`SELECT b.id FROM books b WHERE b.slug = ? AND ${BOOK_OK}`, [String(input.slug || '').slice(0, 120)])
  if (!rows.length) fail(404, 'Boek niet gevonden')
  return rows
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  const ids = (await selectBooks(conn, await body(request))).map((r) => Number(r.id))
  if (ids.length) await conn.execute(`INSERT IGNORE INTO student_books (user_id, book_id) VALUES ${ids.map(() => '(?, ?)').join(', ')}`, ids.flatMap((id) => [user.id, id]))
  return json({ ok: true, added: ids.length })
}

export async function onRequestDelete ({ request, data: { conn, user } }) {
  const ids = (await selectBooks(conn, await body(request))).map((r) => Number(r.id))
  if (ids.length) await conn.execute(`DELETE FROM student_books WHERE user_id = ? AND book_id IN (${marks(ids)})`, [user.id, ...ids])
  return json({ ok: true, removed: ids.length })
}
