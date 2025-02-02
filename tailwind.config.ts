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
        "turquoise-blue": "var(--turquoise-blue)",
        "turquoise-green": "var(--turquoise-green)",
      },
      fontFamily: {
        Inter: ["Inter", "Tahoma", "sans-serif"],
        console: ["Consolas", "monaco", "monospace"],
      },
      keyframes: {
        arrowSlide: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" },
        },
      },
    },
  },
};

module.exports = config;
