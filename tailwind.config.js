/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      roboto: ['roboto', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      main: '#101828',
      ash: '#EAECF0',
    },
    screens: {
      sm: '512px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
