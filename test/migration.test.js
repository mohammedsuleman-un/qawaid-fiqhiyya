// De omzetting van de eerste versie (blokken, beheerders) naar het nieuwe model:
// geen tekstverlies, beheerders worden gebruikers met de juiste rol.
import { importZad } from '../lib/zad.js'
import aqeedah1 from '../db/seed/zad/n1-aqeedah.js'
import { test, after } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { freshDb, checkQueries } from './helpers.js'
import migrations from '../db/migrations/index.js'
import { migrate, rollback } from '../lib/migrate.js'
import { sanitizeHtml } from '../lib/sanitize.js'
import { stripTags } from '../lib/db.js'
import { normalizeArabic } from '../lib/arabic.js'

const conn = await freshDb()
after(() => conn.close())
const seed = JSON.parse(readFileSync(new URL('../db/seed/talkhis-jam-al-jawami.json', import.meta.url)))
const text = (html) => stripTags(html).replace(/\s+/g, '')

test('oude database met blokken en een eigenaar wordt omgezet zonder tekstverlies', async () => {
  // Stand van de eerste versie: alleen migratie 1, gevuld zoals /api/setup dat deed.
  await conn.execute('CREATE TABLE schema_migrations (id INT PRIMARY KEY, name VARCHAR(120) NOT NULL, applied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)')
  for (const step of migrations[0].up) await conn.execute(step)
  await conn.execute('INSERT INTO schema_migrations (id, name) VALUES (1, ?)', ['basis'])
  const { book, blocks } = seed
  await conn.execute('INSERT INTO books (slug, title, subtitle, pdf) VALUES (?, ?, ?, ?)', [book.slug, book.title, book.subtitle, book.pdf])
  for (const [i, b] of blocks.entries()) {
    await conn.execute('INSERT INTO blocks (book_id, position, page, kind, anchor, html, plain) VALUES (1, ?, ?, ?, ?, ?, ?)',
      [i, b.page, b.kind, b.anchor, b.html, normalizeArabic(stripTags(b.html))])
  }
  await conn.execute("INSERT INTO admins (email, role, password_hash) VALUES ('eigenaar@example.org', 'owner', 'pbkdf2$1$x$y')")
  await conn.execute("INSERT INTO admins (email, role, password_hash) VALUES ('redacteur@example.org', 'editor', 'pbkdf2$1$x$y')")

  assert.deepEqual([...await migrate(conn)], migrations.slice(1).map((m) => m.name))

  const chapters = await conn.execute(`SELECT c.position, t.title, v.body FROM chapters c
    JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id AND t.lang = 'ar'
    JOIN content_versions v ON v.id = t.published_version_id WHERE c.book_id = 1 ORDER BY c.position`)
  assert.equal(chapters.length, blocks.filter((b) => b.kind === 'heading').length)
  // Paginanummers die voor een kopje stonden, staan nu na de titel; die vergelijken we apart.
  const before = text(blocks.filter((b) => b.kind !== 'page').map((b) => b.html).join(''))
  const afterText = text(chapters.map((c) => c.title + sanitizeHtml(c.body).replace(/<div class="pg"[^>]*>.*?<\/div>/g, '')).join(''))
  assert.equal(afterText, before)
  // Elke pagina komt precies één keer terug.
  const pages = chapters.map((c) => [...c.body.matchAll(/id="p(\d+)"/g)].map((m) => Number(m[1]))).flat()
  assert.deepEqual(pages, blocks.filter((b) => b.kind === 'page').map((b) => b.page))
  // De opgeslagen HTML is al schoon: opschonen verandert niets.
  for (const c of chapters) assert.equal(sanitizeHtml(c.body), c.body.trim())

  const roles = await conn.execute('SELECT u.email, r.role_code FROM users u JOIN user_roles r ON r.user_id = u.id ORDER BY u.email')
  assert.deepEqual(roles.map((r) => [r.email, r.role_code]), [['eigenaar@example.org', 'superadmin'], ['redacteur@example.org', 'editor']])
  const [{ n }] = await conn.execute("SELECT COUNT(*) AS n FROM search_index WHERE plain LIKE '%⟦12⟧%'")
  assert.equal(Number(n), 1)
  // Het hadithregister is gevuld uit de opmaak, met paginanummers, en de personen staan klaar als concept.
  const hadith = await conn.execute("SELECT h.page, h.text FROM hadith_index h JOIN chapters c ON h.entity_type = 'chapter' AND c.id = h.entity_id WHERE c.book_id = 1")
  assert.equal(hadith.length, blocks.reduce((sum, b) => sum + (b.html.match(/<span class="hadith">/g) || []).length, 0))
  assert.ok(hadith.length > 0 && hadith.every((h) => h.page > 0 && h.text))
  const [{ p, pub }] = await conn.execute(`SELECT COUNT(*) AS p, (SELECT COUNT(*) FROM content_translations t JOIN articles a ON a.id = t.entity_id
    JOIN content_versions v ON v.id = t.published_version_id
    WHERE t.entity_type = 'article' AND a.kind = 'person' AND v.reason NOT LIKE 'Uit ZAD-import%') AS pub FROM persons`)
  assert.ok(Number(p) > 50)
  assert.equal(Number(pub), 0)
})

test('migraties zijn terug te draaien en opnieuw uit te voeren', async () => {
  // Alles na hoofdstukkaarten 2–4 terugdraaien (boeken hebben geen down-stap: de inhoud blijft staan).
  const later = migrations.slice(migrations.findIndex((m) => m.name === 'hoofdstukkaarten-aqeedah-1-eenheid-2-4') + 1).map((m) => m.name).reverse()
  for (const name of later) assert.equal(await rollback(conn), name)
  for (const b of ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'za', 'zb', 'zc', 'zd', 'ze']) assert.equal((await conn.execute(`SHOW TABLES LIKE 'zb_backup_20261029${b}_%'`)).length, 0)
  // Hoofdstukkaarten 2–4 terugdraaien laat alleen de kaart van eenheid 1 over.
  assert.equal(await rollback(conn), 'hoofdstukkaarten-aqeedah-1-eenheid-2-4')
  const left = await conn.execute("SELECT t.lang, v.body FROM content_translations t JOIN content_versions v ON v.id = t.published_version_id WHERE t.entity_type = 'study' ORDER BY t.lang")
  assert.deepEqual(left.map((r) => [r.lang, JSON.parse(r.body).unit]), [['ar', 1], ['nl', 1]])
  assert.equal(Number((await conn.execute("SELECT COUNT(*) AS n FROM content_translations WHERE entity_type = 'study'"))[0].n), 2)
  assert.equal((await conn.execute("SHOW TABLES LIKE 'zb_backup_20261029b_%'")).length, 0)
  // Hoofdstukkaart terugdraaien zet de kaart van les 1 terug uit de back-up.
  assert.equal(await rollback(conn), 'hoofdstukkaart-aqeedah-1-eenheid-1')
  const back = await conn.execute("SELECT t.lang, v.status, v.body FROM content_translations t JOIN content_versions v ON v.id = t.published_version_id WHERE t.entity_type = 'study' ORDER BY t.lang")
  assert.deepEqual(back.map((r) => [r.lang, r.status, JSON.parse(r.body).scope]), [['ar', 'published', 'lesson'], ['nl', 'published', 'lesson']])
  assert.equal((await conn.execute("SHOW TABLES LIKE 'zb_backup_%'")).length, 0)
  assert.equal(await rollback(conn), 'studiekaart-aqeedah-1-les-1')
  assert.equal(await rollback(conn), 'publiceer-zad-aqeedah-1')
  assert.equal(await rollback(conn), 'personen-per-boek')
  assert.equal(await rollback(conn), 'zad-aqeedah-1')
  assert.equal(await rollback(conn), 'zad')
  assert.equal(await rollback(conn), 'registers')
  assert.equal(await rollback(conn), 'omzetting')
  assert.equal(await rollback(conn), 'inhoud')
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['inhoud'])
  // Elke migratie past binnen één verzoek op Cloudflare (via /api/setup, ook met het hele boek).
  const before = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['omzetting'])
  checkQueries(conn.queries - before + 6, 'migratie omzetting')
  const before2 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['registers'])
  checkQueries(conn.queries - before2 + 6, 'migratie registers')
  const before3 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['zad'])
  checkQueries(conn.queries - before3 + 6, 'migratie zad')
  const [{ zb, zc, zv, zp }] = await conn.execute(`SELECT (SELECT COUNT(*) FROM books WHERE zad_level IS NOT NULL) AS zb,
    (SELECT COUNT(*) FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.slug = 'zad-n1-aqeedah') AS zc,
    (SELECT COUNT(*) FROM content_versions WHERE reason LIKE 'ZAD-import%') AS zv,
    (SELECT COUNT(*) FROM books WHERE zad_level IS NOT NULL AND status = 'published') AS zp`)
  assert.deepEqual([zb, zc, zv, zp].map(Number), [28, 24, 48, 0]) // 28 boeken, 24 lessen in 2 talen, niets gepubliceerd
  const before4 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['zad-aqeedah-1'])
  checkQueries(conn.queries - before4 + 6, 'migratie zad-aqeedah-1')
  // Zoals op productie: het hele boek met personen opnieuw importeren past ook binnen één verzoek.
  const slugs = aqeedah1.persons.map((p) => p.slug)
  await conn.execute(`DELETE FROM persons WHERE slug IN (${slugs.map(() => '?').join(',')})`, slugs)
  await conn.execute(`DELETE FROM articles WHERE slug IN (${slugs.map(() => '?').join(',')})`, slugs.map((x) => 'persoon-' + x))
  const before5 = conn.queries
  const r = await importZad(conn, aqeedah1)
  checkQueries(conn.queries - before5 + 6, 'volledige ZAD-import')
  assert.equal(r.lessons, 24)
  assert.ok(r.persons > 20)
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['personen-per-boek'])
  const before6 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['publiceer-zad-aqeedah-1'])
  checkQueries(conn.queries - before6 + 6, 'migratie publiceer-zad-aqeedah-1')
  const [z] = await conn.execute(`SELECT b.status, (SELECT COUNT(*) FROM chapters c JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id
      AND t.published_version_id IS NOT NULL WHERE c.book_id = b.id) AS pub,
      (SELECT COUNT(*) FROM content_versions v JOIN content_translations t ON t.id = v.translation_id JOIN chapters c ON t.entity_type = 'chapter' AND c.id = t.entity_id
      WHERE c.book_id = b.id AND v.status = 'published' AND v.body LIKE '%wacht op controle%') AS marked FROM books b WHERE b.slug = 'zad-n1-aqeedah'`)
  assert.deepEqual([z.status, Number(z.pub), Number(z.marked)], ['published', 48, 0])
  const [{ pb }] = await conn.execute("SELECT COUNT(*) AS pb FROM person_books pb JOIN books b ON b.id = pb.book_id WHERE b.slug = 'zad-n1-aqeedah'")
  assert.equal(Number(pb), aqeedah1.persons.length)
  const before7 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['studiekaart-aqeedah-1-les-1'])
  checkQueries(conn.queries - before7 + 6, 'migratie studiekaart')
  const study = await conn.execute("SELECT t.lang, v.status FROM content_translations t JOIN content_versions v ON v.translation_id = t.id WHERE t.entity_type = 'study' ORDER BY t.lang")
  assert.deepEqual(study.map((r) => [r.lang, r.status]), [['ar', 'published'], ['nl', 'published']])
  const before8 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['hoofdstukkaart-aqeedah-1-eenheid-1'])
  checkQueries(conn.queries - before8 + 6, 'migratie hoofdstukkaart')
  const unit = await conn.execute("SELECT t.lang, v.status, v.body FROM content_translations t JOIN content_versions v ON v.translation_id = t.id WHERE t.entity_type = 'study' ORDER BY t.lang, v.id")
  assert.deepEqual(unit.map((r) => [r.lang, r.status, JSON.parse(r.body).scope]), [['ar', 'superseded', 'lesson'], ['ar', 'published', 'unit'], ['nl', 'superseded', 'lesson'], ['nl', 'published', 'unit']])
  const [{ bk }] = await conn.execute('SELECT COUNT(*) AS bk FROM zb_backup_20261029_study_versions')
  assert.equal(Number(bk), 2) // back-up van de kaart per les
  const before9 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['hoofdstukkaarten-aqeedah-1-eenheid-2-4'])
  checkQueries(conn.queries - before9 + 6, 'migratie hoofdstukkaarten 2–4')
  const units = await conn.execute("SELECT c.slug, t.lang, v.body FROM content_translations t JOIN content_versions v ON v.id = t.published_version_id JOIN chapters c ON c.id = t.entity_id WHERE t.entity_type = 'study' ORDER BY c.position, t.lang")
  assert.deepEqual(units.map((r) => [r.slug, r.lang, JSON.parse(r.body).unit]), [['1', 'ar', 1], ['1', 'nl', 1], ['7', 'ar', 2], ['7', 'nl', 2], ['12', 'ar', 3], ['12', 'nl', 3], ['17', 'ar', 4], ['17', 'nl', 4]])
  // Geloofsleer (2) importeren en publiceren, elk binnen de limiet van één verzoek.
  await conn.execute("DELETE c FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.slug = 'zad-n2-aqeedah'")
  await conn.execute("UPDATE books SET status = 'draft' WHERE slug = 'zad-n2-aqeedah'")
  const before10 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['zad-aqeedah-2'])
  checkQueries(conn.queries - before10 + 6, 'migratie zad-aqeedah-2')
  const before11 = conn.queries
  assert.deepEqual([...await migrate(conn, { max: 1 })], ['publiceer-zad-aqeedah-2'])
  checkQueries(conn.queries - before11 + 6, 'migratie publiceer-zad-aqeedah-2')
  const [z2] = await conn.execute(`SELECT b.status, (SELECT COUNT(*) FROM chapters c JOIN content_translations t ON t.entity_type = 'chapter' AND t.entity_id = c.id
      AND t.published_version_id IS NOT NULL WHERE c.book_id = b.id) AS pub, (SELECT COUNT(DISTINCT c.unit) FROM chapters c WHERE c.book_id = b.id) AS units
      FROM books b WHERE b.slug = 'zad-n2-aqeedah'`)
  assert.deepEqual([z2.status, Number(z2.pub), Number(z2.units)], ['published', 48, 5])
  // De rest één voor één, elk binnen de limiet van één verzoek.
  for (;;) {
    const before = conn.queries
    const [name] = await migrate(conn, { max: 1 })
    if (!name) break
    checkQueries(conn.queries - before + 6, 'migratie ' + name)
  }
  const cards = await conn.execute(`SELECT b.slug, COUNT(*) AS n FROM content_translations t JOIN content_versions v ON v.id = t.published_version_id
    JOIN chapters c ON c.id = t.entity_id JOIN books b ON b.id = c.book_id WHERE t.entity_type = 'study' AND v.body LIKE '%"scope":"unit"%' GROUP BY b.slug ORDER BY b.slug`)
  assert.deepEqual(cards.map((r) => [r.slug, Number(r.n)]), [['zad-n1-aqeedah', 8], ['zad-n1-arabic', 10], ['zad-n1-fiqh', 12], ['zad-n1-hadith', 8], ['zad-n1-seerah', 10], ['zad-n1-tafsir', 8], ['zad-n1-tarbiyah', 12], ['zad-n2-aqeedah', 10], ['zad-n2-fiqh', 16], ['zad-n2-hadith', 8], ['zad-n2-seerah', 8], ['zad-n2-tafsir', 12], ['zad-n2-tarbiyah', 24], ['zad-n3-aqeedah', 12], ['zad-n4-aqeedah', 12]]) // per eenheid AR en NL
  const [{ n }] = await conn.execute('SELECT COUNT(*) AS n FROM chapters c JOIN books b ON b.id = c.book_id WHERE b.zad_level IS NULL')
  assert.equal(Number(n), 60)
})
