// GET ?lang=: alle openbare boeken die je aan je profiel kunt toevoegen, met de ZAD-reeks
// apart (niveau en vak), het aantal lessen en of er oefenvragen zijn.
import { json } from '../../../lib/http.js'
import { BOOK_OK, BOOK_TITLES, langOf } from '../../../lib/student.js'
import { SUBJECTS, LEVEL_NAMES } from '../../../lib/zad.js'

export async function onRequestGet ({ request, data: { conn, user } }) {
  const lang = langOf(new URL(request.url).searchParams.get('lang'))
  const rows = await conn.execute(`SELECT b.id, b.slug, b.zad_level, b.zad_subject, b.author, ${BOOK_TITLES},
      EXISTS (SELECT 1 FROM student_books sb WHERE sb.user_id = ? AND sb.book_id = b.id) AS mine,
      (SELECT COUNT(*) FROM chapters c WHERE c.book_id = b.id AND c.archived_at IS NULL) AS lessons,
      (SELECT COUNT(*) FROM questions q WHERE q.book_id = b.id AND q.status = 'published') AS questions,
      (SELECT COUNT(*) FROM chapters c JOIN content_translations t ON t.entity_type = 'study' AND t.entity_id = c.id AND t.lang = ?
        AND t.published_version_id IS NOT NULL WHERE c.book_id = b.id) AS cards
    FROM books b WHERE ${BOOK_OK} ORDER BY b.zad_level IS NULL, b.zad_level, b.id`, [user.id, lang])
  return json({
    subjects: SUBJECTS.map(([key, ar, nl]) => ({ key, ar, nl })),
    levels: LEVEL_NAMES,
    books: rows.map((r) => ({ ...r, id: Number(r.id), zad_level: r.zad_level == null ? null : Number(r.zad_level), mine: Number(r.mine) === 1,
      lessons: Number(r.lessons), questions: Number(r.questions), cards: Number(r.cards) }))
  })
}
