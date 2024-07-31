/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#faf3e0",
          100: "#f4e1d2",
          200: "#e2b29f",
          300: "#d29a6e",
          400: "#b87a4f",
          500: "#8f5b3c",
          600: "#6d3d26",
          700: "#4a2c1b",
          800: "#322114",
          900: "#1d140c",
        },
      },
    },
  },
  plugins: [],
};
