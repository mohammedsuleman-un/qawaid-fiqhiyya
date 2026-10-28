// GET /boek/<slug>: de leespagina van een boek, opgebouwd uit TiDB.
// Een ingelogde beheerder ziet ook boeken die nog concept zijn.
import { db } from '../../lib/db.js'
import { loadBook } from '../../lib/books.js'
import { renderBook } from '../../lib/render-book.js'
import { currentAdmin } from '../../lib/auth.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const data = await loadBook(conn, params.slug) ||
    (await currentAdmin(conn, request) && await loadBook(conn, params.slug, { drafts: true }))
  if (!data) return new Response('Boek niet gevonden', { status: 404 })
  return new Response(renderBook(data), {
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'private, max-age=0' }
  })
}
