// GET /artikel/<slug>?lang=ar|nl: een artikel of samenvatting.
import { db } from '../../lib/db.js'
import { loadArticle, viewer, isStaff, pickLang } from '../../lib/library.js'
import { renderArticle } from '../../lib/render.js'
import { page, notFound } from '../../lib/pages.js'

export async function onRequestGet ({ request, env, params }) {
  const conn = db(env)
  const lang = pickLang(request.url)
  const staff = isStaff(await viewer(conn, request))
  const article = await loadArticle(conn, params.slug, lang, { staff })
  if (!article) return notFound(lang)
  return page(renderArticle({ article, lang }), staff)
}
