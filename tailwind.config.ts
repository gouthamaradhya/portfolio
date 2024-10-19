import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey: {
          DEFAULT: "#D9D9D9",
          10: "#818589"
        },
        teal: {
          DEFAULT: "#7DF9FF"
        },
      },
    },
  },
  plugins: [],
};
export default config;
