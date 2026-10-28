// GET: alle categorieën met aantal boeken. POST {slug, name_nl, name_ar, parent_id}: nieuwe categorie.
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { insert } from '../../../../lib/content.js'

export async function onRequestGet ({ data: { conn } }) {
  return json(await conn.execute(`SELECT c.*, (SELECT COUNT(*) FROM books b WHERE b.category_id = c.id) AS books
    FROM categories c ORDER BY c.position, c.id`))
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'categories.manage')
  const input = await body(request)
  const slug = str(input.slug, 120)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(400, 'Het adres mag alleen kleine letters, cijfers en streepjes bevatten')
  if (!str(input.name_nl) || !str(input.name_ar)) fail(400, 'Vul de Nederlandse en Arabische naam in')
  const [dup] = await conn.execute('SELECT 1 AS x FROM categories WHERE slug = ?', [slug])
  if (dup) fail(400, 'Dit adres bestaat al')
  const [{ n }] = await conn.execute('SELECT COALESCE(MAX(position), -1) + 1 AS n FROM categories')
  const newId = await insert(conn, 'INSERT INTO categories (slug, name_nl, name_ar, parent_id, position) VALUES (?, ?, ?, ?, ?)',
    [slug, str(input.name_nl, 255), str(input.name_ar, 255), input.parent_id || null, Number(n)])
  await audit(conn, user, 'category.create', 'category', newId, { slug })
  return json({ ok: true, id: newId })
}
