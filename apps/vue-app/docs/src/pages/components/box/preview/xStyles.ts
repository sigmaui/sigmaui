import * as stylex from '@stylexjs/stylex';

export const boxPreviewStyles = stylex.create({
  demoSection: {
    margin: '2rem 0',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  demoTitle: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: '600'
  },
  demoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  demoBox: {
    margin: '0.5rem 0'
  }
});

export type BoxPreviewTypes = typeof boxPreviewStyles;
export type BoxPreviewKeys = keyof BoxPreviewTypes;

export default boxPreviewStyles; 