// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Fully static output — deployed to GitHub Pages by .github/workflows/deploy.yml.
export default defineConfig({
  site: "https://robur-ignis.com",
  vite: {
    plugins: [tailwindcss()],
  },
  // Short links only forward elsewhere, and slide decks are for a room, not
  // search, so keep both out of the sitemap.
  integrations: [
    sitemap({ filter: (page) => !/\/(book-a-call|presentation)\/$/.test(page) && !page.includes("/pres/") }),
  ],
});
