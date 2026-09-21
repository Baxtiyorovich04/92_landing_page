import { getJsonLd } from '@/lib/seo';

export default function JsonLd() {
  const jsonLd = getJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  );
}
