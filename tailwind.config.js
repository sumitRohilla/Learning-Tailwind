/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      vsm: "140px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "140px",
    },
    extend: {
      colors: {
        brightRed: "rgb(242, 95, 58)",
        brightRedLight: "rgb(246, 134, 106)",
        brightRedSupLight: "rgb(253, 236, 231)",
        darkBlue: "rgb(36, 45, 82)",
        darkGrayishBlue: "rgb(144, 149, 167)",
        veryDarkBlue: "rgb(29, 30, 37)",
        veryPaleRed: "rgb(255, 239, 235)",
        veryLightGray: "rgb(250, 250, 250)",
      },
    },
  },
  plugins: [],
};
