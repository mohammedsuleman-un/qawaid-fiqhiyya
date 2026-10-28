// Antwoorden voor HTML-pagina's. Pagina's voor medewerkers worden nooit gedeeld gecachet.
export const page = (html, isPrivate = false) => new Response(html, {
  headers: {
    'content-type': 'text/html; charset=utf-8',
    'cache-control': isPrivate ? 'private, no-store' : 'public, max-age=60'
  }
})

export const notFound = (lang) => new Response(
  `<!DOCTYPE html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>404</title>
<p style="font-family:sans-serif;padding:24px" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">${lang === 'ar' ? 'الصفحة غير موجودة.' : 'Pagina niet gevonden.'}
<a href="/bibliotheek?lang=${lang}">${lang === 'ar' ? 'المكتبة' : 'Bibliotheek'}</a></p>`,
  { status: 404, headers: { 'content-type': 'text/html; charset=utf-8' } })
