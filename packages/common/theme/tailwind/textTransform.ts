import * as stylex from '@stylexjs/stylex';

export const textTransform = stylex.create({
  'uppercase': { 'text-transform': 'uppercase' },
  'lowercase': { 'text-transform': 'lowercase' },
  'capitalize': { 'text-transform': 'capitalize' },
  'normal-case': { 'text-transform': 'none' }
});