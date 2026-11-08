// Controleert de hoofdstukkaarten van تلخيص جمع الجوامع, الأشباه والنظائر en تلخيص أحكام القرآن: elke kaart moet door parseStudy komen
// zonder dat er items wegvallen, en alleen personen uit het register gebruiken.
// Gebruik: node scripts/check-talkhis-study.mjs
import { readdirSync } from 'node:fs'
import { parseStudy } from '../lib/study.js'
import register from '../db/seed/personen.js'

const LISTS = ['points', 'terms', 'diagrams', 'sections', 'keycards', 'hadith', 'persons', 'review', 'quiz', 'subtleties', 'rules', 'disputes', 'pitfalls', 'ayat']
const slugs = new Set(register.map((p) => p.slug))
let bad = 0
// Ook de kaarten van الأشباه والنظائر (zelfde opzet).
for (const dir of ['talkhis', 'ashbah', 'ahkam', 'tadmuriyya'].map((b) => new URL(`../db/seed/${b}/studie/`, import.meta.url))) for (const f of readdirSync(dir).filter((f) => /^eenheid\d+\.js$/.test(f)).sort((a, b) => parseInt(a.slice(7)) - parseInt(b.slice(7)))) {
  const card = (await import(new URL(f, dir))).default
  const counts = []
  for (const lang of ['ar', 'nl']) {
    const raw = card[lang]
    const s = parseStudy(raw)
    for (const k of LISTS) {
      if ((raw[k] || []).length !== s[k].length) { bad++; console.error(`${f} ${lang} ${k}: ${(raw[k] || []).length} → ${s[k].length}`) }
    }
    for (const p of s.persons) if (!slugs.has(p.slug)) { bad++; console.error(`${f}: onbekende persoon ${p.slug}`) }
    for (const q of s.quiz) if (q.answer < 0) { bad++; console.error(`${f}: vraag zonder antwoord`) }
    if (lang === 'ar') LISTS.forEach((k) => counts.push(`${k} ${s[k].length}`))
  }
  for (const k of LISTS) if (card.ar[k].length !== card.nl[k].length) { bad++; console.error(`${f}: ${k} ar/nl ongelijk`) }
  console.log(f, counts.join(', '))
}
if (bad) { console.error(bad + ' problemen'); process.exit(1) }
console.log('alles in orde')
