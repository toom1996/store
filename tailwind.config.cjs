/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge:  ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    flex: {
      '25': '0 0 25%'
    },
    extend: {},
  },
  plugins: [],
}
