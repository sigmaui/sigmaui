import * as stylex from '@stylexjs/stylex';
import { colors } from './variables.stylex.ts';

export const variants = stylex.create({
  default: {},
  solid: {},
  outlined: {},
  dashed: {
    borderStyle: 'dashed',
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#000',
    borderWidth: '1px'
  },
  filled: {},
  text: {
    backgroundColor: 'transparent',
    color: '#000',

    ':hover': {
      backgroundColor: '#ddd'
    }
  },
  link: {
    backgroundColor: 'transparent',
    color: '#000',

    ':hover': {
      backgroundColor: 'transparent',
      color: colors.primary
    }
  }
});