/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ['"Lato"', 'sans-serif'],
    },
    extend: {
      rotate: {
        '225': '225deg',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
