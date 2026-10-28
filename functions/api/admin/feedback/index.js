// GET ?status=&category=&mine=1: feedback. Met feedback.manage alles, anders alleen wat aan jou is toegewezen.
import { json, need } from '../../../../lib/http.js'
import { can } from '../../../../lib/rbac.js'
import { describeMany } from '../../../../lib/content.js'

export async function onRequestGet ({ request, data: { conn, user } }) {
  need(user, 'feedback.assigned')
  const p = new URL(request.url).searchParams
  const where = ['1 = 1']
  const args = []
  if (!can(user, 'feedback.manage') || p.get('mine')) { where.push('f.assigned_to = ?'); args.push(user.id) }
  if (p.get('status')) { where.push('f.status = ?'); args.push(p.get('status')) }
  if (p.get('category')) { where.push('f.category = ?'); args.push(p.get('category')) }
  const rows = await conn.execute(`SELECT f.id, f.entity_type, f.entity_id, f.lang, f.quote, f.category, f.message, f.suggestion,
      f.email, f.status, f.assigned_to, f.internal_note, f.draft_version_id, f.created_at, f.updated_at, u.email AS assigned_email
    FROM feedback f LEFT JOIN users u ON u.id = f.assigned_to WHERE ${where.join(' AND ')}
    ORDER BY FIELD(f.status, 'new', 'in_progress', 'accepted', 'resolved', 'rejected'), f.created_at DESC LIMIT 300`, args)
  return json(await describeMany(conn, rows))
}
