import { create } from '@stylexjs/stylex';

export const touchAction = create({
  'touch-auto': { 'touch-action': 'auto' },
  'touch-none': { 'touch-action': 'none' },
  'touch-manipulation': { 'touch-action': 'manipulation' }
});