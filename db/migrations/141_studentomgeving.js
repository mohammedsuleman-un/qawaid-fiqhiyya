// Studentenomgeving: boeken op je profiel, voortgang per les, studieplanning, geplande
// toetsen (door docenten) en toetspogingen. Vragen uit de vragenbank tellen pas mee als
// ze zijn goedgekeurd (status 'published'); daarvoor krijgt questions wie en wanneer.
export default {
  id: 141,
  name: 'studentomgeving',
  up: [
    `CREATE TABLE IF NOT EXISTS student_books (
      user_id INT NOT NULL,
      book_id INT NOT NULL,
      added_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (user_id, book_id)
    )`,
    `CREATE TABLE IF NOT EXISTS lesson_progress (
      user_id INT NOT NULL,
      chapter_id INT NOT NULL,
      done_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (user_id, chapter_id)
    )`,
    `CREATE TABLE IF NOT EXISTS study_plans (
      user_id INT NOT NULL,
      book_id INT NOT NULL,
      start_date DATE NOT NULL,
      target_date DATE NOT NULL,
      PRIMARY KEY (user_id, book_id)
    )`,
    `CREATE TABLE IF NOT EXISTS tests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      book_id INT NOT NULL,
      title_nl VARCHAR(255) NOT NULL DEFAULT '',
      title_ar VARCHAR(255) NOT NULL DEFAULT '',
      units VARCHAR(255) NOT NULL DEFAULT '',
      question_count INT NOT NULL DEFAULT 10,
      time_limit_min INT NULL,
      max_attempts INT NOT NULL DEFAULT 1,
      opens_at DATETIME NOT NULL,
      closes_at DATETIME NOT NULL,
      info_nl TEXT NULL,
      info_ar TEXT NULL,
      status VARCHAR(16) NOT NULL DEFAULT 'published',
      created_by INT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      KEY book_id (book_id),
      KEY opens_at (opens_at)
    )`,
    `CREATE TABLE IF NOT EXISTS test_attempts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      test_id INT NULL,
      book_id INT NOT NULL,
      lang CHAR(2) NOT NULL DEFAULT 'nl',
      units VARCHAR(255) NOT NULL DEFAULT '',
      questions MEDIUMTEXT NOT NULL,
      answers MEDIUMTEXT NULL,
      score DECIMAL(7,2) NULL,
      max_score DECIMAL(7,2) NULL,
      late TINYINT(1) NOT NULL DEFAULT 0,
      started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      deadline_at DATETIME NULL,
      submitted_at DATETIME NULL,
      KEY user_id (user_id),
      KEY test_id (test_id)
    )`,
    'ALTER TABLE questions ADD COLUMN IF NOT EXISTS reviewed_by INT NULL',
    'ALTER TABLE questions ADD COLUMN IF NOT EXISTS reviewed_at DATETIME NULL',
    `INSERT IGNORE INTO permissions (code, name_nl, name_ar) VALUES
      ('tests.manage', 'Toetsen plannen en resultaten bekijken', 'جدولة الاختبارات والاطلاع على النتائج')`,
    `INSERT IGNORE INTO role_permissions (role_code, permission_code) VALUES
      ('superadmin', 'tests.manage'), ('admin', 'tests.manage'), ('teacher', 'tests.manage')`
  ],
  down: [
    "DELETE FROM role_permissions WHERE permission_code = 'tests.manage'",
    "DELETE FROM user_permissions WHERE permission_code = 'tests.manage'",
    "DELETE FROM permissions WHERE code = 'tests.manage'",
    'ALTER TABLE questions DROP COLUMN IF EXISTS reviewed_at',
    'ALTER TABLE questions DROP COLUMN IF EXISTS reviewed_by',
    'DROP TABLE IF EXISTS test_attempts', 'DROP TABLE IF EXISTS tests', 'DROP TABLE IF EXISTS study_plans',
    'DROP TABLE IF EXISTS lesson_progress', 'DROP TABLE IF EXISTS student_books'
  ]
}
