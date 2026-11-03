/**
 * Single source of truth for site-wide values.
 * Update these when the real accounts exist — nothing else needs to change.
 */
export const site = {
  name: "Robur Ignis",
  tagline: "The strength to withstand the fire.",
  // What the homepage is about in the words people search with; used as its <title>.
  homeTitle: "DORA Metrics & Software Delivery Consulting",
  description:
    "Tristan Barrow helps software teams ship faster without breaking things, using DORA metrics to find the bottleneck, fix it and prove it worked.",
  // Share image used when a page doesn't set its own (1200×630, under public/).
  defaultImage: "/og/default.png",
  logo: "/favicon.svg",
  founder: "Tristan Barrow",

  url: "https://robur-ignis.com",

  email: "tristan@roburignis.com",

  // Free 60-minute consultation.
  bookingUrl: "https://cal.com/tristan-barrow-9wq2vs/robur-ignis-intro",

  // Cloudflare Web Analytics beacon token. Read from CF_ANALYTICS_TOKEN at build
  // time (.env locally, a repo variable in CI); no tracking script if unset.
  analyticsToken: import.meta.env.CF_ANALYTICS_TOKEN as string | undefined,
};

export const nav = [
  { label: "How it works", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Articles", href: "/articles/" },
];
