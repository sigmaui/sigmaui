import { create } from '@stylexjs/stylex';

export const resize = create({
  'resize-none': { resize: 'none' },
  'resize-y': { resize: 'vertical' },
  'resize-x': { resize: 'horizontal' },
  resize: { resize: 'both' },
});
