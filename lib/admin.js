import { json, stripTags } from './db.js'
import { normalizeArabic } from './arabic.js'
import { cleanHtml } from './auth.js'

export const KINDS = ['page', 'heading', 'p', 'cont', 'sharh', 'side']

export async function body (request) {
  if (!(request.headers.get('content-type') || '').includes('application/json')) {
    throw Object.assign(new Error('Verwacht JSON'), { status: 415 })
  }
  return request.json()
}

export const fail = (error, status = 400) => json({ error }, status)

// Zet de velden van een blok klaar voor de database: opgeschoonde html en zoektekst.
export function blockFields (input) {
  const kind = KINDS.includes(input.kind) ? input.kind : 'p'
  const html = kind === 'page' ? '' : cleanHtml(input.html || '')
  const page = input.page === '' || input.page == null ? null : Number(input.page)
  return { kind, html, page, anchor: input.anchor || null, plain: normalizeArabic(stripTags(html)) }
}

export async function bookId (conn, slug) {
  const [row] = await conn.execute('SELECT id FROM books WHERE slug = ?', [slug])
  return row?.id ?? null
}
