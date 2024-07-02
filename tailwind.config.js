/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7a767",
        secondary: "#F4F2F0",
        black: {
          DEFAULT: "#000",
          100: "#2B2826"
        },
        disabled: "#757372"
      }
    },
  },
  plugins: [],
}

