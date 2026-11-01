// Licht of donker (knop .themesw) en het inlogmenu in de kopbalk. De keuze voor licht/donker
// staat in localStorage (zb:theme); zonder keuze volgt de site de instelling van het toestel.
// Het inline script in <head> zet data-theme al vóór het tekenen, zodat er niets knippert.
(function () {
  var root = document.documentElement
  function cur () { return root.getAttribute('data-theme') || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') }
  function label (b) {
    var dark = cur() === 'dark'; var ar = root.lang === 'ar'
    var t = dark ? (ar ? 'الوضع الفاتح' : 'Lichte modus') : (ar ? 'الوضع الداكن' : 'Donkere modus')
    b.innerHTML = '<span aria-hidden="true">' + (dark ? '☀' : '☾') + '</span>'
    b.title = t; b.setAttribute('aria-label', t)
  }
  function all () { return [].slice.call(document.querySelectorAll('.themesw')) }
  all().forEach(function (b) {
    label(b)
    b.addEventListener('click', function () {
      var next = cur() === 'dark' ? 'light' : 'dark'
      root.setAttribute('data-theme', next)
      try { localStorage.setItem('zb:theme', next) } catch (e) {}
      all().forEach(label)
    })
  })
  // Taalwissel in de studentenomgeving verandert lang: knoptekst bijwerken.
  if (window.MutationObserver) new MutationObserver(function () { all().forEach(label) }).observe(root, { attributes: true, attributeFilter: ['lang'] })

  // Inlogmenu: sluit bij een klik ernaast of met Escape; ingelogd toont de naam.
  var menus = [].slice.call(document.querySelectorAll('details.login'))
  document.addEventListener('click', function (e) { menus.forEach(function (d) { if (d.open && !d.contains(e.target)) d.open = false }) })
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') menus.forEach(function (d) { if (d.open) { d.open = false; d.querySelector('summary').focus() } }) })
  var who = null
  try { who = localStorage.getItem('zb:who') } catch (e) {}
  if (who) menus.forEach(function (d) { var s = d.querySelector('.login-l'); if (s) { s.textContent = who; d.classList.add('in') } })
})()
