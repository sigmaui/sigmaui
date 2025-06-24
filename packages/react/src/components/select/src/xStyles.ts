import * as stylex from '@stylexjs/stylex';

export const xStyles = stylex.create({
  wrapper: {
    position: 'fixed',
    overflow: 'inherit'
  }
});

export type StylesType = typeof xStyles;

export default xStyles