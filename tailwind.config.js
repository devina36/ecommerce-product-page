/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        oranges: 'hsl(26, 100%, 55%)',
        'pale-orange': '#ffede0',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
      },
      keyframes: {
        slideleft: {
          from: { width: '0%' },
          '25%': { width: '25%' },
          '50%': { width: '50%' },
          '75%': { width: '75%' },
          to: { width: '100%' },
        },
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        slideleft: 'slideleft 300ms ease-in-out',
        'slide-in': 'slide-in 750ms ease-in-out',
      },
    },
  },
  plugins: [],
};
