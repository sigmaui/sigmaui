import * as stylex from '@stylexjs/stylex';

export const boxSizing = stylex.create({
  'box-border': { 'box-sizing': 'border-box' },
  'box-content': { 'box-sizing': 'content-box' }
});