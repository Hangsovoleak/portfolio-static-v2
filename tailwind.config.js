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
        github: {
          dark: '#0d1117',
          'dark-subtle': '#161b22',
          'dark-card': '#21262d',
          'dark-border': '#30363d',
          'dark-muted': '#8b949e',
          'dark-text': '#c9d1d9',
          'dark-heading': '#f0f6fc',
          light: '#ffffff',
          'light-subtle': '#f6f8fa',
          'light-card': '#ffffff',
          'light-border': '#d0d7de',
          'light-muted': '#656d76',
          'light-text': '#1f2328',
          green: '#238636',
          'green-hover': '#2ea043',
          'green-bright': '#3fb950',
          blue: '#58a6ff',
          'blue-light': '#0969da',
          purple: '#bc8cff',
          orange: '#d29922',
          red: '#f85149',
        },
        canvas: {
          light: '#ffffff',
          card: '#f6f8fa',
          dark: '#0d1117',
          'dark-card': '#161b22',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Noto Sans"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
        pixel: ['"Courier New"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}