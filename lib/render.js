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
  ['/personen', { ar: 'الأعلام', nl: 'Personen' }]
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
  const qawaid = !q && (!category || category === 'fiqh') ? `<a class="card" href="/index.html">
    <h2>القواعد الفقهية</h2><p>${lang === 'ar' ? 'مرجع تفاعلي للقواعد الفقهية الكبرى وفروعها، مع الأدلة من الكتاب والسنة والأمثلة.' : 'Interactief naslagwerk over de grote fiqh-regels (Arabisch).'}</p>
    <span class="tags"><span class="tag">${lang === 'ar' ? 'الفقه' : 'Fiqh'}</span></span></a>` : ''
  const cards = qawaid + books.map((b) => `<a class="card" href="${withLang('/boek/' + b.slug, lang)}">
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
export function renderBook ({ book, chapters, lang, chapter = null, staff = false }) {
  const t = T[lang]
  const title = bookTitle(book, lang)
  const base = `/boek/${book.slug}`
  const path = chapter ? `${base}/${chapter.slug}` : base
  const toc = chapters.map((c) => `<a href="${chapter ? esc(withLang(`${base}/${c.slug}`, lang)) : '#h' + esc(c.slug)}"${chapter && c.id === chapter.id ? ' class="on"' : ''}${c.missing ? ' data-missing' : ''}>${chapterTitle(c)}</a>`).join('\n')
  let content
  if (chapter) {
    const i = chapters.findIndex((c) => c.id === chapter.id)
    const prev = chapters[i - 1]
    const next = chapters[i + 1]
    content = section(book, chapter, lang, t) + `
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
${lang === 'ar' ? `<p class="legend">${t.legend}</p>` : ''}
${book.pdf ? `<p class="dl"><a href="${esc(encodeURI(book.pdf))}" download>${t.pdf}</a></p>` : ''}
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
    hadith: 'الأحاديث الواردة في الكتب', hadithIntro: (n) => `${n} حديثًا، مرتبة حسب أبواب كل كتاب.`, source: 'التخريج', grade: 'الحكم',
    persons: 'الأعلام المذكورون', personsIntro: (n) => `${n} علمًا من الصحابة والعلماء المذكورين في الكتب.`,
    sahabi: 'صحابي', alim: 'عالم', died: (y) => `ت ${y}هـ`, noBio: 'الترجمة قيد الإعداد والمراجعة.', mentions: 'مواضع ذكره في الكتب',
    noMentions: 'لم يُعثر على مواضع في الكتب المنشورة.', back: 'كل الأعلام', inChapter: 'في الفصل'
  },
  nl: {
    hadith: 'Hadith in de boeken', hadithIntro: (n) => `${n} hadith, per boek geordend op onderwerp in de volgorde van het boek.`, source: 'Bron', grade: 'Beoordeling',
    persons: 'Genoemde personen', personsIntro: (n) => `${n} metgezellen en geleerden die in de boeken genoemd worden.`,
    sahabi: 'Metgezel', alim: 'Geleerde', died: (y) => `gest. ${y} AH`, noBio: 'De biografie wordt nog opgesteld en gecontroleerd.', mentions: 'Vindplaatsen in de boeken',
    noMentions: 'Geen vindplaatsen gevonden in de gepubliceerde boeken.', back: 'Alle personen', inChapter: 'in'
  }
}

// /hadith: per boek, dan per hoofdstuk (het onderwerp) in de volgorde van het boek.
export function renderHadith ({ lang, rows }) {
  const t = { ...T[lang], ...R[lang] }
  const books = []
  for (const h of rows) {
    let b = books[books.length - 1]
    if (!b || b.id !== h.book_id) books.push(b = { id: h.book_id, slug: h.book_slug, title: h['book_title_' + lang] || h.book_title_ar, chapters: [] })
    let c = b.chapters[b.chapters.length - 1]
    if (!c || c.slug !== h.chapter_slug) b.chapters.push(c = { slug: h.chapter_slug, title: h.chapter_title, items: [] })
    c.items.push(h)
  }
  const item = (b, c, h) => `<li><p class="htext" lang="${h.lang}" dir="${h.lang === 'ar' ? 'rtl' : 'ltr'}">${esc(h.text)}</p>
<p class="hmeta"><a href="${esc(`/boek/${b.slug}/${c.slug}?lang=${h.lang}`)}">${h.page ? `${t.page} ${h.page}` : esc(stripTags(c.title))}</a>${h.source ? ` · ${t.source}: ${esc(h.source)}` : ''}${h.grade ? ` · ${t.grade}: ${esc(h.grade)}` : ''}</p>${h.note ? `<p class="hnote">${esc(h.note)}</p>` : ''}</li>`
  return shell({
    lang,
    title: `${t.hadith} · ${t.site}`,
    bodyClass: 'site',
    body: `${topbar(lang, '/hadith')}
<main class="wrap register">
<h1>${t.hadith}</h1><p class="lead">${t.hadithIntro(rows.length)}</p>
${books.map((b) => `<section class="regbook"><h2><a href="${esc(withLang('/boek/' + b.slug, lang))}">${esc(b.title)}</a></h2>
${b.chapters.map((c) => `<h3>${esc(stripTags(c.title))}</h3><ol class="hlist">${c.items.map((h) => item(b, c, h)).join('\n')}</ol>`).join('\n')}</section>`).join('\n') || `<p>${t.none}</p>`}
</main>`
  })
}

const personName = (p, lang) => (lang === 'nl' && p.name_nl) || p.name_ar
const personSub = (p, lang, t) => [t[p.kind] || '', p.death_hijri ? t.died(p.death_hijri) : ''].filter(Boolean).join(' · ')

// /personen: gewone lijst in de volgorde van het register.
export function renderPersons ({ lang, persons }) {
  const t = { ...T[lang], ...R[lang] }
  return shell({
    lang,
    title: `${t.persons} · ${t.site}`,
    bodyClass: 'site',
    body: `${topbar(lang, '/personen')}
<main class="wrap register">
<h1>${t.persons}</h1><p class="lead">${t.personsIntro(persons.length)}</p>
<ul class="plist">${persons.map((p) => `<li><a href="${esc(withLang('/persoon/' + p.slug, lang))}"><b>${esc(personName(p, lang))}</b>${lang === 'nl' && p.name_nl ? ` <span lang="ar" dir="rtl">${esc(p.name_ar)}</span>` : ''}</a>
<small>${personSub(p, lang, t)}</small>${p['bio_' + lang] ? `<div class="pbio">${p['bio_' + lang]}</div>` : ''}</li>`).join('\n')}</ul>
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
