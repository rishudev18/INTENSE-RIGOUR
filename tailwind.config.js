/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505", // updated to #050505
        coal: "#11120f",
        smoke: "#1b1c18",
        bone: "#FFFFFF", // updated to #FFFFFF
        mist: "#bfb7a6",
        sage: "#9aaa8d",
        brass: "#b89b64",
        accent: "#D72638",
        secondary: "#A8A8A8",
      },
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        sans: ['"Satoshi"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        menu: "0.08em",
      },
    },
  },
  plugins: [],
};
