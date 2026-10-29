// HTML voor de studieomgeving van een les (zie lib/study.js voor het formaat).
// Eerst overzicht → dan structuur → dan uitleg → dan herhaling → dan toetsing.
// Drie niveaus: A = de kaart zelf, B = uitklappen voor meer uitleg, C = link naar de
// bladzijde in het oorspronkelijke boek. Gedrag (tabbladen, voortgang, flitskaarten,
// toets) in /assets/study.js; zonder JavaScript staat alles gewoon onder elkaar.
import { esc } from './render.js'

const L = {
  ar: {
    tabs: { overview: 'نظرة عامة', schema: 'المخططات', terms: 'المصطلحات', explain: 'الشرح', keys: 'خلاصات', hadith: 'الأحاديث', persons: 'الأعلام', review: 'مراجعة سريعة', quiz: 'اختبر نفسك', text: 'النص الكامل', source: 'النص الأصلي' },
    groups: { learn: 'تعلّم', ref: 'مراجع', practice: 'تدرّب', src: 'المصدر' },
    unitProgress: 'تقدّمك في هذه الوحدة', markUnit: 'تعليم الوحدة كمحفوظة', unitDone: 'تم حفظ الوحدة', lessons: 'دروس الوحدة', lessonsWord: 'دروس', unitPoints: 'الوحدة في لمحة',
    hadithIntro: 'الأحاديث الواردة في دروس هذه الوحدة، بنصها وتخريجها كما في الكتاب.', narrator: 'عن', takhrij: 'التخريج',
    personsIntro: 'الأعلام المذكورون في هذه الوحدة، ولماذا ذُكروا.', pText: 'المذكورون في المتن', pTakhrij: 'أئمة التخريج', sahabi: 'صحابي', alim: 'عالم', died: (y) => `ت ${y}هـ`,
    srcIntro: 'هذه الصفحة تجمع دروس الوحدة. الملخص الكامل لكل درس، وصفحات الكتاب الأصلي:', summaryLink: 'ملخص الدرس', bookPages: 'صفحات الكتاب', wholeUnit: 'الوحدة كاملة في الكتاب الأصلي',
    lesson: 'الدرس', unit: 'الوحدة', points: 'أهم ما في الدرس', keyTerms: 'المصطلحات الأساسية', source: 'المصدر', page: 'ص',
    more: 'مزيد من الشرح', expandAll: 'إظهار كل الشرح', collapseAll: 'إخفاء الشرح', learned: 'تعلّمته', markLesson: 'تعليم الدرس كمحفوظ', lessonDone: 'تم حفظ الدرس',
    progress: 'تقدّمك في هذا الدرس', fav: 'المفضلة', favs: 'مفضلتي', noFavs: 'اضغط على النجمة في أي بطاقة لإضافتها هنا.', print: 'طباعة بطاقات الدراسة',
    fromBook: 'من الكتاب', editorial: 'توضيح', flash: 'بطاقات الحفظ', flip: 'اقلب البطاقة', repeat: 'وضع التكرار', know: 'أعرفها', again: 'أعيدها لاحقًا', done: 'أنهيت البطاقات',
    quick: 'أهم النقاط قبل الاختبار', check: 'صحيح', wrong: 'خطأ', score: (a, b) => `${a} من ${b} صحيحة`, retry: 'أعد الاختبار', fullText: 'الملخص الكامل للدرس كما كان',
    kinds: { definitie: 'تعريف', voorwaarde: 'شرط', opsomming: 'تعداد', uitzondering: 'استثناء', onderscheid: 'فرق', bewijs: 'دليل' },
    tiles: { schema: 'المخططات', terms: 'المصطلحات', explain: 'الشرح', keys: 'الخلاصات' },
    srcNote: 'هذه بطاقات دراسة مساعدة؛ الكتاب الأصلي هو المرجع.', draft: 'معاينة: هذه البطاقة لم تُنشر بعد (للمشرفين فقط).', compare: 'مقارنة'
  },
  nl: {
    tabs: { overview: 'Overzicht', schema: 'Schema’s', terms: 'Begrippen', explain: 'Uitleg', keys: 'Kernpunten', hadith: 'Hadith', persons: 'Personen', review: 'Herhaling', quiz: 'Test jezelf', text: 'Volledige tekst', source: 'Originele tekst' },
    groups: { learn: 'Leren', ref: 'Naslag', practice: 'Oefenen', src: 'Bron' },
    unitProgress: 'Je voortgang in dit hoofdstuk', markUnit: 'Markeer hoofdstuk als geleerd', unitDone: 'Hoofdstuk geleerd', lessons: 'Lessen in dit hoofdstuk', lessonsWord: 'lessen', unitPoints: 'Het hoofdstuk in één oogopslag',
    hadithIntro: 'De hadith die in de lessen van dit hoofdstuk genoemd worden, met tekst en bronvermelding zoals in het boek.', narrator: 'Overgeleverd door', takhrij: 'Bron',
    personsIntro: 'De personen die in dit hoofdstuk genoemd worden, en waarom.', pText: 'Genoemd in de tekst', pTakhrij: 'Genoemd in de bronvermelding', sahabi: 'Metgezel', alim: 'Geleerde', died: (y) => `gest. ${y} AH`,
    srcIntro: 'Deze pagina bundelt de lessen van het hoofdstuk. De volledige samenvatting per les, en de bladzijden in het oorspronkelijke boek:', summaryLink: 'Samenvatting van de les', bookPages: 'Bladzijden in het boek', wholeUnit: 'Het hele hoofdstuk in het oorspronkelijke boek',
    lesson: 'Les', unit: 'Eenheid', points: 'De les in één oogopslag', keyTerms: 'Belangrijkste begrippen', source: 'Bron', page: 'p.',
    more: 'Meer uitleg', expandAll: 'Alle uitleg tonen', collapseAll: 'Uitleg verbergen', learned: 'Geleerd', markLesson: 'Markeer les als geleerd', lessonDone: 'Les geleerd',
    progress: 'Je voortgang in deze les', fav: 'Favoriet', favs: 'Mijn favorieten', noFavs: 'Tik op het sterretje bij een kaart om hem hier te bewaren.', print: 'Studiekaarten printen',
    fromBook: 'Uit het boek', editorial: 'Toelichting', flash: 'Flitskaarten', flip: 'Draai de kaart om', repeat: 'Herhaalmodus', know: 'Ken ik', again: 'Nog oefenen', done: 'Alle kaarten gehad',
    quick: 'Het belangrijkste vlak voor een toets', check: 'Goed', wrong: 'Niet goed', score: (a, b) => `${a} van ${b} goed`, retry: 'Opnieuw', fullText: 'De volledige samenvatting van deze les',
    kinds: { definitie: 'Definitie', voorwaarde: 'Voorwaarde', opsomming: 'Opsomming', uitzondering: 'Uitzondering', onderscheid: 'Onderscheid', bewijs: 'Bewijs' },
    tiles: { schema: 'Schema’s', terms: 'Begrippen', explain: 'Uitleg', keys: 'Kernpunten' },
    srcNote: 'Dit is een studiehulp; het oorspronkelijke boek blijft de bron.', draft: 'Voorbeeld: deze studiekaart is nog niet gepubliceerd (alleen voor medewerkers).', compare: 'Vergelijking'
  }
}

// Kleine lijnpictogrammen (decoratief, aria-hidden).
const ICONS = {
  schema: '<path d="M12 3v5M12 8l-6 5M12 8l6 5M6 13v4M18 13v4"/><circle cx="12" cy="3" r="1.5"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
  terms: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 10h8M8 14h5"/>',
  explain: '<path d="M5 6h14M5 10h14M5 14h9M5 18h6"/>',
  keys: '<path d="M7 4h10v16l-5-3-5 3z"/><path d="m9.5 10 2 2 3.5-4"/>',
  star: '<path d="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z"/>',
  book: '<path d="M4 5c3-1 6-1 8 1 2-2 5-2 8-1v14c-3-1-6-1-8 1-2-2-5-2-8-1z"/><path d="M12 6v14"/>',
  print: '<path d="M7 9V4h10v5M7 17H5v-6h14v6h-2M8 14h8v6H8z"/>'
}
const icon = (name) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`

// Platte tekst → veilige HTML; verzen ﴿…﴾ en hadith «…» krijgen hun eigen opmaak.
const fmt = (s) => esc(s)
  .replace(/﴿[^﴿﴾]*﴾/g, (m) => `<span class="ayah">${m}</span>`)
  .replace(/«[^«»]*»/g, (m) => `<span class="hadith">${m}</span>`)
  .replace(/ﷺ/g, '<span class="saw">ﷺ</span>')
  .replace(/\n/g, '<br>')

// Korte omschrijving voor een begrippenchip: tot het eerste leesteken, hooguit 40 tekens.
const short = (s) => { const x = s.split(/[.;:,]/)[0]; return x.length > 40 ? x.slice(0, 38).replace(/\s+\S*$/, '') + '…' : x }

// unit (alleen bij een hoofdstukkaart): { base, lessons: [{ n, slug, title, pageStart }], persons: Map slug → persoon }.
export function renderStudy ({ study: s, lang, chapter, fullText = '', staff = false, unit = null }) {
  const t = L[lang]
  const isUnit = s.scope === 'unit' && !!unit
  const lessonUrl = (l) => `${unit.base}/${l.slug}?lang=${lang}`
  // Bij een hoofdstukkaart volgt uit de pagina in welke les iets staat.
  const lessonOf = (p) => isUnit ? unit.lessons.filter((l) => l.pageStart && l.pageStart <= p).pop() : null
  const src = (p) => {
    if (!p) return ''
    const l = lessonOf(p)
    return (l ? `<a class="lref" href="${esc(lessonUrl(l))}">${t.lesson} ${l.n}</a>` : '') + bookSrc(p)
  }
  // Meerdere pagina's: per les één label, met de bladzijden erachter.
  const srcs = (ps) => {
    const byLesson = []
    for (const p of ps) {
      const l = lessonOf(p)
      const last = byLesson[byLesson.length - 1]
      if (last && last.l === l) last.ps.push(p); else byLesson.push({ l, ps: [p] })
    }
    return byLesson.map(({ l, ps }) => `<span class="refg">${l ? `<a class="lref" href="${esc(lessonUrl(l))}">${t.lesson} ${l.n}</a>` : ''}${ps.map(bookSrc).join('')}</span>`).join('')
  }
  const bookSrc = (p) => {
    if (!p) return ''
    const label = `${t.page} ${p}`
    return s.source.url && s.source.url.includes('{p}')
      ? `<a class="src" href="${esc(s.source.url.replace('{p}', p))}" target="_blank" rel="noopener" title="${esc(s.source.label)}">${icon('book')}${label}</a>`
      : `<span class="src">${icon('book')}${label}</span>`
  }
  // Een kaart die je kunt bewaren (ster) en als geleerd kunt markeren.
  const tools = (key) => `<span class="ctools"><button type="button" class="star" data-key="${key}" aria-pressed="false" title="${t.fav}" aria-label="${t.fav}">${icon('star')}</button><label class="lrn"><input type="checkbox" data-key="${key}"> ${t.learned}</label></span>`

  // Knooppunt in een schema: met uitleg wordt het een uitklapper (niveau B), met pagina een bronlink (niveau C).
  const nodeBox = (x, cls = 'nd') => {
    const head = `<b>${fmt(x.label)}</b>${x.sub ? `<small>${fmt(x.sub)}</small>` : ''}`
    if (!x.detail && !x.page) return `<div class="${cls}">${head}</div>`
    return `<details class="${cls}"><summary>${head}</summary><div class="ndd">${x.detail ? `<p>${fmt(x.detail)}</p>` : ''}${src(x.page)}</div></details>`
  }
  const chips = (list) => list.length ? `<ul class="chips2">${list.map((c) => `<li>${nodeBox(c, 'chip2')}</li>`).join('')}</ul>` : ''
  const treeList = (list) => list.length ? `<ul>${list.map((c) => `<li>${nodeBox(c)}${treeList(c.children || [])}</li>`).join('')}</ul>` : ''

  const DIAGRAMS = {
    mindmap: (d) => {
      const half = Math.ceil(d.nodes.length / 2)
      const branch = (b) => `<li class="mm-b">${nodeBox(b)}${chips(b.children)}</li>`
      return `<div class="mm"><div class="mm-c">${d.root ? `<b>${fmt(d.root.label)}</b>${d.root.sub ? `<small>${fmt(d.root.sub)}</small>` : ''}` : ''}</div>
<ul class="mm-s">${d.nodes.slice(0, half).map(branch).join('')}</ul><ul class="mm-e">${d.nodes.slice(half).map(branch).join('')}</ul></div>`
    },
    tree: (d) => `<div class="tree">${d.root ? nodeBox(d.root, 'nd t-root') : ''}${treeList(d.nodes)}</div>`,
    steps: (d) => `<ol class="steps">${d.nodes.map((x) => `<li>${nodeBox(x)}${chips(x.children)}</li>`).join('')}</ol>`,
    timeline: (d) => `<ol class="steps tl">${d.nodes.map((x) => `<li>${nodeBox(x)}${chips(x.children)}</li>`).join('')}</ol>`,
    flow: (d) => d.nodes.map((lane, i) => `<div class="lane lane${i % 4}"><div class="lane-h">${fmt(lane.label)}${lane.sub ? `<small>${fmt(lane.sub)}</small>` : ''}</div>
<ol class="flow">${lane.children.map((x) => `<li>${nodeBox(x)}</li>`).join('<li class="arr" aria-hidden="true"><span>➜</span></li>')}</ol></div>`).join(''),
    compare: (d) => `<div class="cmpw"><table class="cmp"><thead><tr><th scope="col"><span class="sr">${t.compare}</span></th>${d.columns.map((c) => `<th scope="col">${fmt(c)}</th>`).join('')}</tr></thead>
<tbody>${d.rows.map((r) => `<tr><th scope="row">${fmt(r.label)}</th>${r.cells.map((c, i) => `<td data-col="${esc(d.columns[i] || '')}">${fmt(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`,
    cards: (d) => `<ol class="ncards">${d.nodes.map((x) => `<li>${nodeBox(x)}</li>`).join('')}</ol>`
  }
  const diagram = (d) => `<figure class="dg dg-${d.type}"><figcaption><h3>${fmt(d.title)}</h3>${d.intro ? `<p>${fmt(d.intro)}</p>` : ''}</figcaption>
${DIAGRAMS[d.type](d)}${d.note || d.page ? `<p class="dgnote">${d.note ? fmt(d.note) + ' ' : ''}${src(d.page)}</p>` : ''}</figure>`

  const termCard = (g, i) => `<article class="card dcard" id="term${i + 1}" data-key="t${i}">
<header><h3 lang="ar" dir="rtl">${esc(g.term)}</h3>${tools('t' + i)}</header>
${g.translit ? `<p class="tl"><i>${esc(g.translit)}</i></p>` : ''}
${g.meaning ? `<p class="mean">${fmt(g.meaning)}</p>` : ''}
${g.explanation ? `<p>${fmt(g.explanation)}</p>` : ''}
${g.notes.length ? `<ul class="notes">${g.notes.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul>` : ''}
<footer>${src(g.page)}</footer></article>`

  const keyCard = (k, i) => `<article class="card kcard k-${k.kind}" data-key="k${i}">
<header><span class="kind">${t.kinds[k.kind]}</span><span class="org org-${k.origin}">${k.origin === 'boek' ? t.fromBook : t.editorial}</span>${tools('k' + i)}</header>
<h3>${fmt(k.title)}</h3>${k.items.length ? `<${k.kind === 'opsomming' ? 'ol' : 'ul'}>${k.items.map((x) => `<li>${fmt(x)}</li>`).join('')}</${k.kind === 'opsomming' ? 'ol' : 'ul'}>` : ''}
<footer>${src(k.page)}</footer></article>`

  const quizItem = (q, i) => `<li class="qz" data-answer="${q.answer}"><p class="qq">${fmt(q.q)}</p>
<div class="qopts" role="group" aria-label="${esc(q.q)}">${q.options.map((o, j) => `<button type="button" data-i="${j}">${fmt(o)}</button>`).join('')}</div>
<div class="qfb" hidden><p class="qres" role="status"></p>${q.explain ? `<p>${fmt(q.explain)}</p>` : ''}${src(q.page)}</div></li>`

  const persons = isUnit ? s.persons.filter((p) => unit.persons.has(p.slug)).map((p) => ({ ...p, ...unit.persons.get(p.slug) })) : []
  // Tabbladen in vier groepen: leren, naslag, oefenen en de bron.
  const groups = [
    ['learn', [['overview', true], ['schema', s.diagrams.length], ['explain', s.sections.length], ['keys', s.keycards.length]]],
    ['ref', [['terms', s.terms.length], ['hadith', isUnit && s.hadith.length], ['persons', persons.length]]],
    ['practice', [['review', s.review.length || s.terms.length], ['quiz', s.quiz.length]]],
    ['src', [['text', isUnit || fullText]]]
  ].map(([g, list]) => [g, list.filter(([, show]) => show).map(([k]) => k)]).filter(([, list]) => list.length)
  const tabs = groups.flatMap(([, list]) => list)
  const tabName = (k) => k === 'text' && isUnit ? t.tabs.source : t.tabs[k]

  const hadithItem = (h) => `<li class="card hd">
${h.narrator ? `<p class="hd-n">${t.narrator} ${esc(h.narrator)}</p>` : ''}
<p class="htext" lang="ar" dir="rtl"><span class="hadith">«${fmt(h.text)}»</span></p>
${h.meaning ? `<p class="hd-m">${fmt(h.meaning)}</p>` : ''}
<p class="hd-t"><b>${t.takhrij}:</b> ${esc(h.takhrij)}</p>
${h.note ? `<p class="hd-x">${fmt(h.note)}</p>` : ''}
<footer>${srcs(h.pages)}</footer></li>`
  const personItem = (p) => `<li class="card pr">
<h3><a href="${esc(`/persoon/${p.slug}?lang=${lang}`)}">${esc(lang === 'nl' && p.name_nl ? p.name_nl : p.name_ar)}</a></h3>
${lang === 'nl' && p.name_nl ? `<p class="pr-ar" lang="ar" dir="rtl">${esc(p.name_ar)}</p>` : ''}
<p class="pr-k">${[t[p.kind] || '', p.death_hijri ? t.died(p.death_hijri) : ''].filter(Boolean).join(' · ')}</p>
${p.role ? `<p>${fmt(p.role)}</p>` : ''}
<footer>${srcs(p.pages)}</footer></li>`
  const personGroup = (g, title) => {
    const list = persons.filter((p) => p.group === g)
    return list.length ? `<section><h3 class="pr-g">${title}</h3><ul class="cards prs">${list.map(personItem).join('')}</ul></section>` : ''
  }
  const lessonList = () => `<ol class="ulx">${unit.lessons.map((l) => `<li><a href="${esc(lessonUrl(l))}" data-id="${l.id}"><span class="lix-n">${t.lesson} ${l.n}${l.pageStart ? ` · ${t.page} ${l.pageStart}` : ''}</span> ${esc(l.title)}</a></li>`).join('')}</ol>`
  const tile = (k) => tabs.includes(k) ? `<a class="tile" href="#st-${k}" data-tab="${k}">${icon(k)}<b>${t.tiles[k]}</b></a>` : ''

  const panels = {
    overview: `<div class="ov">
<header class="ovh card">
  <p class="kicker">${isUnit ? `${t.unit} ${s.unit} · ${unit.lessons.length} ${t.lessonsWord}` : chapter.unit != null ? `${t.unit} ${chapter.unit}${chapter.unitTitle ? ' · ' + esc(chapter.unitTitle) : ''}` : ''}</p>
  <h2 class="st-title">${fmt(s.title)}</h2>${s.subtitle ? `<p class="st-sub">${fmt(s.subtitle)}</p>` : ''}
  ${s.summary ? `<p class="st-sum">${fmt(s.summary)}</p>` : ''}
  <p class="st-src">${icon('book')}<span>${t.source}: ${esc(s.source.label)}${s.source.pages ? ` · ${t.page} ${esc(s.source.pages)}` : ''}</span></p>
  <div class="prog" aria-live="polite"><span class="prog-l">${isUnit ? t.unitProgress : t.progress}</span><span class="bar"><span></span></span><b class="prog-n">0%</b></div>
  <p class="ovact"><button type="button" class="mark-lesson" aria-pressed="false" data-done="${isUnit ? t.unitDone : t.lessonDone}">${isUnit ? t.markUnit : t.markLesson}</button>
  <button type="button" class="print">${icon('print')}${t.print}</button></p>
</header>
${s.visual ? diagram(s.visual).replace('<figure class="dg', '<figure class="dg dg-main') : ''}
<section class="pts"><h3>${isUnit ? t.unitPoints : t.points}</h3><ol class="points">${s.points.map((p) => `<li>${p.detail || p.page ? `<details><summary>${fmt(p.text)}</summary><div class="ndd">${p.detail ? `<p>${fmt(p.detail)}</p>` : ''}${src(p.page)}</div></details>` : fmt(p.text)}</li>`).join('')}</ol></section>
${isUnit ? `<section class="ulxs"><h3>${t.lessons}</h3>${lessonList()}</section>` : ''}
${s.terms.length && !isUnit ? `<section><h3>${t.keyTerms}</h3><ul class="tchips">${s.terms.map((g, i) => `<li><a href="#term${i + 1}" data-tab="terms"><span lang="ar" dir="rtl">${esc(g.term)}</span>${lang === 'nl' && g.meaning ? ` <small>${esc(short(g.meaning))}</small>` : ''}</a></li>`).join('')}</ul></section>` : ''}
<nav class="tiles">${tile('schema')}${tile('terms')}${tile('explain')}${tile('keys')}</nav>
${s.note ? `<p class="st-note">${fmt(s.note)}</p>` : ''}
</div>`,
    schema: s.diagrams.map(diagram).join('\n'),
    terms: `<div class="cards">${s.terms.map(termCard).join('')}</div>`,
    explain: `<p class="xall"><button type="button" class="expand" data-open="${t.expandAll}" data-close="${t.collapseAll}">${t.expandAll}</button></p>
<ol class="secs">${s.sections.map((x) => `<li class="card sec"><h3>${fmt(x.title)}</h3>${x.text ? `<p>${fmt(x.text)}</p>` : ''}
${x.more ? `<details><summary>${t.more}</summary><p>${fmt(x.more)}</p></details>` : ''}<footer>${src(x.page)}</footer></li>`).join('')}</ol>`,
    keys: `<div class="cards">${s.keycards.map(keyCard).join('')}</div>`,
    review: `${s.review.length ? `<section class="card quick"><h3>${t.quick}</h3><ul>${s.review.map((x) => `<li>${fmt(x)}</li>`).join('')}</ul></section>` : ''}
${s.terms.length ? `<section class="flash"><h3>${t.flash}</h3><p><button type="button" class="repeat" data-know="${t.know}" data-again="${t.again}" data-done="${t.done}">${t.repeat}</button></p>
<ul class="fcards">${s.terms.map((g, i) => `<li><button type="button" class="fcard" aria-pressed="false" title="${t.flip}"><span class="ff" lang="ar" dir="rtl">${esc(g.term)}</span><span class="fb">${fmt(g.meaning || g.explanation)}</span></button></li>`).join('')}</ul></section>` : ''}
<section class="favs"><h3>${icon('star')} ${t.favs}</h3><div class="favlist"><p class="muted">${t.noFavs}</p></div></section>`,
    quiz: `<ol class="quiz">${s.quiz.map(quizItem).join('')}</ol><p class="qscore" role="status" data-tpl="${esc(t.score('{a}', '{b}'))}"></p><p><button type="button" class="qreset">${t.retry}</button></p>`,
    hadith: `<p class="muted">${t.hadithIntro}</p><ol class="hds">${s.hadith.map(hadithItem).join('')}</ol>`,
    persons: `<p class="muted">${t.personsIntro}</p>${personGroup('text', t.pText)}${personGroup('takhrij', t.pTakhrij)}`,
    text: isUnit
      ? `<p class="muted">${t.srcIntro}</p><ol class="ulx srcl">${unit.lessons.map((l, i) => {
        const end = unit.lessons[i + 1]?.pageStart ? unit.lessons[i + 1].pageStart - 1 : null
        return `<li class="card"><span class="lix-n">${t.lesson} ${l.n}</span> <b>${esc(l.title)}</b>
<p><a href="${esc(lessonUrl(l))}">${t.summaryLink}</a>${l.pageStart ? ` · ${t.bookPages}: ${bookSrc(l.pageStart)}${end && end > l.pageStart ? '–' + end : ''}` : ''}</p></li>`
      }).join('')}</ol>${s.source.pages ? `<p class="st-src">${icon('book')}<span>${t.wholeUnit}: ${esc(s.source.label)} · ${t.page} ${esc(s.source.pages)} ${bookSrc(parseInt(s.source.pages, 10))}</span></p>` : ''}`
      : `<p class="muted">${t.fullText}</p>${fullText}`
  }

  return `<div class="study${isUnit ? ' unit-study' : ''}" data-chapter="${isUnit ? 'u' : ''}${chapter.id}" data-lang="${lang}">
${staff && s.status && s.status !== 'published' ? `<p class="notice">${t.draft}</p>` : ''}
<div class="st-tabs" role="tablist" aria-label="${esc(s.title)}">${groups.map(([g, list]) => `<span class="st-grp" role="presentation">${t.groups[g]}</span>${list.map((k) => `<a role="tab" id="tab-${k}" href="#st-${k}" aria-controls="st-${k}" aria-selected="${k === 'overview'}" data-tab="${k}">${tabName(k)}</a>`).join('')}`).join('')}</div>
${tabs.map((k) => `<section class="st-panel p-${k}" id="st-${k}" role="tabpanel" aria-labelledby="tab-${k}" tabindex="-1">
<h2 class="st-ph">${tabName(k)}</h2>
${panels[k]}
</section>`).join('\n')}
<p class="st-foot">${t.srcNote}</p>
</div>`
}
