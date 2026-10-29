// GET: alle hadith uit de teksten met hun aantekeningen (ook uit conceptboeken).
// PATCH {hkey, source, grade, note}: bron, beoordeling en notitie bij een hadith.
// Deze velden vult alleen een mens in; ze gelden voor elke plek met dezelfde tekst.
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { hadithList } from '../../../../lib/register.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'content.edit')
  return json(await hadithList(conn, { staff: true }))
}

export async function onRequestPatch ({ request, data: { conn, user } }) {
  need(user, 'content.edit')
  const input = await body(request)
  if (!/^[0-9a-f]{64}$/.test(String(input.hkey))) fail(400, 'Onbekende hadith')
  await conn.execute(`INSERT INTO hadith_notes (hkey, source, grade, note, updated_by) VALUES (?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE source = VALUES(source), grade = VALUES(grade), note = VALUES(note), updated_by = VALUES(updated_by)`,
  [input.hkey, str(input.source, 500), str(input.grade, 100), str(input.note, 5000), user.id])
  await audit(conn, user, 'hadith.note', 'hadith', input.hkey.slice(0, 12), { source: str(input.source, 500), grade: str(input.grade, 100) })
  return json({ ok: true })
}
