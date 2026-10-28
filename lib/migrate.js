// Voert de genummerde migraties uit db/migrations uit die nog niet in
// schema_migrations staan. Een stap is SQL-tekst of een functie (voor datamigraties).
import migrations from '../db/migrations/index.js'

async function runStep (conn, step) {
  if (typeof step === 'function') return step(conn)
  return conn.execute(step)
}

// Met max = 1 draait per aanroep één migratie (Cloudflare staat per verzoek maar 50
// databaseverzoeken toe); pending zegt hoeveel er daarna nog over zijn.
export async function migrate (conn, { max = Infinity } = {}) {
  await conn.execute(`CREATE TABLE IF NOT EXISTS schema_migrations (
    id INT PRIMARY KEY, name VARCHAR(120) NOT NULL, applied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)`)
  const done = new Set((await conn.execute('SELECT id FROM schema_migrations')).map((r) => Number(r.id)))
  const applied = []
  const todo = migrations.filter((m) => !done.has(m.id))
  for (const m of todo.slice(0, max)) {
    for (const step of m.up) await runStep(conn, step)
    await conn.execute('INSERT INTO schema_migrations (id, name) VALUES (?, ?)', [m.id, m.name])
    applied.push(m.name)
  }
  applied.pending = todo.length - applied.length
  return applied
}

// Draait de laatste migratie terug (alleen voor ontwikkeling en herstel).
export async function rollback (conn) {
  const [last] = await conn.execute('SELECT id FROM schema_migrations ORDER BY id DESC LIMIT 1')
  if (!last) return null
  const m = migrations.find((x) => x.id === Number(last.id))
  for (const step of m.down) await runStep(conn, step)
  await conn.execute('DELETE FROM schema_migrations WHERE id = ?', [m.id])
  return m.name
}
