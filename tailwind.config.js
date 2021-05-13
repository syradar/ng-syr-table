require('dotenv').config();
const enablePurge = process.env.NODE_ENV === 'production';

module.exports = {
  purge: {
    enabled: enablePurge,
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
