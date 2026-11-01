// GET: een poging. Nog bezig: de vragen zonder antwoorden en de resterende tijd.
// Ingeleverd: de score met per vraag je antwoord, het goede antwoord en de uitleg.
// Docenten (tests.manage) mogen ingeleverde pogingen van geplande toetsen bekijken.
// POST {answers}: inleveren (na de eindtijd telt het nog, maar wordt het als te laat gemarkeerd).
import { json, body, fail, id } from '../../../../lib/http.js'
import { can } from '../../../../lib/rbac.js'
import { publicQuestion, grade, cleanAnswers, BOOK_TITLES } from '../../../../lib/student.js'

async function load (conn, attemptId) {
  const [a] = await conn.execute(`SELECT a.*, b.slug, ${BOOK_TITLES}, t.title_nl AS test_title_nl, t.title_ar AS test_title_ar,
      TIMESTAMPDIFF(SECOND, NOW(), a.deadline_at) AS remaining, u.name AS user_name, u.email AS user_email
    FROM test_attempts a JOIN books b ON b.id = a.book_id LEFT JOIN tests t ON t.id = a.test_id JOIN users u ON u.id = a.user_id
    WHERE a.id = ?`, [attemptId])
  if (!a) fail(404, 'Poging niet gevonden')
  return a
}

const head = (a) => ({ id: Number(a.id), test_id: a.test_id == null ? null : Number(a.test_id), slug: a.slug, title_ar: a.title_ar, title_nl: a.title_nl,
  test_title_nl: a.test_title_nl, test_title_ar: a.test_title_ar, lang: a.lang, units: a.units, started_at: a.started_at, submitted_at: a.submitted_at })

export async function onRequestGet ({ params, data: { conn, user } }) {
  const a = await load(conn, id(params.id))
  const own = Number(a.user_id) === user.id
  if (!own && !(a.test_id && a.submitted_at && can(user, 'tests.manage'))) fail(404, 'Poging niet gevonden')
  const questions = JSON.parse(a.questions)
  if (!a.submitted_at) {
    return json({ ...head(a), done: false, remaining: a.remaining == null ? null : Number(a.remaining), questions: questions.map(publicQuestion) })
  }
  const { review } = grade(questions, JSON.parse(a.answers || '[]'))
  return json({ ...head(a), done: true, score: Number(a.score), max_score: Number(a.max_score), late: Number(a.late) === 1, review,
    student: own ? undefined : { name: a.user_name, email: a.user_email } })
}

export async function onRequestPost ({ request, params, data: { conn, user } }) {
  const a = await load(conn, id(params.id))
  if (Number(a.user_id) !== user.id) fail(404, 'Poging niet gevonden')
  if (a.submitted_at) fail(400, 'Deze toets is al ingeleverd')
  const questions = JSON.parse(a.questions)
  const answers = cleanAnswers(questions, (await body(request)).answers)
  const { score, max, review } = grade(questions, answers)
  const late = a.remaining != null && Number(a.remaining) < -120 ? 1 : 0
  await conn.execute('UPDATE test_attempts SET answers = ?, score = ?, max_score = ?, late = ?, submitted_at = NOW() WHERE id = ? AND submitted_at IS NULL',
    [JSON.stringify(answers), score, max, late, a.id])
  return json({ ...head(a), submitted_at: new Date().toISOString().slice(0, 19).replace('T', ' '), done: true, score, max_score: max, late: late === 1, review })
}
