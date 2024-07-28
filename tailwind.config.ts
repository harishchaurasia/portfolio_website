import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1515px', // custom breakpoint at 1450px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'bs': '0 4px 130px rgba(150, 163, 181, .10)',
        'ts': 'rgba(20, 21, 22, 0.592)',
      },
      fontFamily: {
        imperfect: ['ImPerfect23', 'sans-serif'],
        acornB: ['AcornB', 'serif'],
        speedBeast: ['SpeedBeast', 'sans-serif'],
        bruce: ['BruceForeverRegular', 'serif'],
        aloe:['Aloevera', 'serif'],
        xirod:['Xirod', 'serif'],
        recharge:['Recharge_bd', 'serif'],
        acorn:['Acorn', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
