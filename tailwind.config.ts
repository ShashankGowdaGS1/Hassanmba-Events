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
        /* Primary Brand */
        burgundy: {
          DEFAULT: "#851839",
          hover: "#6F132F",
          light: "#9D2247",
          subtle: "#8518391A", // 10% opacity for delicate tints
        },
        /* Ceremonial & Accessible Gold */
        gold: {
          antique: "#C18A37",
          dark: "#8C5D1F",
          light: "#D9A452",
          subtle: "#C18A371F",
        },
        /* Surfaces & Text */
        ivory: {
          DEFAULT: "#FCF8F0",
          soft: "#FAF4E8",
          dark: "#F4EBDC",
        },
        charcoal: {
          DEFAULT: "#29201F",
          muted: "#5A4947",
          light: "#8A7472",
        },
        champagne: {
          DEFAULT: "#E8D7BD",
          soft: "#F3ECE1",
          deep: "#D9C3A1",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Bodoni MT", "Didot", "Georgia", "serif"],
        body: ["var(--font-body)", "Jost", "system-ui", "-apple-system", "sans-serif"],
        accent: ["var(--font-accent)", "Pinyon Script", "cursive"],
      },
      borderRadius: {
        /* Restrained border radius for royal, classic aesthetic */
        none: "0px",
        xs: "2px",
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        ceremonial: "0 10px 30px -10px rgba(41, 32, 31, 0.08)",
        royal: "0 20px 40px -15px rgba(133, 24, 57, 0.12)",
        gold: "0 4px 20px -2px rgba(193, 138, 55, 0.2)",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
};

export default config;

