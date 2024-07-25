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
      backgroundColor: {
        "35a989": "#35a989",
        "6c757d": "#6c757d",
        gold: "#BA973B",
        tableHeader: "#f9f9f9",
        loginScreenBg: "#363232"
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
        gold: "#BA973B",
        tableBorder: "#dee2e6",
        arrowIconColor: "#949a9e",
        viewProfileIcon: "#adb5bd"
      },
      width: {
        // Custom width classes
        35: "35%",
        24: "24%",
        41: "41%",
        26: "26px",
        100: "100px"
      },
      borderColor: {
        cace91: "#cace91",
        c1efc8: "#c1efc8",
        c9edfb: "#c9edfb",
      },
      height: {
        headerYearButton: "30px",
        26: "26px",
      },
      borderRadius: {
        inputsm: "0.25rem",
      },
      zIndex: {
        1: "1",
      },
      boxShadow: {
        card: "0 2px 3px 2px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"], // Enable checked variant for backgroundColor
    },
  },
  plugins: [],
};
