import * as stylex from '@stylexjs/stylex';

import { colors } from '../../theme/tokens/colors.stylex';

export const segmentGroupStyles = stylex.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    color: colors.text
  },
  indicator: {
    width: 'var(--width)',
    height: '2px',
    backgroundColor: colors.primary,
    bottom: 0,
    transition: 'all 0.2s ease'
  },
  item: {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 500,
    color: colors.text,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    ':hover': {
      backgroundColor: '#f1f3f4'
    }
  },
  itemText: {},
  itemIndicator: {
    color: colors.primary
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px'
  }
});

export type SegmentGroupTypes = typeof segmentGroupStyles; 