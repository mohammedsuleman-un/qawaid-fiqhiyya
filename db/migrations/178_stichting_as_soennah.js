// Ibn al-Qayyim en de lessen van shaykh Abū Ismāʿīl zijn allebei instituten van Stichting
// As-Soennah (Mohammed, 8 nov 2026): één organisatie. Organisatie 2 gaat op in organisatie 1,
// met haar instituten en gekoppelde beheerders.
export default {
  id: 178,
  name: 'stichting-as-soennah',
  up: [
    "UPDATE organizations SET name_nl = 'Stichting As-Soennah', name_ar = 'مؤسسة السنة' WHERE id = 1",
    'UPDATE institutes SET organization_id = 1 WHERE organization_id = 2',
    'INSERT IGNORE INTO user_organizations (user_id, organization_id) SELECT user_id, 1 FROM user_organizations WHERE organization_id = 2',
    'DELETE FROM user_organizations WHERE organization_id = 2',
    "DELETE FROM organizations WHERE id = 2 AND name_nl = 'Shaykh Abū Ismāʿīl'"
  ],
  down: [
    "UPDATE organizations SET name_nl = 'Instituut Ibn Al-Qayyim', name_ar = 'معهد ابن القيم للعلوم الشرعية' WHERE id = 1"
  ]
}
