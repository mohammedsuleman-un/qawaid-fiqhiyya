// GET ?kind=&q=: artikelen en samenvattingen. POST {slug, kind, category_id, book_id, title, lang}: nieuw artikel.
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { insert, ACCESS_LEVELS } from '../../../../lib/content.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestGet ({ request, data: { conn, user } }) {
  need(user, 'content.edit')
  const p = new URL(request.url).searchParams
  const where = ['1 = 1']
  const args = []
  if (p.get('kind')) { where.push('a.kind = ?'); args.push(p.get('kind')) }
  if (p.get('q')) {
    where.push("(a.slug LIKE ? OR EXISTS (SELECT 1 FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.title LIKE ?))")
    args.push(`%${p.get('q')}%`, `%${p.get('q')}%`)
  }
  return json(await conn.execute(`SELECT a.id, a.slug, a.kind, a.category_id, a.book_id, a.access_level, a.archived_at, a.created_at,
      (SELECT title FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.lang = 'ar') AS title_ar,
      (SELECT status FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.lang = 'ar') AS status_ar,
      (SELECT title FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.lang = 'nl') AS title_nl,
      (SELECT status FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = a.id AND t.lang = 'nl') AS status_nl
    FROM articles a WHERE ${where.join(' AND ')} ORDER BY a.created_at DESC`, args))
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'content.create')
  const input = await body(request)
  const slug = str(input.slug, 120)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(400, 'Het adres mag alleen kleine letters, cijfers en streepjes bevatten')
  if (!str(input.title)) fail(400, 'Titel ontbreekt')
  const [dup] = await conn.execute('SELECT 1 AS x FROM articles WHERE slug = ?', [slug])
  if (dup) fail(400, 'Dit adres bestaat al')
  const articleId = await insert(conn, `INSERT INTO articles (slug, kind, category_id, book_id, access_level, created_by)
    VALUES (?, ?, ?, ?, ?, ?)`, [slug, input.kind === 'summary' ? 'summary' : 'article', input.category_id || null,
    input.book_id || null, ACCESS_LEVELS.includes(input.access_level) ? input.access_level : 'public', user.id])
  await conn.execute("INSERT INTO content_translations (entity_type, entity_id, lang, title) VALUES ('article', ?, ?, ?)",
    [articleId, input.lang === 'nl' ? 'nl' : 'ar', str(input.title)])
  await audit(conn, user, 'article.create', 'article', articleId, { slug })
  return json({ ok: true, id: articleId })
}
