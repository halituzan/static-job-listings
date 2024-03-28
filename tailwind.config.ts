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
      colors: {
        primary: "hsl(180, 29%, 50%)",
        light: "hsl(180, 52%, 96%)",
        "light-tablet": "hsl(180, 31%, 95%)",
        "primary-dark": "hsl(180, 8%, 52%)",
        "secondary-dark": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
export default config;
