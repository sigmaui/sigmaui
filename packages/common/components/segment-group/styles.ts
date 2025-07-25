import type { IProps, StylesProperties } from './types'

export const styles = ({ theme = {} }: IProps<any>) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,

      '&[data-orientation=horizontal]': {
        flexDirection: 'row',
        alignItems: 'center',
      },
      '&[data-orientation=vertical]': {
        flexDirection: 'column',
      },
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
      paddingBlock: 4,
      fontSize: 14,
      fontWeight: 500,
      color: '#222',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      transition: 'all 0.2s ease',

      '&[data-orientation=vertical]': {
        paddingLeft: 12
      }
    } as StylesProperties,
    itemText: {
      pointerEvents: 'none',
    } as StylesProperties,
    itemHiddenInput: {},
    indicator: {
      display: 'block',
      backgroundColor: theme.colors?.base,
      transition: 'all 0.2s ease',

      '&[data-orientation=horizontal]': {
        width: 'var(--width)',
        height: 2,
        bottom: 0,
      },

      '&[data-orientation=vertical]': {
        width: 2,
        height: 'var(--height)',
      }
    } as StylesProperties,
  }
}

export type SegmentGroupTypes = ReturnType<typeof styles>
export type SegmentGroupKeys = keyof SegmentGroupTypes
export type SegmentGroupProps = IProps<SegmentGroupTypes>
