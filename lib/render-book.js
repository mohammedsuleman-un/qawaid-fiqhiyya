// Bouwt de leespagina van een boek uit de blokken in de database, met dezelfde
// opmaak als de statische pagina's (assets/book.css en assets/book.js).
import { stripTags } from './db.js'

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

function block (b) {
  switch (b.kind) {
    case 'page': return `<div class="pg" id="p${b.page}"><span>${b.page}</span></div>`
    case 'heading': return `<h2 id="${esc(b.anchor || 'b' + b.id)}">${b.html}</h2>`
    case 'cont': return `<p class="cont">${b.html}</p>`
    case 'sharh': return `<div class="sharh">\n${b.html}\n</div>`
    case 'side': return `<div class="side">${b.html}</div>`
    default: return `<p>${b.html}</p>`
  }
}

export function renderBook ({ book, blocks }) {
  const toc = blocks.filter((b) => b.kind === 'heading')
    .map((b) => `<a href="#${esc(b.anchor || 'b' + b.id)}">${esc(stripTags(b.html).replace(/:\s*$/, ''))}</a>`)
    .join('\n')
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(book.title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/assets/book.css">
</head>
<body>
<div class="app">
<aside>
  <div class="brand">
    <a class="back" href="/library.html">→ المكتبة</a>
    <h1>${esc(book.title)}</h1>
    <p>${esc(book.subtitle)}</p>
  </div>
  <div class="search"><input id="q" type="search" placeholder="ابحث في النص…" aria-label="بحث"></div>
  <nav id="toc">
${toc}
  </nav>
</aside>
<main><div class="wrap">
<h2 class="title">${esc(book.title)}</h2>
<p class="legend"><span class="ayah">الآية</span> · <span class="hadith">الحديث</span> · <span>المصنِّف</span> · <span class="sharh" style="border:0;padding:0;margin:0">الشارح</span> · <span class="le">مثاله</span> · <span class="lm">مسألة / حكمه</span></p>
${book.pdf ? `<p class="dl"><a href="${esc(encodeURI(book.pdf))}" download>تحميل PDF</a></p>` : ''}
<article class="book">
${blocks.map(block).join('\n')}
</article>
</div></main>
</div>
<script src="/assets/book.js"></script>
</body>
</html>
`
}
