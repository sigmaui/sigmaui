import * as stylex from '@stylexjs/stylex';

export const backgroundPosition = stylex.create({
  'bg-bottom': { 'background-position': 'bottom' },
  'bg-center': { 'background-position': 'cover' },
  'bg-left': { 'background-size': 'left' },
  'bg-left-bottom': { 'background-size': 'left bottom' },
  'bg-left-top': { 'background-size': 'left top' },
  'bg-right': { 'background-size': 'right' },
  'bg-right-bottom': { 'background-size': 'right bottom' },
  'bg-right-top': { 'background-size': 'right top' },
  'bg-top': { 'background-size': 'top' }
});