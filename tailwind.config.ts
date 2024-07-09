import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "15": "3.75rem", // 15 * 0.25rem = 3.75rem
      },
      colors: {
        lightGray: "#d3d3d3",
        gray: "#778899",
        darkGray: "#464d53",
        darkdarkGray: "#363d42",
        whitesmoke: "#f5f5f5",
        pink: "#fa8072",
        deepskyBlue: "#00bfff",
        background: "#fff",
        text: "#333",
      },
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
        japanese: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
