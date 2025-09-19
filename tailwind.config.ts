import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          light: '#F5F5F5',
          dark: '#333333',
          teal: '#00A6A6',
          blue: '#007ACC'
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'border-flow': 'border-flow 3s linear infinite',
        // Typing reveal effect without cursor
        'typing': 'typing 1.2s steps(24, end) forwards',
        // Smooth text color shift teal -> red -> teal
        'teal-to-red': 'teal-to-red 2.5s ease-in-out infinite'
      },
      keyframes: {
        'border-flow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        // Increases width from 0 to full to simulate typing (no caret)
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'teal-to-red': {
          '0%, 100%': { color: '#00A6A6' },
          '50%': { color: '#ef4444' } // Tailwind red-500
        }
      }
    }
  },
  plugins: [typography]
} satisfies Config
