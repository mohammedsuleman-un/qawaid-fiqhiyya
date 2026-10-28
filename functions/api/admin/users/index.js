// GET ?q=&role=&status=: gebruikers zoeken en filteren (users.manage).
import { json, need } from '../../../../lib/http.js'

export async function onRequestGet ({ request, data: { conn, user } }) {
  need(user, 'users.manage')
  const p = new URL(request.url).searchParams
  const where = ['1 = 1']
  const args = []
  if (p.get('q')) { where.push('(u.email LIKE ? OR u.name LIKE ?)'); args.push(`%${p.get('q')}%`, `%${p.get('q')}%`) }
  if (p.get('status')) { where.push('u.status = ?'); args.push(p.get('status')) }
  if (p.get('role')) { where.push('EXISTS (SELECT 1 FROM user_roles x WHERE x.user_id = u.id AND x.role_code = ?)'); args.push(p.get('role')) }
  const users = await conn.execute(`SELECT u.id, u.email, u.name, u.status, u.totp_enabled, u.last_login_at, u.created_at,
      (SELECT GROUP_CONCAT(role_code) FROM user_roles r WHERE r.user_id = u.id) AS roles
    FROM users u WHERE ${where.join(' AND ')} ORDER BY u.created_at LIMIT 500`, args)
  const extra = await conn.execute('SELECT user_id, permission_code, granted FROM user_permissions')
  return json(users.map((u) => ({
    ...u,
    roles: u.roles ? u.roles.split(',') : [],
    extra: extra.filter((e) => Number(e.user_id) === Number(u.id)).map((e) => ({ code: e.permission_code, granted: Number(e.granted) === 1 }))
  })))
}
