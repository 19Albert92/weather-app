/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-primary":"#00668a",
        "base-secondary":"#004e71"
      }
    },
    fontFamily: {
      roboto: ['Roboto, sans-serif']
    },
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      sm: '640px',
      md: '768px'
    }
  },
  plugins: [],
}

