// Inhoudsmodel: categorieën, boekgegevens per taal, hoofdstukken, artikelen,
// vertalingen met versies, zoekindex en feedback. Migratie 4 zet de bestaande
// blokken om naar hoofdstukken.
import { blocksToChapters } from '../../lib/chapters.js'
import { insertMany, searchText } from '../../lib/content.js'
import { stripTags } from '../../lib/db.js'

export const CATEGORIES = [
  ['aqiedah', 'Aqiedah', 'العقيدة'],
  ['fiqh', 'Fiqh', 'الفقه'],
  ['usul-al-fiqh', 'Usul al-fiqh', 'أصول الفقه'],
  ['tafsir', 'Tafsir', 'التفسير'],
  ['hadith', 'Hadith', 'الحديث'],
  ['seerah', 'Seerah', 'السيرة'],
  ['arabische-taal', 'Arabische taal', 'اللغة العربية'],
  ['geschiedenis', 'Islamitische geschiedenis', 'التاريخ الإسلامي'],
  ['zad', 'ZAD-studiemateriaal', 'مواد زاد']
]

// Zet de blokken van één boek om naar hoofdstukken (gebruikt door migratie 4 en door de seed).
// Alles in een paar grote queries: Cloudflare staat per verzoek maar 50 databaseverzoeken toe.
export async function importChapters (conn, bookId, blocks, userId = null) {
  const chapters = blocksToChapters(blocks).map((c, i) => ({ ...c, title: stripTags(c.title).trim(), slug: String(i + 1) }))
  if (!chapters.length) return 0
  await insertMany(conn, 'chapters', ['book_id', 'position', 'slug'], chapters.map((c, i) => [bookId, i, c.slug]), 100)
  const ids = new Map((await conn.execute('SELECT id, slug FROM chapters WHERE book_id = ?', [bookId])).map((r) => [r.slug, Number(r.id)]))
  for (const c of chapters) c.id = ids.get(c.slug)
  await insertMany(conn, 'content_translations', ['entity_type', 'entity_id', 'lang', 'title', 'status'],
    chapters.map((c) => ['chapter', c.id, 'ar', c.title, 'published']), 100)
  const tids = new Map((await conn.execute(`SELECT t.id, t.entity_id FROM content_translations t JOIN chapters c ON c.id = t.entity_id
    WHERE t.entity_type = 'chapter' AND t.lang = 'ar' AND c.book_id = ?`, [bookId])).map((r) => [Number(r.entity_id), Number(r.id)]))
  for (const c of chapters) c.translationId = tids.get(c.id)
  await insertMany(conn, 'content_versions', ['translation_id', 'title', 'body', 'reason', 'status', 'created_by', 'published_by', 'published_at'],
    chapters.map((c) => [c.translationId, c.title, c.body, 'Overgezet uit de eerste versie', 'published', userId, userId, new Date().toISOString().slice(0, 19).replace('T', ' ')]), 15)
  await conn.execute(`UPDATE content_translations t JOIN chapters c ON c.id = t.entity_id
    JOIN content_versions v ON v.translation_id = t.id AND v.status = 'published'
    SET t.published_version_id = v.id WHERE t.entity_type = 'chapter' AND c.book_id = ?`, [bookId])
  await insertMany(conn, 'search_index', ['translation_id', 'entity_type', 'entity_id', 'lang', 'book_id', 'plain'],
    chapters.map((c) => [c.translationId, 'chapter', c.id, 'ar', bookId, searchText(c.title, c.body)]), 15)
  return chapters.length
}

export default {
  id: 3,
  name: 'inhoud',
  up: [
    `CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(120) NOT NULL UNIQUE,
      parent_id INT NULL,
      position INT NOT NULL DEFAULT 0,
      name_nl VARCHAR(255) NOT NULL,
      name_ar VARCHAR(255) NOT NULL
    )`,
    'ALTER TABLE books ADD COLUMN IF NOT EXISTS category_id INT NULL',
    "ALTER TABLE books ADD COLUMN IF NOT EXISTS author VARCHAR(255) NOT NULL DEFAULT ''",
    "ALTER TABLE books ADD COLUMN IF NOT EXISTS translator VARCHAR(255) NOT NULL DEFAULT ''",
    "ALTER TABLE books ADD COLUMN IF NOT EXISTS publisher VARCHAR(255) NOT NULL DEFAULT ''",
    "ALTER TABLE books ADD COLUMN IF NOT EXISTS language CHAR(2) NOT NULL DEFAULT 'ar'",
    "ALTER TABLE books ADD COLUMN IF NOT EXISTS access_level VARCHAR(16) NOT NULL DEFAULT 'public'",
    "ALTER TABLE books ADD COLUMN IF NOT EXISTS cover VARCHAR(500) NOT NULL DEFAULT ''",
    `CREATE TABLE IF NOT EXISTS book_translations (
      book_id INT NOT NULL,
      lang CHAR(2) NOT NULL,
      title VARCHAR(255) NOT NULL DEFAULT '',
      subtitle VARCHAR(500) NOT NULL DEFAULT '',
      description TEXT NULL,
      PRIMARY KEY (book_id, lang)
    )`,
    `CREATE TABLE IF NOT EXISTS chapters (
      id INT AUTO_INCREMENT PRIMARY KEY,
      book_id INT NOT NULL,
      position INT NOT NULL,
      slug VARCHAR(120) NOT NULL,
      archived_at DATETIME NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY book_slug (book_id, slug),
      KEY book_position (book_id, position)
    )`,
    `CREATE TABLE IF NOT EXISTS articles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(120) NOT NULL UNIQUE,
      kind VARCHAR(16) NOT NULL DEFAULT 'article',
      category_id INT NULL,
      book_id INT NULL,
      chapter_id INT NULL,
      access_level VARCHAR(16) NOT NULL DEFAULT 'public',
      created_by INT NULL,
      archived_at DATETIME NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS content_translations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      entity_type VARCHAR(16) NOT NULL,
      entity_id INT NOT NULL,
      lang CHAR(2) NOT NULL,
      title VARCHAR(500) NOT NULL DEFAULT '',
      status VARCHAR(16) NOT NULL DEFAULT 'draft',
      published_version_id BIGINT NULL,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE KEY entity_lang (entity_type, entity_id, lang)
    )`,
    `CREATE TABLE IF NOT EXISTS content_versions (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      translation_id INT NOT NULL,
      title VARCHAR(500) NOT NULL DEFAULT '',
      body MEDIUMTEXT NOT NULL,
      reason VARCHAR(500) NOT NULL DEFAULT '',
      status VARCHAR(16) NOT NULL DEFAULT 'draft',
      based_on_id BIGINT NULL,
      created_by INT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      submitted_at DATETIME NULL,
      reviewed_by INT NULL,
      reviewed_at DATETIME NULL,
      review_comment TEXT NULL,
      published_by INT NULL,
      published_at DATETIME NULL,
      KEY translation_id (translation_id),
      KEY status (status)
    )`,
    `CREATE TABLE IF NOT EXISTS search_index (
      translation_id INT PRIMARY KEY,
      entity_type VARCHAR(16) NOT NULL,
      entity_id INT NOT NULL,
      lang CHAR(2) NOT NULL,
      book_id INT NULL,
      plain MEDIUMTEXT NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS feedback (
      id INT AUTO_INCREMENT PRIMARY KEY,
      entity_type VARCHAR(16) NOT NULL,
      entity_id INT NOT NULL,
      lang CHAR(2) NOT NULL,
      quote TEXT NULL,
      category VARCHAR(32) NOT NULL,
      message TEXT NOT NULL,
      suggestion TEXT NULL,
      email VARCHAR(255) NULL,
      status VARCHAR(16) NOT NULL DEFAULT 'new',
      assigned_to INT NULL,
      internal_note TEXT NULL,
      draft_version_id BIGINT NULL,
      ip_hash CHAR(64) NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      KEY status (status)
    )`,
    async (conn) => insertMany(conn, 'categories', ['slug', 'position', 'name_nl', 'name_ar'],
      CATEGORIES.map(([slug, nl, ar], i) => [slug, i, nl, ar]))
  ],
  down: [
    'DROP TABLE IF EXISTS feedback', 'DROP TABLE IF EXISTS search_index', 'DROP TABLE IF EXISTS content_versions',
    'DROP TABLE IF EXISTS content_translations', 'DROP TABLE IF EXISTS articles', 'DROP TABLE IF EXISTS chapters',
    'DROP TABLE IF EXISTS book_translations', 'DROP TABLE IF EXISTS categories',
    'ALTER TABLE books DROP COLUMN IF EXISTS category_id', 'ALTER TABLE books DROP COLUMN IF EXISTS author',
    'ALTER TABLE books DROP COLUMN IF EXISTS translator', 'ALTER TABLE books DROP COLUMN IF EXISTS publisher',
    'ALTER TABLE books DROP COLUMN IF EXISTS language', 'ALTER TABLE books DROP COLUMN IF EXISTS access_level',
    'ALTER TABLE books DROP COLUMN IF EXISTS cover'
  ]
}
