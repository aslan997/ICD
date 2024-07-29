/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "426px",
      },
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
        loginScreenBg: "#363232",
        confirm: "#35a989",
        cancel: "#f16c69",
        footer: "#fafafa",
        btnSecondary: "#6c757d",
        btnAdd: "#29bbe3",
        btnAddHover: "#1caed6",
        btnMoveBackPrimary: "#2a3142",
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
        viewProfileIcon: "#adb5bd",
        gray66: "#666666",
        green: "#35a989",
      },
      width: {
        // Custom width classes
        35: "35%",
        24: "24%",
        41: "41%",
        26: "26px",
        100: "100px",
        950: "950px",
      },
      borderColor: {
        cace91: "#cace91",
        c1efc8: "#c1efc8",
        c9edfb: "#c9edfb",
        footer: "rgba(148, 154, 158, 0.2)",
        primary: "#dee2e6",
      },
      height: {
        headerYearButton: "30px",
        26: "26px",
        btnAdd: "35px",
      },
      borderRadius: {
        inputsm: "0.25rem",
      },
      zIndex: {
        1: "1",
      },
      boxShadow: {
        card: "0 2px 3px 2px rgba(0, 0, 0, 0.08)",
        footer: "0px -1px 2px 0px rgba(0, 0, 0, 0.05)",
        button: "0 2px 3px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.15)",
        menu: "0 2px 3px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.15);",
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
