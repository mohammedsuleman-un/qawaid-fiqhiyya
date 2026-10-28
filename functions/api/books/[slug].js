// GET /api/books/<slug>?lang=ar|nl: één boek met zijn hoofdstukken (zonder tekst met ?bodies=0).
import { json, fail } from '../../../lib/http.js'
import { loadBook, pickLang } from '../../../lib/library.js'

export async function onRequestGet ({ request, params, data: { conn } }) {
  const bodies = new URL(request.url).searchParams.get('bodies') !== '0'
  const data = await loadBook(conn, params.slug, pickLang(request.url), { bodies })
  if (!data) fail(404, 'Boek niet gevonden')
  return json(data)
}
