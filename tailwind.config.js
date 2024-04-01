/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "container" : "1320px"
      },
      fontFamily:{
        "raleway": "Raleway",
        "oxanium": "Oxanium",
      },
      backgroundColor:{
        "primary":"#FFF6E4"
      },
      colors:{
        "orange":"#F95C19"
      }
    },
  },
  plugins: [],
}