/**
 * Single source of truth for site-wide values.
 * Update these when the real accounts exist — nothing else needs to change.
 */
export const site = {
  name: "Robur Ignis",
  tagline: "The strength to withstand the fire.",
  description:
    "Senior engineering for AI-built software. Security, scalability and technical due diligence from engineers who built the infrastructure the internet runs on.",

  // TODO: replace with your production domain once DNS is pointed at Namecheap.
  url: "https://roburignis.com",

  email: "hello@roburignis.com",

  // TODO: replace with your real Calendly scheduling link.
  // e.g. "https://calendly.com/robur-ignis/intro-call"
  calendlyUrl: "#book",

  // TODO: replace with the live Stripe Payment Link for the fixed-price audit.
  // Create at https://dashboard.stripe.com/payment-links
  stripePaymentLink: "#book",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];
