/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#F1F1F1',
        'primary': '#11A6A1',
        'teal': {
          50: '#EDFBFB',
          100: '#DBF8F7',
          200: '#D0F5F3',
          600: '#11A6A1',
          700: '#0E8A86',
          800: '#0A6E6A',
        }
      },
      backgroundImage: {
        'trending-gradient': 'linear-gradient(178.36deg, #DBF8F7 -2.17%, #EDFBFB 86.41%, #FFFFFF 98.61%)',
      }
    },
  },
  plugins: [],
}
