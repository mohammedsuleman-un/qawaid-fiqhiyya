// Geeft bij een fout een leesbare JSON-melding in plaats van Cloudflare-fout 1101.
import { json } from '../../lib/db.js'

export async function onRequest ({ next }) {
  try {
    return await next()
  } catch (err) {
    return json({ error: err.message }, 500)
  }
}
