import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "dark-background": "rgb(19, 19, 19)",
        "dark-background-end": "rgb(26, 26, 26)", // turquoise green
      },
      fontFamily: {
        sans: ["Inter", "Tahoma", "sans-serif"],
      },
      fontSize: {
        "babyHeading-size": "1.6rem",
        "regular-font": "1.2rem",
        "title-size": "clamp(1.4rem, calc(15vw + 1rem), 8rem)",
      },
      screens: {
        "sm-max": { max: "43.75rem" },
      },
    },
  },
};

module.exports = config;
