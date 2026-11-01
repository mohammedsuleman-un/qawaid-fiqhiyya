// /api/student: de studentenomgeving. Iedere ingelogde gebruiker (student, docent of
// medewerker) mag hier zijn eigen boeken, planning en toetsen beheren. Docentfuncties
// onder /api/student/teach controleren zelf hun recht. Inloggen gaat via /api/admin/login.
import { currentUser } from '../../../lib/auth.js'
import { fail } from '../../../lib/http.js'

const OPEN = new Set(['register'])

export async function onRequest (context) {
  const { request, data } = context
  const name = new URL(request.url).pathname.replace(/^\/api\/student\/?/, '').split('/')[0]
  if (!['GET', 'DELETE'].includes(request.method) && !(request.headers.get('content-type') || '').includes('application/json')) {
    fail(415, 'Verwacht JSON')
  }
  if (!OPEN.has(name)) {
    data.user = await currentUser(data.conn, request)
    if (!data.user) fail(401, 'Niet ingelogd')
  }
  return context.next()
}
