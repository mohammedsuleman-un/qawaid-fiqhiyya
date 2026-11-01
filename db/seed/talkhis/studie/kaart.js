// Bouwt een hoofdstukkaart van تلخيص جمع الجوامع (ar en nl) uit één tweetalige beschrijving,
// zoals db/seed/zad/studie/kaart.js, met de extra tabbladen van dit boek: خبايا الزوايا
// (subtleties), regels (rules), meningsverschillen (disputes), veelgemaakte fouten (pitfalls)
// en verzen (ayat). Paren zijn [ar, nl]. Alles komt uit de notities (tafrigh); toelichtingen
// van de redactie staan als origin 'toelichting'.
import { spreadAnswers } from '../../zad/studie/quiz.js'
import { UNITS } from '../units.js'

const pick = (pair, i) => Array.isArray(pair) ? (pair[i] ?? '') : (pair ?? '')

// Knooppunt: [page, labelAr, labelNl, subAr, subNl, children] of { label, sub, detail, page, children };
// kinderen mogen paren [ar, nl] zijn.
function node (n, i) {
  if (Array.isArray(n) && typeof n[0] === 'number') {
    const [page, lAr, lNl, sAr = '', sNl = '', children = []] = n
    return { label: i ? lNl : lAr, sub: i ? sNl : sAr, page, children: children.map((c) => node(c, i)) }
  }
  if (Array.isArray(n)) return { label: pick(n, i) }
  return { label: pick(n.label, i), sub: pick(n.sub, i), detail: pick(n.detail, i), page: n.page, children: (n.children || []).map((c) => node(c, i)) }
}

function diagram (d, i) {
  const p = (x) => pick(x, i)
  const out = { type: d.type, title: p(d.title), intro: p(d.intro), note: p(d.note), page: d.page }
  if (d.root) out.root = node(d.root, i)
  if (d.type === 'compare') {
    out.columns = d.columns.map(p)
    out.rows = d.rows.map((r) => ({ label: p(r.label), cells: r.cells.map(p) }))
  } else {
    out.nodes = d.nodes.map((n) => node(n, i))
  }
  return out
}

function side (c, u, i) {
  const p = (x) => pick(x, i)
  return {
    scope: 'unit',
    unit: u.unit,
    title: i ? u.title_nl : u.title_ar,
    subtitle: p(c.subtitle),
    summary: p(c.summary),
    source: {
      label: i ? 'Notities bij Talkhīs Jamʿ al-Jawāmiʿ (as-Subkī)' : 'مذكرات تلخيص جمع الجوامع للسبكي',
      pages: u.pages,
      url: 'https://zuiverebron.nl/boek/talkhis-jam-al-jawami?lang=ar#p{p}'
    },
    visual: diagram(c.map, i),
    points: c.points.map(([page, ar, nl, dAr = '', dNl = '']) => ({ text: i ? nl : ar, detail: i ? dNl : dAr, page })),
    terms: c.terms.map(([term, translit, page, mAr, mNl, eAr = '', eNl = '']) => ({ term, translit, meaning: i ? mNl : mAr, explanation: i ? eNl : eAr, notes: [], page })),
    diagrams: c.diagrams.map((d) => diagram(d, i)),
    sections: c.sections.map(([page, tAr, tNl, xAr, xNl, mAr = '', mNl = '']) => ({ title: i ? tNl : tAr, text: i ? xNl : xAr, more: i ? mNl : mAr, page })),
    keycards: c.keycards.map(([kind, page, tAr, tNl, iAr, iNl, origin = 'boek']) => ({ kind, title: i ? tNl : tAr, items: i ? iNl : iAr, page, origin })),
    hadith: (c.hadith || []).map((h) => ({ narrator: p(h.narrator), text: h.text, meaning: i ? h.nl : '', takhrij: p(h.takhrij), note: p(h.note), pages: h.pages })),
    persons: (c.persons || []).map(([slug, group, pages, rAr, rNl]) => ({ slug, group, pages, role: i ? rNl : rAr })),
    subtleties: (c.subtleties || []).map(([page, tAr, tNl, xAr, xNl]) => ({ title: i ? tNl : tAr, text: i ? xNl : xAr, page })),
    rules: (c.rules || []).map(([page, rAr, rNl, xAr = '', xNl = '', eAr = '', eNl = '']) => ({ rule: i ? rNl : rAr, ar: i ? rAr : '', text: i ? xNl : xAr, example: i ? eNl : eAr, page })),
    disputes: (c.disputes || []).map((d) => ({ question: p(d.q), views: d.views.map(p), preferred: p(d.preferred), fruit: p(d.fruit), page: d.page })),
    pitfalls: (c.pitfalls || []).map(([page, wAr, wNl, rAr, rNl]) => ({ wrong: i ? wNl : wAr, right: i ? rNl : rAr, page })),
    ayat: (c.ayat || []).map(([pages, text, uAr, uNl]) => ({ text, use: i ? uNl : uAr, pages: [].concat(pages) })),
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
  const u = UNITS.find((x) => x.unit === c.unit)
  return { book: 'talkhis-jam-al-jawami', chapter: String(u.chapters[0]), unit: u.unit, ar: side(c, u, 0), nl: side(c, u, 1) }
}
