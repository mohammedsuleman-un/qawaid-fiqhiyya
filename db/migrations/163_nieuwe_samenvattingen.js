// Twee nieuwe samenvattingen als concept in de bibliotheek, gekoppeld aan Instituut Ibn Al-Qayyim:
// تلخيص الأشباه والنظائر en تلخيص أحكام القرآن. Nog zonder inhoud; de samensteller (الملخِّص)
// en de auteur van het oorspronkelijke boek blijven leeg tot Mohammed ze opgeeft.
const BOOKS = [
  {
    slug: 'talkhis-al-ashbah-wan-nazair',
    category: 'fiqh',
    ar: 'تلخيص الأشباه والنظائر',
    nl: 'Samenvatting van al-Ashbāh wa an-Naẓāʾir'
  },
  {
    slug: 'talkhis-ahkam-al-quran',
    category: 'tafsir',
    ar: 'تلخيص أحكام القرآن',
    nl: 'Samenvatting van Aḥkām al-Qurʾān'
  }
]
const SLUGS = BOOKS.map((b) => `'${b.slug}'`).join(', ')

export default {
  id: 163,
  name: 'nieuwe_samenvattingen',
  up: [
    ...BOOKS.map((b) => `INSERT IGNORE INTO books (slug, title, status, category_id, language, access_level, summarizer)
      SELECT '${b.slug}', '${b.ar}', 'draft', (SELECT id FROM categories WHERE slug = '${b.category}'), 'ar', 'public', ''`),
    ...BOOKS.flatMap((b) => [['ar', b.ar], ['nl', b.nl]].map(([lang, title]) =>
      `INSERT IGNORE INTO book_translations (book_id, lang, title) SELECT id, '${lang}', '${title}' FROM books WHERE slug = '${b.slug}'`)),
    `INSERT IGNORE INTO book_institutes (book_id, institute_id) SELECT id, 1 FROM books WHERE slug IN (${SLUGS})`
  ],
  down: [
    `DELETE FROM book_institutes WHERE book_id IN (SELECT id FROM books WHERE slug IN (${SLUGS}))`,
    `DELETE FROM book_translations WHERE book_id IN (SELECT id FROM books WHERE slug IN (${SLUGS}))`,
    `DELETE FROM books WHERE slug IN (${SLUGS})`
  ]
}
