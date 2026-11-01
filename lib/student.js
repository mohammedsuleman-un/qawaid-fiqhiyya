// Studentenomgeving: boeken op je profiel, voortgang, planning en toetsen.
// Vragen komen uit twee bronnen:
//  - de vragenbank (tabel questions), alleen goedgekeurde vragen (status 'published');
//  - de oefenvragen op gepubliceerde studie- en hoofdstukkaarten (al openbaar op de site).
// Een poging bewaart een kopie van de gekozen vragen met antwoorden op de server; de
// student krijgt de vragen zonder antwoorden en ziet de uitleg pas na het inleveren.
import { fail, str } from './http.js'
import { parseStudy } from './study.js'

export const BOOK_OK = "b.status = 'published' AND b.access_level = 'public'"
const clean = (v, max = 2000) => String(v ?? '').replace(/<[^>]*>/g, '').trim().slice(0, max)
export const marks = (a) => a.map(() => '?').join(', ')

// "1,3" -> [1, 3]; leeg = alle eenheden.
export function parseUnits (v) {
  const list = (Array.isArray(v) ? v : String(v ?? '').split(','))
    .map((x) => parseInt(x, 10)).filter((n) => n > 0 && n < 1000)
  return [...new Set(list)].sort((a, b) => a - b).slice(0, 60)
}

const TF = { nl: ['juist', 'onjuist'], ar: ['صحيح', 'خطأ'] }

// Een vraag uit de vragenbank (importformaat ZAD) in de gevraagde taal.
export function bankQuestion (row, lang) {
  let d
  try { d = JSON.parse(row.data) } catch { return null }
  const q = clean(d['vraag_' + lang] || d.vraag_nl || d.vraag_ar, 1000)
  if (!q) return null
  const base = { key: 'q' + row.id, q, explain: clean(d['uitleg_' + lang] || d.uitleg_nl || d.uitleg_ar), source: clean(d.bron, 200), unit: row.unit == null ? null : Number(row.unit), lesson: row.slug }
  const answer = Number(d.antwoord)
  if (d.type === 'tf') return Number.isInteger(answer) && answer >= 0 && answer < 2 ? { ...base, type: 'tf', options: TF[lang], answer } : null
  if (d.type === 'mc') {
    const options = (Array.isArray(d.opties) ? d.opties : []).map((o) => clean(o, 300)).filter(Boolean)
    return options.length >= 2 && Number.isInteger(answer) && answer >= 0 && answer < options.length ? { ...base, type: 'mc', options, answer } : null
  }
  if (d.type === 'match') {
    const left = (d.links || []).map((o) => clean(o, 300))
    const right = (d.rechts || []).map((o) => clean(o, 300))
    const ans = (Array.isArray(d.antwoord) ? d.antwoord : []).map(Number)
    if (left.length < 2 || left.length !== right.length || ans.length !== left.length || new Set(ans).size !== ans.length || ans.some((x) => !(x >= 0 && x < right.length))) return null
    return { ...base, type: 'match', left, right, answer: ans }
  }
  if (d.type === 'open') return { ...base, type: 'open', model: clean(d.antwoord_tekst, 3000) }
  return null
}

// Oefenvragen van een gepubliceerde studiekaart.
// Bij een hoofdstukkaart (hele eenheid) volgt de les uit de pagina van de vraag.
export function studyQuestions (row, chapters = []) {
  let s
  try { s = parseStudy(row.body) } catch { return [] }
  const unit = s.scope === 'unit' ? s.unit : (row.unit == null ? null : Number(row.unit))
  const lessonFor = (page) => {
    if (s.scope !== 'unit') return row.slug
    if (!page) return null
    const inUnit = chapters.filter((c) => Number(c.unit) === unit && c.page_start != null && Number(c.page_start) <= page)
    return inUnit.length ? inUnit[inUnit.length - 1].slug : null
  }
  return s.quiz.map((x, i) => ({
    key: `s${row.vid}-${i}`, type: x.type === 'tf' ? 'tf' : 'mc', q: x.q, options: x.options, answer: x.answer,
    explain: x.explain, source: x.page ? String(x.page) : '', page: x.page, unit, lesson: lessonFor(x.page)
  }))
}

// Alle bruikbare vragen van een boek (eventueel alleen bepaalde eenheden), in 2 queries.
export async function questionPool (conn, bookId, lang, units = []) {
  const unitSql = units.length ? ` AND c.unit IN (${marks(units)})` : ''
  const bank = await conn.execute(`SELECT q.id, q.data, c.unit, c.slug FROM questions q JOIN chapters c ON c.id = q.chapter_id AND c.archived_at IS NULL
    WHERE q.book_id = ? AND q.status = 'published'${unitSql} ORDER BY c.position, q.position`, [bookId, ...units])
  const cards = await conn.execute(`SELECT v.id AS vid, v.body, c.unit, c.slug FROM chapters c
    JOIN content_translations t ON t.entity_type = 'study' AND t.entity_id = c.id AND t.lang = ?
    JOIN content_versions v ON v.id = t.published_version_id
    WHERE c.book_id = ? AND c.archived_at IS NULL ORDER BY c.position`, [lang, bookId])
  const chapters = cards.length ? await conn.execute('SELECT slug, unit, page_start FROM chapters WHERE book_id = ? AND archived_at IS NULL ORDER BY position', [bookId]) : []
  const out = bank.map((r) => bankQuestion(r, lang)).filter(Boolean)
  for (const r of cards) out.push(...studyQuestions(r, chapters))
  return units.length ? out.filter((q) => q.unit != null && units.includes(q.unit)) : out
}

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Kiest `count` vragen en husselt de antwoordopties van meerkeuzevragen (en de rechterkolom bij koppelen).
export function pickQuestions (pool, count, { includeOpen = false } = {}) {
  const usable = pool.filter((q) => includeOpen || q.type !== 'open')
  return shuffle([...usable]).slice(0, count).map((q) => {
    if (q.type === 'mc') {
      const order = shuffle(q.options.map((_, i) => i))
      return { ...q, options: order.map((i) => q.options[i]), answer: order.indexOf(q.answer) }
    }
    if (q.type === 'match') {
      const order = shuffle(q.right.map((_, i) => i)) // nieuwe positie -> oude index
      return { ...q, right: order.map((i) => q.right[i]), answer: q.answer.map((old) => order.indexOf(old)) }
    }
    return q
  })
}

// Wat de student tijdens de toets ziet: zonder antwoorden en uitleg.
export const publicQuestion = ({ key, type, q, options, left, right, unit, lesson }) =>
  ({ key, type, q, options, left, right, unit, lesson })

// Punten per vraag: meerkeuze en juist/onjuist 1 punt, koppelen naar rato, open vragen
// tellen niet mee (de student vergelijkt zelf met het modelantwoord).
export function grade (questions, answers) {
  let score = 0
  let max = 0
  const review = questions.map((q, i) => {
    const given = answers?.[i]
    let points = null
    if (q.type === 'mc' || q.type === 'tf') {
      points = Number(given) === q.answer && given !== null && given !== '' && given !== undefined ? 1 : 0
    } else if (q.type === 'match') {
      const g = Array.isArray(given) ? given.map(Number) : []
      points = Math.round(q.answer.filter((a, j) => g[j] === a).length / q.answer.length * 100) / 100
    }
    if (points !== null) { score += points; max += 1 }
    return { ...q, given: given ?? null, points }
  })
  return { score: Math.round(score * 100) / 100, max, review }
}

// Bewaart antwoorden in een vaste vorm (geen willekeurige JSON van buiten).
export function cleanAnswers (questions, input) {
  const a = Array.isArray(input) ? input : []
  return questions.map((q, i) => {
    const v = a[i]
    if (q.type === 'match') return Array.isArray(v) ? q.left.map((_, j) => (Number.isInteger(Number(v[j])) && v[j] !== null && v[j] !== '' ? Number(v[j]) : null)) : null
    if (q.type === 'open') return v == null ? null : clean(v, 3000)
    return v === null || v === undefined || v === '' ? null : Number.isInteger(Number(v)) ? Number(v) : null
  })
}

// Een gepubliceerd, openbaar boek op slug.
export async function publicBook (conn, slug) {
  const [b] = await conn.execute(`SELECT b.id, b.slug, b.zad_level, b.zad_subject FROM books b WHERE b.slug = ? AND ${BOOK_OK}`, [String(slug || '').slice(0, 120)])
  if (!b) fail(404, 'Boek niet gevonden')
  return { ...b, id: Number(b.id) }
}

export const langOf = (v) => (v === 'ar' ? 'ar' : 'nl')

// "2026-11-05T14:00" of "2026-11-05 14:00" -> "2026-11-05 14:00:00" (UTC zoals de rest van de database).
export function sqlDate (v, { dateOnly = false } = {}) {
  const s = String(v ?? '').trim()
  const m = dateOnly ? /^(\d{4}-\d{2}-\d{2})$/.exec(s) : /^(\d{4}-\d{2}-\d{2})[T ](\d{2}:\d{2})(:\d{2})?(\.\d+)?Z?$/.exec(s)
  if (!m) return null
  const d = new Date(dateOnly ? m[1] + 'T00:00:00Z' : `${m[1]}T${m[2]}:00Z`)
  if (isNaN(d)) return null
  return dateOnly ? m[1] : `${m[1]} ${m[2]}:00`
}

const TITLES = `(SELECT title FROM book_translations x WHERE x.book_id = b.id AND x.lang = 'ar') AS title_ar,
  (SELECT title FROM book_translations x WHERE x.book_id = b.id AND x.lang = 'nl') AS title_nl`
export const BOOK_TITLES = TITLES

// De boeken op het profiel van een gebruiker, met voortgang en planning.
export async function myBooks (conn, userId) {
  const rows = await conn.execute(`SELECT b.id, b.slug, b.zad_level, b.zad_subject, ${TITLES}, sp.start_date, sp.target_date,
      (SELECT COUNT(*) FROM chapters c WHERE c.book_id = b.id AND c.archived_at IS NULL AND EXISTS (SELECT 1 FROM content_translations t
        WHERE t.entity_type = 'chapter' AND t.entity_id = c.id AND t.published_version_id IS NOT NULL)) AS lessons,
      (SELECT COUNT(*) FROM lesson_progress p JOIN chapters c ON c.id = p.chapter_id AND c.archived_at IS NULL WHERE p.user_id = sb.user_id AND c.book_id = b.id) AS done
    FROM student_books sb JOIN books b ON b.id = sb.book_id AND ${BOOK_OK}
    LEFT JOIN study_plans sp ON sp.user_id = sb.user_id AND sp.book_id = b.id
    WHERE sb.user_id = ? ORDER BY b.zad_level IS NULL, b.zad_level, b.id`, [userId])
  return rows.map((r) => ({ ...r, id: Number(r.id), zad_level: r.zad_level == null ? null : Number(r.zad_level), lessons: Number(r.lessons), done: Number(r.done) }))
}

const TEST_FIELDS = `t.id, t.book_id, t.title_nl, t.title_ar, t.units, t.question_count, t.time_limit_min, t.max_attempts,
  t.opens_at, t.closes_at, t.info_nl, t.info_ar, t.status, b.slug,
  (SELECT title FROM book_translations x WHERE x.book_id = b.id AND x.lang = 'ar') AS book_title_ar,
  (SELECT title FROM book_translations x WHERE x.book_id = b.id AND x.lang = 'nl') AS book_title_nl,
  CASE WHEN NOW() < t.opens_at THEN 'soon' WHEN NOW() > t.closes_at THEN 'closed' ELSE 'open' END AS state`

const testRow = (r) => ({ ...r, id: Number(r.id), book_id: Number(r.book_id), question_count: Number(r.question_count),
  time_limit_min: r.time_limit_min == null ? null : Number(r.time_limit_min), max_attempts: Number(r.max_attempts),
  attempts: r.attempts == null ? undefined : Number(r.attempts), best: r.best == null ? null : Number(r.best),
  followed: r.followed == null ? undefined : Number(r.followed) === 1, running: r.running == null ? undefined : Number(r.running) === 1 })

// Geplande toetsen voor een student: open en komende, en die van de laatste 30 dagen.
export async function testsForStudent (conn, userId, { bookId = null } = {}) {
  const rows = await conn.execute(`SELECT ${TEST_FIELDS},
      (SELECT COUNT(*) FROM test_attempts a WHERE a.test_id = t.id AND a.user_id = ?) AS attempts,
      EXISTS (SELECT 1 FROM test_attempts a WHERE a.test_id = t.id AND a.user_id = ? AND a.submitted_at IS NULL) AS running,
      (SELECT MAX(a.score / NULLIF(a.max_score, 0)) FROM test_attempts a WHERE a.test_id = t.id AND a.user_id = ? AND a.submitted_at IS NOT NULL) AS best,
      EXISTS (SELECT 1 FROM student_books sb WHERE sb.user_id = ? AND sb.book_id = t.book_id) AS followed
    FROM tests t JOIN books b ON b.id = t.book_id AND ${BOOK_OK}
    WHERE t.status = 'published' AND t.closes_at > NOW() - INTERVAL 30 DAY ${bookId ? 'AND t.book_id = ?' : ''}
    ORDER BY t.opens_at LIMIT 100`, [userId, userId, userId, userId, ...(bookId ? [bookId] : [])])
  return rows.map(testRow)
}

// Alle toetsen voor docenten, met het aantal pogingen.
export async function testsForTeacher (conn) {
  const rows = await conn.execute(`SELECT ${TEST_FIELDS},
      (SELECT COUNT(*) FROM test_attempts a WHERE a.test_id = t.id AND a.submitted_at IS NOT NULL) AS attempts
    FROM tests t JOIN books b ON b.id = t.book_id WHERE t.status <> 'archived' ORDER BY t.opens_at DESC LIMIT 200`)
  return rows.map(testRow)
}

export async function loadTest (conn, id) {
  const [r] = await conn.execute(`SELECT ${TEST_FIELDS} FROM tests t JOIN books b ON b.id = t.book_id WHERE t.id = ?`, [id])
  return r ? testRow(r) : null
}

// De laatste ingeleverde pogingen van een gebruiker.
export async function myAttempts (conn, userId, limit = 50) {
  const rows = await conn.execute(`SELECT a.id, a.test_id, a.lang, a.units, a.score, a.max_score, a.late, a.started_at, a.submitted_at,
      b.slug, ${TITLES}, t.title_nl AS test_title_nl, t.title_ar AS test_title_ar
    FROM test_attempts a JOIN books b ON b.id = a.book_id LEFT JOIN tests t ON t.id = a.test_id
    WHERE a.user_id = ? AND a.submitted_at IS NOT NULL ORDER BY a.submitted_at DESC LIMIT ${Number(limit)}`, [userId])
  return rows.map((r) => ({ ...r, id: Number(r.id), test_id: r.test_id == null ? null : Number(r.test_id), score: Number(r.score), max_score: Number(r.max_score), late: Number(r.late) === 1 }))
}

// Controle van het toetsformulier van docenten (aanmaken en wijzigen).
export async function testInput (conn, input) {
  const [book] = await conn.execute(`SELECT b.id FROM books b WHERE b.slug = ? AND ${BOOK_OK}`, [String(input.slug || '').slice(0, 120)])
  if (!book) fail(400, 'Kies een gepubliceerd boek')
  const opens = sqlDate(input.opens_at)
  const closes = sqlDate(input.closes_at)
  if (!opens || !closes) fail(400, 'Vul een begin- en eindtijd in')
  if (closes <= opens) fail(400, 'De eindtijd moet na de begintijd liggen')
  const title_nl = str(input.title_nl, 255)
  const title_ar = str(input.title_ar, 255)
  if (!title_nl && !title_ar) fail(400, 'Geef de toets een titel')
  const limit = parseInt(input.time_limit_min, 10)
  return {
    book_id: Number(book.id),
    title_nl,
    title_ar,
    units: parseUnits(input.units).join(','),
    question_count: Math.min(Math.max(parseInt(input.question_count, 10) || 10, 1), 50),
    time_limit_min: limit > 0 ? Math.min(limit, 600) : null,
    max_attempts: Math.min(Math.max(parseInt(input.max_attempts, 10) || 1, 1), 20),
    opens_at: opens,
    closes_at: closes,
    info_nl: str(input.info_nl, 5000),
    info_ar: str(input.info_ar, 5000),
    status: input.status === 'draft' ? 'draft' : 'published'
  }
}
