import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import JsonLd from '@/components/JsonLd';
import { contact } from '@/data/content';
import { getSiteUrl, SITE } from '@/lib/seo';

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: '#38383B',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE.title,
    template: '%s · 92°'
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: siteUrl }],
  creator: SITE.name,
  publisher: SITE.legalName,
  category: 'food',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: true,
    telephone: true
  },
  icons: {
    icon: [{ url: '/favicon92.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon92.svg',
    apple: '/favicon92.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: ['en_US', 'uz_UZ'],
    url: siteUrl,
    siteName: SITE.name,
    title: SITE.ogTitle,
    description: SITE.description
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.ogTitle,
    description: SITE.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: siteUrl
  },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.YANDEX_VERIFICATION ? { yandex: process.env.YANDEX_VERIFICATION } : {})
  },
  other: {
    'geo.region': 'UZ-TK',
    'geo.placename': 'Tashkent',
    'geo.position': `${contact.lat};${contact.lng}`,
    ICBM: `${contact.lat}, ${contact.lng}`
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <JsonLd />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
