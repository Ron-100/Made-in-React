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
        // set1
        hireDox: '#1E3756', // as a 'vyFlow'
        lionDox: '#FE6F27' // as a 'alFlow'
      }
    },
  },
  plugins: [],
}

