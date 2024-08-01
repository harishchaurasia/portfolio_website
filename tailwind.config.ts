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
        'xl': '1400px', // custom breakpoint at 1515px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'bs': '0 4px 130px rgba(150, 163, 181, .10)',
        'ts': '0 4px 130px rgba(150, 163, 181, .18)',
        'xs': '0 4px 130px rgba(150, 163, 181, .26)',
      },
      fontFamily: {
        sf_pro:['SF-Pro-Display-Regular','sans-serif'],
        bruce: ['BruceForeverRegular', 'serif'],
        acorn:['Acorn', 'serif'],
      },
      backdropBlur: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
      },
    },
  },
  plugins: [],
};

export default config;
