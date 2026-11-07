// POST: importeert één ZAD-boek in het importformaat (alle lessen als concept).
// Bestaat het boek al, dan moet het bij een van je instituten horen; een nieuw boek hoort
// daarna bij de instituten van wie importeert.
import { json, body, need } from '../../../../lib/http.js'
import { importZad, parseZad, zadSlug } from '../../../../lib/zad.js'
import { audit } from '../../../../lib/audit.js'
import { needBook, linkNewBook } from '../../../../lib/institutes.js'

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'content.create')
  const input = await body(request)
  const z = parseZad(input)
  const [have] = await conn.execute('SELECT id FROM books WHERE slug = ?', [zadSlug(z.level, z.subject)])
  if (have) await needBook(conn, user, Number(have.id))
  const result = await importZad(conn, input, user.id)
  if (!have) await linkNewBook(conn, user, result.bookId, [])
  await audit(conn, user, 'zad.import', 'book', result.bookId, result)
  return json({ ok: true, ...result })
}
