/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      AkayaTelivigala: ["Akaya Telivigala"],
      Sora: ["Sora"]
    },
    extend: {
      animation: {
        'spinSlow': 'spin 4s linear infinite',
      }
    },

  },
  variants: {
    animationDelay: ['responsive'],
    animationDuration: ['responsive'],
    animationIteration: ['responsive'],
    animationTiming: ['responsive'],
    animationDirection: ['responsive'],
    animationFillMode: ['responsive'],
    animationPlayState: ['responsive'],
  },
  plugins: [require('tailwindcss-animation'),],
}