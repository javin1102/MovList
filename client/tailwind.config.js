module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },

    extend: {
      colors: {
        primary: "#E73959",
        secondary: "#EDA044",
        tertiary: "#00A896",
        gray: "#808080",
      },
      boxShadow: {
        top: "0px -1px 2px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-hamburgers")],
};
