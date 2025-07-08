import * as stylex from '@stylexjs/stylex';

export const touchAction = stylex.create({
  'touch-auto': { 'touch-action': 'auto' },
  'touch-none': { 'touch-action': 'none' },
  'touch-manipulation': { 'touch-action': 'manipulation' }
});