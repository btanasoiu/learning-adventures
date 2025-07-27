/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic-sans': ['Comic Sans MS', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
