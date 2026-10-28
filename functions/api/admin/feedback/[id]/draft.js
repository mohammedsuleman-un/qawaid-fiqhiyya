// POST: maakt van geaccepteerde feedback een concept op basis van de gepubliceerde tekst.
// Het concept moet daarna gewoon door de goedkeuring.
import { json, need, fail, id } from '../../../../../lib/http.js'
import { can } from '../../../../../lib/rbac.js'
import { ensureTranslation, insert } from '../../../../../lib/content.js'
import { audit } from '../../../../../lib/audit.js'

export async function onRequestPost ({ params, data: { conn, user } }) {
  need(user, 'content.edit')
  const fid = id(params.id)
  const [f] = await conn.execute('SELECT * FROM feedback WHERE id = ?', [fid])
  if (!f) fail(404, 'Feedback niet gevonden')
  if (!can(user, 'feedback.manage') && Number(f.assigned_to) !== user.id) fail(403, 'Deze feedback is niet aan jou toegewezen')
  const t = await ensureTranslation(conn, f.entity_type, f.entity_id, f.lang)
  const [pub] = t.published_version_id
    ? await conn.execute('SELECT title, body FROM content_versions WHERE id = ?', [t.published_version_id]) : []
  const versionId = await insert(conn, `INSERT INTO content_versions (translation_id, title, body, reason, status, based_on_id, created_by)
    VALUES (?, ?, ?, ?, 'draft', ?, ?)`, [t.id, pub?.title ?? t.title, pub?.body ?? '', `Correctie naar aanleiding van feedback #${fid}`,
    t.published_version_id, user.id])
  await conn.execute("UPDATE feedback SET draft_version_id = ?, status = IF(status = 'new', 'accepted', status) WHERE id = ?", [versionId, fid])
  await audit(conn, user, 'feedback.draft', 'feedback', fid, { version: versionId })
  return json({ ok: true, version_id: versionId })
}
