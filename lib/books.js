export async function loadBook (conn, slug) {
  const [book] = await conn.execute(
    "SELECT id, slug, title, subtitle, pdf FROM books WHERE slug = ? AND status = 'published'", [slug])
  if (!book) return null
  const blocks = await conn.execute(
    'SELECT id, kind, page, anchor, html FROM blocks WHERE book_id = ? ORDER BY position', [book.id])
  return { book, blocks }
}
