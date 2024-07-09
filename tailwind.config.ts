import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "medium-red-violet": {
          "50": "#fcf7fb",
          "100": "#faedf8",
          "200": "#f3dbee",
          "300": "#e9bede",
          "400": "#db97c8",
          "500": "#c76eae",
          "600": "#a34b89",
          "700": "#8d3e74",
          "800": "#73355e",
          "900": "#602f4f",
          "950": "#3d152f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
