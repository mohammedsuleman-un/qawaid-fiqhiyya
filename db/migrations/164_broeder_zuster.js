// Studenten kiezen bij het aanmelden of ze broeder of zuster zijn (users.gender: 'm' of 'f').
// Zo kan een student alleen in een groep van broeders of van zusters komen.
export default {
  id: 164,
  name: 'broeder-zuster',
  up: ['ALTER TABLE users ADD COLUMN gender CHAR(1) NULL'],
  down: ['ALTER TABLE users DROP COLUMN gender']
}
