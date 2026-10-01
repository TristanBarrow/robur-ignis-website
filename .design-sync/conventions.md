# Robur Ignis — building with this design system

Robur Ignis is a one-person engineering coaching practice (Tristan Barrow). The look is **engineering paper**: green-white paper, green structure, and a red pen (ember) used only for the one thing the reader should do. There are **no React components** in this system: build your own markup and style it with the tokens and classes below.

## Setup

Nothing to wrap. `styles.css` loads the Google fonts, the tokens (`tokens/tokens.css`) and the classes (`_ds_bundle.css`), and styles `body` (paper ground, ink text, Public Sans). It also applies a small reset: zero margins on headings, paragraphs and lists, unstyled lists, and links that inherit colour with no underline (add `.link` for the underline). Set spacing explicitly. Read those two files before styling.

## Tokens (CSS custom properties, use via `var(--…)`)

| Role | Tokens |
|---|---|
| Grounds | `--color-paper` (page), `--color-paper-deep` (a section set apart, photo mat), `--color-green-deep` (full-bleed dark bands, footer) |
| Text | `--color-ink` (headings), `--color-ink-soft` (paragraphs), `--color-ink-faint` (mono labels on paper only) |
| Structure | `--color-green` (1px rules over lists, term headings), `--color-rule` (section hairlines) |
| The ask | `--color-ember` (booking button, ask links, hover, notes, focus), `--color-ember-deep` (button hover) |
| Type | `--font-display` (Besley: headings, name), `--font-sans` (Public Sans: text, controls), `--font-mono` (IBM Plex Mono: labels) |

On `--color-green-deep`, set headings in `--color-paper` and paragraphs in paper at 80% opacity; labels at 65%; dividers at 15%.

## Classes

- `.btn`: the only button. Ember fill, paper text, 5px radius. Use only for booking the free intro call, at most once or twice per page.
- `.link`: every other action. Underline in currentColor at 35%, turns ember on hover.
- `.label`: 12px mono caption or running head, sentence case (never uppercase).
- `.note`: red-pen margin note in ember mono, beside the paragraph it annotates.
- `.grid-paper`: 24px engineering-pad grid. Hero section only.

## Rules

- Structure comes from rules, not boxes: no cards, no shadows (except `.btn`'s), no rounded containers. Separate sections with a 1px `--color-rule` border; put a 1px `--color-green` rule above each item in a term list; close a pricing or booking row with 2px `--color-ink` rules top and bottom.
- Headings: `--font-display`, weight 500, tracking -0.015em to -0.02em, sentence case. Hero h1 `clamp(2.2rem,4.8vw,3.75rem)` / 1.08; section h2 `clamp(1.9rem,3.6vw,2.75rem)` / 1.12.
- Paragraphs: 1.125rem / 1.625 in `--color-ink-soft`, max width 42rem. Content column max width 72rem with 24px (32px from 1024px) side padding; sections pad 80px (112px from 1024px) vertically.
- Copy: first person singular ("I", never "we"), to one reader ("you"). Plain, concrete, no hype, no emoji, no exclamation marks. Prices stated flatly: "$200 per one-hour session".

## Example

```jsx
<section className="grid-paper" style={{ padding: '80px 24px' }}>
  <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
    <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(2.2rem,4.8vw,3.75rem)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: '48rem', margin: 0 }}>
      Get an experienced engineer's eyes on what you built with AI.
    </h1>
    <p style={{ marginTop: 32, maxWidth: '36rem', fontSize: '1.125rem', lineHeight: 1.625, color: 'var(--color-ink-soft)' }}>
      I meet one-to-one with people who've built something with AI tools.
    </p>
    <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: '16px 28px', alignItems: 'center' }}>
      <a className="btn" href="https://cal.com/tristan-barrow-37tyc2/30min">Book a free 30-min call</a>
      <a className="link" href="#services" style={{ color: 'var(--color-ink-soft)' }}>How sessions work</a>
    </div>
  </div>
</section>
```

More patterns (nav, term list, ruled rows, portrait frame, motto band, footer): `guidelines/brand.md`.
