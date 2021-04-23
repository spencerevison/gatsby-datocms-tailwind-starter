const Color = require("color");
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const colors = {
  primary: "#88363B",
  secondary: "#9B63C8",
  tertiary: "#F4A5AE",
  quaternary: "#F5D7E3",
  black: "#18191f",
};

module.exports = {
  purge: ["./src/**/*.js", "./public/page-data/**/*.json"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: lighten(colors.primary, 0.5),
          light: lighten(colors.primary, 0.25),
          DEFAULT: colors.primary,
          dark: darken(colors.primary, 0.25),
          darker: darken(colors.primary, 0.5),
        },
        secondary: {
          lighter: lighten(colors.secondary, 0.5),
          light: lighten(colors.secondary, 0.25),
          DEFAULT: colors.secondary,
          dark: darken(colors.secondary, 0.25),
          darker: darken(colors.secondary, 0.5),
        },
        tertiary: {
          lighter: lighten(colors.tertiary, 0.5),
          light: lighten(colors.tertiary, 0.25),
          DEFAULT: colors.tertiary,
          dark: darken(colors.tertiary, 0.25),
          darker: darken(colors.tertiary, 0.5),
        },
        quaternary: {
          lighter: lighten(colors.quaternary, 0.5),
          light: lighten(colors.quaternary, 0.25),
          DEFAULT: colors.quaternary,
          dark: darken(colors.quaternary, 0.25),
          darker: darken(colors.quaternary, 0.5),
        },
        black: colors.black,
        highlight: lighten(colors.primary, 0.5),
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
