/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        poppins: '"Poppins", sans-serif',
        barlow: '"Barlow", sans-serif',
        forum: '"Forum", serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

