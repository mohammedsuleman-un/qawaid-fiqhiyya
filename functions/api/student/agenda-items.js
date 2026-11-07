// Toetsen en huiswerk in de agenda (docenten voor hun eigen groepen, beheerders voor alle).
// POST {kind, group (id of 'A'/'B' = beide groepen), block?, date, title_nl, title_ar, info_nl, info_ar}
// PATCH {id, ...}: wijzigen; DELETE ?id=: weghalen (maker of beheerder).
import { json, body, fail, id, str } from '../../../lib/http.js'
import { audit } from '../../../lib/audit.js'
import { insert } from '../../../lib/content.js'
import { allGroups, allBlocks, myGroups, isManager, canRecord, isoDate, weekday, COHORTS } from '../../../lib/agenda.js'

const ITEM_KINDS = ['test', 'homework', 'note']

async function itemInput (conn, user, input) {
  if (!canRecord(user) && !isManager(user)) fail(403, 'Je hebt hier geen rechten voor')
  const kind = ITEM_KINDS.includes(input.kind) ? input.kind : fail(400, 'Kies toets, huiswerk of mededeling')
  const groups = await allGroups(conn)
  const mine = await myGroups(conn, user)
  const manager = isManager(user)
  let cohort, groupId
  if (COHORTS.includes(input.group)) {
    cohort = input.group
    groupId = null
    if (!manager && !groups.filter((g) => g.cohort === cohort).every((g) => mine.teacher.includes(g.id))) fail(403, 'Je geeft geen les aan deze groep')
  } else {
    const g = groups.find((x) => x.id === id(input.group))
    if (!g) fail(404, 'Groep niet gevonden')
    if (!manager && !mine.teacher.includes(g.id)) fail(403, 'Je geeft geen les aan deze groep')
    cohort = g.cohort
    groupId = g.id
  }
  const date = isoDate(input.date)
  let blockId = null
  if (input.block) {
    const b = (await allBlocks(conn)).find((x) => x.id === Number(input.block))
    if (!b || b.cohort !== cohort) fail(400, 'Dit blok hoort niet bij deze groep')
    if (b.weekday !== weekday(date)) fail(400, 'Op deze datum is dit blok er niet')
    blockId = b.id
  }
  const title_nl = str(input.title_nl, 255)
  const title_ar = str(input.title_ar, 255)
  if (!title_nl && !title_ar) fail(400, 'Geef een omschrijving')
  return { kind, cohort, group_id: groupId, block_id: blockId, item_date: date, title_nl, title_ar, info_nl: str(input.info_nl, 4000) || null, info_ar: str(input.info_ar, 4000) || null }
}

async function own (conn, user, itemId) {
  const [row] = await conn.execute('SELECT id, created_by FROM agenda_items WHERE id = ?', [itemId])
  if (!row) fail(404, 'Niet gevonden')
  if (!isManager(user) && Number(row.created_by) !== user.id) fail(403, 'Alleen wie dit toevoegde of een beheerder kan dit wijzigen')
}

export async function onRequestPost ({ request, data: { conn, user } }) {
  const x = await itemInput(conn, user, await body(request))
  const newId = await insert(conn, `INSERT INTO agenda_items (kind, cohort, group_id, block_id, item_date, title_nl, title_ar, info_nl, info_ar, created_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [x.kind, x.cohort, x.group_id, x.block_id, x.item_date, x.title_nl, x.title_ar, x.info_nl, x.info_ar, user.id])
  await audit(conn, user, 'agenda.add', 'agenda_item', newId, { kind: x.kind, date: x.item_date })
  return json({ ok: true, id: newId })
}

export async function onRequestPatch ({ request, data: { conn, user } }) {
  const input = await body(request)
  const itemId = id(input.id)
  await own(conn, user, itemId)
  const x = await itemInput(conn, user, input)
  await conn.execute(`UPDATE agenda_items SET kind = ?, cohort = ?, group_id = ?, block_id = ?, item_date = ?, title_nl = ?, title_ar = ?, info_nl = ?, info_ar = ? WHERE id = ?`,
    [x.kind, x.cohort, x.group_id, x.block_id, x.item_date, x.title_nl, x.title_ar, x.info_nl, x.info_ar, itemId])
  await audit(conn, user, 'agenda.edit', 'agenda_item', itemId)
  return json({ ok: true })
}

export async function onRequestDelete ({ request, data: { conn, user } }) {
  const itemId = id(new URL(request.url).searchParams.get('id'))
  await own(conn, user, itemId)
  await conn.execute('DELETE FROM agenda_items WHERE id = ?', [itemId])
  await audit(conn, user, 'agenda.delete', 'agenda_item', itemId)
  return json({ ok: true })
}
