// GET /api/search?q=&lang=&categorie=&book=: zoekt in alle gepubliceerde teksten,
// met en zonder tashkeel, en geeft per treffer de pagina en een stukje tekst.
import { json, fail } from '../../lib/http.js'
import { search } from '../../lib/library.js'

export async function onRequestGet ({ request, data: { conn } }) {
  const p = new URL(request.url).searchParams
  const q = (p.get('q') || '').trim().slice(0, 200)
  if (q.length < 2) fail(400, 'Zoekterm te kort')
  const lang = ['ar', 'nl'].includes(p.get('lang')) ? p.get('lang') : null
  return json(await search(conn, q, { lang, category: p.get('categorie'), book: p.get('book') }))
}
