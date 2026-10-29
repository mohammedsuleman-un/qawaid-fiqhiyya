// Registers: hadith uit alle gepubliceerde teksten (met aantekeningen die alleen
// mensen invullen) en personen met een korte biografie als concept-artikel.
import { insertMany } from '../../lib/content.js'
import { indexHadithMany } from '../../lib/register.js'
import persons from '../seed/personen.js'

export default {
  id: 5,
  name: 'registers',
  up: [
    `CREATE TABLE IF NOT EXISTS hadith_index (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      translation_id INT NOT NULL,
      entity_type VARCHAR(16) NOT NULL,
      entity_id INT NOT NULL,
      lang CHAR(2) NOT NULL,
      book_id INT NULL,
      position INT NOT NULL,
      page INT NULL,
      text TEXT NOT NULL,
      hkey CHAR(64) NOT NULL,
      KEY translation_id (translation_id),
      KEY hkey (hkey)
    )`,
    `CREATE TABLE IF NOT EXISTS hadith_notes (
      hkey CHAR(64) PRIMARY KEY,
      source VARCHAR(500) NOT NULL DEFAULT '',
      grade VARCHAR(100) NOT NULL DEFAULT '',
      note TEXT NULL,
      updated_by INT NULL,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS persons (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(120) NOT NULL UNIQUE,
      name_ar VARCHAR(255) NOT NULL,
      name_nl VARCHAR(255) NOT NULL DEFAULT '',
      kind VARCHAR(16) NOT NULL DEFAULT 'alim',
      death_hijri INT NULL,
      aliases TEXT NULL,
      article_id INT NULL,
      position INT NOT NULL DEFAULT 0,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`,
    // Hadith uit alle al gepubliceerde hoofdstukken.
    async (conn) => {
      const rows = await conn.execute(`SELECT t.id, t.entity_id, t.lang, c.book_id, v.body FROM content_translations t
        JOIN chapters c ON t.entity_type = 'chapter' AND c.id = t.entity_id
        JOIN content_versions v ON v.id = t.published_version_id ORDER BY c.book_id, t.lang, c.position`)
      await indexHadithMany(conn, rows.map((r) => ({ translationId: Number(r.id), entityId: Number(r.entity_id), lang: r.lang, bookId: Number(r.book_id), body: r.body })))
    },
    // Personen met hun biografie als concept-artikel (soort 'person') in het Arabisch en Nederlands.
    async (conn) => {
      await insertMany(conn, 'persons', ['slug', 'name_ar', 'name_nl', 'kind', 'death_hijri', 'aliases', 'position'],
        persons.map((p, i) => [p.slug, p.name_ar, p.name_nl, p.kind, p.death, p.aliases.join('\n'), i]), 100)
      await insertMany(conn, 'articles', ['slug', 'kind', 'access_level'], persons.map((p) => ['persoon-' + p.slug, 'person', 'public']), 100)
      await conn.execute(`UPDATE persons p JOIN articles a ON a.slug = CONCAT('persoon-', p.slug) SET p.article_id = a.id`)
      const ids = new Map((await conn.execute('SELECT slug, article_id FROM persons')).map((r) => [r.slug, Number(r.article_id)]))
      const tr = persons.flatMap((p) => [['article', ids.get(p.slug), 'ar', p.name_ar, 'draft'], ['article', ids.get(p.slug), 'nl', p.name_nl, 'draft']])
      await insertMany(conn, 'content_translations', ['entity_type', 'entity_id', 'lang', 'title', 'status'], tr, 100)
      const tids = new Map((await conn.execute(`SELECT t.id, t.entity_id, t.lang FROM content_translations t
        JOIN articles a ON a.id = t.entity_id WHERE t.entity_type = 'article' AND a.kind = 'person'`)).map((r) => [`${r.entity_id}:${r.lang}`, Number(r.id)]))
      const versions = persons.flatMap((p) => ['ar', 'nl'].map((l) => [tids.get(`${ids.get(p.slug)}:${l}`), l === 'ar' ? p.name_ar : p.name_nl,
        `<p>${(l === 'ar' ? p.bio_ar : p.bio_nl).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c])}</p>`,
        'Concept opgesteld door Claude uit algemene kennis; wacht op controle', 'draft']))
      await insertMany(conn, 'content_versions', ['translation_id', 'title', 'body', 'reason', 'status'], versions, 50)
    }
  ],
  down: [
    "DELETE v FROM content_versions v JOIN content_translations t ON t.id = v.translation_id JOIN articles a ON a.id = t.entity_id WHERE t.entity_type = 'article' AND a.kind = 'person'",
    "DELETE t FROM content_translations t JOIN articles a ON a.id = t.entity_id WHERE t.entity_type = 'article' AND a.kind = 'person'",
    "DELETE FROM articles WHERE kind = 'person'",
    'DROP TABLE IF EXISTS persons', 'DROP TABLE IF EXISTS hadith_notes', 'DROP TABLE IF EXISTS hadith_index'
  ]
}
