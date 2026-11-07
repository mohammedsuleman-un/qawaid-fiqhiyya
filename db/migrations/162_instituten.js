// Instituten: groepen, weekrooster, jaarrooster, agenda en boeken horen bij een instituut,
// zodat later meer instituten op het platform kunnen. Een boek kan bij meer instituten
// horen. Beheerders, redacteuren en docenten worden aan één of meer instituten gekoppeld
// en zien alleen die; een superbeheerder ziet alles. Alles wat er al is, gaat naar het
// eerste instituut: معهد ابن القيم للعلوم الشرعية / Instituut Ibn Al-Qayyim.
const AGENDA = ['schedule_blocks', 'calendar_days', 'agenda_items']

export default {
  id: 162,
  name: 'instituten',
  up: [
    `CREATE TABLE IF NOT EXISTS institutes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(64) NOT NULL,
      name_nl VARCHAR(255) NOT NULL DEFAULT '',
      name_ar VARCHAR(255) NOT NULL DEFAULT '',
      position INT NOT NULL DEFAULT 0,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY slug (slug)
    )`,
    `INSERT IGNORE INTO institutes (id, slug, name_nl, name_ar, position)
      VALUES (1, 'ibn-al-qayyim', 'Instituut Ibn Al-Qayyim', 'معهد ابن القيم للعلوم الشرعية', 1)`,
    `CREATE TABLE IF NOT EXISTS user_institutes (
      user_id INT NOT NULL,
      institute_id INT NOT NULL,
      PRIMARY KEY (user_id, institute_id),
      KEY institute_id (institute_id)
    )`,
    `CREATE TABLE IF NOT EXISTS book_institutes (
      book_id INT NOT NULL,
      institute_id INT NOT NULL,
      PRIMARY KEY (book_id, institute_id),
      KEY institute_id (institute_id)
    )`,
    'ALTER TABLE class_groups ADD COLUMN institute_id INT NOT NULL DEFAULT 1',
    'ALTER TABLE class_groups DROP INDEX code',
    'ALTER TABLE class_groups ADD UNIQUE KEY institute_code (institute_id, code)',
    ...AGENDA.flatMap((t) => [`ALTER TABLE ${t} ADD COLUMN institute_id INT NOT NULL DEFAULT 1`, `ALTER TABLE ${t} ADD KEY institute_id (institute_id)`]),
    "ALTER TABLE invitations ADD COLUMN institutes VARCHAR(255) NOT NULL DEFAULT ''",
    'INSERT IGNORE INTO book_institutes (book_id, institute_id) SELECT id, 1 FROM books',
    `INSERT IGNORE INTO user_institutes (user_id, institute_id)
      SELECT DISTINCT user_id, 1 FROM user_roles WHERE role_code IN ('admin', 'editor', 'teacher')`,
    "INSERT IGNORE INTO permissions (code, name_nl, name_ar) VALUES ('institutes.manage', 'Instituten aanmaken en beheerders koppelen', 'إدارة المعاهد وربط المشرفين بها')",
    "INSERT IGNORE INTO role_permissions (role_code, permission_code) VALUES ('superadmin', 'institutes.manage')"
  ],
  down: [
    "DELETE FROM role_permissions WHERE permission_code = 'institutes.manage'",
    "DELETE FROM user_permissions WHERE permission_code = 'institutes.manage'",
    "DELETE FROM permissions WHERE code = 'institutes.manage'",
    'ALTER TABLE invitations DROP COLUMN institutes',
    ...AGENDA.flatMap((t) => [`ALTER TABLE ${t} DROP INDEX institute_id`, `ALTER TABLE ${t} DROP COLUMN institute_id`]),
    'ALTER TABLE class_groups DROP INDEX institute_code',
    'ALTER TABLE class_groups ADD UNIQUE KEY code (code)',
    'ALTER TABLE class_groups DROP COLUMN institute_id',
    'DROP TABLE IF EXISTS book_institutes', 'DROP TABLE IF EXISTS user_institutes', 'DROP TABLE IF EXISTS institutes'
  ]
}
