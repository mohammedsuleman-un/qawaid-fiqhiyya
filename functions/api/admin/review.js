// GET: versies die op beoordeling of publicatie wachten.
import { json, need } from '../../../lib/http.js'
import { describeMany } from '../../../lib/content.js'
import { isSuper, myInstituteIds, institutesOfBooks } from '../../../lib/institutes.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'content.edit')
  const rows = await conn.execute(`SELECT v.id, v.title, v.status, v.reason, v.submitted_at, v.updated_at, v.review_comment,
      t.entity_type, t.entity_id, t.lang, u.email AS author
    FROM content_versions v JOIN content_translations t ON t.id = v.translation_id LEFT JOIN users u ON u.id = v.created_by
    WHERE v.status IN ('in_review', 'approved') OR (v.status IN ('draft', 'rejected') AND v.created_by = ?)
    ORDER BY FIELD(v.status, 'in_review', 'approved', 'rejected', 'draft'), v.updated_at DESC LIMIT 200`, [user.id])
  const list = await describeMany(conn, rows)
  if (isSuper(user)) return json(list)
  // Hoofdstukken en studiekaarten alleen van boeken van je eigen instituten.
  const mine = await myInstituteIds(conn, user)
  const bookIds = [...new Set(list.map((r) => Number(r.info?.book_id)).filter(Boolean))]
  const inst = await institutesOfBooks(conn, bookIds)
  return json(list.filter((r) => !r.info?.book_id || (inst.get(Number(r.info.book_id)) || []).some((i) => mine.includes(i))))
}
