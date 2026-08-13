# 92° — Landing Page

Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + Swiper.

## Запуск

```bash
npm install
npm run dev
```

Открой http://localhost:3000

## Сборка для продакшена

```bash
npm run build
npm run start
```

## Структура

- `app/` — страница и layout (App Router), шрифты подключены через `next/font` (самохостинг, без внешних запросов к Google Fonts в браузере)
- `components/` — все секции лендинга разбиты на отдельные компоненты
- `data/i18n/*.json` — весь текст сайта на русском, английском и узбекском. Чтобы поменять текст — правь только эти файлы, код трогать не нужно
- `data/content.ts` — нетекстовые данные: цвета заглушек, ссылки на соцсети, телефон, место под embed-карту
- `context/LanguageContext.tsx` — переключение языка, сохраняется в localStorage

## Как заменить заглушки на реальные фото

Компонент `components/PlaceholderImage.tsx` сейчас рисует градиентный блок с подписью.
Проще всего:

1. Положить фото в `public/images/...`
2. В нужном компоненте (`MenuSection.tsx`, `Gallery.tsx`) заменить `<PlaceholderImage ... />` на:
   ```tsx
   <Image src="/images/cappuccino.jpg" alt="Капучино" fill className="object-cover" />
   ```
   (компонент `Image` — из `next/image`, автоматически оптимизирует размер и формат)

## Карта

В `data/content.ts` есть `mapEmbedUrl` — вставь туда ссылку из Google Maps → «Поделиться» → «Встроить карту», и замени комментарий в `Visit.tsx` на `<iframe src={contact.mapEmbedUrl} ... />`.

## QR-код на цифровое меню

Замени иконку-заглушку в `Visit.tsx` (`<QrCode />`) на настоящее изображение QR-кода вашего QR-меню 92° — просто положи PNG/SVG в `public/` и подставь через `next/image`.
