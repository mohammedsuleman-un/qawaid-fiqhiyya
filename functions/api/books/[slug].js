// GET /api/books/<slug>: één boek met al zijn blokken in leesvolgorde.
import { db, json } from '../../../lib/db.js'
import { loadBook } from '../../../lib/books.js'

export async function onRequestGet ({ env, params }) {
  const data = await loadBook(db(env), params.slug)
  return data ? json(data) : json({ error: 'Boek niet gevonden' }, 404)
}
