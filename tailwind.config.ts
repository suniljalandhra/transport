import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        brand: ['var(--font-bankgothic)', 'var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        // Brand cyan (from the logo) — use for fills, accents and icons.
        primary: {
          DEFAULT: '#00b4f1',
          light: '#33c3f4',
          dark: '#0090c1',
          deep: '#00668a', // accessible cyan for text on light surfaces
          soft: '#e0f5fd',
        },
        navy: {
          DEFAULT: '#0b1f33',
          deep: '#071727',
          light: '#233143',
        },
        ink: {
          DEFAULT: '#0d1c2d',
          muted: '#3d484f',
          subtle: '#6d7981',
        },
        surface: {
          DEFAULT: '#f8f9ff',
          low: '#eef4ff',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      boxShadow: {
        card: '0 10px 25px -5px rgba(11, 31, 51, 0.06), 0 8px 10px -6px rgba(11, 31, 51, 0.03)',
        'card-hover': '0 20px 30px -10px rgba(11, 31, 51, 0.12), 0 1px 3px rgba(0, 180, 241, 0.12)',
        glow: '0 0 24px 2px rgba(0, 180, 241, 0.35)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
