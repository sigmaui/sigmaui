import * as stylex from '@stylexjs/stylex';

export const backgroundSize = stylex.create({
  'bg-auto': { 'background-size': 'auto' },
  'bg-cover': { 'background-size': 'cover' },
  'bg-contain': { 'background-size': 'contain' }
});