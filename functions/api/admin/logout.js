import { json } from '../../../lib/db.js'
import { endSession } from '../../../lib/auth.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const res = json({ ok: true })
  res.headers.append('set-cookie', await endSession(conn, request))
  return res
}
