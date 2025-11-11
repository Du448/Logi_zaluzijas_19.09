import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          light: '#F5F5F5',
          dark: '#333333',
          teal: '#00A6A6',
          blue: '#007ACC',
          whatsapp: '#25D366'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'border-flow': 'border-flow 3s linear infinite',
        typing: 'typing 1.2s steps(24, end) forwards',
        'teal-to-red': 'teal-to-red 2.5s ease-in-out infinite',
        'whatsapp-pulse': 'whatsapp-pulse 2.5s ease-in-out infinite',
        'shimmer-slide': 'shimmer-slide var(--speed, 3s) linear infinite',
        'spin-around': 'spin-around calc(var(--speed, 3s) * 2) linear infinite'
      },
      keyframes: {
        'border-flow': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        typing: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '100%'
          }
        },
        'teal-to-red': {
          '0%, 100%': {
            color: '#00A6A6'
          },
          '50%': {
            color: '#ef4444'
          }
        },
        'whatsapp-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.6)'
          },
          '70%': {
            transform: 'scale(1.08)',
            boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)'
          }
        },
        'shimmer-slide': {
          '0%': {
            transform: 'translateX(-150%)'
          },
          '100%': {
            transform: 'translateX(150%)'
          }
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)'
          },
          '25%': {
            transform: 'translateZ(0) rotate(90deg)'
          },
          '50%': {
            transform: 'translateZ(0) rotate(180deg)'
          },
          '75%': {
            transform: 'translateZ(0) rotate(270deg)'
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [typography, require("tailwindcss-animate")]
} satisfies Config
