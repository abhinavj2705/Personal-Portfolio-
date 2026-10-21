// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1', // indigo-500
          light: '#A5B4FC', // indigo-300
          dark: '#4F46E5', // indigo-600
        },
        accent: {
          DEFAULT: '#8B5CF6', // violet-500
          light: '#C4B5FD', // violet-300
          dark: '#7C3AED', // violet-600
        },
        background: '#0A0A0A', // near‑black
      },
    },
  },
  plugins: [],
};
