# Presentations

One Markdown file here is one slide deck. The file name is the URL:

```
presentations/entr-150.md  →  /pres/entr-150/     (slide 1)
                           →  /pres/entr-150/#7   (slide 7)
```

Add a deck by adding a file:

```markdown
---
title: The title shown in the browser tab
description: One line, for link previews.
---

# A statement slide

Note:
Speaker notes. Press "n" while presenting to show them.

---

## A normal slide

Body text.

- a point
- another point
```

Images go in `public/pres/<deck-name>/` and are referenced by their full path
from the site root — Astro tries to bundle relative image paths, so keep them
absolute:

```markdown
![Samuel Moore Barrow](/pres/entr-150/samuel-moore-barrow.jpg "Tombstone, Arizona")
```

## Slide syntax

Slides are separated by a line containing only `---`. Within a slide:

| Write | Get |
| --- | --- |
| `# Heading` as the first line | A statement slide — deep olive, italic display type |
| `## Heading` | A normal paper slide |
| `### Stage N` plus a `## Name` | A slide that also draws the stage tracker across the top |
| `![Alt](photo.jpg "Label")` alone | A photo slide, matted and captioned |
| `→ text` | A hand-off line, ruled off below the body |
| `1.` list | Numbered rows with leading-zero counters |
| `-` list | Em-dash bullets |
| `Note:` | Everything after it is speaker notes, not shown on the slide |

## Presenting

| Key | Does |
| --- | --- |
| `→` `←` `space` `PgDn` `PgUp` | Next / previous slide |
| `Home` `End` | First / last slide |
| `f` | Fullscreen |
| `n` | Toggle speaker notes |

Clicking the right two-thirds of the slide advances; the left third goes back.
The URL hash tracks the current slide, so a link lands on the slide you were on.
