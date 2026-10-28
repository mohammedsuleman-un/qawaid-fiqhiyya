// GET: boek met gegevens, titels per taal en hoofdstukken met status per taal.
// PATCH: gegevens (content.create), titels per taal (content.edit), status (content.publish).
import { json, body, need, fail, str, id } from '../../../../../lib/http.js'
import { ACCESS_LEVELS, BOOK_STATUSES } from '../../../../../lib/content.js'
import { audit } from '../../../../../lib/audit.js'

export async function onRequestGet ({ params, data: { conn, user } }) {
  need(user, 'content.edit')
  const bookId = id(params.id)
  const [book] = await conn.execute('SELECT * FROM books WHERE id = ?', [bookId])
  if (!book) fail(404, 'Boek niet gevonden')
  const translations = await conn.execute('SELECT lang, title, subtitle, description FROM book_translations WHERE book_id = ?', [bookId])
  const rows = await conn.execute(`SELECT ch.id, ch.slug, ch.position, ch.archived_at, t.lang, t.title, t.status,
      (SELECT COUNT(*) FROM content_versions v WHERE v.translation_id = t.id AND v.status IN ('draft', 'in_review', 'approved', 'rejected')) AS open_versions
    FROM chapters ch LEFT JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = ch.id
    WHERE ch.book_id = ? ORDER BY ch.position`, [bookId])
  const chapters = []
  for (const r of rows) {
    let ch = chapters.find((c) => c.id === r.id)
    if (!ch) { ch = { id: r.id, slug: r.slug, position: r.position, archived: !!r.archived_at, langs: {} }; chapters.push(ch) }
    if (r.lang) ch.langs[r.lang] = { title: r.title, status: r.status, open: Number(r.open_versions) }
  }
  return json({ book, translations, chapters })
}

export async function onRequestPatch ({ request, params, data: { conn, user } }) {
  const bookId = id(params.id)
  const input = await body(request)
  const [book] = await conn.execute('SELECT id, slug, status FROM books WHERE id = ?', [bookId])
  if (!book) fail(404, 'Boek niet gevonden')

  const meta = ['category_id', 'author', 'translator', 'publisher', 'language', 'access_level', 'pdf', 'cover'].filter((f) => input[f] !== undefined)
  if (meta.length) {
    need(user, 'content.create')
    if (input.access_level !== undefined && !ACCESS_LEVELS.includes(input.access_level)) fail(400, 'Onbekend toegangsniveau')
    await conn.execute(`UPDATE books SET ${meta.map((f) => `${f} = ?`).join(', ')} WHERE id = ?`,
      [...meta.map((f) => f === 'category_id' ? (input[f] || null) : str(input[f], 500)), bookId])
  }
  for (const lang of ['ar', 'nl']) {
    const t = input.translations?.[lang]
    if (!t) continue
    need(user, 'content.edit')
    await conn.execute(`INSERT INTO book_translations (book_id, lang, title, subtitle, description) VALUES (?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE title = VALUES(title), subtitle = VALUES(subtitle), description = VALUES(description)`,
    [bookId, lang, str(t.title, 255), str(t.subtitle), str(t.description, 5000)])
    if (lang === 'ar') await conn.execute('UPDATE books SET title = ?, subtitle = ? WHERE id = ?', [str(t.title, 255), str(t.subtitle), bookId])
  }
  if (input.status !== undefined) {
    need(user, 'content.publish')
    if (!BOOK_STATUSES.includes(input.status)) fail(400, 'Onbekende status')
    await conn.execute('UPDATE books SET status = ? WHERE id = ?', [input.status, bookId])
  }
  await audit(conn, user, 'book.update', 'book', bookId, { slug: book.slug, ...input })
  return json({ ok: true })
}
