/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        jump: 'jump 1s linear alternate',
        rotate: 'rotate 3s ease-in-out 1s',
        scrolling_text: 'scrolling_text 6s steps(40,start) 2s infinite both'
      },
      keyframes: {
        jump: {
          '0%': { transform: 'translateX(-450px) rotateY(0deg)' },
          '25%': {
            transform:
              'translate3d(0,-40%,0) scale3d(1.1,0.9,1) translateX(-350px)'
          },
          '50%': {
            transform:
              'translate3d(0,0,0) scale3d(0.9,1.1,1) translateX(-150px)'
          },
          '75%': {
            transform:
              'translate3d(0,-40%,0) scale3d(1.1,0.9,1) translateX(-50px)'
          },
          '100%': {
            transform: 'translate3d(0,0,0) scale3d(0.9,1.1,1) translateX(0px)'
          }
        },
        rotate: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        scrolling_text: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(200%)' }
        }
      }
    }
  },
  plugins: []
}

