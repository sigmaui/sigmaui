import { IProps } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },
    label: {
      fontSize: 14,
      fontWeight: 500,
      color: '#222',
      marginBottom: 4,
    },
    control: {
      display: 'flex',
      gap: 8,
    },
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
    },
    itemText: {
      pointerEvents: 'none',
    },
    itemHiddenInput: {},
    indicator: {
      width: 'var(--width)',
      height: '2px',
      backgroundColor: theme.colors?.base,
      bottom: 0,
      transition: 'all 0.2s ease',
    },
    horizontal: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12
    },
    vertical: {
      flexDirection: 'column',
      gap: 6
    },
  };
};

export type SegmentGroupTypes = ReturnType<typeof styles>;
export type SegmentGroupKeys = keyof SegmentGroupTypes;
export type SegmentGroupProps = IProps<SegmentGroupTypes>;