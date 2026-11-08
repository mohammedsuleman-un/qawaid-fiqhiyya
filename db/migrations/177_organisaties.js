// Organisaties boven instituten (Mohammed, 8 nov 2026). Een organisatie heeft één of meer
// instituten; beheerders die aan een organisatie gekoppeld zijn, zien en beheren alle instituten
// van die organisatie en niets van andere organisaties. Alleen de superbeheerder maakt
// organisaties aan en koppelt beheerders. Startindeling: Ibn al-Qayyim en shaykh Abū Ismāʿīl
// elk een eigen organisatie; bestaande beheerders komen in de organisatie van hun instituten.
export default {
  id: 177,
  name: 'organisaties',
  up: [
    `CREATE TABLE IF NOT EXISTS organizations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name_nl VARCHAR(255) NOT NULL,
      name_ar VARCHAR(255) NOT NULL,
      position INT NOT NULL DEFAULT 0
    )`,
    `CREATE TABLE IF NOT EXISTS user_organizations (
      user_id INT NOT NULL,
      organization_id INT NOT NULL,
      PRIMARY KEY (user_id, organization_id),
      KEY organization_id (organization_id)
    )`,
    'ALTER TABLE institutes ADD COLUMN organization_id INT NULL',
    `INSERT INTO organizations (id, name_nl, name_ar, position) VALUES
      (1, 'Instituut Ibn Al-Qayyim', 'معهد ابن القيم للعلوم الشرعية', 1),
      (2, 'Shaykh Abū Ismāʿīl', 'الشيخ أبو إسماعيل', 2)`,
    "UPDATE institutes SET organization_id = 1 WHERE slug = 'ibn-al-qayyim'",
    "UPDATE institutes SET organization_id = 2 WHERE slug = 'abu-ismail-usul-al-fiqh'",
    `INSERT IGNORE INTO user_organizations (user_id, organization_id)
      SELECT DISTINCT ui.user_id, i.organization_id FROM user_institutes ui
      JOIN institutes i ON i.id = ui.institute_id
      JOIN user_roles r ON r.user_id = ui.user_id AND r.role_code = 'admin'
      WHERE i.organization_id IS NOT NULL`
  ],
  down: [
    'ALTER TABLE institutes DROP COLUMN organization_id',
    'DROP TABLE IF EXISTS user_organizations',
    'DROP TABLE IF EXISTS organizations'
  ]
}
