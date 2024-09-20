/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter : ["Inter", 'sans-serif']
      },
      borderRadius: {
        'one': '16px 32px 8px 32px',
        'two': '32px 16px 32px 8px;',
      },
      colors:{
        'primary' : "#08050E",
        'gradient' : "#FFD952"
      }
    },
  },
  plugins: [],
}

