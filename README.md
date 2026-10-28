# qawaid-fiqhiyya
Interactive reference of major Islamic fiqh maxims (rabic) with Quran/Sunnah evidence and examples

## Zuivere bron op Cloudflare en TiDB

- `functions/`: Cloudflare Pages Functions. `/boek/<slug>` toont een boek uit de database, `/api/books`, `/api/books/<slug>` en `/api/search?q=` geven JSON, `POST /api/setup` maakt de tabellen aan en vult een lege database.
- `lib/`: databaseverbinding (TiDB serverless driver), Arabische normalisatie voor zoeken, de boekpagina.
- `db/schema.js`: tabellen. `db/seed/`: boeken als JSON, gemaakt met `npm run seed` uit de statische boekmappen.
- Cloudflare-instellingen: geheim `DATABASE_URL` = `mysql://gebruiker:wachtwoord@host:4000/zuiverebron`.
