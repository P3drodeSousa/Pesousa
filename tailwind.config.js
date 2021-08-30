module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'silver':"#707070",
        'green' : '#00FFA3',
        'blue' : "#00D1FF",
        'github':"#333333",
        "google":"#DB4437",
        'linkedin': '#2867B2'
      }
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [],
}
