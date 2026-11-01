// GET /boek/<slug>/hadith?lang=: de hadith van dit boek, per onderdeel.
import { db } from '../../../lib/db.js'
import { viewer, isStaff, pickLang } from '../../../lib/library.js'
import { hadithList, registerBook } from '../../../lib/register.js'
import { renderHadith } from '../../../lib/render.js'
import { page, notFound } from '../../../lib/pages.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  const book = await registerBook(conn, params.slug, { staff })
  if (!book) return notFound(lang)
  return page(renderHadith({ lang, rows: await hadithList(conn, { staff, book: book.slug }), book }), staff)
}
