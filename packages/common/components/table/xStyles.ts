import * as stylex from '@stylexjs/stylex';

import { colors } from '../../theme/tokens/colors.stylex';

export const tableStyles = stylex.create({
  root: {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fontSize: '14px',
    lineHeight: '1.5',
  },
  header: {
    backgroundColor: '#f8f9fa',
    borderBottom: `1px solid #dee2e6`,
  },
  headerCell: {
    padding: '12px 16px',
    textAlign: 'left',
    fontWeight: 600,
    color: colors.text,
    borderBottom: `1px solid #dee2e6`,
    cursor: 'pointer',
    userSelect: 'none',
    ':hover': {
      backgroundColor: '#e9ecef',
    },
  },
  row: {
    borderBottom: `1px solid #f1f3f4`,
    ':hover': {
      backgroundColor: '#f8f9fa',
    },
  },
  cell: {
    padding: '12px 16px',
    borderBottom: `1px solid #f1f3f4`,
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    borderTop: `1px solid #dee2e6`,
  },
  paginationInfo: {
    color: '#6c757d',
    fontSize: '14px',
  },
  paginationControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  paginationButton: {
    padding: '8px 12px',
    border: `1px solid #dee2e6`,
    borderRadius: '4px',
    backgroundColor: colors.background,
    color: colors.text,
    cursor: 'pointer',
    fontSize: '14px',
    ':hover': {
      backgroundColor: '#f8f9fa',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  sortIcon: {
    marginLeft: '4px',
    fontSize: '12px',
  },
  checkbox: {
    width: '16px',
    height: '16px',
  },
});

export type TableTypes = typeof tableStyles;
export type TableKeys = keyof TableTypes;

export default tableStyles