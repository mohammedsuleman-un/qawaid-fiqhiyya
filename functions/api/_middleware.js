// Alle API-routes: databaseverbinding klaarzetten en fouten als JSON teruggeven.
import { db } from '../../lib/db.js'
import { json, HttpError } from '../../lib/http.js'

export async function onRequest (context) {
  try {
    context.data.conn = db(context.env)
    return await context.next()
  } catch (err) {
    if (err instanceof HttpError) return json({ error: err.message }, err.status)
    console.error(err)
    return json({ error: 'Er ging iets mis op de server' }, 500)
  }
}
