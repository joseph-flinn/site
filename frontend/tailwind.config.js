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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
          },
        },
        tin: {
          css: {
            '--tw-prose-body': theme('colors.tin[800]'),
            '--tw-prose-headings': theme('colors.tin[900]'),
            '--tw-prose-lead': theme('colors.tin[700]'),
            '--tw-prose-links': theme('colors.tin[700]'),
            '--tw-prose-bold': theme('colors.tin[900]'),
            '--tw-prose-counters': theme('colors.tin[600]'),
            '--tw-prose-bullets': theme('colors.tin[400]'),
            '--tw-prose-hr': theme('colors.tin[300]'),
            '--tw-prose-quotes': theme('colors.tin[900]'),
            '--tw-prose-quote-borders': theme('colors.tin[300]'),
            '--tw-prose-captions': theme('colors.tin[700]'),
            '--tw-prose-code': theme('colors.tin[900]'),
            '--tw-prose-pre-code': theme('colors.tin[100]'),
            '--tw-prose-pre-bg': theme('colors.tin[900]'),
            '--tw-prose-th-borders': theme('colors.tin[300]'),
            '--tw-prose-td-borders': theme('colors.tin[200]'),
            '--tw-prose-invert-body': theme('colors.tin[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.tin[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.tin[400]'),
            '--tw-prose-invert-bullets': theme('colors.tin[600]'),
            '--tw-prose-invert-hr': theme('colors.tin[700]'),
            '--tw-prose-invert-quotes': theme('colors.tin[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.tin[700]'),
            '--tw-prose-invert-captions': theme('colors.tin[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.tin[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.tin[600]'),
            '--tw-prose-invert-td-borders': theme('colors.tin[700]'),
          }
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}

