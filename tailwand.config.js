/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px", // from 380px
        xm: "460px", // from 460px
      },
      spacing: {
        35: "8.75rem",   // 140px
        45: "11.25rem",  // 180px
        70: "17.5rem",   // 280px
        100: "25rem",    // 400px
        140: "35rem",    // 560px
      },
    },
  },
  plugins: [],
};
