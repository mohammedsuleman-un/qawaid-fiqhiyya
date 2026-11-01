// GET /boek/<slug>/personen?lang=: de metgezellen en geleerden die in dit boek genoemd worden.
import { db } from '../../../lib/db.js'
import { viewer, isStaff, pickLang } from '../../../lib/library.js'
import { listPersons, registerBook } from '../../../lib/register.js'
import { renderPersons } from '../../../lib/render.js'
import { page, notFound } from '../../../lib/pages.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const lang = pickLang(request)
  const staff = isStaff(await viewer(conn, request))
  const book = await registerBook(conn, params.slug, { staff })
  if (!book) return notFound(lang)
  return page(renderPersons({ lang, persons: await listPersons(conn, null, { book: book.slug }), book }), staff)
}
