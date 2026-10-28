// GET: actieve medewerkers aan wie feedback kan worden toegewezen (feedback.manage).
import { json, need } from '../../../lib/http.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'feedback.manage')
  return json(await conn.execute(`SELECT DISTINCT u.id, u.email, u.name FROM users u
    JOIN user_roles r ON r.user_id = u.id JOIN role_permissions p ON p.role_code = r.role_code
    WHERE u.status = 'active' AND p.permission_code = 'feedback.assigned' ORDER BY u.email`))
}
