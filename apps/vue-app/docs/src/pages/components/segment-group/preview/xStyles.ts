import * as stylex from '@stylexjs/stylex';

export const segmentGroupPreviewStyles = stylex.create({
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

export type SegmentGroupPreviewTypes = typeof segmentGroupPreviewStyles; 