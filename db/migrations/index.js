// Alle migraties, in volgorde. Een nieuwe migratie krijgt het volgende nummer en komt hier onderaan.
import basis from './001_basis.js'
import accounts from './002_accounts.js'
import inhoud from './003_inhoud.js'
import omzetting from './004_omzetting.js'
import registers from './005_registers.js'
import zad from './006_zad.js'

export default [basis, accounts, inhoud, omzetting, registers, zad]
