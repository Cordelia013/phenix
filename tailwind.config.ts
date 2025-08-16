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
      fontSize: {
        'hero-title': '150px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #38548E 0%, #537DC3 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
