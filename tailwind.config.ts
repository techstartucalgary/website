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
        "max-width-thousand": { max: "62.5rem" }, //1000px
        "max-xs": { max: "37.5rem" }, //600px
        "min-width-thousand": { min: "62.5rem" }, //1000px
        "sm-max": { max: "43.75rem" }, //700px
      },
      textColor: {
        "secondary-grey": "#222222f2",
      },
    },
  },
};

module.exports = config;
