module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      colors: {
        silver: "#707070",
        green: "#00FFA3",
        blue: "#00D1FF",
        github: "#333333",
        google: "#DB4437",
        linkedin: "#2867B2",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [],
};
