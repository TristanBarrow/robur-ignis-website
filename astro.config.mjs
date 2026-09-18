// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Fully static output — deploys to Namecheap cPanel by uploading dist/ to public_html/.
export default defineConfig({
  // TODO: must match your real domain for canonical URLs and the sitemap.
  site: "https://roburignis.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
