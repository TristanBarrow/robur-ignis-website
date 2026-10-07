/**
 * Single source of truth for site-wide values.
 * Update these when the real accounts exist — nothing else needs to change.
 */
export const site = {
  name: "Robur Ignis",
  tagline: "The strength to withstand the fire.",
  description:
    "One-to-one coaching from an engineer with ten years of experience, for people building software with AI. Security, scalability and architecture, in focused one-hour sessions.",

  url: "https://robur-ignis.com",

  // TODO: switch to hello@robur-ignis.com once that mailbox exists.
  email: "tbfox32@gmail.com",

  // Free 30-minute intro call.
  bookingUrl: "https://cal.com/tristan-barrow-37tyc2/30min",

  // Stripe Payment Link for a $200 coaching session. Read from STRIPE_LINK at
  // build time (.env locally, a repo variable in CI); the link is hidden if unset.
  stripePaymentLink: import.meta.env.STRIPE_LINK as string | undefined,

  sessionPrice: 200,

  // Stripe promotion code shown beside the price. Set to undefined when it ends
  // and the site goes back to showing the full price only.
  promo: { code: "OAKFIRE", percentOff: 75 } as
    | { code: string; percentOff: number }
    | undefined,
};

export const promoPrice = site.promo
  ? Math.round(site.sessionPrice * (1 - site.promo.percentOff / 100))
  : undefined;

export const nav = [
  { label: "Coaching", href: "#services" },
  { label: "About", href: "#about" },
  ...(site.stripePaymentLink ? [{ label: "Payments", href: site.stripePaymentLink }] : []),
];
