import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/icons/background.svg')",
      },
      textColor: {
        activeColor: '#007aff',
      },
    },
  },
  plugins: [],
} satisfies Config;
