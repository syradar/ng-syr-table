require('dotenv').config();
const enablePurge = process.env.NODE_ENV === 'production';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.html', './src/**/*.scss'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
