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
    // The LinkedIn post that shares this article, linked at the end of the page.
    linkedin: z.string().optional(),
  }),
});

// Client quotes live in /testimonials, one Markdown file each; the body is the quote.
const testimonials = defineCollection({
  loader: glob({ base: "./testimonials", pattern: ["**/*.md", "!README.md"] }),
  schema: z.object({
    name: z.string(),
    // Job title and company, shown under the name.
    role: z.string().optional(),
    // Newest first on the page.
    date: z.coerce.date(),
    // A profile (e.g. LinkedIn) the name links to.
    link: z.url().optional(),
  }),
});

// Slide decks live in /presentations, one Markdown file each. The file name
// becomes the URL: presentations/entr-150.md → /pres/entr-150/, and the hash is
// the slide number: /pres/entr-150/#4. Slides are separated by a "---" line and
// rendered in the browser by src/pages/pres/[deck].astro, so only this
// frontmatter is read here — the body is passed through as plain text.
const presentations = defineCollection({
  loader: glob({ base: "./presentations", pattern: ["**/*.md", "!README.md"] }),
  schema: z.object({
    // The browser tab's title while presenting.
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { articles, testimonials, presentations };
