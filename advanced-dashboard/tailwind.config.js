/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#FFC107',
        accent: '#FF5722',
        darkBackground: '#181818',
        lightBackground: '#FFFFFF',
        cardBackground: '#282828',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
