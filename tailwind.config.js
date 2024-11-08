/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Definindo suas cores personalizadas
        primary: "#FF2193",
        secondary: "#0173DF",
      },
    },
  },
  plugins: [],
};
