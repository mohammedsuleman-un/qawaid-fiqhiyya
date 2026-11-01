// Bevestigingsmail na aanmelden: inhoud per taal en het verzoek aan Resend.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sendMail, welcomeMail } from '../lib/mail.js'

test('bevestigingsmail in het Nederlands en het Arabisch', () => {
  const nl = welcomeMail({ name: 'Amina <b>', email: 'amina@example.org', lang: 'nl', origin: 'https://zuiverebron.nl' })
  assert.equal(nl.to, 'amina@example.org')
  assert.match(nl.subject, /account is aangemaakt/)
  assert.match(nl.html, /dir="ltr"/)
  assert.match(nl.html, /Amina &lt;b&gt;/)
  assert.ok(!nl.html.includes('<b>,'))
  assert.match(nl.html, /href="https:\/\/zuiverebron\.nl\/student\/"/)
  assert.match(nl.text, /https:\/\/zuiverebron\.nl\/student\//)
  const ar = welcomeMail({ name: 'أمينة', email: 'a@example.org', lang: 'ar', origin: 'https://zuiverebron.nl' })
  assert.match(ar.html, /dir="rtl"/)
  assert.match(ar.subject, /النبع الصافي/)
  assert.match(ar.html, /\/student\/\?lang=ar/)
})

test('sendMail stuurt naar Resend en slaat over zonder sleutel', async () => {
  const calls = []
  const fake = async (url, opts) => { calls.push({ url, opts }); return new Response('{"id":"x"}', { status: 200 }) }
  const msg = { to: 'a@example.org', subject: 'S', html: '<p>h</p>', text: 't' }
  assert.deepEqual(await sendMail({}, msg, fake), { skipped: true })
  assert.equal(calls.length, 0)
  assert.deepEqual(await sendMail({ RESEND_API_KEY: 're_test' }, msg, fake), { ok: true })
  assert.equal(calls[0].url, 'https://api.resend.com/emails')
  assert.equal(calls[0].opts.headers.authorization, 'Bearer re_test')
  const sent = JSON.parse(calls[0].opts.body)
  assert.equal(sent.from, 'De Zuivere Bron <noreply@zuiverebron.nl>')
  assert.deepEqual(sent.to, ['a@example.org'])
  const bad = async () => new Response('nee', { status: 422 })
  assert.equal((await sendMail({ RESEND_API_KEY: 'k' }, msg, bad)).ok, false)
  const boom = async () => { throw new Error('netwerk') }
  assert.equal((await sendMail({ RESEND_API_KEY: 'k' }, msg, boom)).ok, false)
})
