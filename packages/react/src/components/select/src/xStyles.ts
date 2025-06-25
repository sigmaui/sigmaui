import * as stylex from '@stylexjs/stylex';

import { colors } from '../../../../../common/theme/tokens/colors.stylex';

export const xStyles = stylex.create({
  root: {},
  label: {},
  control: {},
  trigger: {
    fontSize: '16px',
    color: colors.primary
  },
  valueText: {},
  content: {},
  itemGroup: {},
  itemGroupLabel: {},
  item: {},
  indicator: {}
});

export type StylesType = typeof xStyles;

export default xStyles