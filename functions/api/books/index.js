// GET /api/books: alle gepubliceerde boeken.
import { db, json } from '../../../lib/db.js'

export async function onRequestGet ({ env }) {
  const books = await db(env).execute(
    "SELECT slug, title, subtitle, pdf FROM books WHERE status = 'published' ORDER BY title")
  return json(books)
}
