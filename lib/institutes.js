// Instituten. Groepen, weekrooster, jaarrooster, agenda en boeken horen bij een instituut
// (een boek kan bij meer instituten horen). Een superbeheerder ziet en beheert alle
// instituten; ieder ander alleen de instituten waaraan hij gekoppeld is (user_institutes) en
// alle instituten van zijn organisaties (user_organizations, migratie 177). Organisaties
// maakt en vult alleen de superbeheerder.
import { fail } from './http.js'

const qs = (a) => a.map(() => '?').join(', ')
const norm = (i) => ({ ...i, id: Number(i.id), position: Number(i.position) })

export const isSuper = (user) => !!user?.roles?.includes('superadmin')

// Tussen het online zetten van de code en "Database bijwerken" (migratie 162) bestaan de
// tabellen nog niet; lezen geeft dan een lege lijst in plaats van een fout.
const missing = (err) => /doesn't exist|Unknown column|no such table/i.test(String(err?.message || err))
async function rows (conn, sql, args = []) {
  try { return await conn.execute(sql, args) } catch (err) { if (missing(err)) return []; throw err }
}

export const allInstitutes = async (conn) => {
  const list = await rows(conn, 'SELECT * FROM institutes ORDER BY position, id')
  return list.map((i) => ({ id: Number(i.id), slug: i.slug, name_nl: i.name_nl, name_ar: i.name_ar, position: Number(i.position), organization_id: i.organization_id == null ? null : Number(i.organization_id) }))
}

// Bestaan de organisatietabellen al (na migratie 177)? Eenmaal ja, dan per verbinding onthouden.
export async function hasOrganizations (conn) {
  if (conn._orgs) return true
  try { await conn.execute('SELECT 1 FROM user_organizations LIMIT 1'); conn._orgs = true } catch (err) { if (!missing(err)) throw err }
  return !!conn._orgs
}

// De ids van de instituten van deze gebruiker (superbeheerder: alle). Wordt per verzoek onthouden.
export async function myInstituteIds (conn, user) {
  if (user._institutes) return user._institutes
  const list = isSuper(user)
    ? await rows(conn, 'SELECT id AS institute_id FROM institutes ORDER BY position, id')
    : await rows(conn, 'SELECT institute_id FROM user_institutes WHERE user_id = ?', [user.id])
  const viaOrg = !isSuper(user) && await hasOrganizations(conn)
    ? await conn.execute('SELECT i.id AS institute_id FROM institutes i JOIN user_organizations o ON o.organization_id = i.organization_id WHERE o.user_id = ?', [user.id])
    : []
  user._institutes = [...new Set([...list, ...viaOrg].map((r) => Number(r.institute_id)))]
  return user._institutes
}

export async function needInstitute (conn, user, instituteId) {
  if (!(await myInstituteIds(conn, user)).includes(Number(instituteId))) fail(403, 'Je bent niet aan dit instituut gekoppeld')
}

// Een lijst ids uit de invoer ([1, 2], '1,2' of 1), alleen bestaande instituten.
export async function instituteIds (conn, input) {
  const raw = Array.isArray(input) ? input : String(input ?? '').split(',')
  const ids = [...new Set(raw.map(Number).filter((n) => Number.isInteger(n) && n > 0))]
  if (!ids.length) return []
  const found = await conn.execute(`SELECT id FROM institutes WHERE id IN (${qs(ids)})`, ids)
  if (found.length !== ids.length) fail(400, 'Onbekend instituut')
  return ids
}

// Nieuwe koppelingen: een superbeheerder zet ze zoals gekozen; een ander kan alleen zijn
// eigen instituten aan- of uitzetten, koppelingen met andere instituten blijven staan.
async function relink (conn, user, table, col, ownerId, wanted, current) {
  const mine = await myInstituteIds(conn, user)
  const allowed = isSuper(user) ? null : new Set(mine)
  if (allowed && wanted.some((i) => !allowed.has(i))) fail(403, 'Je bent niet aan dit instituut gekoppeld')
  const keep = allowed ? current.filter((i) => !allowed.has(i)) : []
  const next = [...new Set([...keep, ...wanted])]
  await conn.execute(`DELETE FROM ${table} WHERE ${col} = ?`, [ownerId])
  if (next.length) await conn.execute(`INSERT INTO ${table} (${col}, institute_id) VALUES ${next.map(() => '(?, ?)').join(', ')}`, next.flatMap((i) => [ownerId, i]))
  return next
}

// ---------- boeken ----------
export async function institutesOfBooks (conn, bookIds) {
  const map = new Map(bookIds.map((b) => [Number(b), []]))
  if (!bookIds.length) return map
  for (const r of await rows(conn, `SELECT book_id, institute_id FROM book_institutes WHERE book_id IN (${qs(bookIds)})`, bookIds)) {
    map.get(Number(r.book_id))?.push(Number(r.institute_id))
  }
  return map
}

// SQL-voorwaarde voor boeken (alias b) die deze gebruiker mag beheren, of null (alles).
export async function bookScope (conn, user, alias = 'b') {
  if (isSuper(user)) return null
  const mine = await myInstituteIds(conn, user)
  if (!mine.length) return { sql: '1 = 0', args: [] }
  return { sql: `EXISTS (SELECT 1 FROM book_institutes bi WHERE bi.book_id = ${alias}.id AND bi.institute_id IN (${qs(mine)}))`, args: mine }
}

export async function canBook (conn, user, bookId) {
  if (isSuper(user)) return true
  const mine = await myInstituteIds(conn, user)
  if (!mine.length) return false
  const [r] = await conn.execute(`SELECT 1 AS x FROM book_institutes WHERE book_id = ? AND institute_id IN (${qs(mine)})`, [bookId, ...mine])
  return !!r
}

export async function needBook (conn, user, bookId) {
  if (!(await canBook(conn, user, bookId))) fail(403, 'Dit boek hoort niet bij jouw instituut')
}

// Hoofdstukken en studiekaarten horen bij een boek; artikelen (personen, begrippen) zijn gedeeld.
export async function needEntity (conn, user, entityType, entityId) {
  if (isSuper(user) || !['chapter', 'study'].includes(entityType)) return
  const [ch] = await conn.execute('SELECT book_id FROM chapters WHERE id = ?', [entityId])
  if (ch) await needBook(conn, user, Number(ch.book_id))
}

export async function setBookInstitutes (conn, user, bookId, input) {
  const wanted = await instituteIds(conn, input)
  const current = (await institutesOfBooks(conn, [bookId])).get(bookId)
  return relink(conn, user, 'book_institutes', 'book_id', bookId, wanted, current)
}

// Een nieuw boek: de gekozen instituten, of anders die van de maker (superbeheerder: alle).
export async function linkNewBook (conn, user, bookId, input) {
  let ids = await instituteIds(conn, input)
  if (!ids.length) ids = await myInstituteIds(conn, user)
  return relink(conn, user, 'book_institutes', 'book_id', bookId, ids, [])
}

// ---------- gebruikers ----------
export async function institutesOfUsers (conn, userIds) {
  const map = new Map(userIds.map((u) => [Number(u), []]))
  if (!userIds.length) return map
  for (const r of await rows(conn, `SELECT user_id, institute_id FROM user_institutes WHERE user_id IN (${qs(userIds)})`, userIds)) {
    map.get(Number(r.user_id))?.push(Number(r.institute_id))
  }
  return map
}

// SQL-voorwaarde voor gebruikers (alias u) die deze beheerder ziet, of null (alles): gekoppeld
// aan een van zijn instituten of aan een organisatie daarvan, of student in een groep van zijn
// instituten. Wie nog nergens bij hoort, ziet alleen de superbeheerder (vóór migratie 177:
// iedere beheerder, zoals eerst).
export async function userScope (conn, user, alias = 'u') {
  if (isSuper(user)) return null
  const mine = await myInstituteIds(conn, user)
  if (!mine.length) return { sql: '1 = 0', args: [] }
  const orgs = await hasOrganizations(conn)
  return {
    sql: `(EXISTS (SELECT 1 FROM user_institutes x WHERE x.user_id = ${alias}.id AND x.institute_id IN (${qs(mine)}))
      OR EXISTS (SELECT 1 FROM class_group_members m JOIN class_groups g ON g.id = m.group_id WHERE m.user_id = ${alias}.id AND g.institute_id IN (${qs(mine)}))
      ${orgs ? `OR EXISTS (SELECT 1 FROM user_organizations uo JOIN institutes oi ON oi.organization_id = uo.organization_id WHERE uo.user_id = ${alias}.id AND oi.id IN (${qs(mine)}))` : ''}
      ${orgs ? '' : `OR (NOT EXISTS (SELECT 1 FROM user_institutes x WHERE x.user_id = ${alias}.id)
        AND NOT EXISTS (SELECT 1 FROM class_group_members m WHERE m.user_id = ${alias}.id))`})`,
    args: [...mine, ...mine, ...(orgs ? mine : [])]
  }
}

// ---------- organisaties (alleen superbeheerder) ----------
export function needSuper (user) {
  if (!isSuper(user)) fail(403, 'Alleen de superbeheerder beheert organisaties')
}

export async function organizationId (conn, input) {
  if (input === null || input === '' || input === undefined) return null
  const n = Number(input)
  const [o] = Number.isInteger(n) && n > 0 ? await conn.execute('SELECT id FROM organizations WHERE id = ?', [n]) : []
  if (!o) fail(400, 'Onbekende organisatie')
  return n
}

export async function needUser (conn, user, targetId) {
  const scope = await userScope(conn, user)
  if (!scope) return
  const [r] = await conn.execute(`SELECT 1 AS x FROM users u WHERE u.id = ? AND ${scope.sql}`, [targetId, ...scope.args])
  if (!r) fail(403, 'Deze gebruiker hoort niet bij jouw instituut')
}

export async function setUserInstitutes (conn, user, targetId, input) {
  const wanted = await instituteIds(conn, input)
  const current = (await institutesOfUsers(conn, [targetId])).get(targetId)
  const next = await relink(conn, user, 'user_institutes', 'user_id', targetId, wanted, current)
  await linkOrgsOfInstitutes(conn, [targetId], next)
  return next
}

// Wie aan een instituut gekoppeld wordt, hoort ook bij de organisatie daarvan.
export async function linkOrgsOfInstitutes (conn, userIds, instIds) {
  if (!userIds.length || !instIds.length || !(await hasOrganizations(conn))) return
  const orgs = (await conn.execute(`SELECT DISTINCT organization_id FROM institutes WHERE organization_id IS NOT NULL AND id IN (${qs(instIds)})`, instIds)).map((r) => Number(r.organization_id))
  const pairs = userIds.flatMap((u) => orgs.map((o) => [u, o]))
  if (pairs.length) await conn.execute(`INSERT IGNORE INTO user_organizations (user_id, organization_id) VALUES ${pairs.map(() => '(?, ?)').join(', ')}`, pairs.flat())
}

// Een nieuw aangemelde student: is er maar één organisatie, dan hoort hij daarbij. Bij meer
// organisaties deelt de superbeheerder hem in.
export async function linkDefaultOrganization (conn, userId) {
  if (!(await hasOrganizations(conn))) return
  const orgs = await conn.execute('SELECT id FROM organizations LIMIT 2')
  if (orgs.length === 1) await conn.execute('INSERT IGNORE INTO user_organizations (user_id, organization_id) VALUES (?, ?)', [userId, Number(orgs[0].id)])
}

// De organisaties van deze gebruiker (superbeheerder: alle): direct gekoppeld of via zijn instituten.
export async function myOrganizationIds (conn, user) {
  if (!(await hasOrganizations(conn))) return []
  if (isSuper(user)) return (await conn.execute('SELECT id FROM organizations ORDER BY position, id')).map((r) => Number(r.id))
  const mine = await myInstituteIds(conn, user)
  const rows = await conn.execute(`SELECT organization_id AS id FROM user_organizations WHERE user_id = ?
    ${mine.length ? `UNION SELECT organization_id AS id FROM institutes WHERE organization_id IS NOT NULL AND id IN (${qs(mine)})` : ''}`, [user.id, ...mine])
  return [...new Set(rows.map((r) => Number(r.id)))]
}

// SQL-voorwaarde: gebruiker (alias u) hoort bij organisatie ? (direct, via een instituut of via een groep).
export const inOrganization = (alias = 'u') => `(EXISTS (SELECT 1 FROM user_organizations uo WHERE uo.user_id = ${alias}.id AND uo.organization_id = ?)
  OR EXISTS (SELECT 1 FROM user_institutes x JOIN institutes xi ON xi.id = x.institute_id WHERE x.user_id = ${alias}.id AND xi.organization_id = ?)
  OR EXISTS (SELECT 1 FROM class_group_members m JOIN class_groups g ON g.id = m.group_id JOIN institutes gi ON gi.id = g.institute_id WHERE m.user_id = ${alias}.id AND gi.organization_id = ?))`

// Instituten voor een uitnodiging: de gekozen, of anders die van de uitnodiger (superbeheerder:
// alle). Als tekst '1,2' opgeslagen in invitations.institutes.
export async function inviteInstitutes (conn, user, input) {
  let ids = await instituteIds(conn, input)
  const mine = await myInstituteIds(conn, user)
  if (ids.some((i) => !mine.includes(i))) fail(403, 'Je bent niet aan dit instituut gekoppeld')
  if (!ids.length) ids = mine
  return ids.join(',')
}

export async function linkInvitedUser (conn, userId, stored) {
  const ids = String(stored || '').split(',').map(Number).filter((n) => Number.isInteger(n) && n > 0)
  if (ids.length) await conn.execute(`INSERT IGNORE INTO user_institutes (user_id, institute_id) VALUES ${ids.map(() => '(?, ?)').join(', ')}`, ids.flatMap((i) => [userId, i]))
  await linkOrgsOfInstitutes(conn, [userId], ids)
}
