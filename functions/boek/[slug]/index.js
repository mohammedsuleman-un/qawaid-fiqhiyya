// GET /boek/<slug>?lang=ar|nl: het hele boek op één pagina.
import { db } from '../../../lib/db.js'
import { loadBook, viewer, isStaff, pickLang } from '../../../lib/library.js'
import { renderBook } from '../../../lib/render.js'
import { page, notFound } from '../../../lib/pages.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  const data = await loadBook(conn, params.slug, lang, { staff })
  if (!data) return notFound(lang)
  return page(renderBook({ ...data, lang, staff }), staff)
}
