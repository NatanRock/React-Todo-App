/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //   colors: {
      //     primary: '#1E40AF',
      //     secondary: '#F43F5E',
      //     dark: '#0F172A',
      //   },
      //   spacing: {
      //     72: '18rem',
      //     84: '21rem',
      //     96: '24rem',
      //   },
      //   borderRadius: {
      //     xl: '1rem',
      //     '2xl': '1.5rem',
      //     '3xl': '2rem',
      //   },
      //   fontFamily: {
      //     sans: ['Inter', 'sans-serif'],
      //     serif: ['Merriweather', 'serif'],
      //   },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
