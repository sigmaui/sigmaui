import * as stylex from '@stylexjs/stylex';

export const width = stylex.create({
  'w-0': { width: 0 },
  'w-full': { width: '100%' },
  'w-screen': { width: '100vw' },
  'w-min': { width: 'min-content' },
  'w-max': { width: 'max-content' },
  'w-fit': { width: 'fit-content' },
  'min-w-0': { 'min-width': 0 },
  'min-w-full': { 'min-width': '100%' },
  'min-w-screen': { 'min-width': '100vw' },
  'min-w-min': { 'min-width': 'min-content' },
  'min-w-max': { 'min-width': 'max-content' },
  'min-w-fit': { 'min-width': 'fit-content' },
  'max-w-0': { 'max-width': 0 },
  'max-w-full': { 'max-width': '100%' },
  'max-w-screen': { 'max-width': '100vw' },
  'max-w-min': { 'max-width': 'min-content' },
  'max-w-max': { 'max-width': 'max-content' },
  'max-w-fit': { 'max-width': 'fit-content' }
});