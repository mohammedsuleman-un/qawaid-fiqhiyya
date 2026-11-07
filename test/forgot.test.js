// "Wachtwoord vergeten?": zelf een herstellink aanvragen zonder te verraden of een
// e-mailadres bestaat, met rate limiting, en de tweetalige herstelmail.
import { test, after } from 'node:test'
import assert from 'node:assert/strict'
import { freshDb, call } from './helpers.js'
import { migrate } from '../lib/migrate.js'
import { hashPassword } from '../lib/auth.js'
import { resetMail } from '../lib/mail.js'
import * as forgot from '../functions/api/admin/forgot-password.js'

const conn = await freshDb()
after(() => conn.close())
const resets = async () => (await conn.execute('SELECT user_id, used_at, expires_at < NOW() + INTERVAL 61 MINUTE AS short FROM password_resets'))
const ask = (email, ip = '1.2.3.4') => call(conn, 'POST', '/api/admin/forgot-password', forgot, { body: { email, lang: 'ar', from: 'student' }, ip })

test('installatie', async () => {
  await migrate(conn)
  await conn.execute("INSERT INTO users (email, name, password_hash, status) VALUES ('amina@example.org', 'Amina', ?, 'active')", [await hashPassword('een-lang-wachtwoord')])
})

test('zelfde antwoord voor bekend en onbekend adres; alleen bekend krijgt een link', async () => {
  const known = await ask('Amina@example.org')
  const unknown = await ask('niemand@example.org')
  assert.equal(known.status, 200)
  assert.deepEqual(known.data, unknown.data)
  assert.equal(unknown.status, 200)
  const rows = await resets()
  assert.equal(rows.length, 1)
  assert.equal(Number(rows[0].short), 1) // 1 uur geldig
  assert.equal((await ask('geen-adres')).status, 400)
})

test('een nieuwe aanvraag laat de oude link vervallen', async () => {
  await ask('amina@example.org', '5.6.7.8')
  const rows = await resets()
  assert.equal(rows.length, 2)
  assert.equal(rows.filter((r) => r.used_at === null).length, 1)
})

test('rate limiting: per adres stil, per IP met 429', async () => {
  await ask('amina@example.org', '9.9.9.9') // 3e voor dit adres
  const before = (await resets()).length
  const r = await ask('amina@example.org', '9.9.9.8') // 4e: stil overgeslagen
  assert.equal(r.status, 200)
  assert.equal((await resets()).length, before)
  for (let i = 0; i < 5; i++) assert.equal((await ask(`x${i}@example.org`, '7.7.7.7')).status, 200)
  assert.equal((await ask('x9@example.org', '7.7.7.7')).status, 429)
})

test('herstelmail: eerst Arabisch, daarna Nederlands, met de link', () => {
  const link = 'https://zuiverebron.nl/student/?herstel=abc&lang=ar'
  const m = resetMail({ email: 'a@example.org', name: 'Amina', link, origin: 'https://zuiverebron.nl' })
  const ar = m.html.indexOf('dir="rtl" lang="ar"')
  const nl = m.html.indexOf('dir="ltr" lang="nl" style')
  assert.ok(m.html.indexOf('De Nederlandse tekst staat hieronder') < ar && ar < nl)
  assert.ok(/^[؀-ۿ]/.test(m.subject))
  assert.equal(m.html.split('herstel=abc&amp;lang=ar').length - 1, 2)
  assert.match(m.text, /herstel=abc&lang=ar/)
  assert.match(m.html, /1 uur geldig/)
})
