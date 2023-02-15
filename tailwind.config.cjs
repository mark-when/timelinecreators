/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./.vitepress/theme/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: "class",
  safelist: [
    "underline",
    { pattern: /bg-/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
