# Stories Beyond Frames — demo studio website

A flagship **sample site** built by Shutter Select to show photography-studio clients
what we can build for them. It is modelled on the candid, documentary Indian-wedding studio
*Stories Beyond Frames*, using their logo and photographs.

The homepage is an image-first, editorial portfolio (the work appears after one scroll),
inspired by the minimal aesthetic of madalenatavares.net and warmed for the Indian context.

---

## Tech stack

- **[Astro](https://astro.build)** (static output) — build-time image optimization turns the
  large source JPGs into responsive **AVIF/WebP**, so the site stays fast and luxurious.
- **Hand-written CSS** with design tokens (`src/styles/`) — no template, fully bespoke.
- **[Lenis](https://github.com/darkroomengineering/lenis)** smooth scroll + IntersectionObserver
  reveals + Astro View Transitions + a subtle gallery cursor.
- Self-hosted **Fraunces** (display serif) + **Jost** (UI sans) via `@fontsource`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # static site → ./dist
npm run preview  # preview the production build
```

## Deploy

The output in `./dist` is fully static — deploy to **Vercel**, **Netlify**, Cloudflare Pages,
or any static host. On Vercel/Netlify just import the repo; the framework is auto-detected
(build: `npm run build`, output: `dist`).

## Editing content

Almost everything lives in a few obvious places — no code knowledge needed for copy changes:

| What | Where |
|---|---|
| Studio name, email, phone, Instagram, nav | `src/data/site.ts` |
| Which photo appears where (hero, collage, grid, pages) | `src/data/photos.ts` |
| Homepage copy & sections | `src/components/home/*.astro` |
| The Studio / Experience / Contact pages | `src/pages/*.astro` |
| Colours, fonts, spacing | `src/styles/tokens.css` |

### Photos
Drop new images into `src/assets/photos/` (use simple lowercase names, e.g. `couple-01.jpg`),
then reference them in `src/data/photos.ts`. Astro optimizes them automatically — originals can
be full-resolution.

### Make the contact form deliver email
The form works in a **demo mode** out of the box (shows a success message without sending).
To deliver real enquiries, create a free key at [web3forms.com](https://web3forms.com) and paste
it into `web3formsKey` in `src/data/site.ts`. Submissions then go to the studio inbox — no
backend or server required.

## Placeholders to swap before going live
- Founder/team names, roles and portraits — `src/pages/the-studio.astro`
- Phone number — `src/data/site.ts`
- The testimonial — `src/components/home/Testimonial.astro`
- Web3Forms key (see above)

---

*Crafted by Shutter Select.*
