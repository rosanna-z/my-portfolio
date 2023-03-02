/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... } md

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... } lg

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... } xl
    },
    extend: {
      colors: {
        'purple': '#90A1FF',
        'grey': '#464655',
        'bg-color': '#E5E9FF'
      },
    },
  },
  plugins: [],
}