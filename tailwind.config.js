/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kid-friendly': ['Fredoka', 'Quicksand', 'Comic Sans MS', 'Comic Neue', 'Chalkboard SE', 'Marker Felt', 'cursive', 'sans-serif'],
        'kid-bold': ['Fredoka', 'Quicksand', 'Comic Sans MS', 'Comic Neue', 'Chalkboard SE', 'Marker Felt', 'cursive', 'sans-serif'],
        'comic-sans': ['Comic Sans MS', 'Comic Neue', 'Chalkboard SE', 'Marker Felt', 'cursive', 'sans-serif'],
        'emoji': ['Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'emoji'],
      },
      fontSize: {
        'mobile-xs': ['0.75rem', { lineHeight: '1rem' }],
        'mobile-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'mobile-base': ['1rem', { lineHeight: '1.5rem' }],
        'mobile-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'mobile-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'mobile-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'mobile-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'mobile-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'mobile-5xl': ['3rem', { lineHeight: '3.5rem' }],
        'mobile-6xl': ['3.75rem', { lineHeight: '4rem' }],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
