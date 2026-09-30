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
  integrations: [sitemap()],
});
