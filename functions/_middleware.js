// Stuurt oude adressen door en vangt fouten op pagina's buiten /api af, zodat
// bezoekers een nette melding zien. (Cloudflare past _redirects niet toe op paden
// waar een bestand staat, daarom gebeurt het doorsturen hier.)
const MOVED = {
  '/': ['/bibliotheek', 302],
  '/index.html': ['/qawaid/', 301],
  '/library.html': ['/bibliotheek', 301],
  '/library': ['/bibliotheek', 301],
  '/talkhis-jam-al-jawami': ['/boek/talkhis-jam-al-jawami', 301],
  '/talkhis-jam-al-jawami/': ['/boek/talkhis-jam-al-jawami', 301]
}

export async function onRequest (context) {
  const url = new URL(context.request.url)
  // Eén adres voor de site: www gaat naar zuiverebron.nl.
  if (url.hostname === 'www.zuiverebron.nl') return Response.redirect('https://zuiverebron.nl' + url.pathname + url.search, 301)
  const moved = MOVED[url.pathname]
  if (moved && ['GET', 'HEAD'].includes(context.request.method)) return Response.redirect(new URL(moved[0] + url.search, url).toString(), moved[1])
  try {
    return await context.next()
  } catch (err) {
    console.error(err)
    return new Response('<!DOCTYPE html><meta charset="utf-8"><title>Fout</title><p style="font-family:sans-serif;padding:24px">Er ging iets mis. Probeer het later opnieuw.</p>',
      { status: 500, headers: { 'content-type': 'text/html; charset=utf-8' } })
  }
}
