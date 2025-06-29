import * as stylex from '@stylexjs/stylex';

import { colors } from '../../theme/tokens/colors.stylex';

export const formStyles = stylex.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: colors.text,
    cursor: 'pointer'
  },
  input: {
    padding: '8px 12px',
    fontSize: '14px',
    border: `1px solid #E5E7EB`,
    borderRadius: '4px',
    backgroundColor: colors.background,
    color: colors.text,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    ':focus': {
      borderColor: colors.primary,
      boxShadow: `0 0 0 2px ${colors.primary}20`
    }
  },
  error: {
    fontSize: '12px',
    color: colors.error,
    marginTop: '4px'
  },
  submit: {
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    backgroundColor: colors.primary,
    color: colors.button,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: '#E67300'
    },
    ':disabled': {
      backgroundColor: '#E5E7EB',
      color: '#9CA3AF',
      cursor: 'not-allowed'
    }
  }
});

export type FormTypes = typeof formStyles;
export type FormKeys = keyof FormTypes;

export default formStyles