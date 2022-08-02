/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxs: '260px',
      xs: '374px',
      xp: '383px',

      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        economica: 'Economica, sans-serif',
        playfair: 'Playfair Display SC, serif',
        rubik: ['Rubik, sans-serif'],
      },
      screens: {
        sm: '400px',
        ms: '539px',
        mx: '767px',
        ll: '1023px',
        xx: '1279px',
        rr: '1535px',
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
      },
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
