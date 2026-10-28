// Testhulp: een verse lokale MariaDB-database (zb_test) die zich gedraagt als de
// TiDB-driver, en een aanroep van een route via dezelfde middleware als in productie.
// Nodig: een lokale MySQL/MariaDB met gebruiker zb/zb en rechten op zb_test
// (of TEST_DATABASE_URL=mysql://gebruiker:wachtwoord@host/database).
import mysql from 'mysql2/promise'
import { readFileSync } from 'node:fs'
import { onRequest as apiMiddleware } from '../functions/api/_middleware.js'
import { onRequest as adminMiddleware } from '../functions/api/admin/_middleware.js'

const URL_ = process.env.TEST_DATABASE_URL || 'mysql://zb:zb@localhost/zb_test'

export async function freshDb () {
  const url = new URL(URL_)
  const name = url.pathname.slice(1)
  const raw = await mysql.createConnection({
    host: url.hostname, port: url.port || 3306, user: url.username, password: url.password,
    dateStrings: true, supportBigNumbers: true, bigNumberStrings: true, multipleStatements: false
  })
  await raw.query(`DROP DATABASE IF EXISTS \`${name}\``)
  await raw.query(`CREATE DATABASE \`${name}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`)
  await raw.query(`USE \`${name}\``)
  const conn = {
    raw,
    queries: 0,
    async execute (sql, args = [], opts = {}) {
      conn.queries++
      const [res] = await raw.query(sql, args)
      if (opts.fullResult) return { rows: Array.isArray(res) ? res : [], lastInsertId: String(res.insertId ?? ''), rowsAffected: res.affectedRows }
      return Array.isArray(res) ? res : []
    },
    close: () => raw.end()
  }
  return conn
}

const ROOT = new URL('../', import.meta.url)
// Bestanden uit de repo serveren zoals env.ASSETS in Cloudflare Pages.
export const ASSETS = {
  fetch: async (url) => new Response(readFileSync(new URL('.' + decodeURIComponent(new URL(url).pathname), ROOT)))
}

// Cloudflare (gratis abonnement) staat per verzoek maximaal 50 subrequests toe; elke
// databasequery is er één. Elke route in de tests moet daar ruim onder blijven.
export const MAX_QUERIES = 45
export function checkQueries (n, label) {
  if (n > MAX_QUERIES) throw new Error(`${label} deed ${n} databasequeries (max ${MAX_QUERIES})`)
}

// Roept een API-route aan: call(conn, 'POST', '/api/admin/login', handlerModule, { body, cookie, params })
export async function call (conn, method, path, mod, { body, cookie, params = {}, ip = '1.2.3.4' } = {}) {
  const headers = { 'cf-connecting-ip': ip }
  if (body !== undefined) headers['content-type'] = 'application/json'
  if (cookie) headers.cookie = cookie
  const request = new Request('https://test.local' + path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) })
  const name = 'onRequest' + method[0] + method.slice(1).toLowerCase()
  const handler = mod[name] || mod.onRequest
  if (!handler) throw new Error(`Geen ${name} in route ${path}`)
  const context = { request, params, env: { conn, ASSETS }, data: {} }
  const chain = [apiMiddleware, ...(path.startsWith('/api/admin') ? [adminMiddleware] : []), handler]
  let i = 0
  context.next = () => chain[++i](context)
  const before = conn.queries
  const res = await chain[0](context)
  checkQueries(conn.queries - before, method + ' ' + path)
  const text = await res.text()
  let data
  try { data = JSON.parse(text) } catch { data = text }
  const setCookie = res.headers.get('set-cookie')
  return { status: res.status, data, cookie: setCookie ? setCookie.split(';')[0] : null, headers: res.headers }
}
