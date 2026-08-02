import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        muted: "#5B6472",
        faint: "#96A0AC",
        line: "#E4E7EB",
        surface: "#FFFFFF",
        "surface-alt": "#F7F9FB",
        accent: "#0990EB",
        "accent-dark": "#0670B8",
        "accent-tint": "#E8F4FD",
        critical: "#D64545",
        high: "#DB7B23",
        medium: "#C9A227",
        low: "#5B6472",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
