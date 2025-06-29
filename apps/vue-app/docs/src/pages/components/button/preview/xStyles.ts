import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../../../../packages/common/theme/tokens/colors.stylex.ts';

export const buttonPreviewStyles = stylex.create({
  demoSection: {
    margin: '2rem 0',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  demoTitle: {
    marginBottom: '1rem'
  },
  demoButton: {
    margin: '0.5rem'
  }
});

export type ButtonPreviewTypes = typeof buttonPreviewStyles;
export type ButtonPreviewKeys = keyof ButtonPreviewTypes;

export default buttonPreviewStyles; 