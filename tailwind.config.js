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
        'lari-light-blue': '#D4E0FF',
        'lari-lighter-blue': '#FAFBFF',
        'lari-gray': '#737EA3'
      },
      fontSize: {
        'large': '5rem',
        'mid': '1.8rem'
      },
      height: {
        'xxl': '32rem',
      },
      width: {
        '9/10': '90%'
      },
      backgroundImage: { // light -> dark
        'gradient-radial': 'radial-gradient(circle at bottom right, #946086 5%, #745783 15%, #474989 30%, #324072, #253B6B, #163361, #102E5B, #0B2B57, #062750, #03244B)'
      },
      spacing: {
        '1/10': '10%',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(.47,1.64,.41,.8)',
      }
    },
  },
  plugins: [],
}
