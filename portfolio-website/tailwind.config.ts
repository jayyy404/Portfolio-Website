import type { Config } from "tailwindcss"

const rgb = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: rgb("canvas"),
        surface: rgb("surface"),
        line: rgb("line"),
        ink: rgb("ink"),
        mute: rgb("mute"),
        clay: { DEFAULT: rgb("accent"), bg: rgb("clay-bg"), fg: rgb("clay-fg") },
        sky: { bg: rgb("sky-bg"), fg: rgb("sky-fg") },
        sage: { bg: rgb("sage-bg"), fg: rgb("sage-fg") },
        lilac: { bg: rgb("lilac-bg"), fg: rgb("lilac-fg") },
        mist: { bg: rgb("mist-bg"), fg: rgb("mist-fg") },
        sand: { bg: rgb("sand-bg"), fg: rgb("sand-fg") },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent-ui))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "soft-ping": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "80%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "soft-ping": "soft-ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
