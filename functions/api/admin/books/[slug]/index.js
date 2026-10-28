// GET: boek met alle blokken. PATCH {title, subtitle, pdf, status}: gegevens wijzigen of (de)publiceren.
import { json } from '../../../../../lib/db.js'
import { body, fail } from '../../../../../lib/admin.js'

export async function onRequestGet ({ params, data: { conn } }) {
  const [book] = await conn.execute('SELECT id, slug, title, subtitle, pdf, status FROM books WHERE slug = ?', [params.slug])
  if (!book) return fail('Boek niet gevonden', 404)
  const blocks = await conn.execute(
    'SELECT id, position, kind, page, anchor, html, updated_at, updated_by FROM blocks WHERE book_id = ? ORDER BY position', [book.id])
  return json({ book, blocks })
}

export async function onRequestPatch ({ request, params, data: { conn } }) {
  const input = await body(request)
  const fields = ['title', 'subtitle', 'pdf', 'status'].filter((f) => input[f] !== undefined)
  if (input.status && !['draft', 'published'].includes(input.status)) return fail('Ongeldige status')
  if (!fields.length) return fail('Niets om te wijzigen')
  await conn.execute(`UPDATE books SET ${fields.map((f) => `${f} = ?`).join(', ')} WHERE slug = ?`,
    [...fields.map((f) => String(input[f]).trim()), params.slug])
  return json({ ok: true })
}
