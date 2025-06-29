import * as stylex from '@stylexjs/stylex';

export const wordBreak = stylex.create({
  'break-normal': { 'overflow-wrap': 'normal', 'word-break': 'normal' },
  'break-words': { 'overflow-wrap': 'break-word' },
  'break-all': { 'word-break': 'break-all' },
  'break-keep': { 'word-break': 'keep-all' }
});