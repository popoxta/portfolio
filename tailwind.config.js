/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lari-blue': '#03244B',
        'lari-light-blue': '#D4E0FF'
      },
      fontSize: {
        'large': '5rem',
        'mid': '1.8rem'
      }
    },
  },
  plugins: [],
}

