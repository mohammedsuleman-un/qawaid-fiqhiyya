// PATCH {name_nl, name_ar, position, parent_id}: categorie wijzigen of verplaatsen.
// DELETE: alleen als er geen boeken of artikelen in staan.
import { json, body, need, fail, str, id } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  need(user, 'categories.manage')
  const catId = id(params.id)
  const input = await body(request)
  const sets = []
  const args = []
  for (const f of ['name_nl', 'name_ar']) if (input[f] !== undefined) { sets.push(`${f} = ?`); args.push(str(input[f], 255)) }
  if (input.position !== undefined) { sets.push('position = ?'); args.push(Number(input.position) || 0) }
  if (input.parent_id !== undefined) {
    if (Number(input.parent_id) === catId) fail(400, 'Een categorie kan niet onder zichzelf staan')
    sets.push('parent_id = ?'); args.push(input.parent_id || null)
  }
  if (!sets.length) fail(400, 'Niets om te wijzigen')
  await conn.execute(`UPDATE categories SET ${sets.join(', ')} WHERE id = ?`, [...args, catId])
  await audit(conn, user, 'category.update', 'category', catId, input)
  return json({ ok: true })
}

export async function onRequestDelete ({ params, data: { conn, user } }) {
  need(user, 'categories.manage')
  const catId = id(params.id)
  const [{ n }] = await conn.execute(`SELECT (SELECT COUNT(*) FROM books WHERE category_id = ?) +
    (SELECT COUNT(*) FROM articles WHERE category_id = ?) + (SELECT COUNT(*) FROM categories WHERE parent_id = ?) AS n`, [catId, catId, catId])
  if (Number(n) > 0) fail(400, 'Deze categorie is nog in gebruik')
  await conn.execute('DELETE FROM categories WHERE id = ?', [catId])
  await audit(conn, user, 'category.delete', 'category', catId)
  return json({ ok: true })
}
