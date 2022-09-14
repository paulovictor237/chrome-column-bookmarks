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
          '50%': { transform: 'translateX(20px)', opacity: 1 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        wiggle: {
          // '0%, 100%': { transform: 'rotate(-1deg)' },
          // '50%': { transform: 'rotate(1deg)' },

          // '0%': { transform: 'rotate(0deg)' },
          // '25%': { transform: 'rotate(1deg)' },
          // '50%': { transform: 'rotate(0deg)' },
          // '75%': { transform: 'rotate(-1deg)' },
          // '100%': { transform: 'rotate(0deg)' },

          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(2px)' },
          '50%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        translated: {
          '0%, 100%': {
            transform: 'translateY(-1px)',
          },
          '50%': {
            transform: 'translateY(1px)',
          },
        },
      },
      animation: {
        line: 'hover:scale-[103%] duration-100 transition-all',
        columns: 'columns 0.3s ease',
        wiggle: 'wiggle 0.5s ease-out infinite',
        wiggle2: 'spin 3s linear infinite',
        wiggle3: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
