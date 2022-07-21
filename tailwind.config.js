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
        kobe: "#b593f2",
        topblack: "#171923",
        mainbg: "#23153c",
      },
    },
  },
  plugins: [],
};
