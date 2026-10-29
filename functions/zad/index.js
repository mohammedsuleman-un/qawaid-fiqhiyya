// GET /zad?lang=: de ZAD-reeks, 4 niveaus × 7 vakken. Concepten alleen voor medewerkers.
import { db } from '../../lib/db.js'
import { viewer, isStaff, pickLang } from '../../lib/library.js'
import { zadBooks, SUBJECTS, LEVELS, LEVEL_NAMES } from '../../lib/zad.js'
import { renderZad } from '../../lib/render.js'
import { page } from '../../lib/pages.js'

export async function onRequestGet ({ request, env }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  const books = await zadBooks(conn, { staff })
  return page(renderZad({ lang, books, subjects: SUBJECTS, levels: LEVELS, levelNames: LEVEL_NAMES, staff }), staff)
}
