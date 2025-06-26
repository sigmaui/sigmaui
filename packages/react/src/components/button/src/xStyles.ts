import * as stylex from '@stylexjs/stylex';

import { colors } from '../../../../../common/theme/tokens/colors.stylex';

export const buttonStyles = stylex.create({
  root: {
    backgroundColor: '#333',
    color: colors.primary,
    border: 0,
    paddingBlock: 8,
    paddingInline: 12,
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#111'
    }
  }
});

export type ButtonTypes = typeof buttonStyles;
export type ButtonKeys = keyof ButtonTypes;

export default buttonStyles