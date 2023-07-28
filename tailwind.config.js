/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinli: {
          100: "#E6D8FB",
          200: "#CBB2F7",
          300: "#A887E8",
          400: "#8664D2",
          500: "#5A37B4",
          600: "#44289A",
          700: "#321B81",
          800: "#221168",
          900: "#170A56",
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
