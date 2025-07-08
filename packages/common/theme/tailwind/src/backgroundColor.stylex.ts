import { create } from '@stylexjs/stylex';

export const backgroundColor = create({
  'bg-inherit': { 'background-color': 'inherit' },
  'bg-current': { 'background-color': 'currentColor' },
  'bg-transparent': { 'background-color': 'transparent' },
  'bg-black': { 'background-color': 'rgb(0 0 0)' },
  'bg-white': { 'background-color': 'rgb(255 255 255)' }
});