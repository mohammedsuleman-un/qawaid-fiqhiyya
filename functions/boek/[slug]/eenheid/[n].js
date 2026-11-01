// GET /boek/<slug>/eenheid/<n>?lang=ar|nl: hoofdstukpagina van een eenheid (ZAD, of een boek
// zoals تلخيص جمع الجوامع), met de tabbladen voor alle lessen of onderdelen van die eenheid samen. Medewerkers zien met ?voorbeeld een concept.
import { db } from '../../../../lib/db.js'
import { loadBook, viewer, isStaff, pickLang } from '../../../../lib/library.js'
import { renderBook } from '../../../../lib/render.js'
import { page, notFound } from '../../../../lib/pages.js'
import { loadUnitStudy, studyPersons } from '../../../../lib/study.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const lang = pickLang(request)
  const n = /^\d{1,3}$/.test(params.n) ? Number(params.n) : null
  if (!n) return notFound(lang)
  const staff = isStaff(await viewer(conn, request))
  const data = await loadBook(conn, params.slug, lang, { staff, bodies: false })
  if (!data || !data.chapters.some((c) => c.unit === n)) return notFound(lang)
  const preview = staff && new URL(request.url).searchParams.has('voorbeeld')
  const study = await loadUnitStudy(conn, data.chapters, n, lang, { preview })
  if (!study) return notFound(lang)
  const persons = await studyPersons(conn, study)
  return page(renderBook({ ...data, lang, staff, unitView: { n, study, persons } }), staff || preview)
}
