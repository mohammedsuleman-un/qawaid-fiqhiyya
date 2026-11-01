// GET: mijn ingeleverde pogingen (resultaten).
// POST: een toets starten.
//   {testId, lang}: een geplande toets (binnen de openingstijd, binnen het maximum aantal pogingen);
//   {slug, units, count, lang, includeOpen}: een oefentoets uit de vragen van een boek.
import { json, body, fail, id } from '../../../../lib/http.js'
import { insert } from '../../../../lib/content.js'
import { questionPool, pickQuestions, publicBook, parseUnits, loadTest, myAttempts, langOf } from '../../../../lib/student.js'

export async function onRequestGet ({ data: { conn, user } }) {
  return json({ attempts: await myAttempts(conn, user.id, 100) })
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  const input = await body(request)
  const lang = langOf(input.lang)
  let bookId, units, count, includeOpen, testId = null, deadline = null
  if (input.testId) {
    testId = id(input.testId)
    const test = await loadTest(conn, testId)
    if (!test || test.status !== 'published') fail(404, 'Toets niet gevonden')
    if (test.state === 'soon') fail(400, 'Deze toets is nog niet open')
    if (test.state === 'closed') fail(400, 'Deze toets is gesloten')
    const mine = await conn.execute('SELECT id, submitted_at FROM test_attempts WHERE test_id = ? AND user_id = ?', [testId, user.id])
    const running = mine.find((a) => !a.submitted_at)
    if (running) return json({ id: Number(running.id), resumed: true })
    if (mine.length >= test.max_attempts) fail(400, 'Je hebt het maximale aantal pogingen voor deze toets gebruikt')
    bookId = test.book_id
    units = parseUnits(test.units)
    count = test.question_count
    includeOpen = false
    deadline = test.time_limit_min ? `LEAST(NOW() + INTERVAL ${Number(test.time_limit_min)} MINUTE, ?)` : '?'
    deadline = { sql: deadline, arg: test.closes_at }
  } else {
    bookId = (await publicBook(conn, input.slug)).id
    units = parseUnits(input.units)
    count = Math.min(Math.max(parseInt(input.count, 10) || 10, 1), 50)
    includeOpen = !!input.includeOpen
  }
  const pool = await questionPool(conn, bookId, lang, units)
  const questions = pickQuestions(pool, count, { includeOpen })
  if (!questions.length) fail(400, 'Voor deze keuze zijn nog geen gecontroleerde vragen. Kies een ander deel of een ander boek.')
  const newId = await insert(conn, `INSERT INTO test_attempts (user_id, test_id, book_id, lang, units, questions, deadline_at)
    VALUES (?, ?, ?, ?, ?, ?, ${deadline ? deadline.sql : 'NULL'})`,
  [user.id, testId, bookId, lang, units.join(','), JSON.stringify(questions), ...(deadline ? [deadline.arg] : [])])
  return json({ id: newId })
}
