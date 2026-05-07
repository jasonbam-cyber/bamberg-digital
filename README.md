# Bamberg Digital

Marketing site and customer portal for **Bamberg Digital** — Sacramento-based digital agency. Production at [bambergdigital.com](https://www.bambergdigital.com).

## Stack

- **Framework:** Next.js 16 (Turbopack, App Router)
- **UI:** React 19, Tailwind CSS 4, custom CSS tokens
- **3D / motion:** Three.js + `@react-three/fiber`, GSAP, Lenis
- **Payments:** Square (agency retainers — Starter / Growth / Premium)
- **Email:** Nodemailer (Gmail SMTP) for contact form, SendGrid for newsletter
- **Data:** Supabase (newsletter subscribers, send log)
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel (auto-deploy from `main`)

## Local development

```bash
git clone <repo> bamberg-digital
cd bamberg-digital
npm install
cp .env.example .env.local       # fill in real values
npm run dev                      # http://localhost:3000
```

### Available scripts

| Script           | Purpose                                    |
| ---------------- | ------------------------------------------ |
| `npm run dev`    | Local dev server (Turbopack, port 3000)    |
| `npm run build`  | Production build + TypeScript check        |
| `npm run start`  | Serve production build locally             |
| `npm run lint`   | ESLint (Next.js + TypeScript flat config)  |

## Environment variables

All env vars live in `.env.local` for local dev and in **Vercel Project Settings → Environment Variables** for staging/production. Never commit `.env.local`. See `.env.example` for the canonical list.

### Site

| Variable               | Purpose                                |
| ---------------------- | -------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (used in OG, sitemap) |

### Contact form (Gmail SMTP via Google Workspace App Password)

| Variable             | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `SMTP_USER`          | Authenticated sender (Workspace mailbox)                 |
| `SMTP_APP_PASSWORD`  | Google App Password (no spaces) — generate at https://myaccount.google.com/apppasswords |
| `CONTACT_TO_EMAIL`   | Delivery recipient (defaults to `info@bambergdigital.com`) |
| `CONTACT_WEBHOOK_URL`| Optional fallback webhook if SMTP not configured         |

### Square (agency retainer billing)

| Variable                        | Purpose                                                    |
| ------------------------------- | ---------------------------------------------------------- |
| `SQUARE_ACCESS_TOKEN`           | Production OAuth token                                     |
| `SQUARE_ENVIRONMENT`            | `production` or `sandbox`                                  |
| `SQUARE_LOCATION_ID`            | Square location for invoices/subscriptions                 |
| `SQUARE_WEBHOOK_SIGNATURE_KEY`  | HMAC key from Square webhook subscription                  |
| `SQUARE_WEBHOOK_URL`            | Full HTTPS URL configured in Square (used for HMAC verify) |
| `ADMIN_API_KEY`                 | Required for `/api/stripe/subscriptions` admin endpoint    |

### Newsletter (Supabase + SendGrid)

| Variable                     | Purpose                                          |
| ---------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SUPABASE_URL`   | Project URL                                      |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key (client-safe)                        |
| `SUPABASE_SERVICE_ROLE_KEY`  | Service role (server only)                       |
| `SENDGRID_API_KEY`           | SendGrid API key                                 |
| `NEWSLETTER_FROM_EMAIL`      | Verified sender (e.g. `jason@bambergdigital.com`)|
| `NEWSLETTER_FROM_NAME`       | Display name (defaults to `Bamberg Digital`)     |
| `CRON_SECRET`                | Bearer token required by `/api/cron/newsletter`  |

## Routes

### Marketing pages (static)

`/`, `/about`, `/atelier`, `/agentic-ai`, `/ai-integration`, `/branding`, `/bundles`, `/consulting`, `/contact`, `/content-creation`, `/custom-tools`, `/digital-marketing`, `/leads`, `/portfolio`, `/pricing`, `/privacy`, `/seo`, `/social-media`, `/story`, `/terms`, `/web-design`, `/work/layer-ui`, `/blueprints/[id]` (50+ static industry blueprints).

### Demos (static, `noindex`)

`/demo/dental`, `/demo/nodpod`, `/demo/nodpod-luxury` — full-page Atelier-grade demos used in sales conversations. Excluded from search via `src/app/demo/layout.tsx`.

### Customer portal (dynamic, `noindex`)

`/portal` — Square invoice lookup by email. Posts to `/api/stripe/portal`.

### API routes

| Path                              | Method | Purpose                                                                 |
| --------------------------------- | ------ | ----------------------------------------------------------------------- |
| `/api/contact`                    | POST   | Contact form. Honeypot, per-IP rate limit (5/min), email validation, Gmail SMTP send. |
| `/api/subscribe`                  | POST   | Newsletter opt-in. Per-IP rate limit, Supabase upsert, welcome email.   |
| `/api/unsubscribe`                | POST   | One-click unsubscribe by token (or email). Rate limited.                |
| `/api/cron/newsletter`            | GET    | Vercel Cron (Mon 16:00 UTC). Bearer-protected. Sends current newsletter to all `subscribed` rows. |
| `/api/stripe/checkout`            | POST   | Creates Square payment link for selected plan. Email validated, rate limited. |
| `/api/stripe/portal`              | POST   | Looks up Square customer + invoices by email. Rate limited.             |
| `/api/stripe/subscriptions`       | GET    | Admin-only (header `x-admin-key`) — list all Square subscriptions + stats. |
| `/api/stripe/webhook`             | POST   | **Square webhook receiver.** Verifies `x-square-hmacsha256-signature` against `SQUARE_WEBHOOK_SIGNATURE_KEY` (constant-time). Routes payment / invoice / subscription events to structured logs picked up by the Sentinel/Slack alert pipeline. |

> Note: the `/api/stripe/*` URL prefix is historical — these routes drive **Square** for the agency billing system. Stripe is not used on this property.

## Square integration

1. **Customer creates retainer** via `/pricing` → frontend POSTs to `/api/stripe/checkout` with selected plan + email + business name.
2. Server validates plan + email, looks up or creates a Square customer, then creates a `paymentLinks` checkout. Customer is redirected to Square-hosted checkout.
3. After payment, Square redirects back to `/portal?success=true&plan=…`.
4. Square dispatches webhook events to `/api/stripe/webhook`. Signatures are verified using HMAC-SHA256 of `SQUARE_WEBHOOK_URL + rawBody` and constant-time compared against the `x-square-hmacsha256-signature` header.
5. Customer can return to `/portal` later and look up invoices by email via `/api/stripe/portal`.

Plan definitions are the single source of truth in `src/lib/square.ts` (`PLANS` const). Edit there to change pricing/features.

## Security

- **Strict CSP** + HSTS + Permissions-Policy + X-Content-Type-Options + Referrer-Policy on every route (see `next.config.ts`).
- All public POST endpoints have per-IP in-memory rate limiting (5–10/minute) and input validation.
- Contact form has a honeypot field (`website`) plus length/email validation.
- Square webhook verifies HMAC signature with `crypto.timingSafeEqual` on equal-length buffers.
- Newsletter cron is bearer-token protected (`CRON_SECRET`).
- Admin subscription listing requires `x-admin-key` header matching `ADMIN_API_KEY`.
- `/api/`, `/portal/` excluded in `public/robots.txt`.

## Deploy

Pushes to `main` auto-deploy to Vercel.

```bash
git push origin main
```

Vercel runs `npm run build` (Turbopack + TypeScript). Environment variables are set in Vercel Project Settings — they must be present for both **Preview** and **Production** environments. The Vercel Cron schedule is committed in `vercel.json`.

To deploy a preview branch:

```bash
git push origin <branch-name>     # creates a Vercel preview URL
```

## Project layout

```
src/
  app/                  Next.js App Router
    api/                API routes (contact, subscribe, square webhooks)
    blueprints/[id]/    50+ industry blueprint detail pages
    demo/               Sales demo pages (noindex)
    layout.tsx          Root layout — fonts, JSON-LD, metadata, security headers
    page.tsx            Home — renders <HomeNarrative />
  components/
    blueprints/         Layout variants (Hero, Grid, Gallery, Sidebar, etc.)
    canvas/             Three.js / R3F scene components
    motion/             GSAP + magnetic-button helpers
    HomeNarrative.tsx   Long-form home scrollytelling
    SiteNav.tsx         Top navigation
    SiteFooter.tsx      Footer
    ContactForm.tsx     Contact form (POSTs to /api/contact)
    NewsletterForm.tsx  Inline newsletter form
  data/
    catalog.ts          Industry catalog (50+ blueprints)
    newsletter.ts       Current week's newsletter content
  lib/
    square.ts           Square SDK client + PLANS config
    supabase-admin.ts   Server-only Supabase service-role client
public/
  robots.txt
  sitemap.xml
  screenshots/          Blueprint preview imagery
```

## Owner / contact

Jason Bamberg — `jason@bambergdigital.com`
