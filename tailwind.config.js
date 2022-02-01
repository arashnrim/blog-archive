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
            h2: {
              fontFamily: "'HK Grotesk'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h3: {
              fontFamily: "'HK Grotesk'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h4: {
              fontFamily: "'HK Grotesk'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h5: {
              fontFamily: "'HK Grotesk'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            h6: {
              fontFamily: "'HK Grotesk'",
              fontWeight: "700",
              hyphens: "auto",
              wordBreak: "break-word",
            },
            code: {
              fontFamily: "'JetBrains Mono'",
              wordBreak: "break-word",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
