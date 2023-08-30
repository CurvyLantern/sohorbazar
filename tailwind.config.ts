import type { Config } from "tailwindcss";
import shadConfigPlugin from "./shadcn.tailwind.config";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            container: {
                screens: {
                    xsm: "100%",
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1536px",
                },
            },
            flex: Array.from({ length: 10 }, (_, idx) => idx + 1).reduce(
                (acc, i) => {
                    // @ts-expect-error cant provide type to accumulator
                    acc[`${i}`] = i;
                    return acc;
                },
                {}
            ),
            screens: {
                xsm: "350px",
            },
            colors: {
                border: {
                    DEFAULT: "hsl(var(--border) / <alpha-value>)",
                    card: "hsl(var(--border-card) / <alpha-value>)",
                    product: "hsl(var(--border-card) / <alpha-value>)",
                },
                ring: "hsl(var(--ring) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                primary: {
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    foreground:
                        "hsl(var(--primary-foreground) / <alpha-value>)",
                },
                input: {
                    DEFAULT: "hsl(var(--input-background) / <alpha-value>)",
                    foreground: "hsl(var(--input-foreground) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
                    foreground:
                        "hsl(var(--secondary-foreground) / <alpha-value>)",
                },
                highlight: {
                    DEFAULT: "hsl(var(--highlight) / <alpha-value>)",
                    foreground:
                        "hsl(var(--highlight-foreground) / <alpha-value>)",
                },
                success: {
                    DEFAULT: "hsl(var(--success) / <alpha-value>)",
                    foreground:
                        "hsl(var(--success-foreground) / <alpha-value>)",
                },
                warning: {
                    DEFAULT: "hsl(var(--warning) / <alpha-value>)",
                    foreground:
                        "hsl(var(--warning-foreground) / <alpha-value>)",
                },
                error: {
                    DEFAULT: "hsl(var(--error) / <alpha-value>)",
                    foreground: "hsl(var(--error-foreground) / <alpha-value>)",
                },
                disable: {
                    DEFAULT: "hsl(var(--disable) / <alpha-value>)",
                    foreground:
                        "hsl(var(--disable-foreground) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent) / <alpha-value>)",
                    foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
                },
            },
            fontFamily: {
                primary: "var(--font-primary)",
                secondary: "var(--font-secondary)",
            },
            borderRadius: {
                primary: "calc(var(--radius-primary) - 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [shadConfigPlugin],
} satisfies Config;
