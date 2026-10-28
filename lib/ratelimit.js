// Eenvoudige rate limiting in de database: maximaal `limit` keer per `seconds` per bucket.
export async function allow (conn, bucket, limit, seconds) {
  await conn.execute(`INSERT INTO rate_limits (bucket, hits, window_start) VALUES (?, 1, NOW())
    ON DUPLICATE KEY UPDATE
      hits = IF(window_start < NOW() - INTERVAL ${Number(seconds)} SECOND, 1, hits + 1),
      window_start = IF(window_start < NOW() - INTERVAL ${Number(seconds)} SECOND, NOW(), window_start)`, [bucket])
  const [row] = await conn.execute('SELECT hits FROM rate_limits WHERE bucket = ?', [bucket])
  return Number(row.hits) <= limit
}
