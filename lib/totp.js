// Tweestapsverificatie met een app (RFC 6238: 6 cijfers, 30 seconden, HMAC-SHA1).
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

export function newSecret () {
  const bytes = crypto.getRandomValues(new Uint8Array(20))
  let bits = ''
  for (const b of bytes) bits += b.toString(2).padStart(8, '0')
  return bits.match(/.{5}/g).map((chunk) => ALPHABET[parseInt(chunk, 2)]).join('')
}

function base32Decode (s) {
  const bits = s.replace(/=+$/, '').toUpperCase().split('').map((c) => ALPHABET.indexOf(c).toString(2).padStart(5, '0')).join('')
  return Uint8Array.from(bits.match(/.{8}/g) || [], (b) => parseInt(b, 2))
}

export async function codeAt (secret, counter) {
  const key = await crypto.subtle.importKey('raw', base32Decode(secret), { name: 'HMAC', hash: 'SHA-1' }, false, ['sign'])
  const msg = new ArrayBuffer(8)
  new DataView(msg).setUint32(4, counter)
  new DataView(msg).setUint32(0, Math.floor(counter / 2 ** 32))
  const h = new Uint8Array(await crypto.subtle.sign('HMAC', key, msg))
  const o = h[19] & 15
  const n = ((h[o] & 127) << 24) | (h[o + 1] << 16) | (h[o + 2] << 8) | h[o + 3]
  return String(n % 1e6).padStart(6, '0')
}

// Accepteert ook de vorige en volgende 30 seconden, voor klokverschil.
export async function verifyCode (secret, code, now = Date.now()) {
  const counter = Math.floor(now / 30000)
  const clean = String(code || '').replace(/\s/g, '')
  for (const d of [-1, 0, 1]) if (await codeAt(secret, counter + d) === clean) return true
  return false
}

export const otpauthUri = (secret, email) =>
  `otpauth://totp/${encodeURIComponent('De Zuivere Bron:' + email)}?secret=${secret}&issuer=${encodeURIComponent('De Zuivere Bron')}`
