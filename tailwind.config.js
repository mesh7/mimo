/** @type {import('tailwindcss').Config} */
module.exports = {
  //Specifying the tailwind to look in the renderer folder and compile css
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
