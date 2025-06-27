import * as stylex from '@stylexjs/stylex';

import { colors } from '../../theme/tokens/colors.stylex';

export const buttonStyles = stylex.create({
  root: {
    backgroundColor: colors.primary,
    color: colors.button,
    height: 40,
    paddingBlock: 10,
    paddingInline: 16,
    border: 0,
    borderRadius: 12,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#111'
    }
  },
  icon: {}
});

export type ButtonTypes = typeof buttonStyles;
export type ButtonKeys = keyof ButtonTypes;

export default buttonStyles