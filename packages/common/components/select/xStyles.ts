import * as stylex from '@stylexjs/stylex';

import { colors } from '../../theme/tokens/colors.stylex';

export const selectStyles = stylex.create({
  root: {},
  label: {},
  control: {},
  trigger: {
    color: colors.primary,
    backgroundColor: '#333',
    paddingBlock: 8,
    paddingInline: 12,
    fontSize: '16px',
    border: 0
  },
  valueText: {},
  content: {},
  itemGroup: {},
  itemGroupLabel: {},
  item: {},
  indicator: {}
});

export type SelectTypes = typeof selectStyles;
export type SelectKeys = keyof SelectTypes;

export default selectStyles