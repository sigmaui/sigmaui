import type { IProps, StylesProperties } from './types';

export const styles = ({ theme = {} }) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    label: {},
    control: {},
    trigger: {
      border: 0,
      paddingBlock: 8,
      paddingInline: 12,
      cursor: 'pointer'
    } as StylesProperties,
    valueText: {},
    content: {},
    itemGroup: {},
    itemGroupLabel: {},
    item: {},
    indicator: {}
  }
}

export type SelectTypes = ReturnType<typeof styles>;
export type SelectKeys = keyof SelectTypes;
export type SelectProps = IProps<SelectTypes>;