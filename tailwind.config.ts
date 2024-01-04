import type { Config } from 'tailwindcss'
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        naruto: ["var(--font-naruto)"],
      },
    },
  },
  plugins: [typography],
};
export default config;