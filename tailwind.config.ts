import type { Config } from "tailwindcss";

export default {
  content: [
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "#C22D2A",
      },
      fontSize: {
        base: "1.00rem"
      },
    },
  },
  plugins: [],
} satisfies Config;
