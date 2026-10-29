// Bouwt een hoofdstukkaart (ar en nl) uit één tweetalige beschrijving, zodat Arabisch en Nederlands
// in de bron naast elkaar staan en dezelfde opbouw, pagina's en antwoorden houden.
// Paren zijn [ar, nl]; zie n3-tafsir-eenheid1.js voor een voorbeeld.
import { spreadAnswers } from './quiz.js'

const pick = (pair, i) => Array.isArray(pair) ? (pair[i] ?? '') : (pair ?? '')

function side (c, i) {
  const p = (x) => pick(x, i)
  return {
    scope: 'unit',
    unit: c.unit,
    title: p(c.title),
    subtitle: p(c.subtitle),
    summary: p(c.summary),
    source: { label: p(c.source.label), pages: c.source.pages, url: c.source.url },
    visual: {
      type: 'mindmap',
      title: p(c.map.title),
      intro: p(c.map.intro),
      root: { label: p(c.map.root[0]), sub: p(c.map.root[1]) },
      nodes: c.map.nodes.map((n) => ({ label: p(n.label), sub: p(n.sub), page: n.page, children: n.children.map(p) }))
    },
    points: c.points.map(([page, ar, nl]) => ({ text: i ? nl : ar, page })),
    terms: c.terms.map(([term, translit, page, mAr, mNl, eAr = '', eNl = '']) => ({ term, translit, meaning: i ? mNl : mAr, explanation: i ? eNl : eAr, notes: [], page })),
    diagrams: c.diagrams.map((d) => {
      const out = { type: d.type, title: p(d.title), intro: p(d.intro) }
      if (d.type === 'compare') {
        out.columns = d.columns.map(p)
        out.rows = d.rows.map((r) => ({ label: p(r.label), cells: r.cells.map(p) }))
        out.page = d.page
      } else {
        out.nodes = d.nodes.map(([page, lAr, lNl, sAr = '', sNl = '']) => ({ label: i ? lNl : lAr, sub: i ? sNl : sAr, page }))
      }
      return out
    }),
    sections: c.sections.map(([page, tAr, tNl, xAr, xNl]) => ({ title: i ? tNl : tAr, text: i ? xNl : xAr, page })),
    keycards: c.keycards.map(([kind, page, tAr, tNl, iAr, iNl]) => ({ kind, title: i ? tNl : tAr, items: i ? iNl : iAr, page, origin: 'boek' })),
    hadith: (c.hadith || []).map((h) => i
      ? { narrator: h.narratorNl || '', text: h.text, meaning: h.nl, takhrij: h.takhrijNl || h.takhrij, note: h.nlNote || '', pages: h.pages }
      : { narrator: h.narrator || '', text: h.text, takhrij: h.takhrij, note: h.note || '', pages: h.pages }),
    persons: (c.persons || []).map(([slug, group, pages, rAr, rNl]) => ({ slug, group, pages, role: i ? rNl : rAr })),
    review: c.review.map(p),
    quiz: spreadAnswers(c.quiz.map((q) => ({
      type: q.type,
      q: p(q.q),
      options: q.type === 'tf' ? (i ? ['Juist', 'Onjuist'] : ['صواب', 'خطأ']) : q.options[i],
      answer: q.answer,
      explain: p(q.explain),
      page: q.page
    }))),
    note: p(c.note)
  }
}

export function kaart (c) {
  return { book: c.book, chapter: String(c.chapter), unit: c.unit, ar: side(c, 0), nl: side(c, 1) }
}
