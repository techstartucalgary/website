import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        arrowSlide: "arrowSlide 1.4s ease-in-out infinite",
      },
      colors: {
        "dark-background": "rgb(19, 19, 19)",
        "dark-background-end": "rgb(26, 26, 26)", // turquoise green
        "turquoise-blue": "var(--turquoise-blue)",
        "turquoise-green": "var(--turquoise-green)",
      },
      fontFamily: {
        Inter: ["Inter", "Tahoma", "sans-serif"],
        console: ["Consolas", "monaco", "monospace"],
      },
      fontSize: {
        "babyHeading-size": "1.6rem",
        "regular-font": "1.2rem",
        "title-size": "clamp(1.4rem, calc(15vw + 1rem), 8rem)",
      },
      keyframes: {
        arrowSlide: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" },
        },
      },
      screens: {
        "md-max": { max: "48rem" },
        "sm-max": { max: "43.75rem" },
      },
    },
  },
};

module.exports = config;
