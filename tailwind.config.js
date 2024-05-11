/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3238f2'
      },

      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

