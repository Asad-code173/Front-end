/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-dark':'#2d2b2a',
        'custom-light-blue': 'rgba(0, 115, 255, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}

