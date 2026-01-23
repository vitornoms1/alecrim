/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alecrim-yellow': '#FFD700',
        'alecrim-yellow-dark': '#CCAC00',
      },
    },
  },
  plugins: [],
}