/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,tsx}",
    "./components/**/*.{html,tsx}",
  ],
  theme: {
    fontFamily: {
    },
    extend: {
      colors: {
        'app-gray': '#181924',
        'app-gray2': '#22232F',
        'app-gray3': '#2A2C3C'
      }
    },
  },
  plugins: [],
}
