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
      ubuntuRegular: "Ubuntu-Regular, monospace",
      ubuntu: "Ubuntu, monospace",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      black: colors.black,
      tin: {
        100: '#FFFEFB',
        200: '#EBE9E6',
        300: '#D6D5D2',
        400: '#C2C0BD',
        500: '#AEACA8',
        600: '#999793',
        700: '#85827F',
        800: '#706E6A',
        900: '#5C5955',
        950: '#4E4C48',
      } 
    },
    extend: {
    },
  },
}

