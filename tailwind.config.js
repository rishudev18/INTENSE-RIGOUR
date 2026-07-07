/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-background)",
        coal: "var(--color-surface)",
        smoke: "var(--color-surface-elevated)",
        bone: "var(--color-text-primary)",
        white: "var(--color-text-primary)",
        mist: "var(--color-text-secondary)",
        sage: "var(--color-text-muted)",
        brass: "var(--color-border)",
        accent: "var(--color-accent)",
        secondary: "var(--color-text-muted)",
        gray: {
          300: "var(--color-text-secondary)",
          400: "var(--color-text-secondary)",
          500: "var(--color-text-muted)",
          600: "var(--color-text-disabled)",
        },
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        divider: "var(--color-divider)",
        primary: "var(--color-text-primary)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
      },
      fontFamily: {
        display: ["var(--font-heading)", "sans-serif"],
        serif: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        menu: "0.08em",
      },
      spacing: {
        2: "8px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        32: "128px",
        40: "160px",
      },
      maxWidth: {
        container: "1280px",
        reading: "720px",
        hero: "900px",
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        full: "9999px",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.22, 0.61, 0.36, 1)",
        cinematic: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      transitionDuration: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
      }
    },
  },
  plugins: [],
};
