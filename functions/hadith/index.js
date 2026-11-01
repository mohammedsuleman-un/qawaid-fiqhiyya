// GET /hadith?lang=: alle hadith uit alle boeken samen. De hadith van één boek staan bij
// dat boek (/boek/<slug>/hadith); het oude adres /hadith?boek=<slug> verwijst daarheen.
import { db } from '../../lib/db.js'
import { viewer, isStaff, pickLang } from '../../lib/library.js'
import { hadithList } from '../../lib/register.js'
import { renderHadith } from '../../lib/render.js'
import { page } from '../../lib/pages.js'

export async function onRequestGet ({ request, env }) {
  const url = new URL(request.url)
  const book = url.searchParams.get('boek')
  if (book) return Response.redirect(new URL(`/boek/${encodeURIComponent(book)}/hadith?lang=${pickLang(request)}`, url), 301)
  const conn = db(env)
  const lang = pickLang(request)
  const staff = isStaff(await viewer(conn, request))
  return page(renderHadith({ lang, rows: await hadithList(conn, { staff }) }), staff)
}
