// Maakt Arabische tekst doorzoekbaar: zonder tashkeel en tatweel, met één vorm
// voor alef, taa marbuta en alef maqsura. Zoekterm en opgeslagen tekst gaan
// allebei door deze functie, zodat zoeken met en zonder tekens hetzelfde vindt.
export function normalizeArabic (text) {
  return text
    .replace(/[ؐ-ًؚ-ٰٟۖ-ۭـ]/g, '')
    .replace(/[آأإٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/\s+/g, ' ')
    .trim()
}
