/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      brand: {
        50: '#eef2ff',
        500: '#646cff',
        600: '#535bf2',
        700: '#4340d1',
      },
      text: {
        primary: '#ffffff',
        secondary: '#b0b0b0',
        dark: '#213547',
      },
      surface: {
        base: '#242424',
        light: '#f9f9f9',
      },
    },
  },
},
  plugins: [],
}
