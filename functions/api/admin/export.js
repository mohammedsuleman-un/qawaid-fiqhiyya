// GET: volledige back-up van de inhoud als JSON (settings.manage). Wachtwoorden,
// tweestapsgeheimen, sessies en tokens zitten er nooit in.
import { need } from '../../../lib/http.js'
import { audit } from '../../../lib/audit.js'

const TABLES = {
  categories: 'SELECT * FROM categories',
  books: 'SELECT * FROM books',
  book_translations: 'SELECT * FROM book_translations',
  chapters: 'SELECT * FROM chapters',
  articles: 'SELECT * FROM articles',
  content_translations: 'SELECT * FROM content_translations',
  content_versions: 'SELECT * FROM content_versions',
  feedback: 'SELECT id, entity_type, entity_id, lang, quote, category, message, suggestion, status, assigned_to, internal_note, draft_version_id, created_at, updated_at FROM feedback',
  users: 'SELECT id, email, name, status, lang, totp_enabled, last_login_at, created_at FROM users',
  user_roles: 'SELECT * FROM user_roles',
  user_permissions: 'SELECT * FROM user_permissions',
  audit_logs: 'SELECT * FROM audit_logs'
}

export async function onRequestGet ({ data: { conn, user } }) {
  need(user, 'settings.manage')
  const out = { exported_at: new Date().toISOString(), tables: {} }
  for (const [name, sql] of Object.entries(TABLES)) out.tables[name] = await conn.execute(sql)
  await audit(conn, user, 'backup.export')
  const day = out.exported_at.slice(0, 10)
  return new Response(JSON.stringify(out), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'content-disposition': `attachment; filename="zuiverebron-backup-${day}.json"`,
      'cache-control': 'no-store'
    }
  })
}
