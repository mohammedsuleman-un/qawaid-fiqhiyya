# qawaid-fiqhiyya
Interactive reference of major Islamic fiqh maxims (rabic) with Quran/Sunnah evidence and examples

## Zuivere bron op Cloudflare en TiDB

- `functions/`: Cloudflare Pages Functions.
  - Openbaar: `/bibliotheek`, `/boek/<slug>`, `/boek/<slug>/<hoofdstuk>`, `/artikel/<slug>`, `/hadith` (alle hadith per hoofdstuk), `/personen`, `/persoon/<slug>`, `/zad` (4 niveaus × 7 vakken) (allemaal met `?lang=ar|nl`), `/api/books`, `/api/search`, `/api/categories`, `POST /api/feedback`.
  - Registers: hadith worden automatisch verzameld uit de opmaak `<span class="hadith">` bij elke publicatie (tabel `hadith_index`); bron en beoordeling vult een medewerker in onder Beheer > Hadith. Personen staan in `persons` met hun biografie als artikel (soort `person`, beginwaarden in `db/seed/personen.js`, als concept).
  - ZAD: boeken met `zad_level`/`zad_subject`, lessen met eenheid en beginpagina, tabellen `glossary_terms` en `questions` (voor toetsen). Import via Beheer > Boeken > "ZAD-boek importeren" (formaat: `lib/zad.js`, altijd als concept).
  - Beheer: `/api/admin/*`, gebruikt door de beheeromgeving in `beheer/` (`/beheer/`).
  - `POST /api/setup` voert per aanroep één databasemigratie uit (of vult een lege database met één boek uit `db/seed/`); herhaal tot `done: true`.
- `lib/`: accounts en sessies (`auth.js`), rollen en rechten (`rbac.js`), workflow (`workflow.js`), inhoud (`content.js`, `library.js`), HTML-opschoning (`sanitize.js`), weergave (`render.js`).
- `db/migrations/`: genummerde migraties met `up` en `down`. Een nieuwe migratie komt onderaan in `db/migrations/index.js`.
- Cloudflare staat per verzoek (gratis abonnement) maar 50 subrequests toe en elke databasequery is er één. De tests controleren dat elke route er ruim onder blijft.
- Cloudflare-instellingen: geheim `DATABASE_URL` = `mysql://gebruiker:wachtwoord@host:4000/zuiverebron`.

### Lokaal ontwikkelen en testen

Nodig: Node 20+ en een lokale MySQL of MariaDB met een gebruiker `zb` (wachtwoord `zb`) die databases `zb_test` en `zb_dev` mag aanmaken.

- `npm install` en daarna `npm test`: rechten, 2FA, workflow, feedback, opschoning en de omzetting van de eerste versie zonder tekstverlies.
- `TEST_DATABASE_URL=mysql://zb:zb@localhost/zb_dev node scripts/dev-server.mjs`: de hele site op http://localhost:8788 met een lege database (roep `POST /api/setup` een paar keer aan om hem te vullen).
