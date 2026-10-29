// GET /hadith?lang=: alle hadith uit de gepubliceerde boeken, per hoofdstuk in de volgorde van het boek.
import { db } from '../../lib/db.js'
import { viewer, isStaff, pickLang } from '../../lib/library.js'
import { hadithList } from '../../lib/register.js'
import { renderHadith } from '../../lib/render.js'
import { page } from '../../lib/pages.js'

export async function onRequestGet ({ request, env }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  // Hadith zijn Arabische tekst; vertaalde fragmenten zonder Arabisch origineel tellen niet dubbel.
  const rows = (await hadithList(conn, { staff })).filter((h) => h.lang === 'ar')
  return page(renderHadith({ lang, rows }), staff)
}
