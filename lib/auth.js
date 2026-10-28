// Inloggen voor beheerders: wachtwoorden met PBKDF2, sessies als willekeurig
// token in een HttpOnly-cookie. In de database staat alleen de hash van het token.
const enc = new TextEncoder()
const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)))
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0))
const ITERATIONS = 100000
const SESSION_DAYS = 30
export const COOKIE = 'zb_session'

async function pbkdf2 (password, salt, iterations) {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'])
  return crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations }, key, 256)
}

export async function hashPassword (password) {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  return `pbkdf2$${ITERATIONS}$${b64(salt)}$${b64(await pbkdf2(password, salt, ITERATIONS))}`
}

export async function verifyPassword (password, stored) {
  const [, iterations, salt, hash] = (stored || '').split('$')
  if (!hash) return false
  const a = unb64(hash)
  const b = new Uint8Array(await pbkdf2(password, unb64(salt), Number(iterations)))
  return a.length === b.length && a.every((x, i) => x === b[i])
}

export function randomToken () {
  return [...crypto.getRandomValues(new Uint8Array(32))].map((x) => x.toString(16).padStart(2, '0')).join('')
}

export async function sha256 (text) {
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(text))
  return [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, '0')).join('')
}

const readCookie = (request) =>
  (request.headers.get('cookie') || '').split(/;\s*/).find((c) => c.startsWith(COOKIE + '='))?.slice(COOKIE.length + 1)

export async function currentAdmin (conn, request) {
  const token = readCookie(request)
  if (!token) return null
  const [row] = await conn.execute(
    `SELECT a.email, a.role FROM sessions s JOIN admins a ON a.email = s.email
     WHERE s.token_hash = ? AND s.expires_at > NOW()`, [await sha256(token)])
  return row || null
}

export async function startSession (conn, email) {
  const token = randomToken()
  await conn.execute('DELETE FROM sessions WHERE expires_at < NOW()')
  await conn.execute(`INSERT INTO sessions (token_hash, email, expires_at)
    VALUES (?, ?, NOW() + INTERVAL ${SESSION_DAYS} DAY)`, [await sha256(token), email])
  return `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_DAYS * 86400}`
}

export async function endSession (conn, request) {
  const token = readCookie(request)
  if (token) await conn.execute('DELETE FROM sessions WHERE token_hash = ?', [await sha256(token)])
  return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`
}

// Beheerders zijn vertrouwd, maar scripts en event-attributen horen nooit in boektekst.
export function cleanHtml (html) {
  return String(html)
    .replace(/<\s*(script|style|iframe|object|embed)\b[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/<\s*(script|style|iframe|object|embed)\b[^>]*>/gi, '')
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/javascript:/gi, '')
    .trim()
}
