import * as stylex from '@stylexjs/stylex';

export const types = stylex.create({
  secondary: {},
  destructive: {},
  outline: {},
  filled: {},
  ghost: {
    backgroundColor: 'transparent'
  },
  link: {}
});

export const sizes = stylex.create({
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