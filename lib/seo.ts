import { contact, yandexReviews } from '@/data/content';

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
  if (explicit) return explicit;

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, '');
  if (vercelProd) return `https://${vercelProd}`;

  const vercelUrl = process.env.VERCEL_URL?.replace(/\/$/, '');
  if (vercelUrl) return `https://${vercelUrl}`;

  return 'http://localhost:3000';
}

export const SITE = {
  name: '92°',
  legalName: '92° Coffee House',
  title: '92° — Specialty Coffee House в Ташкенте',
  ogTitle: '92° — Specialty Coffee House | Кофейня в Ташкенте',
  description:
    '92° — специализированная кофейня в Ташкенте (Мирзо-Улугбек). Эспрессо, пуровер и авторские напитки при 92°. Адрес, часы работы и QR-меню.',
  keywords: [
    '92°',
    '92 degrees',
    '92degree',
    'кофейня Ташкент',
    'specialty coffee Tashkent',
    'кофе Мирзо-Улугбек',
    'эспрессо Ташкент',
    'пуровер Ташкент',
    'кофейня 92 градуса'
  ],
  streetAddress: 'S-1 Buyuk Ipak Yoʻli dahasi, 6',
  addressLocality: 'Tashkent',
  addressRegion: 'Mirzo Ulugbek',
  addressCountry: 'UZ',
  postalAddressRu: 'Ташкент, Мирзо-Улугбекский район, С-1 Большой Ипак Йўли дахаса, 6'
} as const;

export function getJsonLd() {
  const siteUrl = getSiteUrl();
  const images = [
    `${siteUrl}/assets/inside_2.webp`,
    `${siteUrl}/assets/inside_with_coffe.webp`,
    `${siteUrl}/assets/IMGL0418-3_resized.webp`
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE.name,
        alternateName: ['92 Degrees', '92degree', '92 Coffee'],
        description: SITE.description,
        inLanguage: ['ru', 'en', 'uz'],
        publisher: { '@id': `${siteUrl}/#business` }
      },
      {
        '@type': 'CafeOrCoffeeShop',
        '@id': `${siteUrl}/#business`,
        name: SITE.name,
        alternateName: ['92 Degrees', '92degree', '92 Coffee'],
        description: SITE.description,
        url: siteUrl,
        image: images,
        logo: `${siteUrl}/favicon92.svg`,
        telephone: contact.phone.replace(/\s/g, ''),
        priceRange: '$$',
        servesCuisine: ['Coffee', 'Cafe'],
        menu: contact.menuUrl,
        hasMenu: contact.menuUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.streetAddress,
          addressLocality: SITE.addressLocality,
          addressRegion: SITE.addressRegion,
          addressCountry: SITE.addressCountry
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: contact.lat,
          longitude: contact.lng
        },
        hasMap: contact.mapLink,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '22:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '08:00',
            closes: '23:00'
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: yandexReviews.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: yandexReviews.ratingsCount,
          reviewCount: yandexReviews.reviewsCount
        },
        review: yandexReviews.items.slice(0, 5).map((item) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: item.name },
          reviewBody: item.text,
          publisher: { '@type': 'Organization', name: 'Yandex Maps' }
        })),
        sameAs: [contact.instagram, contact.telegram, yandexReviews.url]
      }
    ]
  };
}
