import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        goldenbrown: "#A87224",
        caputmortuum: "#581F18",
        flax: "#F5DD90",
      },
    }
  },
  plugins: [],
};
export default config;
