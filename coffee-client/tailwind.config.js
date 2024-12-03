/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark_brown": "#331A15",
      "light_brown": "#E3B577",
      "white_color": "#FFFFFF",
    },
    fontFamily : {
      "railway": ["Raleway", "sans-serif"],
      "rancho": ["Rancho", "serif"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

