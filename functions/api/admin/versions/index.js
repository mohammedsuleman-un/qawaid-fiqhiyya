// POST {entity_type, entity_id, lang, title, body, reason, based_on_id}: concept opslaan.
// Heeft deze gebruiker al een open concept voor dezelfde tekst en taal, dan wordt dat
// bijgewerkt (automatisch opslaan). De gepubliceerde versie verandert hierdoor nooit.
import { json, body, need, fail, str, id } from '../../../../lib/http.js'
import { ENTITY_TYPES, LANGS, ensureTranslation, insert, describe } from '../../../../lib/content.js'
import { sanitizeHtml } from '../../../../lib/sanitize.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'content.edit')
  const input = await body(request)
  if (!ENTITY_TYPES.includes(input.entity_type) || !LANGS.includes(input.lang)) fail(400, 'Onbekend type of taal')
  const entityId = id(input.entity_id)
  if (!(await describe(conn, input.entity_type, entityId))) fail(404, 'Niet gevonden')
  const translation = await ensureTranslation(conn, input.entity_type, entityId, input.lang, str(input.title))
  const title = str(input.title)
  const html = sanitizeHtml(input.body)
  const reason = str(input.reason)
  const [open] = await conn.execute(`SELECT id FROM content_versions WHERE translation_id = ? AND created_by = ?
    AND status IN ('draft', 'rejected') ORDER BY id DESC LIMIT 1`, [translation.id, user.id])
  if (open) {
    await conn.execute("UPDATE content_versions SET title = ?, body = ?, reason = ?, status = 'draft' WHERE id = ?",
      [title, html, reason, open.id])
    return json({ ok: true, id: Number(open.id), updated: true })
  }
  const versionId = await insert(conn, `INSERT INTO content_versions (translation_id, title, body, reason, status, based_on_id, created_by)
    VALUES (?, ?, ?, ?, 'draft', ?, ?)`, [translation.id, title, html, reason, input.based_on_id || null, user.id])
  await audit(conn, user, 'version.create', input.entity_type, entityId, { version: versionId, lang: input.lang })
  return json({ ok: true, id: versionId, updated: false })
}
