/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollTop: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        }
      },
      animation: {
        scrollTop: 'scrollTop 1.2s linear forwards'
      },
      backgroundImage: {
        'frame': "url('/images/flowerframe.jpg')",
      },
      boxShadow: {
        shadowForButton: '-3px -2px 8px #85858596 inset',
        shadowHover: '0px 0px 24px #fff'
      },
      fontFamily: {
        quicksand: ['quicksand'],
        dancing: ['dancing'],
        darleston: ['darleston'],
        gustatory: ['gustatory'],
        cormorantgaramond: ['cormorantgaramond'],
        greatvibes: ['greatvibes'],
      },
    },
  },
  plugins: [],
}

