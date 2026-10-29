// GET /persoon/<slug>?lang=: biografie (alleen als die gepubliceerd is) en vindplaatsen in de boeken.
import { db } from '../../lib/db.js'
import { pickLang } from '../../lib/library.js'
import { listPersons, personMentions } from '../../lib/register.js'
import { renderPerson } from '../../lib/render.js'
import { page, notFound } from '../../lib/pages.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const person = (await listPersons(conn, params.slug))[0]
  if (!person) return notFound(lang)
  return page(renderPerson({ lang, person, mentions: await personMentions(conn, person) }))
}
