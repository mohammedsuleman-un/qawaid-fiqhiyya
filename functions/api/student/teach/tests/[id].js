// Docenten (tests.manage). GET: een toets met de ingeleverde pogingen van alle studenten.
// PATCH: wijzigen. DELETE: archiveren (pogingen blijven bewaard).
import { json, body, need, id, fail } from '../../../../../lib/http.js'
import { audit } from '../../../../../lib/audit.js'
import { loadTest, testInput } from '../../../../../lib/student.js'

export async function onRequestGet ({ params, data: { conn, user } }) {
  need(user, 'tests.manage')
  const test = await loadTest(conn, id(params.id))
  if (!test) fail(404, 'Toets niet gevonden')
  const rows = await conn.execute(`SELECT a.id, a.score, a.max_score, a.late, a.started_at, a.submitted_at, u.name, u.email
    FROM test_attempts a JOIN users u ON u.id = a.user_id WHERE a.test_id = ? ORDER BY u.name, a.id`, [test.id])
  return json({ test, attempts: rows.map((r) => ({ ...r, id: Number(r.id), score: r.score == null ? null : Number(r.score), max_score: r.max_score == null ? null : Number(r.max_score), late: Number(r.late) === 1 })) })
}

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'tests.manage')
  const testId = id(params.id)
  const t = await testInput(conn, await body(request))
  await conn.execute(`UPDATE tests SET book_id = ?, title_nl = ?, title_ar = ?, units = ?, question_count = ?, time_limit_min = ?, max_attempts = ?,
    opens_at = ?, closes_at = ?, info_nl = ?, info_ar = ?, status = ? WHERE id = ?`,
  [t.book_id, t.title_nl, t.title_ar, t.units, t.question_count, t.time_limit_min, t.max_attempts, t.opens_at, t.closes_at, t.info_nl, t.info_ar, t.status, testId])
  await audit(conn, user, 'test.update', 'test', testId)
  return json({ ok: true })
}

export async function onRequestDelete ({ params, data: { conn, user } }) {
  need(user, 'tests.manage')
  const testId = id(params.id)
  await conn.execute("UPDATE tests SET status = 'archived' WHERE id = ?", [testId])
  await audit(conn, user, 'test.archive', 'test', testId)
  return json({ ok: true })
}
