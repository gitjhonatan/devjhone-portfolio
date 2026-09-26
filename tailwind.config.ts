import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },

    extend: {
      colors: {
        primary: "#1c1c22",

        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;