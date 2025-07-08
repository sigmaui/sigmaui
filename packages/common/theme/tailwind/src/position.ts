import * as stylex from '@stylexjs/stylex';

export const position = stylex.create({
  'static': { position: 'static' },
  'fixed': { position: 'fixed' },
  'absolute': { position: 'absolute' },
  'relative': { position: 'relative' },
  'sticky': { position: 'sticky' }
});