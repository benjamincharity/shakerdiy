import scrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
import colors from "tailwindcss/colors";

const config = {
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
        lightBg: "#f3f3f3",
        "muted-foreground": {
          DEFAULT: colors.neutral[500],
          dark: colors.neutral[300],
        },
        fg: {
          base: "#26312a",
          light: "#f8f4e3",
        },
        customIvory: "#f8f4e3",
        oat: "#e7dcc5",
        blue: {
          100: "#eeeff2",
          200: "#cfd3d9",
          300: "#afb6c1",
          400: "#909aa8",
          500: "#717d90",
          600: "#586270",
          700: "#3f4651",
          800: "#262a31",
          900: "#0e0f11",
        },
        green: {
          100: "#eef2ef",
          200: "#cfd9d2",
          300: "#afc1b5",
          400: "#90a898",
          500: "#71907b",
          600: "#587060",
          700: "#3f5145",
          800: "#26312a",
          900: "#0e110f",
        },
        neutral: {
          100: "#f6f6f5",
          200: "#e7e5e3",
          300: "#d7d4d1",
          400: "#c7c3bf",
          500: "#b7b2ad",
          600: "#8f8b87",
          700: "#666461",
          800: "#3e3d3b",
          900: "#161515",
        },
        red: {
          100: "#f8f2ed",
          200: "#ecd9cc",
          300: "#e0c1aa",
          400: "#d3a889",
          500: "#c79068",
          600: "#9b7051",
          700: "#6f513a",
          800: "#443123",
          900: "#18110c",
        },
        yellow: {
          100: "#f6f5ea",
          200: "#e7e1c4",
          300: "#d7ce9e",
          400: "#c8bb77",
          500: "#b8a851",
          600: "#90833f",
          700: "#675e2d",
          800: "#3f391c",
          900: "#16140a",
        },
      },
      dropShadow: {
        recipe: "5px -2px 10px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        hind: ["Hind", "sans-serif"],
        cardo: ["Cardo", "serif"],
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindAnimate,
    scrollbar({ nocompatible: true }),
    require("tailwindcss-aria-attributes"),
  ],
} satisfies Config;

export default config;
