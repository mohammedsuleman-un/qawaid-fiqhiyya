// GET /boek/<slug>/<hoofdstuk>?lang=ar|nl: één hoofdstuk, deelbaar, met vorige en volgende.
import { db } from '../../../lib/db.js'
import { loadBook, viewer, isStaff, pickLang } from '../../../lib/library.js'
import { renderBook } from '../../../lib/render.js'
import { page, notFound } from '../../../lib/pages.js'
import { chapterTerms } from '../../../lib/zad.js'
import { loadStudy, loadUnitStudy } from '../../../lib/study.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  const data = await loadBook(conn, params.slug, lang, { staff })
  const chapter = data?.chapters.find((c) => c.slug === params.chapter)
  if (!chapter) return notFound(lang)
  // Begrippen alleen bij een les die in deze taal zichtbaar is.
  const terms = data.book.zad_level && !chapter.missing ? await chapterTerms(conn, chapter.id) : []
  // Studiekaart van deze les als die in deze taal gepubliceerd is; medewerkers zien met
  // ?voorbeeld ook een concept. Heeft de eenheid een hoofdstukkaart, dan toont de les de
  // gewone samenvatting met een verwijzing naar de hoofdstukpagina.
  const preview = staff && new URL(request.url).searchParams.has('voorbeeld')
  const own = data.book.zad_level ? await loadStudy(conn, chapter.id, lang, { preview }) : null
  const study = own?.scope === 'lesson' ? own : null
  const unitLink = !!(data.book.zad_level && chapter.unit != null && (own?.scope === 'unit' || await loadUnitStudy(conn, data.chapters, chapter.unit, lang)))
  return page(renderBook({ ...data, chapter, lang, staff, terms, study, unitLink }), staff || preview)
}
