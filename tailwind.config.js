/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors:{
      dark_cyan: "#3C8067",
      cream: "#F2EBE3",
      white: "#FFFFFF",
      dark_blue: "#1C232B",
      dark_gray_blue: "#6C7289",
      link_blue: "#3E52A3"
    },
    fontFamily: {
      montserrat: ['"Montserrat"', "ui-sans-serif", "system-ui"],
      fraunces: ['"Fraunces"', "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
}
