import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background":
          'url("https://cdn.dribbble.com/userupload/4270087/file/original-dd685e687e629f85a09d662b41578434.png?resize=1024x1024")',
      },
      gridTemplateColumns: {},
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      inset: {},
      padding: {},
      height: {},
      margin: {},
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
      },
      colors: {
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
          DEFAULT: "hsl(var(--accent))",
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
      width: {},
      gap: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
