/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Montserrat"', "sans-serif"],
        headline: ['"Montserrat"', "serif"],
      },

      colors: {
        background: "#0B0B0B", // Dark black base
        foreground: "#F5F5F5", // Soft white

        primary: {
          DEFAULT: "#D4AF37", // Gold
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#ffffff1a", // Soft white overlay
          foreground: "#ffffff",
        },

        accent: {
          DEFAULT: "#D4AF37", // Gold accent
          foreground: "#000000",
        },

        muted: {
          DEFAULT: "#1A1A1A", 
          foreground: "#CFCFCF",
        },

        card: {
          DEFAULT: "#121212",
          foreground: "#F5F5F5",
        },

        border: "#3A3A3A",
        ring: "#D4AF37", // Gold ring
      },

      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
