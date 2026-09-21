import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '92° — Specialty Coffee House in Tashkent';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#38383B',
          color: '#e3e3e5',
          padding: '72px 80px'
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#b8b8ba'
          }}
        >
          Tashkent · Mirzo Ulugbek
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 148,
              lineHeight: 0.9,
              fontWeight: 600,
              color: '#c5c5c7',
              letterSpacing: '-0.04em'
            }}
          >
            92°
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 18,
              fontSize: 36,
              color: '#e3e3e5'
            }}
          >
            Specialty Coffee House
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 12,
              fontSize: 24,
              color: '#8f8f92'
            }}
          >
            Coffee brewed at the perfect temperature
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
