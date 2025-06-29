import * as stylex from '@stylexjs/stylex';
import { colors } from '../../../../../../../packages/common/theme/tokens/colors.stylex.ts';

export const tablePreviewStyles = stylex.create({
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

export type TablePreviewTypes = typeof tablePreviewStyles;
export type TablePreviewKeys = keyof TablePreviewTypes;

export default tablePreviewStyles;