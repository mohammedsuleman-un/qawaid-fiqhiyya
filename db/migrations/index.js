// Alle migraties, in volgorde. Een nieuwe migratie krijgt het volgende nummer en komt hier onderaan.
import basis from './001_basis.js'
import accounts from './002_accounts.js'
import inhoud from './003_inhoud.js'
import omzetting from './004_omzetting.js'
import registers from './005_registers.js'
import zad from './006_zad.js'
import zadAqeedah1 from './007_zad_aqeedah1.js'
import personenPerBoek from './008_personen_per_boek.js'
import publiceerAqeedah1 from './009_publiceer_zad_aqeedah1.js'
import studiekaart1 from './010_studiekaart_aqeedah1_les1.js'
import hoofdstukkaart1 from './011_hoofdstukkaart_aqeedah1_eenheid1.js'
import hoofdstukkaarten2tot4 from './012_hoofdstukkaarten_aqeedah1_eenheid2_4.js'

export default [basis, accounts, inhoud, omzetting, registers, zad, zadAqeedah1, personenPerBoek, publiceerAqeedah1, studiekaart1, hoofdstukkaart1, hoofdstukkaarten2tot4]
