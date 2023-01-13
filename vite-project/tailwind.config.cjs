/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/App.jsx"],
  theme: {
    fontSize : {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.4rem', { lineHeight: '1.75rem' }],
      '2xl': ['2rem', { lineHeight: '2rem' }],
      '3xl': ['3rem', { lineHeight: '2.25rem' }],
      '4xl': ['4rem', { lineHeight: '2.5rem' }],
      '5xl': ['5rem', { lineHeight: '1' }],
      '6xl': ['6rem', { lineHeight: '1' }],
      '7xl': ['7rem', { lineHeight: '1' }],
      '8xl': ['8rem', { lineHeight: '1' }],
      '9xl': ['9rem', { lineHeight: '1' }],
    },

    extend: {
      fontFamily : {
        sec : 'gilroyextraBold',
        pry : 'gilroylight',
      },
      colors : {
        'black': 'rgb(29,29,32)',
        'white1': '#d4d4d8',
        'white2': '#a1a1aa',
        'grey1' : 'rgb(39,39,42)'
      }
    },
  },
  plugins: [],
}
