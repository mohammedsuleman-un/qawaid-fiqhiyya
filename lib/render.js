// HTML voor de openbare site: bibliotheek, leespagina's van boeken en hoofdstukken,
// artikelen. Opmaak in /assets/site.css en /assets/book.css, gedrag in /assets/book.js.
// Teksten worden al bij het opslaan opgeschoond (lib/sanitize.js), dus hier niet nog eens:
// dat scheelt rekentijd bij een heel boek.
import { stripTags } from './db.js'

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const T = {
  ar: {
    site: 'النبع الصافي', library: 'المكتبة', search: 'ابحث في المكتبة…', searchBook: 'ابحث في النص…', all: 'الكل',
    books: 'الكتب', results: 'نتائج البحث', none: 'لا توجد نتائج', page: 'صفحة', author: 'المؤلف', pdf: 'تحميل PDF',
    chapters: 'الفصول', prev: 'السابق', next: 'التالي', whole: 'الكتاب كاملاً', notTranslated: 'هذا الفصل غير متوفر بالعربية بعد.',
    readOther: 'اقرأ النسخة الهولندية', feedback: 'ملاحظة أو تصحيح', draft: 'مسودة (للمشرفين فقط)', empty: 'لا توجد كتب بعد في هذا التصنيف.',
    legend: '<span class="ayah">الآية</span> · <span class="hadith">الحديث</span> · <span>المصنِّف</span> · <span class="sharh-l">الشارح</span> · <span class="le">مثاله</span> · <span class="lm">مسألة / حكمه</span>',
    share: 'رابط الفصل', translated: (n) => `${n} فصل مترجم إلى الهولندية`, tagline: 'مكتبة إسلامية بالعربية والهولندية'
  },
  nl: {
    site: 'De Zuivere Bron', library: 'Bibliotheek', search: 'Zoek in de bibliotheek…', searchBook: 'Zoek in de tekst…', all: 'Alles',
    books: 'Boeken', results: 'Zoekresultaten', none: 'Geen resultaten', page: 'pagina', author: 'Auteur', pdf: 'PDF downloaden',
    chapters: 'Hoofdstukken', prev: 'Vorige', next: 'Volgende', whole: 'Hele boek', notTranslated: 'Dit hoofdstuk is nog niet in het Nederlands vertaald.',
    readOther: 'Lees de Arabische tekst', feedback: 'Feedback of correctie', draft: 'Concept (alleen zichtbaar voor medewerkers)', empty: 'Nog geen boeken in deze categorie.',
    legend: '', share: 'Link naar dit hoofdstuk', translated: (n) => `${n} hoofdstukken in het Nederlands`, tagline: 'Islamitische bibliotheek in het Arabisch en Nederlands'
  }
}

const otherLang = (lang) => (lang === 'ar' ? 'nl' : 'ar')
const withLang = (path, lang) => path + (path.includes('?') ? '&' : '?') + 'lang=' + lang
const bookTitle = (b, lang) => b['title_' + lang] || b.title_ar || b.title_nl || b.slug
const bookSub = (b, lang) => b['subtitle_' + lang] || (lang === 'ar' ? '' : b.subtitle_ar) || ''

function shell ({ lang, title, body, bodyClass = '', extraHead = '' }) {
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<link rel="icon" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/assets/book.css">
<link rel="stylesheet" href="/assets/site.css">
${extraHead}</head>
<body class="${bodyClass}" data-lang="${lang}">
${body}
</body>
</html>
`
}

const langSwitch = (path, lang) =>
  `<a class="langsw" href="${esc(withLang(path, otherLang(lang)))}" hreflang="${otherLang(lang)}">${lang === 'ar' ? 'Nederlands' : 'العربية'}</a>`

const NAV = [
  ['/bibliotheek', { ar: 'المكتبة', nl: 'Bibliotheek' }],
  ['/hadith', { ar: 'الأحاديث', nl: 'Hadith' }],
  ['/personen', { ar: 'الأعلام', nl: 'Personen' }],
  ['/zad', { ar: 'زاد', nl: 'ZAD' }]
]

function topbar (lang, path, q = '') {
  const t = T[lang]
  return `<header class="top">
  <a class="logo" href="${withLang('/bibliotheek', lang)}"><img src="/assets/logo/logo-64.png" alt="" width="40" height="40"><span><b>${t.site}</b><small>${lang === 'ar' ? 'De Zuivere Bron' : 'النبع الصافي'}</small></span></a>
  <form class="topsearch" action="/bibliotheek" role="search"><input type="hidden" name="lang" value="${lang}"><input name="q" type="search" value="${esc(q)}" placeholder="${t.search}" aria-label="${t.search}"></form>
  <nav class="topnav">${NAV.map(([href, label]) => `<a href="${withLang(href, lang)}"${path === href ? ' aria-current="page"' : ''}>${label[lang]}</a>`).join('')}</nav>
  ${langSwitch(path, lang)}
</header>`
}

export function renderLibrary ({ lang, books, cats, category, q, results }) {
  const t = T[lang]
  const path = '/bibliotheek' + (category ? `?categorie=${encodeURIComponent(category)}` : '') + (q ? `${category ? '&' : '?'}q=${encodeURIComponent(q)}` : '')
  const chips = [`<a class="chip${category ? '' : ' on'}" href="${withLang('/bibliotheek', lang)}">${t.all}</a>`,
    ...cats.filter((c) => Number(c.books) > 0 || c.slug === category).map((c) =>
      `<a class="chip${c.slug === category ? ' on' : ''}" href="${withLang('/bibliotheek?categorie=' + c.slug, lang)}">${esc(c['name_' + lang])}</a>`)].join('')
  // Het naslagwerk over de fiqh-regels is een losse statische pagina, geen boek in de database.
  const qawaid = !q && (!category || category === 'fiqh') ? `<a class="card" href="/qawaid/">
    <h2>القواعد الفقهية</h2><p>${lang === 'ar' ? 'مرجع تفاعلي للقواعد الفقهية الكبرى وفروعها، مع الأدلة من الكتاب والسنة والأمثلة.' : 'Interactief naslagwerk over de grote fiqh-regels (Arabisch).'}</p>
    <span class="tags"><span class="tag">${lang === 'ar' ? 'الفقه' : 'Fiqh'}</span></span></a>` : ''
  // De ZAD-boeken staan samen onder één kop (سلسلة زاد), met een eigen overzicht op /zad.
  const zad = books.filter((b) => b.zad_level)
  const zadCard = !q && (!category || category === 'zad') ? `<a class="card series" href="${withLang('/zad', lang)}">
    <h2>سلسلة زاد</h2><p>${lang === 'ar' ? 'سلسلة زاد العلمية: أربعة مستويات، في كل مستوى سبع مواد (العقيدة، التفسير، الحديث، السيرة، الفقه، التربية، اللغة العربية).' : 'De Zad-reeks: vier niveaus met elk zeven vakken (geloofsleer, tafsir, hadith, sira, fiqh, opvoeding, Arabisch).'}</p>
    <span class="tags"><span class="tag">${lang === 'ar' ? `${zad.length || 28} كتابًا` : `${zad.length || 28} boeken`}</span></span></a>` : ''
  books = books.filter((b) => !b.zad_level)
  const cards = qawaid + zadCard + books.map((b) => `<a class="card" href="${withLang('/boek/' + b.slug, lang)}">
    <h2>${esc(bookTitle(b, lang))}</h2>
    ${bookSub(b, lang) ? `<p>${esc(bookSub(b, lang))}</p>` : ''}
    ${b.author ? `<p class="author">${t.author}: ${esc(b.author)}</p>` : ''}
    <span class="tags">${b.category ? `<span class="tag">${esc(b['category_' + lang])}</span>` : ''}${b.chapters_nl ? `<span class="tag nl">${t.translated(b.chapters_nl)}</span>` : ''}${b.status === 'draft' ? `<span class="tag draft">${t.draft}</span>` : ''}</span>
  </a>`).join('\n')
  const found = results && `<section class="results"><h2>${t.results} (${results.length})</h2>
    ${results.length ? '<ol>' + results.map((r) => `<li><a href="${esc(r.url)}"><b>${esc(stripTags(r.title))}</b>${r.book ? ` · ${esc(r.book)}` : ''}${r.page ? ` · ${t.page} ${r.page}` : ''}</a>
      <p dir="auto">${esc(r.before)}<mark>${esc(r.match)}</mark>${esc(r.after)}</p></li>`).join('') + '</ol>' : `<p>${t.none}</p>`}
  </section>`
  return shell({
    lang,
    title: `${t.library} · ${t.site}`,
    bodyClass: 'site',
    body: `${topbar(lang, path, q)}
<div class="wrap lib">
  <h1>${t.library}</h1>
  <p class="sub">${t.tagline}</p>
  <nav class="chips">${chips}</nav>
  ${found || ''}
  <h2 class="sr">${t.books}</h2>
  <div class="grid">${cards || `<p>${t.empty}</p>`}</div>
</div>`
  })
}

const chapterTitle = (c) => esc(stripTags(c.title))

function section (book, c, lang, t) {
  const link = `/boek/${book.slug}/${c.slug}`
  const head = `<h2 id="h${esc(c.slug)}">${chapterTitle(c)}<span class="tools"><a class="share" href="${esc(withLang(link, lang))}" title="${t.share}" aria-label="${t.share}">#</a><button type="button" class="fb" title="${t.feedback}" aria-label="${t.feedback}">✎</button></span></h2>`
  if (c.missing) {
    return `<section class="chapter" id="c${esc(c.slug)}" data-id="${c.id}" data-type="chapter">${head}
<p class="notice">${t.notTranslated} <a href="${esc(withLang(link, otherLang(lang)))}">${t.readOther}</a></p></section>`
  }
  return `<section class="chapter" id="c${esc(c.slug)}" data-id="${c.id}" data-type="chapter">${head}
${c.body}
</section>`
}

// Hele boek (chapter = null) of één hoofdstuk met vorige/volgende.
export function renderBook ({ book, chapters, lang, chapter = null, staff = false, terms = [] }) {
  const t = T[lang]
  const title = bookTitle(book, lang)
  const base = `/boek/${book.slug}`
  const path = chapter ? `${base}/${chapter.slug}` : base
  // ZAD-boeken: lessen gegroepeerd per eenheid (وحدة).
  let unit = null
  const unitHead = (c) => {
    if (c.unit == null || c.unit === unit) return ''
    unit = c.unit
    return `<div class="unit">${lang === 'ar' ? 'الوحدة' : 'Eenheid'} ${c.unit}${c.unitTitle ? ': ' + esc(c.unitTitle) : ''}</div>\n`
  }
  const toc = chapters.map((c) => unitHead(c) + `<a href="${chapter ? esc(withLang(`${base}/${c.slug}`, lang)) : '#h' + esc(c.slug)}"${chapter && c.id === chapter.id ? ' class="on"' : ''}${c.missing ? ' data-missing' : ''}>${chapterTitle(c)}</a>`).join('\n')
  let content
  if (chapter) {
    const i = chapters.findIndex((c) => c.id === chapter.id)
    const prev = chapters[i - 1]
    const next = chapters[i + 1]
    content = section(book, chapter, lang, t) + glossary(terms, lang) + `
<nav class="pager">${prev ? `<a rel="prev" href="${esc(withLang(`${base}/${prev.slug}`, lang))}">${t.prev}: ${chapterTitle(prev)}</a>` : '<span></span>'}
<a href="${esc(withLang(base, lang))}">${t.whole}</a>
${next ? `<a rel="next" href="${esc(withLang(`${base}/${next.slug}`, lang))}">${t.next}: ${chapterTitle(next)}</a>` : '<span></span>'}</nav>`
  } else {
    content = chapters.map((c) => section(book, c, lang, t)).join('\n')
  }
  return shell({
    lang,
    title: chapter ? `${stripTags(chapter.title)} · ${title}` : title,
    body: `<div class="app">
<aside>
  <div class="brand">
    <a class="back" href="${withLang('/bibliotheek', lang)}"><img src="/assets/logo/logo-64.png" alt="" width="28" height="28"> ${t.library}</a>
    <h1>${esc(title)}</h1>
    ${bookSub(book, lang) ? `<p>${esc(bookSub(book, lang))}</p>` : ''}
    ${langSwitch(path, lang)}
  </div>
  <div class="search"><input id="q" type="search" placeholder="${t.searchBook}" aria-label="${t.searchBook}"></div>
  <nav id="toc" aria-label="${t.chapters}">
${toc}
  </nav>
</aside>
<main><div class="wrap">
${staff && book.status !== 'published' ? `<p class="notice">${t.draft}</p>` : ''}
<h2 class="title">${esc(title)}</h2>
${book.author ? `<p class="byline">${esc(book.author)}</p>` : ''}
${lang === 'ar' && !book.zad_level ? `<p class="legend">${t.legend}</p>` : ''}
${book.pdf ? `<p class="dl"><a href="${esc(/^https?:/.test(book.pdf) ? book.pdf : encodeURI(book.pdf))}"${/^https?:/.test(book.pdf) ? ' target="_blank" rel="noopener"' : ' download'}>${t.pdf}</a></p>` : ''}
${book.zad_level ? `<p class="zadsrc">${lang === 'ar' ? 'المصدر: سلسلة زاد العلمية، إعداد مجموعة زاد. هذا ملخص للدراسة وليس نص الكتاب.' : 'Bron: Zad-reeks (سلسلة زاد العلمية), samengesteld door Zad Group. Dit is een studiesamenvatting, niet de tekst van het boek.'}</p>` : ''}
<article class="book">
${content}
</article>
</div></main>
</div>
<script src="/assets/book.js"></script>`
  })
}

export function renderArticle ({ article, lang }) {
  const t = T[lang]
  const path = `/artikel/${article.slug}`
  return shell({
    lang,
    title: `${stripTags(article.title)} · ${t.site}`,
    bodyClass: 'site',
    body: `${topbar(lang, path)}
<div class="wrap"><article class="book">
<section class="chapter" data-id="${article.id}" data-type="article">
<h2 class="title">${esc(stripTags(article.title))}<span class="tools"><button type="button" class="fb" title="${t.feedback}" aria-label="${t.feedback}">✎</button></span></h2>
${article.missing ? `<p class="notice">${t.notTranslated} <a href="${esc(withLang(path, otherLang(lang)))}">${t.readOther}</a></p>` : article.body}
</section></article></div>
<script src="/assets/book.js"></script>`
  })
}

const R = {
  ar: {
    hadith: 'الأحاديث الواردة في الكتب', chooseBook: 'اختر كتابًا لعرض أحاديثه مرتبة حسب أقسامه.', hadithCount: (n) => `${n} حديثًا`, parts: 'الأقسام', unit: 'الوحدة', toBook: 'إلى الكتاب', source: 'التخريج', grade: 'الحكم',
    persons: 'الأعلام المذكورون', choosePersons: 'اختر كتابًا لعرض الصحابة والعلماء المذكورين فيه.', personsCount: (n) => `${n} علمًا`, allPersons: 'جميع الأعلام', allPersonsSub: 'من جميع الكتب',
    sahabi: 'صحابي', alim: 'عالم', died: (y) => `ت ${y}هـ`, noBio: 'الترجمة قيد الإعداد والمراجعة.', mentions: 'مواضع ذكره في الكتب',
    noMentions: 'لم يُعثر على مواضع في الكتب المنشورة.', back: 'كل الأعلام', inChapter: 'في الفصل'
  },
  nl: {
    hadith: 'Hadith in de boeken', chooseBook: 'Kies een boek om de hadith per onderdeel te zien.', hadithCount: (n) => `${n} hadith`, parts: 'Onderdelen', unit: 'Eenheid', toBook: 'naar het boek', source: 'Bron', grade: 'Beoordeling',
    persons: 'Genoemde personen', choosePersons: 'Kies een boek om de metgezellen en geleerden te zien die erin genoemd worden.', personsCount: (n) => `${n} personen`, allPersons: 'Alle personen', allPersonsSub: 'uit alle boeken',
    sahabi: 'Metgezel', alim: 'Geleerde', died: (y) => `gest. ${y} AH`, noBio: 'De biografie wordt nog opgesteld en gecontroleerd.', mentions: 'Vindplaatsen in de boeken',
    noMentions: 'Geen vindplaatsen gevonden in de gepubliceerde boeken.', back: 'Alle personen', inChapter: 'in'
  }
}

// /hadith: per boek, dan per hoofdstuk (het onderwerp) in de volgorde van het boek.
export function renderHadith ({ lang, rows, book: selected = null }) {
  const t = { ...T[lang], ...R[lang] }
  // Per boek, per hoofdstuk; per hoofdstuk de fragmenten in de gekozen taal, anders het Arabisch.
  const books = []
  for (const h of rows) {
    let b = books[books.length - 1]
    if (!b || b.id !== h.book_id) books.push(b = { id: h.book_id, slug: h.book_slug, title: h['book_title_' + lang] || h.book_title_ar, chapters: [] })
    let c = b.chapters[b.chapters.length - 1]
    if (!c || c.slug !== h.chapter_slug) b.chapters.push(c = { slug: h.chapter_slug, title: h.chapter_title, unit: h.unit == null ? null : Number(h.unit), unitTitle: h['unit_title_' + lang] || h.unit_title_ar || '', byLang: { ar: [], nl: [] } })
    c.byLang[h.lang]?.push(h)
  }
  for (const b of books) {
    for (const c of b.chapters) c.items = c.byLang[lang].length ? c.byLang[lang] : c.byLang.ar
    b.chapters = b.chapters.filter((c) => c.items.length)
    b.count = b.chapters.reduce((n, c) => n + c.items.length, 0)
  }
  const item = (b, c, h) => `<li><p class="htext" lang="${h.lang}" dir="${h.lang === 'ar' ? 'rtl' : 'ltr'}">${esc(h.text)}</p>
<p class="hmeta"><a href="${esc(`/boek/${b.slug}/${c.slug}?lang=${h.lang}`)}">${h.page ? `${t.page} ${h.page}` : esc(stripTags(c.title))}</a>${h.source ? ` · ${t.source}: ${esc(h.source)}` : ''}${h.grade ? ` · ${t.grade}: ${esc(h.grade)}` : ''}</p>${h.note ? `<p class="hnote">${esc(h.note)}</p>` : ''}</li>`
  const b = selected && books.find((x) => x.slug === selected)
  let body
  if (!b) {
    // Eerst een boek kiezen.
    body = `<h1>${t.hadith}</h1><p class="lead">${t.chooseBook}</p>
<div class="grid">${books.map((x) => `<a class="card" href="${esc(withLang('/hadith?boek=' + x.slug, lang))}"><h2>${esc(x.title)}</h2><p>${t.hadithCount(x.count)}</p></a>`).join('\n') || `<p>${t.none}</p>`}</div>`
  } else {
    // Onderdelen: bij ZAD de eenheden (met de lessen erin), anders de hoofdstukken.
    const parts = []
    for (const c of b.chapters) {
      const key = c.unit != null ? 'u' + c.unit : 'c' + c.slug
      let part = parts[parts.length - 1]
      if (!part || part.key !== key) parts.push(part = { key, title: c.unit != null ? `${t.unit} ${c.unit}${c.unitTitle ? ': ' + c.unitTitle : ''}` : stripTags(c.title), unit: c.unit != null, chapters: [] })
      part.chapters.push(c)
    }
    body = `<p><a href="${withLang('/hadith', lang)}">← ${t.hadith}</a></p>
<h1>${esc(b.title)}</h1><p class="lead">${t.hadithCount(b.count)} · <a href="${esc(withLang('/boek/' + b.slug, lang))}">${t.toBook}</a></p>
<nav class="parts"><b>${t.parts}</b><ol>${parts.map((p) => `<li><a href="#${p.key}">${esc(p.title)}</a> <small>(${p.chapters.reduce((n, c) => n + c.items.length, 0)})</small></li>`).join('')}</ol></nav>
${parts.map((p) => `<section class="regpart" id="${p.key}"><h2>${esc(p.title)}</h2>
${p.chapters.map((c) => `${p.unit ? `<h3>${esc(stripTags(c.title))}</h3>` : ''}<ol class="hlist">${c.items.map((h) => item(b, c, h)).join('\n')}</ol>`).join('\n')}</section>`).join('\n')}`
  }
  return shell({
    lang,
    title: `${b ? b.title + ' · ' : ''}${t.hadith} · ${t.site}`,
    bodyClass: 'site',
    body: `${topbar(lang, '/hadith')}
<main class="wrap register">
${body}
</main>`
  })
}

const personName = (p, lang) => (lang === 'nl' && p.name_nl) || p.name_ar
const personSub = (p, lang, t) => [t[p.kind] || '', p.death_hijri ? t.died(p.death_hijri) : ''].filter(Boolean).join(' · ')

// /personen: eerst een boek kiezen, dan een gewone lijst in de volgorde van het register.
export function renderPersons ({ lang, persons, books = [], book = null, all = false }) {
  const t = { ...T[lang], ...R[lang] }
  const bookName = (b) => b['title_' + lang] || b.title_ar || b.slug
  let body
  if (!persons) {
    const total = books.reduce((n, b) => n + Number(b.n), 0)
    body = `<h1>${t.persons}</h1><p class="lead">${t.choosePersons}</p>
<div class="grid">${books.map((b) => `<a class="card" href="${esc(withLang('/personen?boek=' + b.slug, lang))}"><h2>${esc(bookName(b))}</h2><p>${t.personsCount(Number(b.n))}</p></a>`).join('\n')}
<a class="card" href="${withLang('/personen?alle=1', lang)}"><h2>${t.allPersons}</h2><p>${total ? t.allPersonsSub : ''}</p></a></div>`
  } else {
    body = `<p><a href="${withLang('/personen', lang)}">← ${t.persons}</a></p>
<h1>${book ? esc(bookName(book)) : t.allPersons}</h1><p class="lead">${t.personsCount(persons.length)}</p>
<ul class="plist">${persons.map((p) => `<li><a href="${esc(withLang('/persoon/' + p.slug, lang))}"><b>${esc(personName(p, lang))}</b>${lang === 'nl' && p.name_nl ? ` <span lang="ar" dir="rtl">${esc(p.name_ar)}</span>` : ''}</a>
<small>${personSub(p, lang, t)}</small>${p['bio_' + lang] ? `<div class="pbio">${p['bio_' + lang]}</div>` : ''}</li>`).join('\n')}</ul>`
  }
  return shell({
    lang,
    title: `${book ? bookName(book) + ' · ' : ''}${t.persons} · ${t.site}`,
    bodyClass: 'site',
    body: `${topbar(lang, '/personen')}
<main class="wrap register">
${body}
</main>`
  })
}

export function renderPerson ({ lang, person, mentions }) {
  const t = { ...T[lang], ...R[lang] }
  const bio = person['bio_' + lang]
  return shell({
    lang,
    title: `${personName(person, lang)} · ${t.site}`,
    bodyClass: 'site',
    body: `${topbar(lang, '/persoon/' + person.slug)}
<main class="wrap register">
<p><a href="${withLang('/personen', lang)}">← ${t.back}</a></p>
<h1>${esc(personName(person, lang))}</h1>
${lang === 'nl' && person.name_nl ? `<p class="arname" lang="ar" dir="rtl">${esc(person.name_ar)}</p>` : ''}
<p class="lead">${personSub(person, lang, t)}</p>
${bio ? `<div class="pbio">${bio}</div>` : `<p class="notice">${t.noBio}</p>`}
<h2>${t.mentions}</h2>
${mentions.length ? `<ul class="mlist">${mentions.map((m) => `<li><a href="${esc(m.url)}">${esc(stripTags(m.title))}</a> <small>${esc(m.book || '')}${m.pages.length ? ` · ${t.page} ${m.pages.join('، ')}` : ''}</small></li>`).join('\n')}</ul>` : `<p>${t.noMentions}</p>`}
</main>`
  })
}

// Begrippen bij een les (ZAD), onder de tekst.
function glossary (terms, lang) {
  if (!terms.length) return ''
  return `<section class="glossary"><h3>${lang === 'ar' ? 'المصطلحات' : 'Begrippen'}</h3><dl>${terms.map((g) => `<dt><span lang="ar" dir="rtl">${esc(g.term_ar)}</span>${g.translit ? ` <i>${esc(g.translit)}</i>` : ''}${lang === 'nl' && g.term_nl ? ` · ${esc(g.term_nl)}` : ''}</dt>
<dd>${esc(lang === 'ar' ? (g.explanation_ar || g.explanation_nl || '') : (g.explanation_nl || ''))}${g.source ? ` <small>(${esc(g.source)})</small>` : ''}</dd>`).join('\n')}</dl></section>`
}

// /zad: de vier niveaus met de zeven vakken.
export function renderZad ({ lang, books, subjects, levels, levelNames, staff }) {
  const t = T[lang]
  const byKey = new Map(books.map((b) => [`${b.zad_level}:${b.zad_subject}`, b]))
  const title = lang === 'ar' ? 'سلسلة زاد العلمية' : 'ZAD-studiemateriaal'
  const intro = lang === 'ar'
    ? 'ملخصات دراسية لمقررات سلسلة زاد العلمية (إعداد مجموعة زاد): أربعة مستويات، في كل مستوى سبع مواد.'
    : 'Studiesamenvattingen bij de Zad-reeks (سلسلة زاد العلمية, samengesteld door Zad Group): vier niveaus met elk zeven vakken.'
  const soon = lang === 'ar' ? 'قريبًا' : 'binnenkort'
  const lessonsWord = (n) => lang === 'ar' ? `${n} درسًا` : `${n} lessen`
  return shell({
    lang,
    title: `${title} · ${t.site}`,
    bodyClass: 'site',
    body: `${topbar(lang, '/zad')}
<main class="wrap register zad">
<h1>${title}</h1><p class="lead">${intro}</p>
${levels.map((lvl) => `<section><h2>${esc(levelNames[lang][lvl - 1])}</h2><div class="zadgrid">${subjects.map(([key, ar, nl]) => {
    const b = byKey.get(`${lvl}:${key}`)
    const name = lang === 'ar' ? ar : nl
    if (!b) return `<div class="zcell off"><b>${esc(name)}</b><small>${soon}</small></div>`
    return `<a class="zcell" href="${esc(withLang('/boek/' + b.slug, lang))}"><b>${esc(name)}</b><small>${Number(b.lessons) ? lessonsWord(Number(b.lessons)) : soon}${staff && b.status !== 'published' ? ' · ' + (lang === 'ar' ? 'مسودة' : 'concept') : ''}</small></a>`
  }).join('')}</div></section>`).join('\n')}
</main>`
  })
}
