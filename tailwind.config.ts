import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nevan": ["Nevan_RUS", "sans-serif"],
        "greater-theory": ["Greater_Theory", "serif"],
        "tt": ["TT", "monospace"],
      },
      fontSize: {
        'hero-title': ['5rem', { lineHeight: '1.1' }],
        'section-title': ['3rem', { lineHeight: '1.2' }],
      },
      colors: {
        'kpop-blue': '#38548E',
        'kpop-light-blue': '#537DC3',
        'kpop-purple': '#6B46C1',
        'kpop-pink': '#FF69B4',
        'kpop-dark': '#0A0E27',
        'kpop-beige': '#E8DCC4',
        'body-bg': '#E6E4D6',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #38548E 0%, #537DC3 100%)',
        'section-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [],
};

export default config;