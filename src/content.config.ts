import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Articles live in /articles at the repo root, one Markdown file each.
// The file name becomes the URL: articles/hacked.md → /articles/hacked/
// *.linkedin.md files hold social post drafts and are never published.
const articles = defineCollection({
  loader: glob({ base: "./articles", pattern: ["**/*.md", "!**/*.linkedin.md"] }),
  schema: z.object({
    title: z.string(),
    // Shown under the title and used as the page's meta description.
    description: z.string(),
    pubDate: z.coerce.date(),
    // Share image for link previews, a path under public/ (1200×630).
    image: z.string().optional(),
  }),
});

export const collections = { articles };
