import * as stylex from '@stylexjs/stylex';

export const flexDirection = stylex.create({
  'flex-row': { 'flex-direction': 'row' },
  'flex-row-reverse': { 'flex-direction': 'row-reverse' },
  'flex-col': { 'flex-direction': 'column' },
  'flex-col-reverse': { 'flex-direction': 'column-reverse' }
});