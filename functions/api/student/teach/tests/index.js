// Docenten (tests.manage). GET: alle geplande toetsen en de boeken om uit te kiezen.
// POST: een toets plannen. Tijden komen als ISO (UTC) binnen.
import { json, body, need } from '../../../../../lib/http.js'
import { insert } from '../../../../../lib/content.js'
import { audit } from '../../../../../lib/audit.js'
import { testsForTeacher, testInput, BOOK_OK, BOOK_TITLES } from '../../../../../lib/student.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'tests.manage')
  const books = await conn.execute(`SELECT b.id, b.slug, b.zad_level, ${BOOK_TITLES} FROM books b WHERE ${BOOK_OK} ORDER BY b.zad_level IS NULL, b.zad_level, b.id`)
  return json({ tests: await testsForTeacher(conn), books: books.map((b) => ({ ...b, id: Number(b.id) })) })
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'tests.manage')
  const t = await testInput(conn, await body(request))
  const newId = await insert(conn, `INSERT INTO tests (book_id, title_nl, title_ar, units, question_count, time_limit_min, max_attempts, opens_at, closes_at, info_nl, info_ar, status, created_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [t.book_id, t.title_nl, t.title_ar, t.units, t.question_count, t.time_limit_min, t.max_attempts, t.opens_at, t.closes_at, t.info_nl, t.info_ar, t.status, user.id])
  await audit(conn, user, 'test.create', 'test', newId)
  return json({ ok: true, id: newId })
}
