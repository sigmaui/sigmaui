import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../../../../packages/common/theme/tokens/colors.stylex.ts';

export const selectPreviewStyles = stylex.create({
  demoSection: {
    margin: '2rem 0',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  demoTitle: {
    marginBottom: '1rem'
  }
});

export type SelectPreviewTypes = typeof selectPreviewStyles;
export type SelectPreviewKeys = keyof SelectPreviewTypes;

export default selectPreviewStyles; 