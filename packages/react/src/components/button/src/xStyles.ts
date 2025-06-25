import * as stylex from '@stylexjs/stylex';

import { colors } from '../../../../../common/theme/tokens/colors.stylex';

export const xStyles = stylex.create({
  root: {
    backgroundColor: '#333',
    color: colors.primary,
    border: 0,
    paddingBlock: 8,
    paddingInline: 12
  }
});

export type StylesType = typeof xStyles;

export default xStyles