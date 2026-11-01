// Hulpjes voor biografie-concepten uit al-Aʿlām van az-Ziriklī (المكتبة الشاملة, boek 12286).
// Korte vorm: één alinea. Lange vorm (bekende personen): samenvatting, tijdlijn, belangrijkste
// werken en bijdrage. Alles komt uit de genoemde bron; de concepten worden pas zichtbaar na
// goedkeuring in Beheer > Te beoordelen.
export const src = (vol, page, id) => ({
  ar: `<p><cite>المصدر: الأعلام للزركلي، ج${vol} ص${page}</cite> · <a href="https://shamela.ws/book/12286/${id}">المكتبة الشاملة</a></p>`,
  nl: `<p><cite>Bron: az-Ziriklī, al-Aʿlām, deel ${vol}, p. ${page}</cite> · <a href="https://shamela.ws/book/12286/${id}">al-Maktaba ash-Shāmila</a></p>`
})
const AD = (s) => String(s).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d])
export const loc = (vol, page, id) => src(AD(vol), AD(page), id)

export const bio = (slug, s, ar, nl) => ({ slug, bio_ar: `<p>${ar}</p>${s.ar}`, bio_nl: `<p>${nl}</p>${s.nl}` })

const H = {
  ar: { tl: 'محطات في السيرة', works: 'أهم المؤلفات', role: 'الأثر والمكانة' },
  nl: { tl: 'Tijdlijn', works: 'Belangrijkste werken', role: 'Bijdrage aan de islamitische wetenschappen' }
}
const when = (w, lang) => /^\d+$/.test(w) ? (lang === 'ar' ? `${AD(w)} هـ` : `${w} AH`) : (lang === 'ar' ? AD(w) : w)
function long (lang, x) {
  const h = H[lang]
  let out = `<p>${x.sum}</p>`
  if (x.tl?.length) out += `<h3>${h.tl}</h3><ul>${x.tl.map(([w, t]) => w === '—' ? `<li>${t}</li>` : `<li><strong>${when(w, lang)}</strong>: ${t}</li>`).join('')}</ul>`
  if (x.works?.length) out += `<h3>${h.works}</h3><ul>${x.works.map((w) => `<li>${w}</li>`).join('')}</ul>`
  if (x.role) out += `<h3>${h.role}</h3><p>${x.role}</p>`
  return out
}
// ar en nl: { sum, tl: [[wanneer, wat]], works: [...], role }
export const big = (slug, s, ar, nl) => ({ slug, bio_ar: long('ar', ar) + s.ar, bio_nl: long('nl', nl) + s.nl })
