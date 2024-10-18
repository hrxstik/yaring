/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/src/assets/logo.png')",
      },
      colors: {
        'yaring-blue': '#0d2e37',
        'yaring-orange': '#c08448',
      },
    },
  },
  plugins: [],
};
