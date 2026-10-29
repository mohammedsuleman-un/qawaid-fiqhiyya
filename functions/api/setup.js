// POST /api/setup: voert de databasemigraties uit en vult een lege database met de
// boeken uit db/seed/. Iedereen mag dit starten: het voert alleen migraties uit die
// met de code zijn meegeleverd (nooit terugdraaien) en vult alleen een database zonder
// gebruikers. Zo kan een update ook doorgaan als nog niemand kan inloggen.
// Per aanroep gebeurt één stap (Cloudflare staat per verzoek maar 50 databaseverzoeken
// toe): roep dit aan tot done: true terugkomt.
import { json } from '../../lib/http.js'
import { migrate } from '../../lib/migrate.js'
import { insert } from '../../lib/content.js'
import { importChapters } from '../../db/migrations/003_inhoud.js'
import persons from '../../db/seed/personen.js'

export async function onRequestPost ({ request, env, data: { conn } }) {
  const applied = await migrate(conn, { max: 1 })
  if (applied.length) return json({ ok: true, migrations: applied, pending: applied.pending, done: false })

  // Alleen een lege database krijgt de startboeken, één boek per aanroep.
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM users')
  const asset = (path) => env.ASSETS.fetch(new URL(path, request.url)).then((r) => r.json())
  const have = new Set((await conn.execute('SELECT slug FROM books')).map((r) => r.slug))
  const slug = Number(n) === 0 && (await asset('/db/seed/index.json')).find((s) => !have.has(s))
  if (!slug) return json({ ok: true, migrations: [], seeded: false, done: true })

  const { book, blocks } = await asset(`/db/seed/${slug}.json`)
  const [cat] = await conn.execute('SELECT id FROM categories WHERE slug = ?', [book.category || 'usul-al-fiqh'])
  const bookId = await insert(conn, `INSERT INTO books (slug, title, subtitle, pdf, status, category_id, author)
    VALUES (?, ?, ?, ?, 'published', ?, ?)`, [book.slug, book.title, book.subtitle, book.pdf, cat?.id ?? null, book.author || ''])
  await conn.execute("INSERT INTO book_translations (book_id, lang, title, subtitle) VALUES (?, 'ar', ?, ?)",
    [bookId, book.title, book.subtitle])
  await importChapters(conn, bookId, blocks)
  // Het eerste personenregister (migratie 5) hoort bij dit boek.
  if (slug === 'talkhis-jam-al-jawami') {
    await conn.execute(`INSERT IGNORE INTO person_books (person_id, book_id) SELECT id, ? FROM persons WHERE slug IN (${persons.map(() => '?').join(', ')})`,
      [bookId, ...persons.map((p) => p.slug)])
  }
  return json({ ok: true, migrations: [], seeded: slug, done: false })
}
