// /api/admin vraagt een ingelogde gebruiker met een actief account. Elke route
// controleert daarna zelf het recht dat hij nodig heeft (lib/rbac.js).
import { currentUser } from '../../../lib/auth.js'
import { fail } from '../../../lib/http.js'

const OPEN = new Set(['login', 'login-2fa', 'accept-invite', 'reset-password', 'bootstrap', 'invitation'])

export async function onRequest (context) {
  const { request, data } = context
  const name = new URL(request.url).pathname.replace(/^\/api\/admin\/?/, '').split('/')[0]
  if (request.method !== 'GET' && !(request.headers.get('content-type') || '').includes('application/json')) {
    fail(415, 'Verwacht JSON')
  }
  if (!OPEN.has(name)) {
    data.user = await currentUser(data.conn, request)
    if (!data.user) fail(401, 'Niet ingelogd')
  }
  return context.next()
}
