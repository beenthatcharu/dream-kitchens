import type { Config } from 'tailwindcss';

export default {
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
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: '#F5F5F5', // Light gray background (same as site bg)
        foreground: '#1E1E1E', // Dark text

        primary: {
          DEFAULT: '#00205B', // Deep Navy Blue (brand color)
          foreground: '#ffffff', // White text on blue
          hover: '#001844', // Slightly darker blue for hover
          active: '#000F2D', // Active state
        },
        secondary: {
          DEFAULT: '#E3B505', // Golden yellow (accent)
          hover: '#CFA304',
          active: '#B89103',
          foreground: '#1E1E1E', // Dark text on yellow
        },
        accent: {
          DEFAULT: '#F5F5F5', // Soft gray section backgrounds
          foreground: '#00205B',
        },
        border: '#DADADA', // Neutral gray
        input: '#EDEDED',
        ring: '#00205B', // Blue focus ring

        // Custom Named Brand Colors
        wiseBlue: '#00205B',
        wiseBlueHover: '#001844',
        wiseYellow: '#E3B505',
        wiseGray: '#F5F5F5',
        wiseText: '#1E1E1E',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
} satisfies Config;
