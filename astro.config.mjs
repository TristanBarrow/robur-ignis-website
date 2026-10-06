// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// The dev server doesn't serve index.html for folders in public/, so point
// /presentation at the slide deck there. Static hosting already does this.
/** @type {import("vite").Plugin} */
const presentationIndex = {
  name: "presentation-index",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === "/presentation" || req.url === "/presentation/") {
        req.url = "/presentation/index.html";
      }
      next();
    });
  },
};

// Fully static output — deployed to GitHub Pages by .github/workflows/deploy.yml.
export default defineConfig({
  site: "https://robur-ignis.com",
  vite: {
    plugins: [tailwindcss(), presentationIndex],
  },
  integrations: [sitemap()],
});
