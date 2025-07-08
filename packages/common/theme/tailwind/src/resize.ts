import * as stylex from '@stylexjs/stylex';

export const resize = stylex.create({
  'resize-none': { resize: 'none' },
  'resize-y': { resize: 'vertical' },
  'resize-x': { resize: 'horizontal' },
  'resize': { resize: 'both' }
});