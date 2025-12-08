/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Montserrat"', 'sans-serif'],
        headline: ['"Montserrat"', 'serif'],
        code: ['monospace'],
      },

      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: {
          DEFAULT: '#2A2CC8',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E60000',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#F5DD00',
          foreground: '#1A1A1A',
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: '#E60000',
          foreground: '#FFFFFF',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1A1A',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1A1A',
        },

        border: '#1A1A1A',
        input: '#1A1A1A',
        ring: '#2A2CC8',

        chart: {
          1: '#2A2CC8',
          2: '#E60000',
          3: '#F5DD00',
          4: '#1A1A1A',
          5: '#FFFFFF',
        },

        sidebar: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1A1A',
          primary: '#2A2CC8',
          'primary-foreground': '#FFFFFF',
          accent: '#F5DD00',
          'accent-foreground': '#1A1A1A',
          border: '#1A1A1A',
          ring: '#2A2CC8',
        },
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
};
