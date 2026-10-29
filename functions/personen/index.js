// GET /personen?lang=: metgezellen en geleerden die in de boeken genoemd worden.
import { db } from '../../lib/db.js'
import { pickLang } from '../../lib/library.js'
import { listPersons } from '../../lib/register.js'
import { renderPersons } from '../../lib/render.js'
import { page } from '../../lib/pages.js'

export async function onRequestGet ({ request, env }) {
  const lang = pickLang(request.url)
  return page(renderPersons({ lang, persons: await listPersons(db(env)) }))
}
