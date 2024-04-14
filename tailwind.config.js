const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'General Sans'"],
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
              "text-decoration": "none",
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
