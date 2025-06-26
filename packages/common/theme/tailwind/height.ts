import * as stylex from '@stylexjs/stylex';

export const height = stylex.create({
  'h-0': { height: 0 },
  'h-full': { height: '100%' },
  'h-screen': { height: '100vh' },
  'h-min': { height: 'min-content' },
  'h-max': { height: 'max-content' },
  'h-fit': { height: 'fit-content' },
  'min-h-0': { 'min-height': 0 },
  'min-h-full': { 'min-height': '100%' },
  'min-h-screen': { 'min-height': '100vh' },
  'min-h-min': { 'min-height': 'min-content' },
  'min-h-max': { 'min-height': 'max-content' },
  'min-h-fit': { 'min-height': 'fit-content' },
  'max-h-0': { 'max-height': 0 },
  'max-h-full': { 'max-height': '100%' },
  'max-h-screen': { 'max-height': '100vh' },
  'max-h-min': { 'max-height': 'min-content' },
  'max-h-max': { 'max-height': 'max-content' },
  'max-h-fit': { 'max-height': 'fit-content' }
});