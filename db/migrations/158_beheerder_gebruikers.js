// Beheerders mogen gebruikers uitnodigen en rollen wijzigen (users.manage), net als de
// superbeheerder. Een superbeheerder aanwijzen, wijzigen, verwijderen of een herstellink
// voor hem maken blijft voorbehouden aan een superbeheerder (zie de routes).
export default {
  id: 158,
  name: 'beheerder-gebruikers',
  up: [
    "INSERT IGNORE INTO role_permissions (role_code, permission_code) VALUES ('admin', 'users.manage')"
  ],
  down: [
    "DELETE FROM role_permissions WHERE role_code = 'admin' AND permission_code = 'users.manage'"
  ]
}
