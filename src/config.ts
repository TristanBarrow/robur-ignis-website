/**
 * Single source of truth for site-wide values.
 * Update these when the real accounts exist — nothing else needs to change.
 */
export const site = {
  name: "Robur Ignis",
  tagline: "The strength to withstand the fire.",
  description:
    "Help from an engineer with ten years of experience, for companies building software with AI. Spec-based harnesses, code visualization and practical AI workflows.",

  url: "https://robur-ignis.com",

  email: "tristan@roburignis.com",

  // Free 60-minute introduction session.
  bookingUrl: "https://cal.com/tristan-barrow-9wq2vs/robur-ignis-intro",

  // Cloudflare Web Analytics beacon token. Read from CF_ANALYTICS_TOKEN at build
  // time (.env locally, a repo variable in CI); no tracking script if unset.
  analyticsToken: import.meta.env.CF_ANALYTICS_TOKEN as string | undefined,
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Articles", href: "/articles/" },
];
