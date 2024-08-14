/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        primary:['Figtree', 'sans-serif'],
      },
      colors: {
        primary: "hsl(47, 88%, 63%)",
        secondary: {
          500: "hsl(0, 0%, 42%)",
          950: "hsl(0, 0%, 7%)",
        },
      },
      boxShadow: {
        primary: "6px 8px rgb(0 0 0 / 1)",
      },
    },
  },
  plugins: [],
};
