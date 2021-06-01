const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dancing-script': ['dancing script'],
      'poppins': ['Poppins']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: {
        DEFAULT: '#FF99BD',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};