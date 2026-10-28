// De omzetting van de eerste versie (blokken, beheerders) naar het nieuwe model:
// geen tekstverlies, beheerders worden gebruikers met de juiste rol.
import { test, after } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { freshDb, checkQueries } from './helpers.js'
import migrations from '../db/migrations/index.js'
import { migrate, rollback } from '../lib/migrate.js'
import { sanitizeHtml } from '../lib/sanitize.js'
import { stripTags } from '../lib/db.js'
import { normalizeArabic } from '../lib/arabic.js'

const conn = await freshDb()
after(() => conn.close())
const seed = JSON.parse(readFileSync(new URL('../db/seed/talkhis-jam-al-jawami.json', import.meta.url)))
const text = (html) => stripTags(html).replace(/\s+/g, '')

test('oude database met blokken en een eigenaar wordt omgezet zonder tekstverlies', async () => {
  // Stand van de eerste versie: alleen migratie 1, gevuld zoals /api/setup dat deed.
  await conn.execute('CREATE TABLE schema_migrations (id INT PRIMARY KEY, name VARCHAR(120) NOT NULL, applied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)')
  for (const step of migrations[0].up) await conn.execute(step)
  await conn.execute('INSERT INTO schema_migrations (id, name) VALUES (1, ?)', ['basis'])
  const { book, blocks } = seed
  await conn.execute('INSERT INTO books (slug, title, subtitle, pdf) VALUES (?, ?, ?, ?)', [book.slug, book.title, book.subtitle, book.pdf])
  for (const [i, b] of blocks.entries()) {
    await conn.execute('INSERT INTO blocks (book_id, position, page, kind, anchor, html, plain) VALUES (1, ?, ?, ?, ?, ?, ?)',
      [i, b.page, b.kind, b.anchor, b.html, normalizeArabic(stripTags(b.html))])
  }
  await conn.execute("INSERT INTO admins (email, role, password_hash) VALUES ('eigenaar@example.org', 'owner', 'pbkdf2$1$x$y')")
  await conn.execute("INSERT INTO admins (email, role, password_hash) VALUES ('redacteur@example.org', 'editor', 'pbkdf2$1$x$y')")

  assert.deepEqual([...await migrate(conn)], ['accounts', 'inhoud', 'omzetting'])

  const chapters = await conn.execute(`SELECT c.position, t.title, v.body FROM chapters c
    JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar'
    JOIN content_versions v ON v.id = t.published_version_id ORDER BY c.position`)
  assert.equal(chapters.length, blocks.filter((b) => b.kind === 'heading').length)
  // Paginanummers die voor een kopje stonden, staan nu na de titel; die vergelijken we apart.
  const before = text(blocks.filter((b) => b.kind !== 'page').map((b) => b.html).join(''))
  const afterText = text(chapters.map((c) => c.title + sanitizeHtml(c.body).replace(/<div class="pg"[^>]*>.*?<\/div>/g, '')).join(''))
  assert.equal(afterText, before)
  // Elke pagina komt precies één keer terug.
  const pages = chapters.map((c) => [...c.body.matchAll(/id="p(\d+)"/g)].map((m) => Number(m[1]))).flat()
  assert.deepEqual(pages, blocks.filter((b) => b.kind === 'page').map((b) => b.page))
  // De opgeslagen HTML is al schoon: opschonen verandert niets.
  for (const c of chapters) assert.equal(sanitizeHtml(c.body), c.body.trim())

  const roles = await conn.execute('SELECT u.email, r.role_code FROM users u JOIN user_roles r ON r.user_id = u.id ORDER BY u.email')
  assert.deepEqual(roles.map((r) => [r.email, r.role_code]), [['eigenaar@example.org', 'superadmin'], ['redacteur@example.org', 'editor']])
  const [{ n }] = await conn.execute("SELECT COUNT(*) AS n FROM search_index WHERE plain LIKE '%⟦12⟧%'")
  assert.equal(Number(n), 1)
})

test('migraties zijn terug te draaien en opnieuw uit te voeren', async () => {
  assert.equal(await rollback(conn), 'omzetting')
  assert.equal(await rollback(conn), 'inhoud')
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['inhoud'])
  // Elke migratie past binnen één verzoek op Cloudflare (via /api/setup, ook met het hele boek).
  const before = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['omzetting'])
  checkQueries(conn.queries - before + 6, 'migratie omzetting')
  assert.deepEqual([...await migrate(conn)], [])
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM chapters')
  assert.equal(Number(n), 60)
})
