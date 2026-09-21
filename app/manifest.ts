import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} Specialty Coffee House`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#38383B',
    theme_color: '#38383B',
    lang: 'ru',
    icons: [
      {
        src: '/favicon92.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any'
      }
    ]
  };
}
