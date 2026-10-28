// GET: versies die op beoordeling of publicatie wachten.
import { json, need } from '../../../lib/http.js'
import { describeMany } from '../../../lib/content.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'content.edit')
  const rows = await conn.execute(`SELECT v.id, v.title, v.status, v.reason, v.submitted_at, v.updated_at, v.review_comment,
      t.entity_type, t.entity_id, t.lang, u.email AS author
    FROM content_versions v JOIN content_translations t ON t.id = v.translation_id LEFT JOIN users u ON u.id = v.created_by
    WHERE v.status IN ('in_review', 'approved') OR (v.status IN ('draft', 'rejected') AND v.created_by = ?)
    ORDER BY FIELD(v.status, 'in_review', 'approved', 'rejected', 'draft'), v.updated_at DESC LIMIT 200`, [user.id])
  return json(await describeMany(conn, rows))
}
