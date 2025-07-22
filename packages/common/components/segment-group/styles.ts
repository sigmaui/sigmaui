import type { IProps, StylesProperties } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,

      '&[data-orientation=horizontal]': {
        flexDirection: 'row',
        alignItems: 'center'
      },
      '&[data-orientation=vertical]': {
        flexDirection: 'column'
      }
    } as StylesProperties,
    label: {
      fontSize: 14,
      fontWeight: 500,
      color: '#222',
      marginBottom: 4,
    } as StylesProperties,
    control: {
      display: 'flex',
      gap: 8,
    } as StylesProperties,
    item: {
      paddingBlock: 12,
      fontSize: 14,
      fontWeight: 500,
      color: '#222',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    } as StylesProperties,
    itemText: {
      pointerEvents: 'none',
    } as StylesProperties,
    itemHiddenInput: {},
    indicator: {
      width: 'var(--width)',
      height: '2px',
      backgroundColor: theme.colors?.base,
      bottom: 0,
      transition: 'all 0.2s ease',
    } as StylesProperties
  };
};

export type SegmentGroupTypes = ReturnType<typeof styles>;
export type SegmentGroupKeys = keyof SegmentGroupTypes;
export type SegmentGroupProps = IProps<SegmentGroupTypes>;