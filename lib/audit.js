// Auditlog: alleen toevoegen. details bevat nooit wachtwoorden of tokens.
export async function audit (conn, user, action, entityType = null, entityId = null, details = null) {
  await conn.execute('INSERT INTO audit_logs (user_id, action, entity_type, entity_id, details) VALUES (?, ?, ?, ?, ?)',
    [user?.id ?? null, action, entityType, entityId == null ? null : String(entityId), details ? JSON.stringify(details) : null])
}
