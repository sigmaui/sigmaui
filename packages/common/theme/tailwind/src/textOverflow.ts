import * as stylex from '@stylexjs/stylex';

export const textOverflow = stylex.create({
  'text-ellipsis': { 'text-overflow': 'ellipsis' },
  'text-clip': { 'text-overflow': 'clip' }
});