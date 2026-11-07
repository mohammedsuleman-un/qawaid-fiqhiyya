// Lesagenda van het instituut: groepen (A en B, elk broeders en zusters), het weekrooster
// met blokken per groep, vakanties, examens en bijzondere dagen, en de aanwezigheid per les.
// Een les bestaat niet als rij: het is een blok (weekdag + tijd) op een datum binnen het
// schooljaar die niet in een vakantie valt. Alle tijden zijn Nederlandse tijd.
import { fail, str } from './http.js'
import { can } from './rbac.js'

export const STATUSES = ['present', 'absent', 'late', 'excused']
export const DAY_KINDS = ['year', 'holiday', 'exam', 'special']
export const COHORTS = ['A', 'B']
export const marks = (a) => a.map(() => '?').join(', ')

// Vandaag in Nederland als 'YYYY-MM-DD' (Cloudflare draait in UTC).
export const today = (now = new Date()) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Amsterdam' }).format(now)

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
export function isoDate (v, what = 'datum') {
  const s = String(v ?? '').slice(0, 10)
  if (!DATE_RE.test(s) || Number.isNaN(Date.parse(s + 'T00:00:00Z')) || new Date(s + 'T00:00:00Z').toISOString().slice(0, 10) !== s) fail(400, 'Ongeldige ' + what)
  return s
}
const toDate = (s) => new Date(String(s).slice(0, 10) + 'T00:00:00Z')
export const addDays = (s, n) => new Date(+toDate(s) + n * 86400000).toISOString().slice(0, 10)
// ISO-weekdag: 1 = maandag … 7 = zondag.
export const weekday = (s) => ((toDate(s).getUTCDay() + 6) % 7) + 1
export const monday = (s) => addDays(s, 1 - weekday(s))
const d10 = (v) => v == null ? null : String(v).slice(0, 10)

export function time (v) {
  const s = String(v ?? '').trim()
  const m = /^(\d{1,2}):(\d{2})$/.exec(s)
  if (!m || Number(m[1]) > 23 || Number(m[2]) > 59) fail(400, 'Ongeldige tijd (gebruik uu:mm)')
  return m[1].padStart(2, '0') + ':' + m[2]
}

const normGroup = (g) => ({ ...g, id: Number(g.id), position: Number(g.position) })
const normBlock = (b) => ({ ...b, id: Number(b.id), weekday: Number(b.weekday), position: Number(b.position) })
const normDay = (d) => ({ ...d, id: Number(d.id), date_from: d10(d.date_from), date_to: d10(d.date_to) })

export const allGroups = async (conn) => (await conn.execute('SELECT id, code, cohort, gender, name_nl, name_ar, position FROM class_groups ORDER BY position, id')).map(normGroup)
export const allBlocks = async (conn) => (await conn.execute('SELECT id, cohort, weekday, start_time, end_time, subject_nl, subject_ar, position FROM schedule_blocks ORDER BY cohort, weekday, start_time, position, id')).map(normBlock)
export const allDays = async (conn) => (await conn.execute('SELECT id, kind, date_from, date_to, cohort, title_nl, title_ar FROM calendar_days ORDER BY date_from, id')).map(normDay)

export const isManager = (user) => can(user, 'groups.manage')
export const canRecord = (user) => can(user, 'attendance.record')

// De groepen van een gebruiker: als student en als docent. Beheerders zien alle groepen.
export async function myGroups (conn, user) {
  const rows = await conn.execute('SELECT group_id, role FROM class_group_members WHERE user_id = ?', [user.id])
  return {
    student: rows.filter((r) => r.role === 'student').map((r) => Number(r.group_id)),
    teacher: rows.filter((r) => r.role === 'teacher').map((r) => Number(r.group_id))
  }
}

// Mag deze gebruiker de aanwezigheid van deze groep zien en invullen?
export function canTeach (user, mine, groupId) {
  if (isManager(user)) return true
  return canRecord(user) && mine.teacher.includes(groupId)
}

// Het schooljaar (rij 'year'); zonder schooljaar: van 1 september tot 31 juli rond vandaag.
export function schoolYear (days, now = today()) {
  const years = days.filter((d) => d.kind === 'year')
  const cur = years.find((y) => y.date_from <= now && (y.date_to || y.date_from) >= now) || years[years.length - 1]
  if (cur) return { from: cur.date_from, to: cur.date_to || cur.date_from, title_nl: cur.title_nl, title_ar: cur.title_ar }
  const y = Number(now.slice(0, 4)) - (Number(now.slice(5, 7)) < 8 ? 1 : 0)
  return { from: `${y}-09-01`, to: `${y + 1}-07-31`, title_nl: '', title_ar: '' }
}

const covers = (d, date, cohort) => d.date_from <= date && (d.date_to || d.date_from) >= date && (!d.cohort || !cohort || d.cohort === cohort)
export const holidayOn = (days, date, cohort) => days.find((d) => d.kind === 'holiday' && covers(d, date, cohort)) || null

// Alle dagen tussen from en to (inclusief) met lessen, vakanties, examens of bijzonderheden.
// cohorts: welke groepen (A/B) meetellen.
export function calendar ({ blocks, days, from, to, cohorts, year }) {
  const out = []
  for (let date = from; date <= to; date = addDays(date, 1)) {
    const wd = weekday(date)
    const inYear = date >= year.from && date <= year.to
    const events = days.filter((d) => d.kind !== 'year' && covers(d, date) && (!d.cohort || cohorts.includes(d.cohort)))
    const holiday = events.find((d) => d.kind === 'holiday')
    const lessons = inYear && !holiday ? blocks.filter((b) => b.weekday === wd && cohorts.includes(b.cohort)) : []
    // Een vakantie die over meerdere dagen loopt, tonen we alleen op lesdagen en op de eerste dag.
    const onLessonDay = blocks.some((b) => b.weekday === wd && cohorts.includes(b.cohort))
    const shown = events.filter((d) => d.kind !== 'holiday' || onLessonDay || d.date_from === date)
    if (lessons.length || shown.length) out.push({ date, weekday: wd, lessons: lessons.map((b) => b.id), events: shown.map((d) => d.id) })
  }
  return out
}

// Controleert dat op deze datum een les van dit blok voor deze groep is.
export function checkLesson ({ group, block, days, date, now = today() }) {
  if (!group || !block) fail(404, 'Les niet gevonden')
  if (block.cohort !== group.cohort) fail(400, 'Dit blok hoort niet bij deze groep')
  if (weekday(date) !== block.weekday) fail(400, 'Op deze datum is dit blok er niet')
  const year = schoolYear(days, date)
  if (date < year.from || date > year.to) fail(400, 'Deze datum valt buiten het schooljaar')
  if (holidayOn(days, date, group.cohort)) fail(400, 'Op deze datum is het vakantie')
  if (date > now) fail(400, 'Aanwezigheid kan pas vanaf de lesdag worden ingevuld')
}

export function dayInput (input) {
  const kind = DAY_KINDS.includes(input.kind) ? input.kind : fail(400, 'Onbekend soort dag')
  const from = isoDate(input.date_from, 'begindatum')
  const to = input.date_to ? isoDate(input.date_to, 'einddatum') : null
  if (to && to < from) fail(400, 'De einddatum moet na de startdatum liggen')
  const cohort = COHORTS.includes(input.cohort) ? input.cohort : null
  const title_nl = str(input.title_nl, 255)
  const title_ar = str(input.title_ar, 255)
  if (!title_nl && !title_ar) fail(400, 'Geef een omschrijving')
  return { kind, date_from: from, date_to: to && to !== from ? to : null, cohort, title_nl, title_ar }
}

export function blockInput (input, partial = false) {
  const out = {}
  if (!partial || input.cohort !== undefined) out.cohort = COHORTS.includes(input.cohort) ? input.cohort : fail(400, 'Onbekende groep')
  if (!partial || input.weekday !== undefined) {
    const wd = Number(input.weekday)
    out.weekday = Number.isInteger(wd) && wd >= 1 && wd <= 7 ? wd : fail(400, 'Ongeldige weekdag')
  }
  if (!partial || input.start_time !== undefined) out.start_time = time(input.start_time)
  if (!partial || input.end_time !== undefined) out.end_time = time(input.end_time)
  if (input.subject_nl !== undefined || !partial) out.subject_nl = str(input.subject_nl, 255)
  if (input.subject_ar !== undefined || !partial) out.subject_ar = str(input.subject_ar, 255)
  return out
}
