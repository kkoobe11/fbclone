/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  // important: true,
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#f0f2f5",
      },
    },
  },
  plugins: [],
};
