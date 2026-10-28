// GET: een hoofdstuk of artikel met per taal de gepubliceerde versie en alle versies.
import { json, need, fail, id } from '../../../../../lib/http.js'
import { ENTITY_TYPES, LANGS, describe } from '../../../../../lib/content.js'

export async function onRequestGet ({ params, data: { conn, user } }) {
  need(user, 'content.edit')
  if (!ENTITY_TYPES.includes(params.type)) fail(404, 'Onbekend type')
  const entityId = id(params.id)
  const info = await describe(conn, params.type, entityId)
  if (!info) fail(404, 'Niet gevonden')
  const langs = {}
  for (const lang of LANGS) {
    const [t] = await conn.execute('SELECT * FROM content_translations WHERE entity_type = ? AND entity_id = ? AND lang = ?',
      [params.type, entityId, lang])
    if (!t) { langs[lang] = null; continue }
    const [published] = t.published_version_id
      ? await conn.execute('SELECT id, title, body, published_at FROM content_versions WHERE id = ?', [t.published_version_id])
      : []
    const versions = await conn.execute(`SELECT v.id, v.title, v.status, v.reason, v.review_comment, v.created_at, v.updated_at,
        v.published_at, v.created_by, cu.email AS created_by_email, ru.email AS reviewed_by_email
      FROM content_versions v LEFT JOIN users cu ON cu.id = v.created_by LEFT JOIN users ru ON ru.id = v.reviewed_by
      WHERE v.translation_id = ? ORDER BY v.id DESC LIMIT 100`, [t.id])
    langs[lang] = { id: t.id, title: t.title, status: t.status, published: published || null, versions }
  }
  return json({ type: params.type, id: entityId, info, langs })
}
