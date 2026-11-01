// Indeling van تلخيص جمع الجوامع in eenheden (hoofdstukken) voor de studieomgeving.
// chapters = de adressen (slugs) van de onderdelen; page_start = eerste bladzijde van elk onderdeel.
export const UNITS = [
  { unit: 1, chapters: [1, 2, 3, 4], pages: '1–9', title_ar: 'ترجمة المصنف ومقدمات الحكم الشرعي', title_nl: 'De auteur en de inleiding: het sharʿī-oordeel' },
  { unit: 2, chapters: [5, 6, 7, 8, 9, 10, 11, 12, 13], pages: '10–19', title_ar: 'تعريفات أصولية ومسائل الواجب', title_nl: 'Definities en kwesties rond de verplichting' },
  { unit: 3, chapters: [14, 15, 16, 17, 18, 19], pages: '20–25', title_ar: 'مسائل التكليف', title_nl: 'Kwesties rond de taklīf (verantwoordelijkheid)' },
  { unit: 4, chapters: [20, 21, 22, 23, 24, 25, 26, 27], pages: '26–35', title_ar: 'الكتاب، والمنطوق والمفهوم', title_nl: 'De Koran; uitgesproken en afgeleide betekenis' },
  { unit: 5, chapters: [28, 29, 30, 31, 32, 33, 34, 35, 36], pages: '35–46', title_ar: 'اللغة: الوضع والاشتقاق والترادف والاشتراك', title_nl: 'Taal: vastlegging, afleiding, synoniemen en meerduidige woorden' },
  { unit: 6, chapters: [37, 38, 39, 40, 41, 42], pages: '46–58', title_ar: 'الحقيقة والمجاز', title_nl: 'Letterlijke en figuurlijke betekenis (ḥaqīqa en majāz)' },
  { unit: 7, chapters: [43], pages: '58–68', title_ar: 'حروف المعاني', title_nl: 'Betekenispartikels (ḥurūf al-maʿānī)' },
  { unit: 8, chapters: [44, 45, 46, 47, 48, 49, 50], pages: '68–83', title_ar: 'الأمر والنهي', title_nl: 'Gebod en verbod (al-amr wa-n-nahy)' },
  { unit: 9, chapters: [51, 52, 53, 54, 55, 56, 57], pages: '83–114', title_ar: 'العام والخاص', title_nl: 'Algemeen en specifiek (al-ʿāmm wa-l-khāṣṣ)' },
  { unit: 10, chapters: [58, 59, 60], pages: '114–119', title_ar: 'المطلق والمقيد', title_nl: 'Onbepaald en beperkt (al-muṭlaq wa-l-muqayyad)' }
]

export const PAGE_START = [1, 3, 4, 5, 10, 11, 13, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 26, 26, 28, 28, 29, 33, 34, 35, 37, 38, 39, 39, 40, 43, 44, 45, 46, 47, 49, 55, 55, 57, 58, 68, 70, 74, 75, 77, 78, 79, 83, 83, 86, 90, 95, 110, 113, 114, 116, 119]
