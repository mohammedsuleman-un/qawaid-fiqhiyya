// Accounts, rollen en rechten, uitnodigingen, sessies, auditlog en rate limiting.
// Zet de bestaande beheerders over naar users (owner wordt superbeheerder).
import { ROLES, PERMISSIONS, ROLE_PERMISSIONS } from '../../lib/rbac.js'
import { insertMany } from '../../lib/content.js'

export default {
  id: 2,
  name: 'accounts',
  up: [
    `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255) NOT NULL DEFAULT '',
      password_hash VARCHAR(255) NULL,
      status VARCHAR(16) NOT NULL DEFAULT 'active',
      lang CHAR(2) NOT NULL DEFAULT 'nl',
      totp_secret VARCHAR(64) NULL,
      totp_enabled TINYINT(1) NOT NULL DEFAULT 0,
      last_login_at DATETIME NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS roles (
      code VARCHAR(32) PRIMARY KEY,
      name_nl VARCHAR(64) NOT NULL,
      name_ar VARCHAR(64) NOT NULL,
      rank_order INT NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS permissions (
      code VARCHAR(64) PRIMARY KEY,
      name_nl VARCHAR(128) NOT NULL,
      name_ar VARCHAR(128) NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS role_permissions (
      role_code VARCHAR(32) NOT NULL,
      permission_code VARCHAR(64) NOT NULL,
      PRIMARY KEY (role_code, permission_code)
    )`,
    `CREATE TABLE IF NOT EXISTS user_roles (
      user_id INT NOT NULL,
      role_code VARCHAR(32) NOT NULL,
      PRIMARY KEY (user_id, role_code)
    )`,
    `CREATE TABLE IF NOT EXISTS user_permissions (
      user_id INT NOT NULL,
      permission_code VARCHAR(64) NOT NULL,
      granted TINYINT(1) NOT NULL,
      PRIMARY KEY (user_id, permission_code)
    )`,
    `CREATE TABLE IF NOT EXISTS invitations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      token_hash CHAR(64) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL,
      role_code VARCHAR(32) NOT NULL,
      invited_by INT NULL,
      expires_at DATETIME NOT NULL,
      accepted_at DATETIME NULL,
      revoked_at DATETIME NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      KEY email (email)
    )`,
    'DROP TABLE IF EXISTS sessions',
    `CREATE TABLE sessions (
      token_hash CHAR(64) PRIMARY KEY,
      user_id INT NOT NULL,
      mfa_ok TINYINT(1) NOT NULL DEFAULT 0,
      expires_at DATETIME NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      KEY user_id (user_id)
    )`,
    `CREATE TABLE IF NOT EXISTS password_resets (
      token_hash CHAR(64) PRIMARY KEY,
      user_id INT NOT NULL,
      expires_at DATETIME NOT NULL,
      used_at DATETIME NULL
    )`,
    `CREATE TABLE IF NOT EXISTS audit_logs (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NULL,
      action VARCHAR(64) NOT NULL,
      entity_type VARCHAR(32) NULL,
      entity_id VARCHAR(64) NULL,
      details TEXT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      KEY created_at (created_at),
      KEY user_id (user_id)
    )`,
    `CREATE TABLE IF NOT EXISTS rate_limits (
      bucket VARCHAR(128) PRIMARY KEY,
      hits INT NOT NULL,
      window_start DATETIME NOT NULL
    )`,
    async (conn) => {
      await insertMany(conn, 'roles', ['code', 'name_nl', 'name_ar', 'rank_order'], ROLES.map((r) => [r.code, r.nl, r.ar, r.rank]))
      await insertMany(conn, 'permissions', ['code', 'name_nl', 'name_ar'], PERMISSIONS.map((p) => [p.code, p.nl, p.ar]))
      await insertMany(conn, 'role_permissions', ['role_code', 'permission_code'],
        Object.entries(ROLE_PERMISSIONS).flatMap(([role, perms]) => perms.map((p) => [role, p])), 100)
    },
    // Bestaande beheerders en open uitnodigingen overzetten.
    `INSERT INTO users (email, password_hash, created_at)
      SELECT email, password_hash, created_at FROM admins WHERE password_hash IS NOT NULL`,
    `INSERT INTO user_roles (user_id, role_code)
      SELECT u.id, CASE WHEN a.role = 'owner' THEN 'superadmin' ELSE 'editor' END
      FROM admins a JOIN users u ON u.email = a.email`,
    `INSERT INTO invitations (token_hash, email, role_code, expires_at)
      SELECT token_hash, email, CASE WHEN role = 'owner' THEN 'superadmin' ELSE 'editor' END, expires_at
      FROM invites WHERE expires_at > NOW()`
  ],
  down: [
    'DROP TABLE IF EXISTS rate_limits', 'DROP TABLE IF EXISTS audit_logs', 'DROP TABLE IF EXISTS password_resets',
    'DROP TABLE IF EXISTS sessions',
    `CREATE TABLE sessions (token_hash CHAR(64) PRIMARY KEY, email VARCHAR(255) NOT NULL, expires_at DATETIME NOT NULL)`,
    'DROP TABLE IF EXISTS invitations', 'DROP TABLE IF EXISTS user_permissions', 'DROP TABLE IF EXISTS user_roles',
    'DROP TABLE IF EXISTS role_permissions', 'DROP TABLE IF EXISTS permissions', 'DROP TABLE IF EXISTS roles',
    'DROP TABLE IF EXISTS users'
  ]
}
