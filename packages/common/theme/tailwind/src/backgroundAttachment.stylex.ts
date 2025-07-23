import { create } from '@stylexjs/stylex'

export const backgroundAttachment = create({
  'bg-fixed': { 'background-attachment': 'fixed' },
  'bg-local': { 'background-attachment': 'local' },
  'bg-scroll': { 'background-attachment': 'scroll' },
})
