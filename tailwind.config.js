/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        domine : ['Domine', 'serif'],
        inter : ['Inter', 'sans-serif'],
        google : ['"Google Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

