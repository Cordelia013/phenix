import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nevan: ["Nevan_RUS", "sans-serif"],
        "greater-theory": ["Greater_Theory", "serif"],
        tt: ["TT", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
