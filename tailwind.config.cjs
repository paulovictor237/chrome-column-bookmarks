/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'peve-light': '#272830',
        'peve-dark': '#1f2027',
        'peve-selected': '#198cf0',
        'peve-zinc': '#71717a',
      },
      keyframes: {
        columns: {
          '0%': { transform: 'translateX(-60px)', opacity: 0 },
          '50%': { transform: 'translateX(0)', opacity: 0.5 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        line: 'hover:scale-[103%] 0.3s ease-in',
        columns: 'columns 0.3s ease',
      },
    },
  },
  plugins: [],
};
