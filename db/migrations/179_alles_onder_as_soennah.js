// Alle bestaande gebruikers (behalve superbeheerders) en alle instituten zonder organisatie
// komen onder Stichting As-Soennah (organisatie 1) (Mohammed, 8 nov 2026). Zo ziet een
// beheerder van een latere organisatie niemand van As-Soennah.
export default {
  id: 179,
  name: 'alles-onder-as-soennah',
  up: [
    'UPDATE institutes SET organization_id = 1 WHERE organization_id IS NULL',
    `INSERT IGNORE INTO user_organizations (user_id, organization_id)
      SELECT u.id, 1 FROM users u WHERE NOT EXISTS (SELECT 1 FROM user_roles r WHERE r.user_id = u.id AND r.role_code = 'superadmin')`
  ],
  down: []
}
