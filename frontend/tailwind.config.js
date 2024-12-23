const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontSize: {
      xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      '2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
      '2xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '2xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '2xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
    },
    fontFamily: {
      ubuntu: "Ubuntu-Regular, mono",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      ivory: '#fffefb',
      tin: {
        100: '#a1a09d',
        150: '#9b9894',
        200: '#8a8885',
        500: '#5c5955',
      } 
    },
    extend: {
    },
  },
  plugins: [],
}

