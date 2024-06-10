/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      'sm': '450px',
      'md': '700px',
      'lg': '900px',
    },
    colors: {
      'white': '#fff',
      'pink': '#f9c8d9cb',
      'nav': '#24221f64',
      'beige': '#BAA790',
      'darkbrown': '#72665D',
      'footer': '#5F5752',
    },
  },
  plugins: [],
}
