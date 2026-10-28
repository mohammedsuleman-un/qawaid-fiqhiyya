// GET: alle boeken, ook concepten. POST {slug, title, subtitle, pdf}: nieuw boek als concept.
import { json } from '../../../../lib/db.js'
import { body, fail } from '../../../../lib/admin.js'

export async function onRequestGet ({ data: { conn } }) {
  return json(await conn.execute(
    `SELECT b.slug, b.title, b.subtitle, b.pdf, b.status, b.updated_at,
       (SELECT COUNT(*) FROM blocks k WHERE k.book_id = b.id AND k.kind = 'page') AS pages
     FROM books b ORDER BY b.title`))
}

export async function onRequestPost ({ request, data: { conn } }) {
  const { slug, title, subtitle = '', pdf = '' } = await body(request)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug || '')) return fail('Het adres mag alleen kleine letters, cijfers en streepjes bevatten')
  if (!String(title || '').trim()) return fail('Titel ontbreekt')
  const [exists] = await conn.execute('SELECT 1 AS x FROM books WHERE slug = ?', [slug])
  if (exists) return fail('Dit adres bestaat al')
  await conn.execute("INSERT INTO books (slug, title, subtitle, pdf, status) VALUES (?, ?, ?, ?, 'draft')",
    [slug, title.trim(), subtitle.trim(), pdf.trim()])
  return json({ ok: true, slug })
}
