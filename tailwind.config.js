/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter : ["Inter", 'sans-serif']
      },
      colors:{
        'bgdark' : "#0C0C0C",
        'second' : "#B0B0B0",
      }
    },
  },
  plugins: [],
}

