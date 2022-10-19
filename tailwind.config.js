/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      dark_cyan: "#3C8067",
      light_cyan: "#39AC82",
      cream: "#F2EBE3",
      white: "#FFFFFF",
      dark_blue: "#1C232B",
      dark_gray_blue: "#6C7289",

    },
    fontFamily: {
      montserrat: ['"Montserrat"', "ui-sans-serif", "system-ui"],
      fraunces: ['"Fraunces"', "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
}
