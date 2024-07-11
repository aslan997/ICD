/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        18: "var(--font-size-heading)",
      },
      fontWeight: {
        head: "var(--font-weight-heading)",
      },
      colors: {
        primary: "var(--font-color-heading)",
      },
    },
  },
  plugins: [],
};
