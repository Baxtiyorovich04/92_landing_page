import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#120E0A',
          900: '#1B1611',
          850: '#211B15'
        },
        charcoal: {
          800: '#2B241C'
        },
        warmgray: {
          300: '#C9C0AE',
          500: '#948A79'
        },
        mist: {
          50: '#F6F3EC',
          100: '#EFEAE0'
        },
        copper: {
          300: '#DDA875',
          500: '#B97A4B'
        }
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      boxShadow: {
        glass: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 20px 50px rgba(0,0,0,0.35)',
        copperGlow: '0 10px 30px rgba(185,122,75,0.35)'
      },
      backgroundImage: {
        'glass-fill': 'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03))'
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
          '0%, 100%': { boxShadow: '0 0 0 6px rgba(185,122,75,0.22), 0 0 24px rgba(185,122,75,0.35)' },
          '50%': { boxShadow: '0 0 0 12px rgba(185,122,75,0.08), 0 0 30px rgba(185,122,75,0.35)' }
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
