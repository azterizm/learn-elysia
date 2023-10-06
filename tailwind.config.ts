import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        button: 'hsla(54, 100%, 88%, 1)',
        tint: 'hsla(54, 65%, 90%, 1)',
        primary: 'hsla(54, 100%, 20%, 1)',
        white: 'hsla(55, 100%, 98%, 1)',
        black: 'hsla(54, 100%, 13%, 1)',
        secondary: 'hsla(54, 100%, 50%, 1)',
        muted: 'hsla(54, 32%, 57%, 1)',
      },
    },
  },
  plugins: [require('daisyui')],
} satisfies Config
