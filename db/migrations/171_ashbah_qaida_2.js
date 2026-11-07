// الأشباه والنظائر van as-Suyūṭī (het oorspronkelijke boek, niet de samenvatting تلخيص الأشباه والنظائر):
// op verzoek van Mohammed (7 nov 2026) voor de les van vr 8 nov: القاعدة الثانية «اليقين لا يزال بالشك»,
// blz. 50–76, met een hoofdstukkaart (eenheid 2 = de tweede regel). Het boek komt bij de lessen van
// shaykh Abū Ismāʿīl (waar al-Ashbāh gegeven wordt, migratie 170) en bij dezelfde instituten als de
// samenvatting, en wordt gepubliceerd. Eerst een back-up van alle studiekaarten.
import { importChapters } from './003_inhoud.js'
import { unitCardsMigration } from './unit-cards.js'
import ashbah from '../seed/ashbah/boek.js'
import { UNITS, PAGE_START } from '../seed/ashbah/units.js'
import u2 from '../seed/ashbah/studie/eenheid2.js'

const SLUG = 'al-ashbah-wan-nazair'
const AUTHOR = 'جلال الدين السيوطي'
const DESC = 'الأشباه والنظائر في قواعد وفروع فقه الشافعية لجلال الدين السيوطي (ت 911هـ). المنشور الآن: القاعدة الثانية «اليقين لا يزال بالشك» (ص 50–76) مع بطاقة الدراسة.'
const DESC_NL = 'Al-Ashbāh wa an-Naẓāʾir van Jalāl ad-Dīn as-Suyūṭī (gest. 911 AH) over de regels van de Shāfiʿitische fiqh. Nu online: de tweede regel, "zekerheid wordt niet opgeheven door twijfel" (p. 50–76), met studiekaart.'

async function createBook (conn) {
  await conn.execute(`INSERT IGNORE INTO books (slug, title, subtitle, pdf, status, category_id, language, access_level, author, summarizer)
    SELECT ?, ?, ?, ?, 'published', (SELECT id FROM categories WHERE slug = 'fiqh'), 'ar', 'public', ?, ''`,
  [SLUG, ashbah.book.title, ashbah.book.subtitle, ashbah.book.pdf, AUTHOR])
  const [book] = await conn.execute('SELECT id FROM books WHERE slug = ?', [SLUG])
  const bookId = Number(book.id)
  await conn.execute(`INSERT IGNORE INTO book_translations (book_id, lang, title, subtitle, description) VALUES
    (?, 'ar', ?, ?, ?), (?, 'nl', ?, ?, ?)`,
  [bookId, ashbah.book.title, ashbah.book.subtitle, DESC,
    bookId, 'al-Ashbāh wa an-Naẓāʾir (as-Suyūṭī)', 'Regels en vertakkingen van de Shāfiʿitische fiqh, door Jalāl ad-Dīn as-Suyūṭī', DESC_NL])
  // De lessen van shaykh Abū Ismāʿīl en dezelfde instituten als de samenvatting; anders Instituut Ibn al-Qayyim (id 1).
  await conn.execute(`INSERT IGNORE INTO book_institutes (book_id, institute_id)
    SELECT ?, id FROM institutes WHERE slug = 'abu-ismail-usul-al-fiqh'
    UNION SELECT ?, bi.institute_id FROM book_institutes bi JOIN books b ON b.id = bi.book_id WHERE b.slug = 'talkhis-al-ashbah-wan-nazair'`, [bookId, bookId])
  await conn.execute('INSERT IGNORE INTO book_institutes (book_id, institute_id) SELECT ?, 1 FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM book_institutes WHERE book_id = ?)', [bookId, bookId])
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM chapters WHERE book_id = ?', [bookId])
  if (Number(n) === 0) await importChapters(conn, bookId, ashbah.blocks)
}

// Eén UPDATE voor alle onderdelen: eenheid, titel van de eenheid en beginpagina per slug.
async function setUnits (conn) {
  const rows = []
  for (const u of UNITS) for (const ch of u.chapters) rows.push([String(ch), u.unit, u.title_ar, u.title_nl, PAGE_START[ch - 1]])
  const when = () => rows.map(() => 'WHEN ? THEN ?').join(' ')
  await conn.execute(`UPDATE chapters c JOIN books b ON b.id = c.book_id
    SET c.unit = CASE c.slug ${when()} END,
        c.unit_title_ar = CASE c.slug ${when()} END,
        c.unit_title_nl = CASE c.slug ${when()} END,
        c.page_start = CASE c.slug ${when()} END
    WHERE b.slug = ? AND c.slug IN (${rows.map(() => '?').join(', ')})`,
  [...rows.flatMap((r) => [r[0], r[1]]), ...rows.flatMap((r) => [r[0], r[2]]), ...rows.flatMap((r) => [r[0], r[3]]), ...rows.flatMap((r) => [r[0], r[4]]), SLUG, ...rows.map((r) => r[0])])
}

const m = unitCardsMigration({
  id: 171,
  name: 'ashbah-qaida-2',
  reason: 'Hoofdstukkaart الأشباه والنظائر, القاعدة الثانية – op verzoek van Mohammed (7 nov 2026)',
  backup: '20261107a',
  cards: [u2]
})
m.up.unshift(createBook)
// Personen uit de kaart koppelen aan dit boek (register per boek); alleen bestaande personen.
async function linkPersons (conn) {
  const slugs = [...new Set(u2.ar.persons.map((p) => p.slug))]
  await conn.execute(`INSERT IGNORE INTO person_books (person_id, book_id)
    SELECT p.id, b.id FROM persons p JOIN books b ON b.slug = ? WHERE p.slug IN (${slugs.map(() => '?').join(', ')})`, [SLUG, ...slugs])
}

m.up.splice(2, 0, setUnits)
m.up.push(linkPersons)
m.down.push(async (conn) => {
  const [book] = await conn.execute('SELECT id FROM books WHERE slug = ?', [SLUG])
  if (!book) return
  const id = Number(book.id)
  await conn.execute(`DELETE s FROM search_index s JOIN chapters c ON c.id = s.entity_id WHERE s.entity_type = 'chapter' AND c.book_id = ?`, [id])
  await conn.execute(`DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id
    JOIN chapters c ON c.id = t.entity_id WHERE t.entity_type IN ('chapter', 'study') AND c.book_id = ?`, [id])
  await conn.execute(`DELETE t FROM content_translations t JOIN chapters c ON c.id = t.entity_id WHERE t.entity_type IN ('chapter', 'study') AND c.book_id = ?`, [id])
  await conn.execute('DELETE FROM hadith_index WHERE book_id = ?', [id])
  await conn.execute('DELETE FROM person_books WHERE book_id = ?', [id])
  await conn.execute('DELETE FROM chapters WHERE book_id = ?', [id])
  await conn.execute('DELETE FROM book_institutes WHERE book_id = ?', [id])
  await conn.execute('DELETE FROM book_translations WHERE book_id = ?', [id])
  await conn.execute('DELETE FROM books WHERE id = ?', [id])
})
export default m
