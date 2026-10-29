// GET /personen?lang=: kies een boek; ?boek=<slug>: de personen uit dat boek; ?alle=1: iedereen.
import { db } from '../../lib/db.js'
import { viewer, isStaff, pickLang } from '../../lib/library.js'
import { listPersons, personBooks } from '../../lib/register.js'
import { renderPersons } from '../../lib/render.js'
import { page, notFound } from '../../lib/pages.js'

export async function onRequestGet ({ request, env }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const p = new URL(request.url).searchParams
  const staff = isStaff(await viewer(conn, request))
  const books = await personBooks(conn, { staff })
  const slug = p.get('boek')
  const book = slug ? books.find((b) => b.slug === slug) : null
  if (slug && !book) return notFound(lang)
  const persons = book ? await listPersons(conn, null, { book: slug }) : p.get('alle') ? await listPersons(conn) : null
  return page(renderPersons({ lang, persons, books, book, all: !!p.get('alle') }), staff)
}
