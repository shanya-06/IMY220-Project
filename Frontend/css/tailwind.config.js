/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        beige: "#F5F0E6",
        dark: "#2C2C2C",
        red: "#E94E4E",
        blue: "#4E9CE9",
        yellow: "#eccf78",
      },

      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};