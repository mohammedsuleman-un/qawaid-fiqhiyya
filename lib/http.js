// Hulpfuncties voor API-routes: JSON-antwoorden, invoer lezen en rechten afdwingen.
import { denyReason } from './rbac.js'

export function json (data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers }
  })
}

export class HttpError extends Error {
  constructor (status, message) { super(message); this.status = status }
}

export const fail = (status, message) => { throw new HttpError(status, message) }

export async function body (request) {
  if (!(request.headers.get('content-type') || '').includes('application/json')) fail(415, 'Verwacht JSON')
  try { return await request.json() } catch { fail(400, 'Ongeldige JSON') }
}

// Gooit 401 of 403 als de gebruiker het recht niet heeft.
export function need (user, permission) {
  const reason = denyReason(user, permission)
  if (reason) fail(user ? 403 : 401, reason)
}

export const str = (v, max = 500) => String(v ?? '').trim().slice(0, max)
export const id = (v) => { const n = Number(v); if (!Number.isInteger(n) || n <= 0) fail(400, 'Ongeldig id'); return n }
