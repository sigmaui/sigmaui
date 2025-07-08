import * as stylex from '@stylexjs/stylex';

export const userSelect = stylex.create({
  'select-none': { 'user-select': 'none' },
  'select-text': { 'user-select': 'text' },
  'select-all': { 'user-select': 'all' },
  'select-auto': { 'user-select': 'auto' }
});