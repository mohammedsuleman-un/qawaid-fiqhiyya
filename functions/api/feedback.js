// POST: feedback of een foutmelding van iedereen, ook zonder account.
// Beschermd met een verborgen veld, een minimale invultijd en rate limiting.
// Feedback verandert nooit zelf de gepubliceerde tekst.
import { json, body, fail, str } from '../../lib/http.js'
import { ipHash } from '../../lib/auth.js'
import { allow } from '../../lib/ratelimit.js'
import { describe, ENTITY_TYPES, LANGS } from '../../lib/content.js'
import { FEEDBACK_CATEGORIES } from '../../lib/feedback.js'

export async function onRequestPost ({ request, data: { conn } }) {
  const input = await body(request)
  // Spam: verborgen veld ingevuld of binnen 3 seconden verstuurd. Doe alsof het gelukt is.
  if (input.website || (Number(input.elapsed) || 0) < 3000) return json({ ok: true })
  const ip = await ipHash(request)
  if (!(await allow(conn, 'feedback:' + ip, 5, 600))) fail(429, 'Je hebt veel feedback verstuurd. Probeer het over tien minuten opnieuw.')
  if (!ENTITY_TYPES.includes(input.entity_type) || !LANGS.includes(input.lang)) fail(400, 'Onbekende pagina')
  const entityId = Number(input.entity_id)
  if (!Number.isInteger(entityId) || !(await describe(conn, input.entity_type, entityId))) fail(400, 'Onbekende pagina')
  if (!FEEDBACK_CATEGORIES.includes(input.category)) fail(400, 'Kies een soort feedback')
  const message = str(input.message, 5000)
  if (message.length < 5) fail(400, 'Schrijf een korte omschrijving')
  if ((message.match(/https?:\/\//g) || []).length > 3) fail(400, 'Te veel links in je bericht')
  const email = str(input.email, 255)
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fail(400, 'Ongeldig e-mailadres')
  await conn.execute(`INSERT INTO feedback (entity_type, entity_id, lang, quote, category, message, suggestion, email, ip_hash)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [input.entity_type, entityId, input.lang, str(input.quote, 2000) || null, input.category, message,
    str(input.suggestion, 5000) || null, email || null, ip])
  return json({ ok: true })
}
