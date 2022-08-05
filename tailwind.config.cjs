/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark700': '#272830',
        'dark800': '#1f2027',
        'blue-suave': '#198cf0'
      },
    },
  },
  plugins: [],
}
