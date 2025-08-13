/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        win95Gray: '#C0C0C0',
        win95Dark: '#808080',
        win95Light: '#FFFFFF',
        win95Blue: '#000080',
      },
      fontFamily: {
        win95: ['"MS Sans Serif"', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
