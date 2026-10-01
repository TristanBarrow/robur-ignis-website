# Robur Ignis brand and page patterns

## Voice

- First person singular. Tristan speaks as "I" to one reader as "you". Never "we" or "our team"; the practice is one person, and that is part of the offer.
  > "I meet one-to-one with people who've built something with AI tools and want it checked for security, scale and structure before it carries real users."
- Plain and concrete. Name the real problem ("what happens when two requests arrive at once"), not the category.
- Sentence case for every heading, button and label: "How coaching works", "Book a free 30-min call", "On the name".
- One ask per page: the free 30-minute intro call. Button labels say what happens: "Choose a time".
- The motto: "Robur Ignis: the strength to withstand the fire." Robur is Latin for oak and strength (the root of *robust*); ignis is fire. Use it once, in a motto band with its explanation, never as a hero slogan.
- Error pages keep the oak metaphor lightly: "This branch didn't hold."

## Mark

The flame nut: an upturned acorn whose nut is a flame. Inline it at 24px in `--color-ember` beside "Robur Ignis" set in `--font-display`, 1.125rem, weight 600, tracking -0.025em. On `--color-green-deep` the name is `--color-paper`; the mark stays ember.

```html
<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--color-ember)" aria-hidden="true"><path d="M6.4 12.4C5.7 10.2 6.1 7.8 7.6 5.6C7.9 6.9 8.6 7.7 9.6 8.1C9.4 5.2 10.9 2.8 12.9 0.5C12.3 3.3 14.6 4.8 15.1 7.4C15.8 6.9 16.4 6.2 16.8 5.4C18.3 7.6 18.4 10.2 17.6 12.4Z"/><path d="M4.6 14.8C4.6 19 8 21.4 12 21.4C16 21.4 19.4 19 19.4 14.8C19.4 14 18.8 13.4 18 13.4H6C5.2 13.4 4.6 14 4.6 14.8Z"/><path d="M11.3 21.1C11.3 22.2 11.9 23.2 13.3 23.7L13.8 22.9C12.9 22.5 12.7 21.9 12.7 21.1Z"/></svg>
```

No icon set and no emoji. Use words.

## Page patterns

- **Nav.** Wordmark left; section links (0.875rem, `--color-ink-soft`, hover ember, no underline, hidden below 640px) and an always-visible "Book a call" (`.link`, weight 600, `--color-ember`) right; 1px `--color-rule` border below. Not sticky.
- **Hero.** `.grid-paper` ground. h1, lead paragraph, `.btn` plus a secondary `.link`. Optional portrait in a 20rem side column.
- **Portrait frame.** A print in a report: 1px border in ink at 80%, `--color-paper-deep` mat with 10px padding, 4:5 crop, `filter: saturate(0.9) contrast(1.04)`. Caption row below: name in `--font-display` 500 left, role as a `.label` in `--color-green` right.
- **Term list.** Two-column `<dl>`, 3rem column gap. Each item: 1px `--color-green` top border, 20px vertical padding; `<dt>` in `--font-display` 1.25rem/500 `--color-green`; `<dd>` in `--color-ink-soft`, max 28rem. Even number of items.
- **Ruled row (terms).** 2px `--color-ink` borders top and bottom, 20px padding. Left: price in `--font-display` 1.5rem/500 with a 1.125rem `--color-ink-soft` unit ("per one-hour session"). Right: conditions in `--color-ink-soft`, max 28rem.
- **Ruled row (closing ask).** 2px `--color-ink` top border only, 32px top padding. Left: `--font-display` 1.5rem/500 heading and one line. Right: `.btn`.
- **Section set apart.** `--color-paper-deep` ground. On it use `--color-ink-soft` for small text (`--color-ink-faint` falls below 4.5:1 there).
- **Motto band.** Full-bleed `--color-green-deep`. `.label` head at paper 65%; the motto in `--font-display` italic, `clamp(2rem,4.6vw,3.6rem)` / 1.1, `--color-paper`; two paragraphs at paper 80% side by side from 768px.
- **Footer.** `--color-green-deep`, 56px vertical padding. Wordmark (paper name) and one line left; link columns with `.label` heads right; copyright `.label` below a paper-15% hairline.

## States

- Focus: 2px solid `--color-ember` outline, 3px offset, 2px radius (from `styles.css`).
- Hover: links turn ember; `.btn` darkens to `--color-ember-deep`. 150ms ease on colour only.
- Respect `prefers-reduced-motion`. Nothing animates on load.
