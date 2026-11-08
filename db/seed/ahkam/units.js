// Indeling van تلخيص أحكام القرآن in eenheden (groepen verzen) voor de studieomgeving.
// chapters = de adressen (slugs) van de onderdelen; PAGE_START = bladzijde van elk kopje (null = inleiding zonder nummer).
export const UNITS = [
  { unit: 1, chapters: [1, 2, 3, 4], pages: '1–6', title_ar: 'المقدمة والفاتحة وأوائل البقرة', title_nl: 'Inleiding, al-Fātiḥa en het begin van al-Baqara' },
  { unit: 2, chapters: [5, 6, 7, 8], pages: '7–13', title_ar: 'البقرة، والسحر، والقبلة في السفر، ومقام إبراهيم', title_nl: 'De koe, magie, de qibla op reis en de Maqām Ibrāhīm' },
  { unit: 3, chapters: [9, 10, 11, 12], pages: '14–16', title_ar: 'تحويل القبلة والأمة الوسط', title_nl: 'De verandering van de qibla en de gematigde gemeenschap' },
  { unit: 4, chapters: [13, 14, 15, 16], pages: '16–21', title_ar: 'الشهداء، والصفا والمروة، والمحرمات من الطعام، والوصية', title_nl: 'Martelaren, aṣ-Ṣafā en al-Marwa, verboden voedsel en het testament' },
  { unit: 5, chapters: [17, 18, 19, 20, 21], pages: '21–25', title_ar: 'أحكام الصيام والاعتكاف', title_nl: 'Regels van het vasten en de iʿtikāf' },
  { unit: 6, chapters: [22, 23, 24, 25], pages: '25–27', title_ar: 'الأهلة والحج والعمرة', title_nl: 'De nieuwe manen, de ḥajj en de ʿumra' },
  { unit: 7, chapters: [26, 27, 28, 29, 30, 31], pages: '27–31', title_ar: 'الخمر، ونكاح المشركات، والحيض، والأيمان', title_nl: 'Wijn, huwelijk met polytheïsten, menstruatie en eden' },
  { unit: 8, chapters: [32, 33, 34, 35, 36], pages: '31–37', title_ar: 'العدة والطلاق والخلع والعضل', title_nl: 'Wachttijd, echtscheiding, khulʿ en het verhinderen van een huwelijk' },
  { unit: 9, chapters: [37, 38, 39, 40, 41, 42, 43], pages: '37–44', title_ar: 'الرضاع والنفقة، وعدة الوفاة، والخطبة، والمهر', title_nl: 'Zogen en onderhoud, wachttijd na overlijden, huwelijksaanzoek en bruidsgave' },
  { unit: 10, chapters: [44, 45, 46], pages: '44–48', title_ar: 'الصدقات والربا والدين', title_nl: 'Liefdadigheid, rente (ribā) en schulden' }
]

export const PAGE_START = [null, 1, 4, 5, 7, 9, 11, 13, 14, 14, 15, 15, 16, 17, 18, 20, 21, 22, 23, 24, 24, 25, 26, 26, 27, 27, 28, 29, 31, 31, 31, 32, 33, 34, 35, 36, 37, 38, 38, 42, 43, 43, 44, 45, 46, 47]
