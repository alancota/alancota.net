# Field Note images — sizing guideline

Images for Field Notes live here. Reference them from MDX with a relative
import, then pass to a media component (`<Figure>`, `<Gallery>`). Astro's
native pipeline optimizes and generates responsive `srcset` automatically, so
you author once and the browser fetches the right size.

```mdx
import shot from '../../assets/field-notes/my-photo.jpg';

<Figure src={shot} alt="Describe the image." caption="Optional, only if needed." />
```

## Source files (what you commit here)

Keep the committed source modest — Astro re-encodes for delivery, but a heavy
source bloats the repo permanently.

- **Format:** photos → `.jpg` (or `.webp`); diagrams/screenshots with flat
  color or text → `.png`. Never commit a multi-megabyte photo as PNG.
- **Dimensions:** cap the long edge at **~2000px**. That's already 2×+ for any
  place we display an image; more is wasted bytes.
- **Weight:** aim for **≤ ~1 MB** per source image (most land well under).
- **Quick recipe (macOS, no deps):**
  ```bash
  sips -Z 2000 -s format jpeg -s formatOptions 88 INPUT.png --out output.jpg
  ```

## Display size (how big it renders)

Match the treatment to the image's shape and role:

- **Tall / portrait photos** → cap them. Pass `maxWidth` (e.g.
  `maxWidth="22rem"`, ~352px) so the figure centers and reads as quiet
  evidence instead of a full-screen plate. A portrait at full column width is
  ~1.3× the column in height and dominates the page.
- **Landscape photos, diagrams** → the default (text column width) is fine;
  no cap needed.
- **Wider than the text needs** → use `variant="wide"` or `variant="full"` to
  break out of the reading measure (see the prose grid in `global.css`).
- **Captions:** only when they add meaning (naming, sourcing). Keep them short.
  No caption is the default.
