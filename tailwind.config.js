/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pinkAccent: '#FF4960',
        vyFlow: '#030D4E',
        alFlow: '#F8A01C',
        hireDox: '#1E3756',
        lionDox: '#FE6F27'
      }
    },
  },
  plugins: [],
}

