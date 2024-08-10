import type { Config } from "tailwindcss";

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
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      unbounded: ["var(--font-unbounded)"],
      "albert-sans": ["var(--font-albert-sans)"],
      "the-signature": ["var(--font-the-signature)"],
    },
    extend: {
      fontSize: {
        "title-xxl": ["128px", "38px"],
        "title-xxl2": ["86px", "26px"],
        "title-xl": ["84px", "87px"],
        "title-lg": ["72px", "75px"],
        "title-md": ["54px", "67px"],
        "title-md2": ["54px", "56px"],
        xl2: ["22px", "27.28px"],
        "3xl2": ["32px", "40px"],
      },
      colors: {
        brown: "#D6B66B",
        "light-brown": "#FAF9F5",
        green: "#0B7373",
        "dark-green": "#004040",
        gray: "#B8B8B8",
        "gray-2": "#111827cc",
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
