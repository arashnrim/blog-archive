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
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h2: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h3: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h4: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h5: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h6: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            a: {
              color: "#FFF",
              textDecoration: "underline dotted",
              textUnderlineOffset: "5px",
              "&:hover": {
                opacity: "75%",
                transitionProperty: "opacity",
                transitionDuration: "200",
              },
            },
            blockquote: {
              color: "#FFF",
            },
            strong: {
              color: "#FFF",
            },
            code: {
              color: "#FFF",
              fontFamily: "'JetBrains Mono'",
              wordBreak: "break-word",
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
