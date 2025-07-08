import * as stylex from '@stylexjs/stylex';

export const flexWrap = stylex.create({
  'flex-wrap': { 'flex-wrap': 'wrap' },
  'flex-wrap-reverse': { 'flex-wrap': 'wrap-reverse' },
  'flex-nowrap': { 'flex-wrap': 'nowrap' }
});