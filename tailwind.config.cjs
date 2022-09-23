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

        'warcraft-black': '#232527',
        'warcraft-red': '#aa3420',
        'warcraft-yellow': '#be953a',
        'warcraft-blue': '#0b8cb0',
        'warcraft-dark': '#0f1826',

        'dracula-Background': '#282a36',
        'dracula-Current-Line': '#44475a',
        'dracula-Foreground': '#f8f8f2',
        'dracula-Comment': '#6272a4',
        'dracula-Cyan': '#8be9fd',
        'dracula-Green': '#50fa7b',
        'dracula-Orange': '#ffb86c',
        'dracula-Pink': '#ff79c6',
        'dracula-Purple': '#bd93f9',
        'dracula-Red': '#ff5555',
        'dracula-Yellow': '#f1fa8c',
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
