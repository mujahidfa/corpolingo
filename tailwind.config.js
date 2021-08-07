const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "light-primary": colors.blue[700],
      "dark-primary": colors.blue[900],
      "light-secondary": colors.white,
      "dark-secondary": colors.gray[900],
      "light-tertiary": colors.gray[100],
      "dark-tertiary": colors.black,
      // "": colors.,
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "light-primary": colors.blue[50],
      "dark-primary": colors.blue[100],
      "light-primary-lighter": colors.blue[100],
      "dark-primary-lighter": colors.blue[100],
      "light-secondary": colors.gray[900],
      "dark-secondary": colors.gray[400],

      "bg-light-primary": colors.blue[700],
      "bg-dark-primary": colors.blue[900],
      "bg-light-secondary": colors.white,
      "bg-dark-secondary": colors.gray[900],

      // "": colors.,
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
