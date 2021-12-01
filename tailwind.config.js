const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Clash Display"'],
        sans: ["Inter"],
        mono: ["'JetBrains Mono'"],
      },
      colors: {
        gray: colors.trueGray,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#FFF",
            h1: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
            },
            h2: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
            },
            h3: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
            },
            h4: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
            },
            h5: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
            },
            h6: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
            },
            a: {
              color: "#FFF",
              textDecoration: "underline dotted",
              textUnderlineOffset: "5px",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
