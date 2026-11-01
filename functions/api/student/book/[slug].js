// GET ?lang=: één boek voor de student: lessen per eenheid met wat je al hebt gelezen,
// je planning, het aantal oefenvragen per eenheid en de geplande toetsen.
import { json, fail } from '../../../../lib/http.js'
import { loadBook } from '../../../../lib/library.js'
import { studyUnits } from '../../../../lib/study.js'
import { questionPool, testsForStudent, langOf } from '../../../../lib/student.js'

export async function onRequestGet ({ request, params, data: { conn, user } }) {
  const lang = langOf(new URL(request.url).searchParams.get('lang'))
  const data = await loadBook(conn, String(params.slug).slice(0, 120), lang, { bodies: false })
  if (!data) fail(404, 'Boek niet gevonden')
  const { book, chapters } = data
  const bookId = Number(book.id)
  const done = await conn.execute(`SELECT p.chapter_id FROM lesson_progress p JOIN chapters c ON c.id = p.chapter_id
    WHERE p.user_id = ? AND c.book_id = ?`, [user.id, bookId])
  const [mine] = await conn.execute('SELECT added_at FROM student_books WHERE user_id = ? AND book_id = ?', [user.id, bookId])
  const [plan] = await conn.execute('SELECT start_date, target_date FROM study_plans WHERE user_id = ? AND book_id = ?', [user.id, bookId])
  const pool = await questionPool(conn, bookId, lang)
  const perUnit = {}
  for (const q of pool) { const k = q.unit ?? 0; perUnit[k] = (perUnit[k] || 0) + 1 }
  const cards = book.zad_level ? [...await studyUnits(conn, bookId, lang)] : []
  return json({
    book: { id: bookId, slug: book.slug, title_ar: book.title_ar, title_nl: book.title_nl, zad_level: book.zad_level == null ? null : Number(book.zad_level), zad_subject: book.zad_subject, author: book.author },
    mine: !!mine,
    chapters: chapters.map((c) => ({ id: c.id, slug: c.slug, title: c.title, missing: c.missing, unit: c.unit, unitTitle: c.unitTitle, page: c.pageStart })),
    done: done.map((r) => Number(r.chapter_id)),
    plan: plan || null,
    questions: { total: pool.length, open: pool.filter((q) => q.type === 'open').length, perUnit },
    unitCards: cards,
    tests: await testsForStudent(conn, user.id, { bookId })
  })
}
