// Gebruikersbeheer: uitnodigingen en de bescherming van de laatste superbeheerder.
import { randomToken, sha256 } from './auth.js'
import { ROLES } from './rbac.js'
import { fail } from './http.js'

export const ROLE_CODES = ROLES.map((r) => r.code)
export const INVITE_DAYS = 7

export async function createInvitation (conn, request, email, role, invitedBy) {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fail(400, 'Ongeldig e-mailadres')
  if (!ROLE_CODES.includes(role)) fail(400, 'Onbekende rol')
  const [existing] = await conn.execute("SELECT id FROM users WHERE email = ? AND status = 'active'", [email])
  if (existing) fail(400, 'Er bestaat al een actief account met dit e-mailadres')
  await conn.execute('UPDATE invitations SET revoked_at = NOW() WHERE email = ? AND accepted_at IS NULL AND revoked_at IS NULL', [email])
  const token = randomToken()
  await conn.execute(`INSERT INTO invitations (token_hash, email, role_code, invited_by, expires_at)
    VALUES (?, ?, ?, ?, NOW() + INTERVAL ${INVITE_DAYS} DAY)`, [await sha256(token), email, role, invitedBy])
  return new URL(`/beheer/?uitnodiging=${token}`, request.url).href
}

export async function activeSuperadmins (conn) {
  const [{ n }] = await conn.execute(`SELECT COUNT(*) AS n FROM users u JOIN user_roles r ON r.user_id = u.id
    WHERE r.role_code = 'superadmin' AND u.status = 'active'`)
  return Number(n)
}

// Weigert als deze wijziging de laatste actieve superbeheerder zou weghalen.
export async function guardLastSuperadmin (conn, userId, { newRoles, newStatus }) {
  const [isSuper] = await conn.execute("SELECT 1 AS x FROM user_roles WHERE user_id = ? AND role_code = 'superadmin'", [userId])
  if (!isSuper) return
  const losesRole = newRoles && !newRoles.includes('superadmin')
  const deactivates = newStatus && newStatus !== 'active' // ook 'deleted'
  if ((losesRole || deactivates) && await activeSuperadmins(conn) <= 1) {
    fail(400, 'Dit is de laatste actieve superbeheerder. Wijs eerst een andere superbeheerder aan.')
  }
}

// Wat bij definitief verwijderen weg gaat (persoonlijke gegevens van de gebruiker).
export async function deletionSummary (conn, userId) {
  const [r] = await conn.execute(`SELECT
    (SELECT COUNT(*) FROM test_attempts WHERE user_id = ?) AS attempts,
    (SELECT COUNT(*) FROM lesson_progress WHERE user_id = ?) AS lessons,
    (SELECT COUNT(*) FROM student_books WHERE user_id = ?) AS books,
    (SELECT COUNT(*) FROM study_plans WHERE user_id = ?) AS plans,
    (SELECT COUNT(*) FROM feedback f JOIN users u ON u.id = ? WHERE f.email = u.email) AS feedback`, [userId, userId, userId, userId, userId])
  return Object.fromEntries(Object.entries(r).map(([k, v]) => [k, Number(v)]))
}

// Definitief verwijderen. Weg: het account, rollen, losse rechten, sessies, herstellinks,
// open uitnodigingen, en alles wat alleen van deze gebruiker is (boeken op het profiel,
// voortgang, planning, toetspogingen en -resultaten). Gedeelde inhoud blijft bestaan:
// teksten, versies, vragen en geplande toetsen die hij maakte of beoordeelde verliezen
// alleen de verwijzing naar hem. Feedback blijft staan (gaat over de tekst), maar zonder
// zijn e-mailadres. Het auditlog blijft ongewijzigd als geschiedenis.
export async function deleteUser (conn, userId, email) {
  const summary = await deletionSummary(conn, userId)
  for (const table of ['test_attempts', 'lesson_progress', 'study_plans', 'student_books', 'sessions', 'password_resets', 'user_permissions', 'user_roles']) {
    await conn.execute(`DELETE FROM ${table} WHERE user_id = ?`, [userId])
  }
  await conn.execute('UPDATE invitations SET revoked_at = NOW() WHERE email = ? AND accepted_at IS NULL AND revoked_at IS NULL', [email])
  await conn.execute('UPDATE invitations SET invited_by = NULL WHERE invited_by = ?', [userId])
  await conn.execute('UPDATE feedback SET email = NULL WHERE email = ?', [email])
  await conn.execute('UPDATE feedback SET assigned_to = NULL WHERE assigned_to = ?', [userId])
  for (const [table, cols] of [['content_versions', ['created_by', 'reviewed_by', 'published_by']], ['articles', ['created_by']],
    ['questions', ['created_by', 'reviewed_by']], ['tests', ['created_by']], ['hadith_notes', ['updated_by']]]) {
    for (const col of cols) await conn.execute(`UPDATE ${table} SET ${col} = NULL WHERE ${col} = ?`, [userId])
  }
  await conn.execute('DELETE FROM users WHERE id = ?', [userId])
  return summary
}
