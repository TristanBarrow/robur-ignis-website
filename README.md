# Robur Ignis — website

Static marketing site. Astro + Tailwind v4, zero client-side framework.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve `dist/` locally to check the real build |

## Before going live

Everything you need to change is flagged `TODO` in the source. In order of importance:

1. **`src/config.ts`** — `calendlyUrl`, `stripePaymentLink`, `email`, `url`.
2. **`astro.config.mjs`** — `site` must be your real domain, or canonical
   URLs and the sitemap will point at the wrong place.
3. **`src/components/About.astro`** — replace the founder bio. This paragraph
   does most of the selling; specifics (systems, scale, years) beat adjectives.
4. **`src/components/Services.astro`** — set the real price on the Technical
   Review tier and the Stripe price ID.
5. **`public/robots.txt`** — update the sitemap domain.

## Wiring up Calendly

Simplest path is a plain link: set `calendlyUrl` in `src/config.ts` and you're
done — every CTA on the page already points at it.

For an inline embed instead, add Calendly's widget script to
`src/components/CallToAction.astro` and swap the anchor for their
`calendly-inline-widget` div. The commented block in that file marks the spot.

## Wiring up Stripe

The Technical Review tier is the buy-now product. Easiest approach that needs
no backend — which matters on static hosting:

1. Create a **Payment Link** in the Stripe dashboard.
2. Paste it into `stripePaymentLink` in `src/config.ts`.

That's it. Stripe hosts the checkout page, so nothing server-side is required.
If you later want Checkout Sessions with custom metadata, you'll need a small
serverless endpoint — which Namecheap shared hosting won't run, so that would
mean moving the site to Cloudflare Pages or Netlify, or hosting just the
endpoint elsewhere.

## Deploying to Namecheap

The site is fully static, so cPanel shared hosting is fine.

```bash
npm run build
```

Then upload **the contents of `dist/`** (not the folder itself) into
`public_html/` via cPanel File Manager or FTP. Include the `.htaccess` —
File Manager hides dotfiles until you enable "Show Hidden Files" in settings.

`public/.htaccess` already handles HTTPS redirect, www stripping, security
headers, compression and cache lifetimes.

### Cache note

Assets under `_astro/` are content-hashed, so they're cached for a year safely.
`index.html` is set to no-cache, so your edits appear immediately on deploy.

## Structure

```
src/
  config.ts              Site-wide values — edit here, not in components
  layouts/Layout.astro   <head>, SEO, JSON-LD, scroll-reveal observer
  components/            One file per page section
  pages/index.astro      Section order
  pages/404.astro
public/                  Copied verbatim to dist/ (.htaccess, favicon, robots)
```

## Design tokens

Defined once in `src/styles/global.css` under `@theme`. Tailwind v4 reads them
from CSS, not a JS config file.

Usage discipline that keeps the page looking deliberate:

- `black-forest` — dark canvas (hero, services, footer)
- `cornsilk` — light canvas, and text on dark
- `copperwood` — **primary CTAs only**, so the eye always finds the ask
- `sunlit-clay` — accent: eyebrows, rules, icons. A glint, not a flood
- `olive-leaf` — borders, dividers, muted mid-tone
