// GET /boek/<slug>?lang=ar|nl: het hele boek op één pagina. Bij een ZAD-boek eerst een
// overzicht per eenheid (hoofdstuk); de hele tekst blijft bereikbaar met ?tekst.
import { db } from '../../../lib/db.js'
import { loadBook, viewer, isStaff, pickLang } from '../../../lib/library.js'
import { renderBook } from '../../../lib/render.js'
import { page, notFound } from '../../../lib/pages.js'
import { studyUnits } from '../../../lib/study.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  const full = new URL(request.url).searchParams.has('tekst')
  const data = await loadBook(conn, params.slug, lang, { staff })
  if (!data) return notFound(lang)
  if (data.book.zad_level && !full) {
    const units = await studyUnits(conn, data.book.id, lang)
    return page(renderBook({ ...data, lang, staff, overview: { units } }), staff)
  }
  return page(renderBook({ ...data, lang, staff }), staff)
}
