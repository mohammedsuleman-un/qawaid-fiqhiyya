// Antwoorden voor HTML-pagina's. Pagina's voor medewerkers worden nooit gedeeld gecachet.
export const page = (html, isPrivate = false) => new Response(html, {
  headers: {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': isPrivate ? 'private, no-store' : 'public, max-age=60'
  }
})

// Niet gevonden: een eenvoudige pagina in de huisstijl, met de weg terug.
export const notFound = (lang) => {
  const ar = lang === 'ar'
  const links = [['/bibliotheek', ar ? 'المكتبة' : 'Bibliotheek'], ['/zad', ar ? 'سلسلة زاد' : 'ZAD'], ['/hadith', ar ? 'الأحاديث' : 'Hadith'], ['/personen', ar ? 'الأعلام' : 'Personen']]
  return new Response(
    `<!DOCTYPE html><html lang="${lang}" dir="${ar ? 'rtl' : 'ltr'}"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>404 · ${ar ? 'النبع الصافي' : 'De Zuivere Bron'}</title>
<link rel="icon" href="/favicon.png"><link rel="stylesheet" href="/assets/book.css"><link rel="stylesheet" href="/assets/site.css">
<body class="site" data-lang="${lang}"><main class="wrap lib" style="text-align:center;padding-top:60px">
<p><img src="/assets/logo/logo-64.png" alt="" width="64" height="64"></p>
<h1>${ar ? 'الصفحة غير موجودة' : 'Pagina niet gevonden'}</h1>
<p class="sub">${ar ? 'ربما تغيّر الرابط. اختر من هنا:' : 'Misschien is de link veranderd. Ga verder via:'}</p>
<p class="howto404">${links.map(([h, l]) => `<a class="chip" href="${h}?lang=${lang}">${l}</a>`).join(' ')}</p>
</main></body></html>`,
    { status: 404, headers: { 'content-type': 'text/html; charset=utf-8' } })
}
