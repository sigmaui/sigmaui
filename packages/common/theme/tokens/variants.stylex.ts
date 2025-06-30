import * as stylex from '@stylexjs/stylex';

export const colors = stylex.create({
  default: {
    color: '#FF8000',

    ':hover': {
      color: '#FF8000'
    }
  },
  primary: {
    color: '#FF8000'
  },
  secondary: {
    color: '#5856D6'
  }
})

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

export const variants = stylex.create({
  secondary: {},
  destructive: {},
  solid: {},
  outlined: {},
  filled: {},
  ghost: {
    backgroundColor: 'transparent'
  },
  text: {},
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