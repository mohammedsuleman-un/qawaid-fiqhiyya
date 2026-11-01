// GET /personen?lang=: alle personen uit alle boeken samen, met per persoon de boeken.
// De personen van één boek staan bij dat boek (/boek/<slug>/personen); /personen?boek=<slug> verwijst daarheen.
import { db } from '../../lib/db.js'
import { viewer, isStaff, pickLang } from '../../lib/library.js'
import { listPersons, personBookLinks } from '../../lib/register.js'
import { renderPersons } from '../../lib/render.js'
import { page } from '../../lib/pages.js'

export async function onRequestGet ({ request, env }) {
  const url = new URL(request.url)
  const book = url.searchParams.get('boek')
  if (book) return Response.redirect(new URL(`/boek/${encodeURIComponent(book)}/personen?lang=${pickLang(request.url)}`, url), 301)
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  const links = await personBookLinks(conn, { staff })
  // Iedereen die in een zichtbaar boek genoemd wordt; personen zonder boek alleen voor medewerkers.
  const persons = (await listPersons(conn)).filter((p) => staff || links.has(Number(p.id)))
  return page(renderPersons({ lang, persons, links }), staff)
}
