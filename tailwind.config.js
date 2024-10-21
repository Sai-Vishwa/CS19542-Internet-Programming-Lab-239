/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}","./node_modules/@shadcn/ui/dist/**/*.js"],
  theme: {
    extend: {
      colors:{
        "sai" : "#002300"
      }
    },
    fontFamily : {
      beb : ["Bebas Neue", 'sans-serif'],
      lond : ["Londrina Sketch","sans-serif"],
      pw : ["Playwrite GB S","cursive"],
      dos : ["Dosis","sans-serif"],
      oxy : ["Oxygen","sans-serif"]
    },
  },
  plugins: [],
}