/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'frame': "url('/src/assets/images/flowerframe.jpg')",
      },
      fontFamily: {
        quicksand: ['quicksand'],
        dancing: ['dancing'],
        darleston: ['darleston'],
        gustatory: ['gustatory'],
        cormorantgaramond: ['cormorantgaramond']
      },
    },
  },
  plugins: [],
}

