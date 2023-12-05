/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-main": "#8dff8b",
        "green-lower": "#c2fcc5",
        "gray-low": "#938686",
      },
    },
    fontFamily: {
      'Fira': ["Fira Code", "monospace"],
    }
  },
  plugins: [],
}

