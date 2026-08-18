import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

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
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
