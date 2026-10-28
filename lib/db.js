import { connect } from './tidb-serverless.js'

// DATABASE_URL is een geheime instelling in Cloudflare Pages:
// mysql://gebruiker:wachtwoord@host:4000/database
// In tests geeft env.conn een verbinding met een lokale database.
export function db (env) {
  if (env.conn) return env.conn
  if (!env.DATABASE_URL) throw new Error('DATABASE_URL ontbreekt')
  return connect({ url: env.DATABASE_URL })
}

export const stripTags = (s) => String(s ?? '').replace(/<[^>]+>/g, '')
