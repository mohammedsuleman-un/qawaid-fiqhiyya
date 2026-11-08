// GET: cijfers en recente activiteit voor het dashboard. Alles komt uit de database;
// wat de gebruiker niet mag zien, blijft leeg. Een beheerder ziet alleen zijn eigen
// organisatie (boeken, versies, gebruikers, uitnodigingen en activiteit daarvan); de
// superbeheerder ziet alles en per organisatie een overzicht.
import { json } from '../../../lib/http.js'
import { can } from '../../../lib/rbac.js'
import { isSuper, bookScope, userScope, myInstituteIds, myOrganizationIds, hasOrganizations, inOrganization } from '../../../lib/institutes.js'

const count = async (conn, sql, args = []) => Number((await conn.execute(sql, args))[0].n)
const qs = (a) => a.map(() => '?').join(', ')

// Versies van teksten: artikelen zijn gedeeld; hoofdstukken en studiekaarten horen bij een boek.
function versionScope (mine) {
  if (!mine) return { sql: '1 = 1', args: [] }
  if (!mine.length) return { sql: "t.entity_type = 'article'", args: [] }
  return {
    sql: `(t.entity_type NOT IN ('chapter', 'study') OR EXISTS (SELECT 1 FROM chapters c JOIN book_institutes bi ON bi.book_id = c.book_id
      WHERE c.id = t.entity_id AND bi.institute_id IN (${qs(mine)})))`,
    args: mine
  }
}

export async function onRequestGet ({ data: { conn, user } }) {
  const out = { user: { email: user.email, roles: user.roles, totp_enabled: user.totp_enabled } }
  const sup = isSuper(user)
  const mine = sup ? null : await myInstituteIds(conn, user)
  const orgs = await hasOrganizations(conn)
  if (orgs) {
    const ids = await myOrganizationIds(conn, user)
    out.organizations = ids.length ? (await conn.execute(`SELECT id, name_nl, name_ar FROM organizations WHERE id IN (${qs(ids)}) ORDER BY position, id`, ids))
      .map((o) => ({ id: Number(o.id), name_nl: o.name_nl, name_ar: o.name_ar })) : []
    if (sup && can(user, 'users.manage')) {
      // Per organisatie: instituten en actieve beheerders, docenten en studenten.
      for (const o of out.organizations) {
        o.institutes = await count(conn, 'SELECT COUNT(*) AS n FROM institutes WHERE organization_id = ?', [o.id])
        const roles = await conn.execute(`SELECT r.role_code, COUNT(DISTINCT u.id) AS n FROM users u JOIN user_roles r ON r.user_id = u.id
          WHERE u.status = 'active' AND ${inOrganization('u')} GROUP BY r.role_code`, [o.id, o.id, o.id])
        o.roles = Object.fromEntries(roles.map((r) => [r.role_code, Number(r.n)]))
      }
      out.unassigned = await count(conn, `SELECT COUNT(*) AS n FROM users u WHERE u.status = 'active'
        AND NOT EXISTS (SELECT 1 FROM user_roles r WHERE r.user_id = u.id AND r.role_code = 'superadmin')
        AND NOT EXISTS (SELECT 1 FROM user_organizations uo WHERE uo.user_id = u.id)
        AND NOT EXISTS (SELECT 1 FROM user_institutes x WHERE x.user_id = u.id)
        AND NOT EXISTS (SELECT 1 FROM class_group_members m WHERE m.user_id = u.id)`)
    }
  }
  if (can(user, 'content.edit')) {
    const bs = await bookScope(conn, user)
    const bw = bs ? ' AND ' + bs.sql : ''
    const ba = bs ? bs.args : []
    out.books = {
      published: await count(conn, `SELECT COUNT(*) AS n FROM books b WHERE b.status = 'published'${bw}`, ba),
      draft: await count(conn, `SELECT COUNT(*) AS n FROM books b WHERE b.status = 'draft'${bw}`, ba),
      archived: await count(conn, `SELECT COUNT(*) AS n FROM books b WHERE b.status = 'archived'${bw}`, ba)
    }
    out.articles = await conn.execute(`SELECT a.kind, COUNT(DISTINCT a.id) AS n FROM articles a
      JOIN content_translations t ON t.entity_type = 'article' AND t.entity_id = a.id AND t.status = 'published'
      WHERE a.archived_at IS NULL GROUP BY a.kind`)
    const vs = versionScope(mine)
    out.versions = Object.fromEntries((await conn.execute(`SELECT v.status, COUNT(*) AS n FROM content_versions v JOIN content_translations t ON t.id = v.translation_id
      WHERE v.status IN ('draft', 'in_review', 'approved', 'rejected') AND ${vs.sql} GROUP BY v.status`, vs.args)).map((r) => [r.status, Number(r.n)]))
    out.my_drafts = await count(conn, "SELECT COUNT(*) AS n FROM content_versions WHERE created_by = ? AND status IN ('draft', 'rejected')", [user.id])
    out.recent = await conn.execute(`SELECT v.id, v.title, v.status, v.updated_at, t.lang, t.entity_type, u.email
      FROM content_versions v JOIN content_translations t ON t.id = v.translation_id LEFT JOIN users u ON u.id = v.created_by
      WHERE ${vs.sql} ORDER BY v.updated_at DESC LIMIT 8`, vs.args)
  }
  if (can(user, 'feedback.assigned')) {
    const own = can(user, 'feedback.manage') ? '' : ' AND assigned_to = ' + user.id
    out.feedback = Object.fromEntries((await conn.execute(`SELECT status, COUNT(*) AS n FROM feedback WHERE 1 = 1${own}
      GROUP BY status`)).map((r) => [r.status, Number(r.n)]))
  }
  const us = await userScope(conn, user)
  if (can(user, 'users.manage')) {
    out.users = await conn.execute(`SELECT r.role_code, COUNT(*) AS n FROM user_roles r JOIN users u ON u.id = r.user_id
      WHERE u.status = 'active'${us ? ' AND ' + us.sql : ''} GROUP BY r.role_code`, us ? us.args : [])
    out.open_invitations = await count(conn, `SELECT COUNT(*) AS n FROM invitations i
      WHERE i.accepted_at IS NULL AND i.revoked_at IS NULL AND i.expires_at > NOW()
      ${us ? `AND EXISTS (SELECT 1 FROM users u WHERE u.id = i.invited_by AND ${us.sql})` : ''}`, us ? us.args : [])
  }
  if (can(user, 'audit.view')) {
    out.activity = await conn.execute(`SELECT a.action, a.entity_type, a.entity_id, a.created_at, u.email
      FROM audit_logs a LEFT JOIN users u ON u.id = a.user_id ${us ? `WHERE ${us.sql}` : ''} ORDER BY a.id DESC LIMIT 10`, us ? us.args : [])
  }
  return json(out)
}
