import type { ImageMetadata } from 'astro';

/**
 * All wedding photographs, imported at build time so Astro can generate
 * responsive AVIF/WebP from the (very large) source JPGs.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.jpg',
  { eager: true },
);

const photos: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  const name = path.split('/').pop()!.replace('.jpg', '');
  photos[name] = mod.default;
}

/** Resolve a photo by its clean file name (throws early if a name is wrong). */
export function pic(name: string): ImageMetadata {
  const img = photos[name];
  if (!img) {
    throw new Error(
      `Photo "${name}" not found. Available: ${Object.keys(photos).join(', ')}`,
    );
  }
  return img;
}

/* ------------------------------------------------------------------ *
 *  Curation — which frame goes where.
 *  Captions are intentionally absent on the homepage (Madalena-style);
 *  `alt` text below exists purely for accessibility / SEO.
 * ------------------------------------------------------------------ */

export type Shot = { name: string; alt: string; image: ImageMetadata };

const ALT_FALLBACK = 'Wedding photograph by Stories Beyond Frames';

const ALT: Record<string, string> = {
  'viv00034': 'Couple twirling beneath a heritage stone archway during a pre-wedding shoot',
  'sbf-pn-4527': 'Bride and groom sharing a tender moment in red and ivory wedding attire',
  'sbf-sn-4858': 'Backlit black-and-white frame of a couple during the wedding ceremony',
  'sbfxshxsm-74': 'Couple walking through clouds of colour during a joyful celebration',
  'sbfxdivyaruchir-11': 'Couple during a pre-wedding portrait session outdoors',
  'sbf-pn-28': 'Intimate portrait of the bride and groom on the wedding day',
  'sbf-mm-46': 'Candid celebration moment with family and friends',
  'sbf-pr-17': 'Bride in traditional bridal jewellery and attire',
  'sbf-pr-56': 'Wedding celebration captured in available light',
  'sbfxrk-2': 'Couple portrait during a wedding shoot',
  'sbf-ah-3854': 'Wedding day moment captured candidly',
  'viv00363': 'Pre-wedding portrait of the couple',
  'sbf-sn-1607': 'Documentary frame from the wedding celebration',
  'viv00371': 'Pre-wedding portrait of the couple in soft light',
  'dsc00154': 'Wide frame of the wedding celebration',
};

const shot = (name: string): Shot => ({
  name,
  alt: ALT[name] ?? ALT_FALLBACK,
  image: pic(name),
});

/* Hero — a strong vertical frame + a second intimate frame for the caption block */
export const heroMain = shot('viv00034');
export const heroSecondary = shot('sbf-pn-4527');

/* Intro — "where our work takes us" (a tall frame beside the places line) */
export const places: Shot[] = [
  shot('sbf-sn-4858'),       // tall B&W
  shot('sbfxdivyaruchir-11'), // small landscape
];

/* Intro — the single "documentary" composition: 4 frames in an offbeat,
   overlapping cascade (P1 tall, P2 landscape, P3 tall, P4 portrait). */
export const documentary: Shot[] = [
  shot('sbfxrk-2'),           // P1 — tall portrait
  shot('sbfxshxsm-74'),       // P2 — landscape
  shot('sbfxdivyaruchir-12'), // P3 — tall portrait
  shot('viv00363'),           // P4 — portrait
];

/* Closing statement — two frames */
export const closing: Shot[] = [shot('viv00371'), shot('dsc00154')];

/* The portfolio grid — the centrepiece. Hand-ordered for rhythm
   (alternating orientation, distributing the dramatic B&W frames). */
export const grid: Shot[] = [
  'viv00034', 'sbfxshxsm-74', 'sbf-pn-4527', 'sbf-sn-4858', 'sbfxdn-17',
  'sbf-pr-19', 'sbfxkritikashivam-16', 'sbf-pn-1323', 'sbf-mm-46', 'sbf-ra-228',
  'sbfxrk-2', 'sbf-ah-3854', 'sbf-oa-3478', 'sbfxaa-50', 'sbf-sn-35',
  'sbf-pr-56', 'viv00363', 'sbfxdivyaruchir-11', 'sbf-pn-28', 'sbf-pn-3709',
  'sbfxas-78', 'sbf-sn-6672', 'sbf-mm-47', 'sbf-pr-17', 'sbfxdn-10',
  'sbf-ah-00734', 'sbf-sn-1607', 'sbfxrk-6', 'sbfxdivyaruchir-12', 'sbf-pn-4522',
  'sbfxas-33', 'viv00371', 'sbf-pn-514', 'sbfxshxsm-107', 'dsc00154',
].map(shot);

/* A few frames reused on secondary pages */
export const studioHero = shot('sbf-sn-4858');
export const experienceHero = shot('sbfxdivyaruchir-12');
export const experienceShots: Shot[] = [
  shot('sbf-pn-4522'), shot('sbfxas-78'), shot('viv00363'), shot('sbf-mm-47'),
];
export const contactHero = shot('sbf-sn-6672');
