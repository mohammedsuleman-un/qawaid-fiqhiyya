import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sanitizeHtml } from '../lib/sanitize.js'

test('scripts, event-attributen en stijlen verdwijnen', () => {
  assert.equal(sanitizeHtml('<p onclick="x()">a<script>alert(1)</script></p>'), '<p>a</p>')
  assert.equal(sanitizeHtml('<p style="color:red" class="ayah evil">x</p>'), '<p class="ayah">x</p>')
  assert.equal(sanitizeHtml('<img src=x onerror=alert(1)>tekst'), 'tekst')
  assert.equal(sanitizeHtml('<iframe src="//x"></iframe>ok'), 'ok')
})

test('gevaarlijke links worden geweigerd', () => {
  assert.equal(sanitizeHtml('<a href="javascript:alert(1)">x</a>'), '<a>x</a>')
  assert.equal(sanitizeHtml('<a href="https://a.nl">x</a>'), '<a href="https://a.nl" rel="noopener">x</a>')
})

test('losse < en > worden tekst', () => {
  assert.equal(sanitizeHtml('a < b > c'), 'a &lt; b &gt; c')
  assert.equal(sanitizeHtml('<p>"x" & y</p>'), '<p>"x" &amp; y</p>')
})

test('opmaak van de boeken blijft ongewijzigd', () => {
  const html = '<div class="pg" id="p12"><span>12</span></div>\n<p class="cont"><span class="ayah">﴿وَأَحَلَّ اللَّهُ الْبَيْعَ﴾</span> <mark class="g">حكمه</mark></p>\n<div class="sharh">\n<p>شرح</p>\n</div>'
  assert.equal(sanitizeHtml(html), html)
})

test('hadith uit de opmaak halen, met paginanummer en geneste opmaak', async () => {
  const { extractHadith, lastPage } = await import('../lib/register.js')
  const body = '<p><span class="hadith">«إنما <b>الأعمال</b> بالنيات»</span></p><div class="pg" id="p7"><span>7</span></div><p>قال: <span class="hadith">«لا <span class="mark">ضرر</span> ولا ضرار»</span> وغيره</p>'
  assert.deepEqual(extractHadith(body, 6), [
    { text: '«إنما الأعمال بالنيات»', page: 6, position: 0 },
    { text: '«لا ضرر ولا ضرار»', page: 7, position: 1 }
  ])
  assert.equal(lastPage(body), 7)
  assert.deepEqual(extractHadith('<p>لا شيء</p>'), [])
})
