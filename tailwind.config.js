/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#8fdbff",
        "secondary": "#8fdbff",
        "tertiary": "#0000FF",
      },
    },
  },
  plugins: [],
}