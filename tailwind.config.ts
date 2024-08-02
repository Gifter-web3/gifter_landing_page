import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Orbitron: "Orbitron",
        // Manrope: "Manrope",
        // Inter: "Inter",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0px)" },
          "15%": { transform: "translateX(50px)" },
          "50%": { transform: "translateX(50px)" },
          "65%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        marquee: "marquee 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
