/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      AkayaTelivigala:["Akaya Telivigala"],
      Sora:["Sora"]
    },
    extend: {
      animation: {
        'spinSlow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
}