// Vangt fouten op pagina's buiten /api af, zodat bezoekers een nette melding zien.
export async function onRequest (context) {
  try {
    return await context.next()
  } catch (err) {
    console.error(err)
    return new Response('<!DOCTYPE html><meta charset="utf-8"><title>Fout</title><p style="font-family:sans-serif;padding:24px">Er ging iets mis. Probeer het later opnieuw.</p>',
      { status: 500, headers: { 'content-type': 'text/html; charset=utf-8' } })
  }
}
