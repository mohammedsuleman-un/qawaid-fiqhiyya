// GET: personenregister met de status van de biografie per taal.
// POST {slug, name_ar, name_nl, kind, death_hijri, aliases}: nieuwe persoon (content.create).
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { insert } from '../../../../lib/content.js'
import { PERSON_KINDS } from '../../../../lib/register.js'
import { audit } from '../../../../lib/audit.js'

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'content.edit')
  return json(await conn.execute(`SELECT p.*,
      (SELECT status FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = p.article_id AND t.lang = 'ar') AS status_ar,
      (SELECT status FROM content_translations t WHERE t.entity_type = 'article' AND t.entity_id = p.article_id AND t.lang = 'nl') AS status_nl
    FROM persons p ORDER BY p.position, p.id`))
}

export const personFields = (input) => {
  const death = input.death_hijri === '' || input.death_hijri == null ? null : Number(input.death_hijri)
  if (death !== null && (!Number.isInteger(death) || death < 0 || death > 1500)) fail(400, 'Ongeldig sterfjaar')
  if (input.kind !== undefined && !PERSON_KINDS.includes(input.kind)) fail(400, 'Onbekende soort')
  return { name_ar: str(input.name_ar, 255), name_nl: str(input.name_nl, 255), kind: input.kind || 'alim', death_hijri: death, aliases: str(input.aliases, 2000) }
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'content.create')
  const input = await body(request)
  const slug = str(input.slug, 100)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(400, 'Het adres mag alleen kleine letters, cijfers en streepjes bevatten')
  const f = personFields(input)
  if (!f.name_ar) fail(400, 'Vul de Arabische naam in')
  const [dup] = await conn.execute('SELECT 1 AS x FROM persons WHERE slug = ?', [slug])
  if (dup) fail(400, 'Dit adres bestaat al')
  const articleId = await insert(conn, "INSERT INTO articles (slug, kind, access_level, created_by) VALUES (?, 'person', 'public', ?)", ['persoon-' + slug, user.id])
  const [{ n }] = await conn.execute('SELECT COALESCE(MAX(position), -1) + 1 AS n FROM persons')
  const id = await insert(conn, `INSERT INTO persons (slug, name_ar, name_nl, kind, death_hijri, aliases, article_id, position)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [slug, f.name_ar, f.name_nl, f.kind, f.death_hijri, f.aliases, articleId, Number(n)])
  await conn.execute(`INSERT INTO content_translations (entity_type, entity_id, lang, title) VALUES ('article', ?, 'ar', ?), ('article', ?, 'nl', ?)`,
    [articleId, f.name_ar, articleId, f.name_nl])
  await audit(conn, user, 'person.create', 'person', id, { slug })
  return json({ ok: true, id, article_id: articleId })
}
