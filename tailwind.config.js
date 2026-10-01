/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#F6F3EA',
          card: '#FFFFFF',
          dark: '#0D1015',
          'dark-card': '#131722',
        },
        brand: {
          emerald: '#059669',
          'emerald-light': '#10b981',
          terracotta: '#D95328',
          dark: '#0D1015',
          slate: '#131722',
          blue: '#2563eb',
          gray: '#78716c',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}