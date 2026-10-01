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

  // TODO: replace with the live Stripe Payment Link for a $200 coaching session
  // (send it after the free intro call; not linked from the site yet).
  // Create at https://dashboard.stripe.com/payment-links
  stripePaymentLink: "#book",
};

export const nav = [
  { label: "Coaching", href: "#services" },
  { label: "About", href: "#about" },
];
