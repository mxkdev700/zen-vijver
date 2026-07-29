# ZenVijver — multilingual pond business site

Angular 22 standalone app for a Dutch pond company.

## Stack

- Angular 22 (standalone components, `@if` / `@for`, Signals)
- Bootstrap 5 (SCSS) + Bootstrap Icons
- `@ngx-translate/core` — Dutch (`nl`), Ukrainian (`uk`), Russian (`ru`)

## Scripts

```bash
npm start      # http://localhost:4200
npm run build  # production build → dist/ponds-website
```

> **Node:** Angular 22 requires Node `^22.22.3 || ^24.15.0 || >=26`.

## Structure

```
src/app/
  core/           # language + cookie consent services, models
  shared/         # header, footer, cookie banner, validators
  layout/         # main shell
  features/       # home, ponds, gallery, contact
src/assets/i18n/  # nl.json, uk.json, ru.json
```

## Pages

| Route        | Description                                      |
|--------------|--------------------------------------------------|
| `/`          | Home showcase                                    |
| `/ponds`     | Vijverconcepten (pond concepts with tabs)        |
| `/gallery`   | Ons Werk (project gallery)                       |
| `/contact`   | Contact + quote reactive forms                   |

Cookie consent (AVG/GDPR) persists to `localStorage` under `zenvijver.cookieConsent`.
Language preference persists under `zenvijver.lang`.
