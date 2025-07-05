import * as stylex from '@stylexjs/stylex';

export const sizes = stylex.create({
  default: {},
  xs: {},
  sm: {
    fontSize: '12px',
    height: '36px'
  },
  md: {},
  lg: {
    fontSize: '16px',
    height: '40px'
  },
  xl: {},
  '2xl': {}
});

export const textSizes = stylex.create({
  default: {},
  xs: {},
  sm: {
    fontSize: '12px',
    lineHeight: '12px'
  },
  md: {},
  lg: {
    fontSize: '16px',
    lineHeight: '16px'
  },
  xl: {},
  '2xl': {}
});