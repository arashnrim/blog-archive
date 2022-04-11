const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'HK Grotesk'"],
        mono: ["'JetBrains Mono'"],
      },
      colors: {
        gray: colors.neutral,
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              "border-radius": "0.75rem",
            },
            a: {
              "text-decoration": "underline",
              "text-decoration-style": "dotted",
              "text-underline-offset": "4px",
              "font-weight": "800",
            },
            abbr: {
              "text-underline-offset": "4px",
              cursor: "help",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
