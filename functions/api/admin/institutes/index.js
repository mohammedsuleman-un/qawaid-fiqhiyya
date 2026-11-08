// GET: de instituten van de ingelogde medewerker (een superbeheerder ziet alle), met het
// aantal groepen, boeken en gekoppelde medewerkers.
// POST {name_nl, name_ar, slug, organization} (institutes.manage): nieuw instituut, meteen met de vier
// standaardgroepen (A en B, elk broeders en zusters). Weekrooster en jaarrooster vul je
// daarna in onder Groepen & lesagenda.
import { json, body, need, fail, str } from '../../../../lib/http.js'
import { audit } from '../../../../lib/audit.js'
import { insert } from '../../../../lib/content.js'
import { allInstitutes, myInstituteIds, organizationId } from '../../../../lib/institutes.js'

const STANDARD_GROUPS = [
  ['A-m', 'A', 'm', 'Groep A · broeders', 'المجموعة أ · الإخوة'],
  ['A-f', 'A', 'f', 'Groep A · zusters', 'المجموعة أ · الأخوات'],
  ['B-m', 'B', 'm', 'Groep B · broeders', 'المجموعة ب · الإخوة'],
  ['B-f', 'B', 'f', 'Groep B · zusters', 'المجموعة ب · الأخوات']
]

export async function onRequestGet ({ data: { conn, user } }) {
  const mine = await myInstituteIds(conn, user)
  const list = (await allInstitutes(conn)).filter((i) => mine.includes(i.id))
  if (!list.length) return json([])
  const count = async (sql) => Object.fromEntries((await conn.execute(sql)).map((r) => [Number(r.id), Number(r.n)]))
  const groups = await count('SELECT institute_id AS id, COUNT(*) AS n FROM class_groups GROUP BY institute_id')
  const books = await count('SELECT institute_id AS id, COUNT(*) AS n FROM book_institutes GROUP BY institute_id')
  const staff = await count('SELECT institute_id AS id, COUNT(*) AS n FROM user_institutes GROUP BY institute_id')
  return json(list.map((i) => ({ ...i, groups: groups[i.id] || 0, books: books[i.id] || 0, staff: staff[i.id] || 0 })))
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  need(user, 'institutes.manage')
  const input = await body(request)
  const nameNl = str(input.name_nl, 255)
  const nameAr = str(input.name_ar, 255)
  if (!nameNl || !nameAr) fail(400, 'Vul de Nederlandse en Arabische naam in')
  const slug = str(input.slug, 64)
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(400, 'Het adres mag alleen kleine letters, cijfers en streepjes bevatten')
  const [dup] = await conn.execute('SELECT 1 AS x FROM institutes WHERE slug = ?', [slug])
  if (dup) fail(400, 'Dit adres bestaat al')
  const [{ n }] = await conn.execute('SELECT COALESCE(MAX(position), 0) + 1 AS n FROM institutes')
  const org = await organizationId(conn, input.organization)
  const newId = await insert(conn, `INSERT INTO institutes (slug, name_nl, name_ar, position${org ? ', organization_id' : ''}) VALUES (?, ?, ?, ?${org ? ', ?' : ''})`, [slug, nameNl, nameAr, Number(n), ...(org ? [org] : [])])
  await conn.execute(`INSERT INTO class_groups (institute_id, code, cohort, gender, name_nl, name_ar, position) VALUES ${STANDARD_GROUPS.map(() => '(?, ?, ?, ?, ?, ?, ?)').join(', ')}`,
    STANDARD_GROUPS.flatMap((g, i) => [newId, ...g, i + 1]))
  await audit(conn, user, 'institute.create', 'institute', newId, { slug, name_nl: nameNl, name_ar: nameAr, organization: org })
  return json({ ok: true, id: newId })
}
