/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadeToColor: {
          "0%": { filter: "grayscale(100%)" },
          "100%": { filter: "grayscale(0%)" },
        },
      },
      animation: {
        fadeToColor: "fadeToColor 2.5s ease-in-out forwards",
      },
      fontFamily: {
        serif: ["Quattrocento", "serif"],
        sans: ["Belleza", "Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
