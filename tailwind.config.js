/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#1E88E5",
        secondary: "#43A047",
        background: "#F5F5F5",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
