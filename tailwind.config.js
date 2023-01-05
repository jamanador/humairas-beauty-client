/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#08AEEA",
      second: "#2AF598",
      black: "#000000",
      white: "#ffffff",
      gray: "#dddddd",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
