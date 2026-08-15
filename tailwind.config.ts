import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        midnight: {
          DEFAULT: '#121820',
          950: '#121820',
          900: '#181e28',
          850: '#1e2530'
        },
        chrome: '#9ea0a7',
        nickel: '#7b7d7f',
        frost: '#eceffa',
        pewter: '#c0bfc6',

        // Legacy aliases → new palette (keeps existing class names working)
        espresso: {
          950: '#121820',
          900: '#181e28',
          850: '#1e2530'
        },
        charcoal: {
          800: '#2a3038'
        },
        warmgray: {
          300: '#9ea0a7',
          500: '#7b7d7f'
        },
        mist: {
          50: '#eceffa',
          100: '#eceffa'
        },
        copper: {
          300: '#c0bfc6',
          500: '#9ea0a7'
        }
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      boxShadow: {
        glass: 'inset 0 1px 0 rgba(236,239,250,0.18), 0 20px 50px rgba(0,0,0,0.4)',
        copperGlow: '0 10px 30px rgba(158,160,167,0.28)',
        steelGlow: '0 10px 30px rgba(192,191,198,0.25)'
      },
      backgroundImage: {
        'glass-fill': 'linear-gradient(135deg, rgba(236,239,250,0.12), rgba(236,239,250,0.03))'
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '20%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-70px) scaleX(1.6)', opacity: '0' }
        },
        spin18: {
          to: { transform: 'rotate(360deg)' }
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        pinPulse: {
          '0%, 100%': { boxShadow: '0 0 0 6px rgba(192,191,198,0.22), 0 0 24px rgba(158,160,167,0.3)' },
          '50%': { boxShadow: '0 0 0 12px rgba(192,191,198,0.08), 0 0 30px rgba(158,160,167,0.3)' }
        }
      },
      animation: {
        steam: 'steam 4s ease-in-out infinite',
        'spin-slow': 'spin18 40s linear infinite',
        'spin-slow-rev': 'spin18 60s linear infinite reverse',
        'pulse-line': 'pulseLine 2s ease-in-out infinite',
        'pin-pulse': 'pinPulse 2.4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
