/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/App.jsx"],
  theme: {
    extend: {
      fontFamily : {
        sec : 'gilroyextraBold',
        pry : 'gilroylight',
      },
      colors : {
        'black': 'rgb(29,29,32)'
      }
    },
  },
  plugins: [],
}
