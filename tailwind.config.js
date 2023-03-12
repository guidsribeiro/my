/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: 'rgba(24,24,24, 1)',
        mantle: '#181825',
        blue: '#89b4fa',
        red: '#f38ba8',
      }
    },
  },
  plugins: [],
}
