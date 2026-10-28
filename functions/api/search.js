// GET /api/search?q=...&book=<slug>: zoekt in alle boeken (of één boek), met en
// zonder tashkeel. Geeft per treffer het boek, de pagina en een stukje tekst.
import { db, json } from '../../lib/db.js'
import { normalizeArabic } from '../../lib/arabic.js'

export async function onRequestGet ({ request, env }) {
  const url = new URL(request.url)
  const q = normalizeArabic(url.searchParams.get('q') || '')
  if (q.length < 2) return json({ error: 'Zoekterm te kort' }, 400)
  const like = '%' + q.replace(/[\\%_]/g, (c) => '\\' + c) + '%'
  const book = url.searchParams.get('book')

  const rows = await db(env).execute(
    `SELECT b.slug, b.title, k.page, k.plain FROM blocks k JOIN books b ON b.id = k.book_id
     WHERE b.status = 'published' AND k.plain LIKE ? ${book ? 'AND b.slug = ?' : ''}
     ORDER BY b.title, k.position LIMIT 100`,
    book ? [like, book] : [like])

  return json(rows.map((r) => {
    const at = r.plain.indexOf(q)
    const from = Math.max(0, at - 60)
    return {
      slug: r.slug,
      title: r.title,
      page: r.page,
      snippet: (from > 0 ? '…' : '') + r.plain.slice(from, at + q.length + 60) + (at + q.length + 60 < r.plain.length ? '…' : '')
    }
  }))
}
