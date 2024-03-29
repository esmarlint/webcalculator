/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        "primary": "#8fdbff",
        "secondary": "#1eb7ff",
        "tertiary": "#0000FF",
      },
    },
  },
  plugins: [],
}