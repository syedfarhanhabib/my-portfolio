import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      // widest: '.1em',
      widest: '.25em',
    },
    fontFamily: {
      'Neue': ['Neue Machina'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light': '#f4f4f5', //zinc-100
      'depth-light': '#cbd5e1', //slate-300  
      'accent': '#ef4444', //red-700
      'yellow': '#eab308', //yellow-500
      'depth-dark': '#334155', //slate-700
      'dark': '#0a0a0a', //neutral-950
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
