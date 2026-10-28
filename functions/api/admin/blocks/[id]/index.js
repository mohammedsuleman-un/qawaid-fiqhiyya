// PATCH {kind, page, html}: blok wijzigen; de vorige tekst gaat naar de geschiedenis.
// DELETE: blok verwijderen; de tekst blijft in de geschiedenis staan.
import { json } from '../../../../../lib/db.js'
import { body, fail, blockFields } from '../../../../../lib/admin.js'

async function saveRevision (conn, id, email) {
  const [old] = await conn.execute('SELECT id, kind, page, html FROM blocks WHERE id = ?', [id])
  if (old) {
    await conn.execute('INSERT INTO block_revisions (block_id, html, edited_by) VALUES (?, ?, ?)',
      [old.id, old.html, email])
  }
  return old
}

export async function onRequestPatch ({ request, params, data: { conn, admin } }) {
  const input = await body(request)
  const old = await saveRevision(conn, params.id, admin.email)
  if (!old) return fail('Blok niet gevonden', 404)
  const b = blockFields({ kind: old.kind, page: old.page, ...input })
  await conn.execute('UPDATE blocks SET kind = ?, page = ?, html = ?, plain = ?, updated_by = ? WHERE id = ?',
    [b.kind, b.page, b.html, b.plain, admin.email, params.id])
  return json({ ok: true })
}

export async function onRequestDelete ({ params, data: { conn, admin } }) {
  const old = await saveRevision(conn, params.id, admin.email)
  if (!old) return fail('Blok niet gevonden', 404)
  await conn.execute('DELETE FROM blocks WHERE id = ?', [params.id])
  return json({ ok: true })
}
