// Alle /api/admin-routes vragen een ingelogde beheerder, behalve inloggen,
// een uitnodiging accepteren en het aanmaken van de allereerste beheerder.
import { db, json } from '../../../lib/db.js'
import { currentAdmin } from '../../../lib/auth.js'

const OPEN = ['/api/admin/login', '/api/admin/accept-invite', '/api/admin/bootstrap']

export async function onRequest (context) {
  const { request, env, data } = context
  data.conn = db(env)
  if (OPEN.includes(new URL(request.url).pathname)) return context.next()
  data.admin = await currentAdmin(data.conn, request)
  if (!data.admin) return json({ error: 'Niet ingelogd' }, 401)
  if (request.method !== 'GET' && !(request.headers.get('content-type') || '').includes('application/json')) {
    return json({ error: 'Verwacht JSON' }, 415)
  }
  return context.next()
}
