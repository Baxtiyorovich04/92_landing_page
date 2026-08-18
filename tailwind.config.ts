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
          DEFAULT: '#38383B',
          950: '#38383B',
          900: '#2f2f32',
          850: '#262629'
        },
        chrome: '#C5C5C7',
        nickel: '#8f8f92',
        frost: '#e3e3e5',
        pewter: '#b8b8ba',

        // Legacy aliases → new palette (keeps existing class names working)
        espresso: {
          950: '#38383B',
          900: '#2f2f32',
          850: '#262629'
        },
        charcoal: {
          800: '#2f2f32'
        },
        warmgray: {
          300: '#C5C5C7',
          500: '#8f8f92'
        },
        mist: {
          50: '#C5C5C7',
          100: '#C5C5C7'
        },
        copper: {
          300: '#b8b8ba',
          500: '#C5C5C7'
        }
      },
      fontFamily: {
        display: ['"Bicubik"', 'sans-serif'],
        body: ['"Bicubik"', 'sans-serif'],
        mono: ['"Bicubik"', 'sans-serif']
      },
      boxShadow: {
        glass: 'inset 0 1px 0 rgba(197,197,199,0.18), 0 20px 50px rgba(0,0,0,0.4)',
        copperGlow: '0 10px 30px rgba(197,197,199,0.28)',
        steelGlow: '0 10px 30px rgba(197,197,199,0.25)'
      },
      backgroundImage: {
        'glass-fill': 'linear-gradient(135deg, rgba(197,197,199,0.12), rgba(197,197,199,0.03))'
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
          '0%, 100%': { boxShadow: '0 0 0 6px rgba(197,197,199,0.22), 0 0 24px rgba(197,197,199,0.3)' },
          '50%': { boxShadow: '0 0 0 12px rgba(197,197,199,0.08), 0 0 30px rgba(197,197,199,0.3)' }
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
