// Inloggen: wachtwoorden met PBKDF2, sessies als willekeurig token in een
// HttpOnly-cookie. In de database staat alleen de SHA-256-hash van tokens.
import { loadPermissions } from './rbac.js'

const enc = new TextEncoder()
const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)))
const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0))
const ITERATIONS = 100000
const SESSION_DAYS = 14
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

export const passwordProblem = (pw) =>
  String(pw || '').length < 10 ? 'Kies een wachtwoord van minstens 10 tekens' : null

export function randomToken () {
  return [...crypto.getRandomValues(new Uint8Array(32))].map((x) => x.toString(16).padStart(2, '0')).join('')
}

export async function sha256 (text) {
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(text))
  return [...new Uint8Array(buf)].map((x) => x.toString(16).padStart(2, '0')).join('')
}

export const ipHash = (request) => sha256('zb:' + (request.headers.get('cf-connecting-ip') || 'onbekend'))

const readCookie = (request) =>
  (request.headers.get('cookie') || '').split(/;\s*/).find((c) => c.startsWith(COOKIE + '='))?.slice(COOKIE.length + 1)

// De ingelogde gebruiker met rollen en rechten, of null. Met { pending: true } ook een
// sessie die nog op de tweestapscode wacht.
export async function currentUser (conn, request, { pending = false } = {}) {
  const token = readCookie(request)
  if (!token) return null
  const [row] = await conn.execute(
    `SELECT u.id, u.email, u.name, u.lang, u.totp_enabled, u.status, s.mfa_ok, s.token_hash
     FROM sessions s JOIN users u ON u.id = s.user_id
     WHERE s.token_hash = ? AND s.expires_at > NOW()`, [await sha256(token)])
  if (!row || row.status !== 'active') return null
  const user = { ...row, id: Number(row.id), totp_enabled: Number(row.totp_enabled) === 1, mfa_ok: Number(row.mfa_ok) === 1 }
  if (user.totp_enabled && !user.mfa_ok && !pending) return null
  user.roles = (await conn.execute('SELECT role_code FROM user_roles WHERE user_id = ?', [user.id])).map((r) => r.role_code)
  user.permissions = await loadPermissions(conn, user.id)
  return user
}

const cookie = (value, maxAge) => `${COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`

export async function startSession (conn, userId, mfaOk) {
  const token = randomToken()
  await conn.execute('DELETE FROM sessions WHERE expires_at < NOW()')
  await conn.execute(`INSERT INTO sessions (token_hash, user_id, mfa_ok, expires_at)
    VALUES (?, ?, ?, NOW() + INTERVAL ${SESSION_DAYS} DAY)`, [await sha256(token), userId, mfaOk ? 1 : 0])
  await conn.execute('UPDATE users SET last_login_at = NOW() WHERE id = ?', [userId])
  return cookie(token, SESSION_DAYS * 86400)
}

export async function endSession (conn, request) {
  const token = readCookie(request)
  if (token) await conn.execute('DELETE FROM sessions WHERE token_hash = ?', [await sha256(token)])
  return cookie('', 0)
}
