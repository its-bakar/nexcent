/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      body4: ["12px", "16px"],
      body3: ["14px", "20px"],
      body2: ["16px", "24px"],
      body1: ["18px", "28px"],
      xl: ["20px", "28px"],
      "2xl": ["28px", "36px"],
      "3xl": ["36px", "44px"],
      "4xl": ["64px", "76px"],
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
