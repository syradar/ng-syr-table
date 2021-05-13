require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
console.log(enablePurge);

module.exports = {
  purge: {
    enabled: false, //enablePurge,
    content: ['./src/**/*.html', './src/**/*.scss']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {}
  },

  variants: {
    extend: {}
  },
  plugins: []
};
