// Studiekaart bij een les: een visuele studieomgeving naast de samenvatting.
// Per les en per taal een vertaling met entity_type 'study' (entity_id = hoofdstuk);
// de body van een versie is JSON in het formaat hieronder, zodat dezelfde workflow
// (concept → beoordeling → publicatie), versies en rechten gelden als voor teksten.
// Alle velden zijn platte tekst: HTML wordt bij het opslaan verwijderd en bij het tonen
// geëscaped. ﴿…﴾ wordt als vers en «…» als hadith opgemaakt.
import { fail } from './http.js'

export const DIAGRAM_TYPES = ['mindmap', 'tree', 'steps', 'timeline', 'flow', 'compare', 'cards']
export const KEYCARD_KINDS = ['definitie', 'voorwaarde', 'opsomming', 'uitzondering', 'onderscheid', 'bewijs']
export const ORIGINS = ['boek', 'toelichting'] // boek = rechtstreeks uit de bron, toelichting = uitleg van de redactie
const QUIZ_TYPES = ['mc', 'tf']
export const SCOPES = ['lesson', 'unit'] // unit = één kaart voor een hele eenheid (hoofdstuk), opgeslagen bij de eerste les
export const PERSON_GROUPS = ['text', 'takhrij'] // genoemd in de tekst, of alleen in de bronvermelding van een hadith

const text = (v, max = 2000) => String(v ?? '').replace(/<[^>]*>/g, '').replace(/[<>]/g, '').replace(/\r/g, '').trim().slice(0, max)
const page = (v) => { const n = parseInt(v, 10); return n > 0 && n < 5000 ? n : null }
const list = (v, max) => (Array.isArray(v) ? v : []).slice(0, max)
const strings = (v, max = 30, len = 500) => list(v, max).map((s) => text(s, len)).filter(Boolean)
const origin = (v) => ORIGINS.includes(v) ? v : 'boek'
const pages = (v) => list(v, 10).map(page).filter(Boolean)

function node (n, depth) {
  if (typeof n === 'string') n = { label: n }
  const out = { label: text(n?.label, 300), sub: text(n?.sub, 300), detail: text(n?.detail, 2000), page: page(n?.page) }
  if (depth < 3) out.children = list(n?.children, 20).map((c) => node(c, depth + 1)).filter((c) => c.label)
  return out
}

function diagram (d) {
  const type = DIAGRAM_TYPES.includes(d?.type) ? d.type : fail(400, 'Onbekend schema: ' + String(d?.type).slice(0, 20))
  return {
    type,
    title: text(d.title, 300),
    intro: text(d.intro, 1000),
    root: d.root ? node(d.root, 2) : null,
    nodes: list(d.nodes, 20).map((n) => node(n, 1)).filter((n) => n.label),
    // Vergelijkingstabel: kolomkoppen en rijen met per kolom een cel.
    columns: strings(d.columns, 4, 200),
    rows: list(d.rows, 20).map((r) => ({ label: text(r?.label, 200), cells: strings(r?.cells, 4, 1000) })).filter((r) => r.label),
    note: text(d.note, 1000),
    page: page(d.page)
  }
}

// Controleert en normaliseert een studiekaart (uit het beheer of een migratie).
export function parseStudy (input) {
  let s = input
  if (typeof s === 'string') { try { s = JSON.parse(s) } catch { fail(400, 'Studiekaart is geen geldige JSON') } }
  if (!s || typeof s !== 'object' || Array.isArray(s)) fail(400, 'Studiekaart ontbreekt')
  const out = {
    scope: SCOPES.includes(s.scope) ? s.scope : 'lesson',
    unit: page(s.unit),
    title: text(s.title, 300),
    subtitle: text(s.subtitle, 300),
    summary: text(s.summary, 1000),
    source: { label: text(s.source?.label, 200), pages: text(s.source?.pages, 50), url: /^https:\/\/[^\s"'<>]+$/.test(String(s.source?.url || '')) ? String(s.source.url).slice(0, 500) : '' },
    points: list(s.points, 8).map((p) => ({ text: text(p?.text, 500), detail: text(p?.detail, 2000), page: page(p?.page) })).filter((p) => p.text),
    terms: list(s.terms, 30).map((g) => ({ term: text(g?.term, 200), translit: text(g?.translit, 200), meaning: text(g?.meaning, 500), explanation: text(g?.explanation, 2000), notes: strings(g?.notes, 10), page: page(g?.page) })).filter((g) => g.term),
    visual: s.visual ? diagram(s.visual) : null, // het hoofdschema op het overzicht
    diagrams: list(s.diagrams, 8).map(diagram),
    sections: list(s.sections, 20).map((x) => ({ title: text(x?.title, 300), text: text(x?.text, 1500), more: text(x?.more, 5000), page: page(x?.page) })).filter((x) => x.title),
    keycards: list(s.keycards, 20).map((k) => ({ kind: KEYCARD_KINDS.includes(k?.kind) ? k.kind : 'definitie', title: text(k?.title, 300), items: strings(k?.items, 15, 600), page: page(k?.page), origin: origin(k?.origin) })).filter((k) => k.title),
    // Hadith zoals in het boek (tekst, overleveraar, takhrij) met de pagina's waar ze staan.
    hadith: list(s.hadith, 40).map((h) => ({ narrator: text(h?.narrator, 200), text: text(h?.text, 2000), meaning: text(h?.meaning, 2000), takhrij: text(h?.takhrij, 300), note: text(h?.note, 1000), pages: pages(h?.pages) })).filter((h) => h.text),
    // Personen uit het register (slug) met waarom ze hier voorkomen; naam en biografie komen uit het register.
    persons: list(s.persons, 60).map((p) => ({ slug: /^[a-z0-9]+(-[a-z0-9]+)*$/.test(String(p?.slug || '')) ? String(p.slug).slice(0, 120) : '', group: PERSON_GROUPS.includes(p?.group) ? p.group : 'text', role: text(p?.role, 500), pages: pages(p?.pages) })).filter((p) => p.slug),
    review: strings(s.review, 20, 500),
    quiz: list(s.quiz, 30).map((q) => {
      const type = QUIZ_TYPES.includes(q?.type) ? q.type : 'mc'
      const options = strings(q?.options, 6, 300)
      const answer = parseInt(q?.answer, 10)
      return { type, q: text(q?.q, 500), options, answer: answer >= 0 && answer < options.length ? answer : -1, explain: text(q?.explain, 1000), page: page(q?.page) }
    }).filter((q) => q.q && q.options.length >= 2 && q.answer >= 0),
    note: text(s.note, 1000)
  }
  if (!out.title) fail(400, 'Studiekaart: titel ontbreekt')
  if (out.scope === 'unit' && !out.unit) fail(400, 'Studiekaart: eenheid ontbreekt')
  return out
}

// De gepubliceerde studiekaart van een les in een taal; medewerkers kunnen met
// ?voorbeeld een concept bekijken (de nieuwste versie die nog niet gepubliceerd is).
export async function loadStudy (conn, chapterId, lang, { preview = false } = {}) {
  const [row] = await conn.execute(preview
    ? `SELECT v.id, v.body, v.status FROM content_translations t JOIN content_versions v ON v.translation_id = t.id
        WHERE t.entity_type = 'study' AND t.entity_id = ? AND t.lang = ? AND v.status IN ('draft', 'in_review', 'approved', 'rejected', 'published')
        ORDER BY v.id DESC LIMIT 1`
    : `SELECT v.id, v.body, v.status FROM content_translations t JOIN content_versions v ON v.id = t.published_version_id
        WHERE t.entity_type = 'study' AND t.entity_id = ? AND t.lang = ?`, [chapterId, lang])
  if (!row) return null
  try { return { ...parseStudy(row.body), versionId: Number(row.id), status: row.status } } catch { return null }
}

// Hoofdstukkaart van een eenheid: opgeslagen als studiekaart van de eerste les van die eenheid.
export async function loadUnitStudy (conn, chapters, unit, lang, { preview = false } = {}) {
  const first = chapters.find((c) => c.unit === unit)
  if (!first) return null
  const s = await loadStudy(conn, first.id, lang, { preview })
  return s && s.scope === 'unit' && s.unit === unit ? s : null
}

// Eenheden van een boek met een gepubliceerde hoofdstukkaart in deze taal (voor het boekoverzicht).
export async function studyUnits (conn, bookId, lang) {
  const rows = await conn.execute(`SELECT v.body FROM chapters c JOIN content_translations t ON t.entity_type = 'study' AND t.entity_id = c.id AND t.lang = ?
    JOIN content_versions v ON v.id = t.published_version_id WHERE c.book_id = ?`, [lang, bookId])
  const units = new Set()
  for (const r of rows) { try { const s = parseStudy(r.body); if (s.scope === 'unit') units.add(s.unit) } catch {} }
  return units
}

// Naam en soort van de personen op een hoofdstukkaart, uit het personenregister.
export async function studyPersons (conn, study) {
  const slugs = [...new Set((study?.persons || []).map((p) => p.slug))]
  if (!slugs.length) return new Map()
  const rows = await conn.execute(`SELECT slug, name_ar, name_nl, kind, death_hijri FROM persons WHERE slug IN (${slugs.map(() => '?').join(', ')})`, slugs)
  return new Map(rows.map((r) => [r.slug, { name_ar: r.name_ar, name_nl: r.name_nl, kind: r.kind, death_hijri: r.death_hijri == null ? null : Number(r.death_hijri) }]))
}
