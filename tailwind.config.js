const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'c-primary': '#B24842',
        'c-primary-hover-light': '#6C3632',
        'c-primary-hover-dark': '#B95953',
        'c-shadow': 'rgba(0, 0, 0, .2)',
        'c-bg-dark': '#252422',
        'c-fg-dark': '#403D39',
        'c-bg-light': '#FFFCF2',
        'c-fg-light': '#CCC5B9',
        'c-text-primary-dark': '#FCE8Ec',
        'c-text-secondary-dark': '#FFFCF2',
        'c-text-primary-light': '#252422',
        'c-text-secondary-light': '#403D39'
      },
      animation: {
        'fade-in': 'fadeIn 500ms ease-in',
        'fade-out': 'fadeOut 500ms ease-in'
      },
      keyframes: {
        fadeIn: {
            '0%': {
                opacity: 0
            },
            '100%': {
                opacity: 1
            }
        }
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
      })
    })
  ],
}