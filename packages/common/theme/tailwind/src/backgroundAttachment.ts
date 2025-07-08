import * as stylex from '@stylexjs/stylex';

export const backgroundAttachment = stylex.create({
  'bg-fixed': { 'background-attachment': 'fixed' },
  'bg-local': { 'background-attachment': 'local' },
  'bg-scroll': { 'background-attachment': 'scroll' }
});