import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "aside-bg":
          "linear-gradient(180deg,rgba(18, 18, 26, 0.9) 0%,rgba(18, 18, 26, 0.9) 100%)",
        dashboard: "url('/icons/bg-logo/dashboard.svg')",
        auth: "url('/icons/bg-logo/auth.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
