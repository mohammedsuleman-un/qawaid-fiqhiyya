import { connect } from './tidb-serverless.js'

// DATABASE_URL is een geheime instelling in Cloudflare Pages:
// mysql://gebruiker:wachtwoord@host:4000/zuiverebron
export function db (env) {
  if (!env.DATABASE_URL) throw new Error('DATABASE_URL ontbreekt')
  return connect({ url: env.DATABASE_URL })
}

export function json (data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  })
}

export const stripTags = (s) => s.replace(/<[^>]+>/g, '')
