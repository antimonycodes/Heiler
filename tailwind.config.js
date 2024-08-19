/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#008847",
        lightGreen: "#2baa2b",
        customGray: "#A3B1AA"
      },
    },
  },
  plugins: [],
}

