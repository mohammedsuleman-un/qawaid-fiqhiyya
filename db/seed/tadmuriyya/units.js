// Indeling van الرسالة التدمرية in eenheden. chapters = slugs van de onderdelen; PAGE_START = eerste
// bladzijde van elk onderdeel in de scan (القاعدة السابعة staat niet in de scan: 54, waar ze hoort).
export const UNITS = [
  { unit: 1, chapters: [1, 2, 3, 4], pages: '1–11', title_ar: 'مقدمة الرسالة، وطريقة الرسل ومخالفيهم في الصفات', title_nl: 'Inleiding: de methode van de profeten en van hun tegenstanders' },
  { unit: 2, chapters: [5, 6], pages: '11–16', title_ar: 'الأصلان: القول في بعض الصفات كالقول في بعض، والقول في الصفات كالقول في الذات', title_nl: 'De twee grondslagen: sommige eigenschappen zoals andere, de eigenschappen zoals het Wezen' },
  { unit: 3, chapters: [7, 8], pages: '16–20', title_ar: 'المثلان المضروبان: الجنة والروح', title_nl: 'De twee voorbeelden: het Paradijs en de ziel' },
  { unit: 4, chapters: [9, 10], pages: '20–25', title_ar: 'القاعدة الأولى والثانية: النفي والإثبات، والألفاظ المجملة', title_nl: 'Regel 1 en 2: ontkennen en bevestigen, en vage termen' },
  { unit: 5, chapters: [11, 12], pages: '25–32', title_ar: 'القاعدة الثالثة والرابعة: ظاهر النصوص، ومحاذير التمثيل', title_nl: 'Regel 3 en 4: de ẓāhir van de teksten en de gevaren van vergelijken' },
  { unit: 6, chapters: [13, 14], pages: '32–42', title_ar: 'القاعدة الخامسة: المحكم والمتشابه والتأويل', title_nl: 'Regel 5: duidelijk, dubbelzinnig en taʾwīl' },
  { unit: 7, chapters: [15, 16, 17, 18], pages: '42–54', title_ar: 'القاعدة السادسة: الضابط في النفي والإثبات', title_nl: 'Regel 6: de maatstaf voor ontkennen en bevestigen' },
  { unit: 8, chapters: [19], pages: '54', title_ar: 'القاعدة السابعة: دلالة العقل على ما دل عليه السمع', title_nl: 'Regel 7: het verstand wijst op veel van wat de openbaring zegt' },
  { unit: 9, chapters: [20, 21, 22, 23], pages: '54–68', title_ar: 'الأصل الثاني: توحيد العبادة', title_nl: 'De tweede hoofdgrondslag: tawḥīd in aanbidding' },
  { unit: 10, chapters: [24, 25, 26, 27, 28], pages: '68–80', title_ar: 'الشرع والقدر', title_nl: 'De sharīʿa en de voorbeschikking' }
]

export const PAGE_START = [1, 2, 5, 6, 11, 15, 16, 18, 20, 23, 25, 28, 32, 36, 42, 47, 48, 50, 54, 54, 58, 60, 63, 68, 70, 72, 75, 77]
