// GET ?action=&user=&page=: auditlog, nieuwste eerst (audit.view). Een beheerder ziet alleen
// wat gebruikers van zijn eigen organisatie deden; de superbeheerder alles.
import { json, need } from '../../../lib/http.js'
import { userScope } from '../../../lib/institutes.js'

export async function onRequestGet ({ request, data: { conn, user } }) {
  need(user, 'audit.view')
  const p = new URL(request.url).searchParams
  const where = ['1 = 1']
  const args = []
  if (p.get('action')) { where.push('a.action LIKE ?'); args.push(p.get('action') + '%') }
  if (p.get('user')) { where.push('u.email LIKE ?'); args.push('%' + p.get('user') + '%') }
  const scope = await userScope(conn, user)
  if (scope) { where.push(scope.sql); args.push(...scope.args) }
  const page = Math.max(0, Number(p.get('page')) || 0)
  return json(await conn.execute(`SELECT a.id, a.action, a.entity_type, a.entity_id, a.details, a.created_at, u.email
    FROM audit_logs a LEFT JOIN users u ON u.id = a.user_id WHERE ${where.join(' AND ')}
    ORDER BY a.id DESC LIMIT 100 OFFSET ${page * 100}`, args))
}
