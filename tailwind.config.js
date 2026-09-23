/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#0d9668',
          dark: '#09090B',
          blue: '#2C3F96',
          gray: '#98989f',
        },
      },
    },
  },
  plugins: [],
}