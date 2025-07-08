import { create } from '@stylexjs/stylex';

export const boxSizing = create({
  'box-border': { 'box-sizing': 'border-box' },
  'box-content': { 'box-sizing': 'content-box' }
});