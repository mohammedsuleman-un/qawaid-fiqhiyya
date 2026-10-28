// POST /api/setup: maakt de tabellen aan en vult een lege database met de boeken
// uit db/seed/. Bestaat er al een boek, dan verandert er niets.
import { db, json, stripTags } from '../../lib/db.js'
import { normalizeArabic } from '../../lib/arabic.js'
import schema from '../../db/schema.js'

export async function onRequestPost ({ request, env }) {
  const conn = db(env)
  for (const sql of schema.split(';').map((s) => s.trim()).filter((s) => s.startsWith('CREATE'))) {
    await conn.execute(sql)
  }

  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM books')
  if (Number(n) > 0) return json({ ok: true, seeded: false, books: Number(n) })

  const asset = (path) => env.ASSETS.fetch(new URL(path, request.url)).then((r) => r.json())
  const slugs = await asset('/db/seed/index.json')
  const tx = await conn.begin()
  try {
    for (const slug of slugs) {
      const { book, blocks } = await asset(`/db/seed/${slug}.json`)
      await tx.execute('INSERT INTO books (slug, title, subtitle, pdf) VALUES (?, ?, ?, ?)',
        [book.slug, book.title, book.subtitle, book.pdf])
      const [{ id }] = await tx.execute('SELECT id FROM books WHERE slug = ?', [book.slug])
      for (let i = 0; i < blocks.length; i += 50) {
        const rows = blocks.slice(i, i + 50)
        await tx.execute(
          'INSERT INTO blocks (book_id, position, page, kind, anchor, html, plain) VALUES ' +
            rows.map(() => '(?, ?, ?, ?, ?, ?, ?)').join(', '),
          rows.flatMap((b, j) => [id, i + j, b.page, b.kind, b.anchor, b.html, normalizeArabic(stripTags(b.html))])
        )
      }
    }
    await tx.commit()
  } catch (err) {
    await tx.rollback()
    throw err
  }
  return json({ ok: true, seeded: true, books: slugs.length })
}
