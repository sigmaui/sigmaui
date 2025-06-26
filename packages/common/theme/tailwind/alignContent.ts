import * as stylex from '@stylexjs/stylex';

export const alignContent = stylex.create({
  'content-center': { 'align-content': 'center' },
  'content-start': { 'align-content': 'flex-start' },
  'content-end': { 'align-content': 'flex-end' },
  'content-between': { 'align-content': 'space-between' },
  'content-around': { 'align-content': 'space-around' },
  'content-evenly': { 'align-content': 'space-evenly' },
  'content-baseline': { 'align-content': 'baseline' }
});