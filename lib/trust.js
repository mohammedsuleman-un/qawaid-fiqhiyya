// Vertrouwd apparaat: na een geldige tweestapscode hoeft dit apparaat 90 dagen lang
// geen code meer in te voeren (wel nog het wachtwoord). De cookie bevat gebruiker,
// vervaldatum en een HMAC met het TOTP-geheim van de gebruiker als sleutel: wie 2FA
// uit- of opnieuw aanzet, maakt daarmee alle vertrouwde apparaten ongeldig.
export const TRUST_COOKIE = 'zb_trust'
export const TRUST_DAYS = 90
const PATH = '/api/admin/login'

async function sign (secret, payload) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode('zb-trust:' + secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload)))
  return [...sig].map((x) => x.toString(16).padStart(2, '0')).join('')
}

export async function trustCookie (userId, secret, now = Date.now()) {
  const payload = `${userId}.${Math.floor(now / 1000) + TRUST_DAYS * 86400}`
  return `${TRUST_COOKIE}=${payload}.${await sign(secret, payload)}; Path=${PATH}; HttpOnly; Secure; SameSite=Strict; Max-Age=${TRUST_DAYS * 86400}`
}

export const clearTrustCookie = () => `${TRUST_COOKIE}=; Path=${PATH}; HttpOnly; Secure; SameSite=Strict; Max-Age=0`

export async function isTrusted (request, userId, secret, now = Date.now()) {
  if (!secret) return false
  const value = (request.headers.get('cookie') || '').split(/;\s*/).find((c) => c.startsWith(TRUST_COOKIE + '='))?.slice(TRUST_COOKIE.length + 1)
  const [uid, exp, sig] = (value || '').split('.')
  if (!sig || Number(uid) !== Number(userId) || Number(exp) * 1000 < now) return false
  const expected = await sign(secret, `${uid}.${exp}`)
  return expected.length === sig.length && [...expected].every((c, i) => c === sig[i])
}
