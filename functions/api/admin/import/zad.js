// POST: importeert één ZAD-boek in het importformaat (alle lessen als concept).
import { json, body, need } from '../../../../lib/http.js'
import { importZad } from '../../../../lib/zad.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'content.create')
  const result = await importZad(conn, await body(request), user.id)
  await audit(conn, user, 'zad.import', 'book', result.bookId, result)
  return json({ ok: true, ...result })
}
