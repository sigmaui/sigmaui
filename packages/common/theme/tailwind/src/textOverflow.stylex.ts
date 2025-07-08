import { create } from '@stylexjs/stylex';

export const textOverflow = create({
  'text-ellipsis': { 'text-overflow': 'ellipsis' },
  'text-clip': { 'text-overflow': 'clip' }
});