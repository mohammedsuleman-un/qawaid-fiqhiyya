// Een uitnodiging kan voor een organisatie zijn (ook een organisatie zonder instituten):
// het nieuwe account hoort daarna bij die organisatie (Mohammed, 8 nov 2026).
export default {
  id: 180,
  name: 'uitnodiging-organisatie',
  up: ['ALTER TABLE invitations ADD COLUMN organization_id INT NULL'],
  down: ['ALTER TABLE invitations DROP COLUMN organization_id']
}
