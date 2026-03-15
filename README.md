# Oliver Still — Portfolio Site

Personal portfolio built with React + TypeScript + Vite + Tailwind CSS.

## Design

**Palette:** C2 — Cool Slate + Terracotta  
**Fonts:** Instrument Serif (display) + Plus Jakarta Sans (body)  
**Theme:** Light-first with dark mode toggle, warm personality-led aesthetic

## Pages

- **Home** — Hero, capabilities overview, expandable case study cards
- **Journey** — Career timeline with scroll-triggered animations
- **About** — Personal interests and personality
- **Contact** — mailto link + social links

## Setup

### If migrating from the existing project

1. Replace your `src/` directory with this one
2. Replace `index.html` with the new version (adds Google Fonts)
3. Ensure these dependencies are installed:

```bash
npm install react-router-dom motion @radix-ui/react-icons clsx tailwind-merge
npm install -D tailwindcss @tailwindcss/vite tailwindcss-animate
```

4. Your existing `vite.config.ts` should work as-is — just ensure the `@` path alias points to `./src`
5. You can remove these dependencies that are no longer used:
   - `@headlessui/react`
   - `class-variance-authority`
   - `@radix-ui/react-slot`
   - `@radix-ui/react-label`

### Fresh setup

```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install react-router-dom motion @radix-ui/react-icons clsx tailwind-merge
npm install -D tailwindcss @tailwindcss/vite tailwindcss-animate
```

Add the Tailwind plugin to `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

## Deployment

Deploy to Vercel with zero config — connect the repo and it auto-detects Vite.

For client-side routing, add `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Customisation notes

- **Palette:** All colours are defined as CSS variables in `src/index.css` — change the `:root` and `.dark` blocks to update the entire site
- **Content:** Case studies, timeline data, and about page content are defined as data arrays within each page component — easy to update without touching layout code
- **Fonts:** Loaded via Google Fonts in `index.html` and referenced in CSS variables

## Images

All images live in `public/images/`. The site uses graceful fallbacks — if an image isn't found, the element hides itself rather than showing a broken icon.

### What to add

| Path                        | Used on                     | Notes                                                                      |
| --------------------------- | --------------------------- | -------------------------------------------------------------------------- |
| `images/profile.jpg`        | Home hero                   | Headshot or professional photo. Displayed at ~224×256px, cropped to fill.  |
| `images/about/portrait.jpg` | About page header           | Casual/personal photo. Same crop behaviour.                                |
| `images/about/music.jpg`    | About page, Music section   | Studio, gig, or production setup. Displayed at max 384px wide, 160px tall. |
| `images/about/running.jpg`  | About page, Running section | Race photo or similar. Same dimensions.                                    |

### Logo tips

- SVGs work best — they scale cleanly and support dark mode
- If using PNGs, use transparent backgrounds and at least 200×200px
- Logos display at 36–48px inside a rounded container, so keep them simple
