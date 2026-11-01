// POST: feedback of een foutmelding van iedereen, ook zonder account, vanaf elke pagina.
// De melding onthoudt de pagina (adres en titel) en de alinea (anker en tekst) waar op de knop is gedrukt.
// Spambescherming: verborgen veld, minimale invultijd, rate limiting per IP en voor alle anonieme
// meldingen samen, maximaal drie links en geen dubbele meldingen. Ingelogde gebruikers worden herkend.
// Feedback verandert nooit zelf de gepubliceerde tekst.
import { json, body, fail, str } from '../../lib/http.js'
import { ipHash, currentUser } from '../../lib/auth.js'
import { allow } from '../../lib/ratelimit.js'
import { describe, ENTITY_TYPES, LANGS } from '../../lib/content.js'
import { FEEDBACK_CATEGORIES } from '../../lib/feedback.js'

// Alleen een pad op deze site (geen ander domein), zonder het anker van de feedbackknop zelf.
function pagePath (v) {
  const s = str(v, 500)
  if (!s.startsWith('/') || s.startsWith('//')) return null
  try {
    const u = new URL(s, 'https://zuiverebron.nl')
    u.searchParams.delete('zbfb')
    return (u.pathname + u.search + u.hash).slice(0, 500)
  } catch { return null }
}

export async function onRequestPost ({ request, data: { conn } }) {
  const input = await body(request)
  const user = await currentUser(conn, request).catch(() => null)
  // Spam: verborgen veld ingevuld of te snel verstuurd. Doe alsof het gelukt is.
  if (input.website || (Number(input.elapsed) || 0) < (user ? 1000 : 3000)) return json({ ok: true })
  const ip = await ipHash(request)
  const busy = 'Je hebt veel feedback verstuurd. Probeer het over tien minuten opnieuw.'
  if (!(await allow(conn, 'feedback:' + (user ? 'u' + user.id : ip), user ? 20 : 5, 600))) fail(429, busy)
  if (!user && !(await allow(conn, 'feedback:anon', 60, 3600))) fail(429, 'Er komt nu erg veel feedback binnen. Probeer het later opnieuw.')
  const lang = LANGS.includes(input.lang) ? input.lang : 'nl'
  const page = pagePath(input.page_url)
  const type = String(input.entity_type || 'page')
  let entityId = 0
  if (type !== 'page') {
    if (!LANGS.includes(input.lang)) fail(400, 'Onbekende pagina')
    entityId = Number(input.entity_id)
    if (!ENTITY_TYPES.includes(type) || !Number.isInteger(entityId) || !(await describe(conn, type, entityId))) fail(400, 'Onbekende pagina')
  } else if (!page) fail(400, 'Onbekende pagina')
  if (!FEEDBACK_CATEGORIES.includes(input.category)) fail(400, 'Kies een soort feedback')
  const message = str(input.message, 5000)
  if (message.length < 5) fail(400, 'Schrijf een korte omschrijving')
  const links = (s) => (s.match(/https?:\/\/|www\./gi) || []).length
  const suggestion = str(input.suggestion, 5000)
  if (links(message) + links(suggestion) > 3) fail(400, 'Te veel links in je bericht')
  const email = str(input.email, 255)
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fail(400, 'Ongeldig e-mailadres')
  const [dup] = await conn.execute(`SELECT id FROM feedback WHERE message = ? AND (ip_hash = ? OR user_id = ?)
    AND created_at > NOW() - INTERVAL 1 DAY LIMIT 1`, [message, ip, user ? user.id : -1])
  if (dup) return json({ ok: true })
  await conn.execute(`INSERT INTO feedback (entity_type, entity_id, lang, quote, category, message, suggestion, email, ip_hash,
      page_url, page_title, anchor, user_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [type, entityId, lang, str(input.quote, 2000) || null, input.category, message,
    suggestion || null, email || null, ip,
    page, str(input.page_title, 300) || null, str(input.anchor, 300) || null, user ? user.id : null])
  return json({ ok: true })
}
