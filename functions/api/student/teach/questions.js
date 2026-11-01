// Vragenbank controleren. GET ?book=<slug>: alle vragen van een boek met status
// (voor medewerkers met content.edit). POST {ids, status}: vragen goedkeuren
// ('published'), terugzetten naar concept ('draft') of afwijzen ('rejected');
// daarvoor is content.review nodig (met tweestapsverificatie). Pas goedgekeurde
// vragen komen in toetsen terecht.
import { json, body, need, fail } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { marks } from '../../../../lib/student.js'

const STATUSES = ['published', 'draft', 'rejected']

export async function onRequestGet ({ request, data: { conn, user } }) {
  need(user, 'content.edit')
  const slug = String(new URL(request.url).searchParams.get('book') || '').slice(0, 120)
  const books = await conn.execute(`SELECT b.slug, b.zad_level, (SELECT title FROM book_translations x WHERE x.book_id = b.id AND x.lang = 'ar') AS title_ar,
      (SELECT title FROM book_translations x WHERE x.book_id = b.id AND x.lang = 'nl') AS title_nl,
      SUM(q.status = 'draft') AS draft, SUM(q.status = 'published') AS published, SUM(q.status = 'rejected') AS rejected
    FROM questions q JOIN books b ON b.id = q.book_id WHERE b.status <> 'archived' GROUP BY b.id, b.slug, b.zad_level ORDER BY b.zad_level, b.id`)
  let questions = []
  if (slug) {
    questions = (await conn.execute(`SELECT q.id, q.type, q.data, q.status, q.reviewed_at, c.slug AS lesson, c.unit, c.page_start
      FROM questions q JOIN books b ON b.id = q.book_id JOIN chapters c ON c.id = q.chapter_id
      WHERE b.slug = ? ORDER BY c.position, q.position`, [slug])).map((r) => {
      let data = {}
      try { data = JSON.parse(r.data) } catch {}
      return { id: Number(r.id), type: r.type, status: r.status, reviewed_at: r.reviewed_at, lesson: r.lesson, unit: r.unit == null ? null : Number(r.unit), data }
    })
  }
  return json({ books: books.map((b) => ({ ...b, draft: Number(b.draft), published: Number(b.published), rejected: Number(b.rejected) })), questions })
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'content.review')
  const input = await body(request)
  if (!STATUSES.includes(input.status)) fail(400, 'Onbekende status')
  const ids = [...new Set((Array.isArray(input.ids) ? input.ids : []).map(Number).filter((n) => Number.isInteger(n) && n > 0))].slice(0, 500)
  if (!ids.length) fail(400, 'Geen vragen gekozen')
  await conn.execute(`UPDATE questions SET status = ?, reviewed_by = ?, reviewed_at = NOW() WHERE id IN (${marks(ids)})`, [input.status, user.id, ...ids])
  await audit(conn, user, 'questions.' + input.status, 'question', null, { count: ids.length, ids: ids.slice(0, 50) })
  return json({ ok: true, changed: ids.length })
}
