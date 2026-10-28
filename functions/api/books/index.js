// GET /api/books?categorie=: gepubliceerde, openbare boeken met titels per taal.
import { json } from '../../../lib/http.js'
import { listBooks } from '../../../lib/library.js'

export async function onRequestGet ({ request, data: { conn } }) {
  const category = new URL(request.url).searchParams.get('categorie')
  const books = await listBooks(conn, { category })
  // Velden voor oudere pagina's (library.html) die nog title/subtitle lezen.
  return json(books.map((b) => ({ ...b, title: b.title_ar || b.title_nl, subtitle: b.subtitle_ar || b.subtitle_nl })))
}
