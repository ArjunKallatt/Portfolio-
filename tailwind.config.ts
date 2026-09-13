import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0D12",
          900: "#0A0D12",
          800: "#10141C",
          700: "#161C27",
          600: "#1F2733",
        },
        paper: "#F3EEE3",
        bone: "#E9E2D0",
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C879",
          dim: "#8B7233",
        },
        slate: {
          line: "#2B3340",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
      backgroundImage: {
        grain: "url('/grain.png')",
      },
    },
  },
  plugins: [],
};

export default config;
