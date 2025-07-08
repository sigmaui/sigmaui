import { create } from '@stylexjs/stylex';

export const backgroundOrigin = create({
  'bg-origin-border': { 'background-origin': 'border-box' },
  'bg-origin-padding': { 'background-origin': 'padding-box' },
  'bg-origin-content': { 'background-origin': 'content-box' }
});