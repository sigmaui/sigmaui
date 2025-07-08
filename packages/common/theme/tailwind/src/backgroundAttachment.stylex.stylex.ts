import { create } from '@stylexjs/stylex';

export const backgroundAttachmentStylex = create({
  'bg-fixed': { 'background-attachment': 'fixed' },
  'bg-local': { 'background-attachment': 'local' },
  'bg-scroll': { 'background-attachment': 'scroll' }
});