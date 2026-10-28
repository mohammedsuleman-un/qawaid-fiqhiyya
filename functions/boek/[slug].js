// GET /boek/<slug>: de leespagina van een boek, opgebouwd uit TiDB.
import { db } from '../../lib/db.js'
import { loadBook } from '../../lib/books.js'
import { renderBook } from '../../lib/render-book.js'

export async function onRequestGet ({ env, params }) {
  const data = await loadBook(db(env), params.slug)
  if (!data) return new Response('Boek niet gevonden', { status: 404 })
  return new Response(renderBook(data), {
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=60' }
  })
}
