import { json } from '../../../lib/http.js'
import { endSession } from '../../../lib/auth.js'

export async function onRequestPost ({ request, data: { conn } }) {
  return json({ ok: true }, 200, { 'set-cookie': await endSession(conn, request) })
}
