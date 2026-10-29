// GET ?q=&category=&status=: boeken met titels per taal en voortgang per taal.
// POST: nieuw boek (concept) met gegevens en titels per taal (content.create).
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { insert, ACCESS_LEVELS } from '../../../../lib/content.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestGet ({ request, data: { conn, user } }) {
  need(user, 'content.edit')
  const p = new URL(request.url).searchParams
  const where = ['1 = 1']
  const args = []
  if (p.get('status')) { where.push('b.status = ?'); args.push(p.get('status')) }
  if (p.get('category')) { where.push('b.category_id = ?'); args.push(p.get('category')) }
  if (p.get('q')) {
    where.push('(b.slug LIKE ? OR b.author LIKE ? OR EXISTS (SELECT 1 FROM book_translations t WHERE t.book_id = b.id AND t.title LIKE ?))')
    args.push(`%${p.get('q')}%`, `%${p.get('q')}%`, `%${p.get('q')}%`)
  }
  return json(await conn.execute(`SELECT b.id, b.slug, b.status, b.zad_level, b.zad_subject, b.author, b.access_level, b.category_id, b.updated_at,
      c.name_nl AS category_nl, c.name_ar AS category_ar,
      (SELECT title FROM book_translations t WHERE t.book_id = b.id AND t.lang = 'ar') AS title_ar,
      (SELECT title FROM book_translations t WHERE t.book_id = b.id AND t.lang = 'nl') AS title_nl,
      (SELECT COUNT(*) FROM chapters ch WHERE ch.book_id = b.id AND ch.archived_at IS NULL) AS chapters,
      (SELECT COUNT(*) FROM chapters ch JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = ch.id
        WHERE ch.book_id = b.id AND ch.archived_at IS NULL AND t.lang = 'ar' AND t.status = 'published') AS published_ar,
      (SELECT COUNT(*) FROM chapters ch JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = ch.id
        WHERE ch.book_id = b.id AND ch.archived_at IS NULL AND t.lang = 'nl' AND t.status = 'published') AS published_nl
    FROM books b LEFT JOIN categories c ON c.id = b.category_id
    WHERE ${where.join(' AND ')} ORDER BY b.zad_level IS NOT NULL, b.zad_level, b.id, b.updated_at DESC`, args))
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'content.create')
  const input = await body(request)
  const slug = str(input.slug, 120)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(400, 'Het adres mag alleen kleine letters, cijfers en streepjes bevatten')
  if (!str(input.title_ar) && !str(input.title_nl)) fail(400, 'Vul minstens één titel in')
  const [dup] = await conn.execute('SELECT 1 AS x FROM books WHERE slug = ?', [slug])
  if (dup) fail(400, 'Dit adres bestaat al')
  const access = ACCESS_LEVELS.includes(input.access_level) ? input.access_level : 'public'
  const bookId = await insert(conn, `INSERT INTO books (slug, title, subtitle, status, category_id, author, translator, publisher, language, access_level, pdf)
    VALUES (?, ?, ?, 'draft', ?, ?, ?, ?, ?, ?, ?)`,
  [slug, str(input.title_ar || input.title_nl, 255), str(input.subtitle_ar || input.subtitle_nl), input.category_id || null,
    str(input.author, 255), str(input.translator, 255), str(input.publisher, 255), input.language === 'nl' ? 'nl' : 'ar', access, str(input.pdf)])
  for (const lang of ['ar', 'nl']) {
    if (str(input['title_' + lang])) {
      await conn.execute('INSERT INTO book_translations (book_id, lang, title, subtitle, description) VALUES (?, ?, ?, ?, ?)',
        [bookId, lang, str(input['title_' + lang], 255), str(input['subtitle_' + lang]), str(input['description_' + lang], 5000)])
    }
  }
  await audit(conn, user, 'book.create', 'book', bookId, { slug })
  return json({ ok: true, id: bookId })
}
