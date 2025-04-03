import plugin from "tailwindcss/plugin.js";

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
        "base-secondary":"#004e71",
        "search-list":"#033c55",
      },
      boxShadow: {
        base: '0px 1px 0 0 #004e71'
      },
      brightness: {
        80: '.80'
      },
      flex: {
        '2': '2 2 0%'
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
  plugins: [
    plugin(function({addUtilities, addVariant}) {
      addUtilities({
        '.text-shadow-black': {
          'text-shadow': '1px 1px 2px black;'
        },
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      });
    })
  ],
}

