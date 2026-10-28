// GET: eerdere versies van een blok, nieuwste eerst.
import { json } from '../../../../../lib/db.js'

export async function onRequestGet ({ params, data: { conn } }) {
  return json(await conn.execute(
    'SELECT id, html, edited_by, edited_at FROM block_revisions WHERE block_id = ? ORDER BY id DESC LIMIT 50', [params.id]))
}
