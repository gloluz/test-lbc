export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  orange: '#ff6e14',
  blue: {
    light: '#CEEAFF',
    base: '#0096EB',
  },
  grey: {
    lightest: '#E9E9E9',
    light: '#E2E2E2',
    base: '#929292',
    dark: '#939393',
    darkest: '#404040',
  },
} as const;

export const MEDIA = {
  MAX: {
    xxs: '@media screen and (max-width: 319px)',
    xs: '@media screen and (max-width: 599px)',
    s: '@media screen and (max-width: 767px)',
    m: '@media screen and (max-width: 1023px)',
    l: '@media screen and (max-width: 1599px)',
    xl: '@media screen and (max-width: 1979px)',
    xxl: '@media screen and (max-width: 2559px)',
  },
  MIN: {
    xxs: '@media screen and (min-width: 320px)',
    xs: '@media screen and (min-width: 600px)',
    s: '@media screen and (min-width: 768px)',
    m: '@media screen and (min-width: 1024px)',
    l: '@media screen and (min-width: 1600px)',
    xl: '@media screen and (min-width: 1980px)',
    xxl: '@media screen and (min-width: 2560px)',
  },
} as const;
