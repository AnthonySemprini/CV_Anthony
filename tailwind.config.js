/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'blueM': '#1e3d59',
        'amande': '#f5f0e1',
        'orangeRouge': '#ff6e40',
        'mangue': '#ffc13b',
      },

      screens: {
        'tab': '950px',
        'phone': '700px',
      },

    },
  },

  plugins: [],
}
