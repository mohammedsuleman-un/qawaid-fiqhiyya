// GET /bibliotheek?lang=&categorie=&q=: alle boeken per categorie, met zoeken in alle teksten.
import { db } from '../../lib/db.js'
import { listBooks, categories, search, viewer, isStaff, pickLang } from '../../lib/library.js'
import { renderLibrary } from '../../lib/render.js'
import { page } from '../../lib/pages.js'

export async function onRequestGet ({ request, env }) {
  const conn = db(env)
  const url = new URL(request.url)
  const lang = pickLang(request.url)
  const category = url.searchParams.get('categorie') || null
  const q = (url.searchParams.get('q') || '').trim().slice(0, 200)
  const staff = isStaff(await viewer(conn, request))
  const books = await listBooks(conn, { category, staff })
  const results = q ? await search(conn, q, { category, staff }) : null
  return page(renderLibrary({ lang, books, cats: await categories(conn), category, q, results }), staff)
}
