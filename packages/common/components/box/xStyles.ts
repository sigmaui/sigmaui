import * as stylex from '@stylexjs/stylex';

export const boxStyles = stylex.create({
  root: {}
});

export type BoxTypes = typeof boxStyles;
export type BoxKeys = keyof BoxTypes;

export default boxStyles;
