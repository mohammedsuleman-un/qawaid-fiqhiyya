// GET: alle rollen en rechten, met welke rechten bij welke rol horen.
import { json } from '../../../lib/http.js'

export async function onRequestGet ({ data: { conn } }) {
  const roles = await conn.execute('SELECT code, name_nl, name_ar FROM roles ORDER BY rank_order')
  const permissions = await conn.execute('SELECT code, name_nl, name_ar FROM permissions ORDER BY code')
  const links = await conn.execute('SELECT role_code, permission_code FROM role_permissions')
  return json({
    roles: roles.map((r) => ({ ...r, permissions: links.filter((l) => l.role_code === r.code).map((l) => l.permission_code) })),
    permissions
  })
}
