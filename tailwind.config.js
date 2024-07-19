/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        18: "var(--font-size-heading)",
        14: "var(--font-size-para)",
        13: "13px",
        16: "16px",
      },
      fontWeight: {
        head: "var(--font-weight-heading)",
        500: "500",
      },
      colors: {
        primary: "var(--font-color-heading)",
        cayon: "#c9edfb",
        fringyFlower: "#c1efc8",
        pineGlade: "#cace91",
        ecruWhite: "#f4f4e8",
        frostee: "#e1f6e5",
        lilyWhite: "#e5f6fd",
        alabaster: "#f8fcff",
      },
      width: {
        // Custom width classes
        35: "35%",
        24: "24%",
        41: "41%",
      },
      borderColor: {
        cace91: "#cace91",
        c1efc8: "#c1efc8",
        c9edfb: "#c9edfb",
      },
    },
  },
  plugins: [],
};
