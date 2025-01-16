import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F1F0FB", // Soft cream background
          foreground: "#1A1F2C", // Deep navy text
        },
        secondary: {
          DEFAULT: "#403E43", // Rich dark gray
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#94A187", // Muted sage
          foreground: "#1A1F2C",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#403E43",
        },
        cream: "#F1F0FB",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;