// PATCH {kind, category_id, book_id, access_level} (content.create) of {archived} (content.publish).
import { json, body, need, fail, id } from '../../../../lib/http.js'
import { ACCESS_LEVELS } from '../../../../lib/content.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  const articleId = id(params.id)
  const input = await body(request)
  const [a] = await conn.execute('SELECT id FROM articles WHERE id = ?', [articleId])
  if (!a) fail(404, 'Artikel niet gevonden')
  const meta = ['kind', 'category_id', 'book_id', 'access_level'].filter((f) => input[f] !== undefined)
  if (meta.length) {
    need(user, 'content.create')
    if (input.access_level !== undefined && !ACCESS_LEVELS.includes(input.access_level)) fail(400, 'Onbekend toegangsniveau')
    if (input.kind !== undefined && !['article', 'summary'].includes(input.kind)) fail(400, 'Onbekende soort')
    await conn.execute(`UPDATE articles SET ${meta.map((f) => `${f} = ?`).join(', ')} WHERE id = ?`,
      [...meta.map((f) => input[f] === '' ? null : input[f]), articleId])
  }
  if (input.archived !== undefined) {
    need(user, 'content.publish')
    await conn.execute(`UPDATE articles SET archived_at = ${input.archived ? 'NOW()' : 'NULL'} WHERE id = ?`, [articleId])
  }
  await audit(conn, user, 'article.update', 'article', articleId, input)
  return json({ ok: true })
}
