/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#2d2b2a',
        'custom-light-blue': 'rgba(0, 115, 255, 0.1)',
      },
      keyframes: {
        slideInTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideInTop: 'slideInTop 0.5s ease-out',

      },
      animationout:{
        slideOutTop: 'slideOutTop 0.5s ease-in-out forwards',
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}

