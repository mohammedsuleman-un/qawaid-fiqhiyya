// GET /hadith?lang=: de boeken met hadith; /hadith?boek=<slug>: de hadith van dat boek per onderdeel.
import { db } from '../../lib/db.js'
import { viewer, isStaff, pickLang } from '../../lib/library.js'
import { hadithList } from '../../lib/register.js'
import { renderHadith } from '../../lib/render.js'
import { page } from '../../lib/pages.js'

export async function onRequestGet ({ request, env }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  const book = new URL(request.url).searchParams.get('boek')
  return page(renderHadith({ lang, rows: await hadithList(conn, { staff }), book }), staff)
}
