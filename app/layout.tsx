import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: '92° — Specialty Coffee House',
  description: '92° — специализированная кофейня в Ташкенте. Путь от зерна до чашки при идеальной температуре.',
  icons: {
    icon: [{ url: '/favicon92.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon92.svg',
    apple: '/favicon92.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
