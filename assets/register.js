// Zoeken in een register (/hadith, /personen): verbergt de regels die het woord niet bevatten.
// Tashkeel en de varianten van alif tellen niet mee.
(function () {
  const input = document.getElementById('rf')
  const count = document.getElementById('rfn')
  if (!input) return
  const norm = (s) => s.toLowerCase().replace(/[ً-ْٰـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
  const items = [...document.querySelectorAll('.rlist > li')].map((li) => [li, norm(li.textContent)])
  let timer
  input.addEventListener('input', () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const q = norm(input.value.trim())
      let n = 0
      for (const [li, text] of items) { const show = !q || text.includes(q); li.hidden = !show; if (show) n++ }
      count.textContent = q ? String(n) : ''
    }, 120)
  })
})()
