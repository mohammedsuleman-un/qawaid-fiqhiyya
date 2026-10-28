// Tabellen voor de bibliotheek. /api/setup voert dit uit; elke opdracht mag vaker draaien (IF NOT EXISTS).
export default `
CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(120) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(500) NOT NULL DEFAULT '',
  pdf VARCHAR(500) NOT NULL DEFAULT '',
  status VARCHAR(16) NOT NULL DEFAULT 'published',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Eén rij per blok in leesvolgorde: page (paginanummer), heading, p, cont
-- (alinea die doorloopt van de vorige pagina), sharh of side (kantnotitie).
-- html bewaart de opmaak per spreker; plain is de genormaliseerde tekst om op te zoeken.
CREATE TABLE IF NOT EXISTS blocks (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  book_id INT NOT NULL,
  position INT NOT NULL,
  page INT NULL,
  kind VARCHAR(16) NOT NULL,
  anchor VARCHAR(32) NULL,
  html MEDIUMTEXT NOT NULL,
  plain MEDIUMTEXT NOT NULL,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_by VARCHAR(255) NULL,
  KEY book_position (book_id, position)
);

-- Elke vorige versie van een blok, zodat een wijziging teruggedraaid kan worden.
CREATE TABLE IF NOT EXISTS block_revisions (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  block_id BIGINT NOT NULL,
  html MEDIUMTEXT NOT NULL,
  edited_by VARCHAR(255) NULL,
  edited_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY block_id (block_id)
);

-- Beheerders: owner (mag beheerders uitnodigen) of editor.
CREATE TABLE IF NOT EXISTS admins (
  email VARCHAR(255) PRIMARY KEY,
  role VARCHAR(16) NOT NULL DEFAULT 'editor'
);
ALTER TABLE admins ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255) NULL;
ALTER TABLE admins ADD COLUMN IF NOT EXISTS created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Inlogsessies en uitnodigingen. Tokens staan alleen als SHA-256-hash in de database.
CREATE TABLE IF NOT EXISTS sessions (
  token_hash CHAR(64) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  expires_at DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS invites (
  token_hash CHAR(64) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(16) NOT NULL DEFAULT 'editor',
  created_by VARCHAR(255) NULL,
  expires_at DATETIME NOT NULL
);
`
