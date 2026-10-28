// GET: cijfers en recente activiteit voor het dashboard. Alles komt uit de database;
// wat de gebruiker niet mag zien, blijft leeg.
import { json } from '../../../lib/http.js'
import { can } from '../../../lib/rbac.js'

const count = async (conn, sql, args = []) => Number((await conn.execute(sql, args))[0].n)

export async function onRequestGet ({ data: { conn, user } }) {
  const out = { user: { email: user.email, roles: user.roles, totp_enabled: user.totp_enabled } }
  if (can(user, 'content.edit')) {
    out.books = {
      published: await count(conn, "SELECT COUNT(*) AS n FROM books WHERE status = 'published'"),
      draft: await count(conn, "SELECT COUNT(*) AS n FROM books WHERE status = 'draft'"),
      archived: await count(conn, "SELECT COUNT(*) AS n FROM books WHERE status = 'archived'")
    }
    out.articles = await conn.execute(`SELECT a.kind, COUNT(DISTINCT a.id) AS n FROM articles a
      JOIN content_translations t ON t.entity_type = 'article' AND t.entity_id = a.id AND t.status = 'published'
      WHERE a.archived_at IS NULL GROUP BY a.kind`)
    out.versions = Object.fromEntries((await conn.execute(`SELECT status, COUNT(*) AS n FROM content_versions
      WHERE status IN ('draft', 'in_review', 'approved', 'rejected') GROUP BY status`)).map((r) => [r.status, Number(r.n)]))
    out.my_drafts = await count(conn, "SELECT COUNT(*) AS n FROM content_versions WHERE created_by = ? AND status IN ('draft', 'rejected')", [user.id])
    out.recent = await conn.execute(`SELECT v.id, v.title, v.status, v.updated_at, t.lang, t.entity_type, u.email
      FROM content_versions v JOIN content_translations t ON t.id = v.translation_id LEFT JOIN users u ON u.id = v.created_by
      ORDER BY v.updated_at DESC LIMIT 8`)
  }
  if (can(user, 'feedback.assigned')) {
    const mine = can(user, 'feedback.manage') ? '' : ' AND assigned_to = ' + user.id
    out.feedback = Object.fromEntries((await conn.execute(`SELECT status, COUNT(*) AS n FROM feedback WHERE 1 = 1${mine}
      GROUP BY status`)).map((r) => [r.status, Number(r.n)]))
  }
  if (can(user, 'users.manage')) {
    out.users = await conn.execute(`SELECT r.role_code, COUNT(*) AS n FROM user_roles r JOIN users u ON u.id = r.user_id
      WHERE u.status = 'active' GROUP BY r.role_code`)
    out.open_invitations = await count(conn,
      'SELECT COUNT(*) AS n FROM invitations WHERE accepted_at IS NULL AND revoked_at IS NULL AND expires_at > NOW()')
  }
  if (can(user, 'audit.view')) {
    out.activity = await conn.execute(`SELECT a.action, a.entity_type, a.entity_id, a.created_at, u.email
      FROM audit_logs a LEFT JOIN users u ON u.id = a.user_id ORDER BY a.id DESC LIMIT 10`)
  }
  return json(out)
}
