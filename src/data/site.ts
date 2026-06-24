/**
 * Single source of truth for studio details + nav.
 * Everything here is plain text so it can be edited in seconds.
 */
export const site = {
  name: 'Stories Beyond Frames',
  shortName: 'SBF',
  tagline: 'Where beautiful stories begin',
  description:
    'Candid wedding photography & films, documenting the emotions, traditions and magic of your love story. Based in India, available worldwide.',
  email: 'hello@storiesbeyondframes.com',
  instagram: { handle: '@storiesbeyondframes', url: 'https://www.instagram.com/storiesbeyondframes' },
  // Placeholder — swap with the studio's real number.
  phone: { label: '+91 98765 43210', href: 'tel:+919876543210' },
  // Web3Forms access key — paste a key from web3forms.com to make the
  // contact form deliver to the studio inbox. Left blank → graceful demo mode.
  web3formsKey: '',
  url: 'https://stories-beyond-frame.shutterselect.com',
} as const;

export const nav = [
  { label: 'The Studio', href: '/the-studio/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Contact', href: '/contact/' },
] as const;
