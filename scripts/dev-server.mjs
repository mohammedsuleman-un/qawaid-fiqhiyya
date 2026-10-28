// Lokale ontwikkelserver: draait de Pages Functions tegen een lokale MySQL/MariaDB
// (zelfde adapter als de tests) en serveert de statische bestanden.
// Gebruik: TEST_DATABASE_URL=mysql://zb:zb@localhost/zb_dev node scripts/dev-server.mjs [poort]
// Let op: de database in TEST_DATABASE_URL wordt bij het starten leeggemaakt en opnieuw opgebouwd.
import { createServer } from 'node:http'
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs'
import { join, extname } from 'node:path'
import { pathToFileURL } from 'node:url'
import { freshDb, ASSETS } from '../test/helpers.js'

const root = new URL('..', import.meta.url).pathname
const conn = await freshDb()
const routes = []
const middleware = []

function walk (dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) { walk(full); continue }
    if (!name.endsWith('.js')) continue
    const rel = full.slice(join(root, 'functions').length).replace(/\.js$/, '')
    if (name === '_middleware.js') { middleware.push({ prefix: rel.replace(/\/_middleware$/, '') || '', file: full }); continue }
    const pattern = rel.replace(/\/index$/, '').replace(/\[(\w+)\]/g, '(?<$1>[^/]+)')
    routes.push({ re: new RegExp('^' + (pattern || '/') + '/?$'), file: full, static: !rel.includes('[') })
  }
}
walk(join(root, 'functions'))
routes.sort((a, b) => b.static - a.static)
middleware.sort((a, b) => a.prefix.length - b.prefix.length)

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.pdf': 'application/pdf', '.svg': 'image/svg+xml' }

async function handle (request) {
  const url = new URL(request.url)
  const path = decodeURIComponent(url.pathname)
  const route = routes.find((r) => r.re.test(path))
  if (!route) {
    let file = join(root, path)
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
    if (!existsSync(file)) return new Response('Niet gevonden', { status: 404 })
    return new Response(readFileSync(file), { headers: { 'content-type': TYPES[extname(file)] || 'application/octet-stream' } })
  }
  const mod = await import(pathToFileURL(route.file))
  const handler = mod['onRequest' + request.method[0] + request.method.slice(1).toLowerCase()] || mod.onRequest
  if (!handler) return new Response('Methode niet toegestaan', { status: 405 })
  const chain = []
  for (const m of middleware) if (path === m.prefix || path.startsWith(m.prefix + '/')) chain.push((await import(pathToFileURL(m.file))).onRequest)
  chain.push(handler)
  const context = { request, params: path.match(route.re).groups || {}, env: { conn, ASSETS }, data: {} }
  let i = 0
  context.next = () => chain[++i](context)
  return chain[0](context)
}

const port = Number(process.argv[2]) || 8788
createServer(async (req, res) => {
  const chunks = []
  for await (const c of req) chunks.push(c)
  const request = new Request('http://localhost:' + port + req.url, {
    method: req.method, headers: { ...req.headers, 'cf-connecting-ip': '127.0.0.1' }, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks)
  })
  try {
    const out = await handle(request)
    res.writeHead(out.status, Object.fromEntries(out.headers))
    res.end(Buffer.from(await out.arrayBuffer()))
  } catch (err) { console.error(err); res.writeHead(500); res.end(String(err)) }
}).listen(port, () => console.log('http://localhost:' + port))
