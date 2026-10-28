// Publicatieworkflow per versie:
// draft → in_review → approved → published; afwijzen zet in_review of approved op rejected.
// Een gepubliceerde versie wordt nooit gewijzigd; een nieuwe wijziging is altijd een nieuwe versie.
import { fail, need } from './http.js'
import { can } from './rbac.js'
import { publishVersion } from './content.js'
import { audit } from './audit.js'

export const EDITABLE = ['draft', 'rejected']

const ACTIONS = {
  submit: { from: ['draft', 'rejected'], to: 'in_review', permission: 'content.edit', ownOnly: true },
  withdraw: { from: ['in_review'], to: 'draft', permission: 'content.edit', ownOnly: true },
  approve: { from: ['in_review'], to: 'approved', permission: 'content.review' },
  reject: { from: ['in_review', 'approved'], to: 'rejected', permission: 'content.review' },
  publish: { from: ['approved'], to: 'published', permission: 'content.publish' }
}

export async function loadVersion (conn, versionId) {
  const [v] = await conn.execute(`SELECT v.*, t.entity_type, t.entity_id, t.lang, t.published_version_id
    FROM content_versions v JOIN content_translations t ON t.id = v.translation_id WHERE v.id = ?`, [versionId])
  if (!v) fail(404, 'Versie niet gevonden')
  return v
}

export async function transition (conn, user, version, action, comment = '') {
  const rule = ACTIONS[action]
  if (!rule) fail(404, 'Onbekende actie')
  need(user, rule.permission)
  if (!rule.from.includes(version.status)) fail(409, `Deze actie kan niet bij een versie met status "${version.status}"`)
  const own = Number(version.created_by) === user.id
  if (rule.ownOnly && !own && !can(user, 'content.review')) fail(403, 'Alleen de auteur kan dit doen')
  // Vier ogen: je eigen versie goedkeuren mag alleen wie ook mag publiceren.
  if (action === 'approve' && own && !can(user, 'content.publish')) fail(403, 'Een ander moet jouw versie goedkeuren')
  if (action === 'reject' && !String(comment).trim()) fail(400, 'Geef een reden voor de afwijzing')

  if (action === 'publish') {
    await publishVersion(conn, version, { id: version.translation_id, entity_type: version.entity_type,
      entity_id: version.entity_id, lang: version.lang }, user.id)
  } else {
    const review = ['approve', 'reject'].includes(action)
    await conn.execute(`UPDATE content_versions SET status = ?
      ${action === 'submit' ? ', submitted_at = NOW()' : ''}
      ${review ? ', reviewed_by = ?, reviewed_at = NOW(), review_comment = ?' : ''} WHERE id = ?`,
    review ? [rule.to, user.id, String(comment).trim().slice(0, 2000) || null, version.id] : [rule.to, version.id])
  }
  await audit(conn, user, 'version.' + action, version.entity_type, version.entity_id,
    { version: Number(version.id), lang: version.lang, comment: comment || undefined })
  return rule.to
}
