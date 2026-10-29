// GET: een versie met de gepubliceerde versie ernaast (om te vergelijken).
// PATCH {title, body, reason}: eigen concept bijwerken (automatisch opslaan).
import { json, body, need, fail, str, id } from '../../../../../lib/http.js'
import { loadVersion, EDITABLE } from '../../../../../lib/workflow.js'
import { sanitizeHtml } from '../../../../../lib/sanitize.js'
import { parseStudy } from '../../../../../lib/study.js'
import { describe } from '../../../../../lib/content.js'

export async function onRequestGet ({ params, data: { conn, user } }) {
  need(user, 'content.edit')
  const v = await loadVersion(conn, id(params.id))
  const [published] = v.published_version_id
    ? await conn.execute('SELECT id, title, body, published_at FROM content_versions WHERE id = ?', [v.published_version_id])
    : []
  const [author] = await conn.execute('SELECT email, name FROM users WHERE id = ?', [v.created_by])
  return json({ version: v, published: published || null, author: author || null, info: await describe(conn, v.entity_type, v.entity_id) })
}

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'content.edit')
  const v = await loadVersion(conn, id(params.id))
  if (Number(v.created_by) !== user.id) fail(403, 'Je kunt alleen je eigen concept bewerken')
  if (!EDITABLE.includes(v.status)) fail(409, 'Deze versie is al ingediend en kan niet meer worden bewerkt')
  const input = await body(request)
  await conn.execute("UPDATE content_versions SET title = ?, body = ?, reason = ?, status = 'draft' WHERE id = ?",
    [str(input.title ?? v.title), v.entity_type === 'study' ? JSON.stringify(parseStudy(input.body ?? v.body)) : sanitizeHtml(input.body ?? v.body), str(input.reason ?? v.reason), v.id])
  return json({ ok: true })
}
