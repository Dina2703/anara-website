/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3AAFA9",
        secondary: "#17252A",
        info: " #FFCA28",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px", //mobile
      ss: "620px",
      sm: "768px", //tablet portait
      md: "1060px", //tablet landscape
      lg: "1200px", //laptop $ desktop displays
      xl: "1700px", //bid desktops
    },
  },
  plugins: [],
};
